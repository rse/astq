/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2022 Dr. Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import util           from "./astq-util.js"
import ASTQQueryTrace from "./astq-query-trace.js"

export default class ASTQQueryExec extends ASTQQueryTrace {
    constructor (adapter, params, funcs, trace) {
        super()
        this.adapter = adapter
        this.params  = params
        this.funcs   = funcs
        this.trace   = trace
    }

    execQuery (Q, T) {
        this.traceBegin(Q, T)
        let output = []

        /*  iterate over all query paths  */
        Q.childs().forEach((Q) => {
            output = output.concat(this.execPath(Q, T))
        })

        this.traceEnd(Q, T, output)
        return output
    }

    execPath (Q, T) {
        this.traceBegin(Q, T)
        let nodes = [ T ]
        let result = []
        let resultExplicit = false

        /*  iterate over all steps of a query path  */
        Q.childs().forEach((Q) => {
            let output = []
            nodes.forEach((T) => {
                output = output.concat(this.execStep(Q, T))
            })
            nodes = output
            if (Q.get("isResult")) {
                resultExplicit = true
                result = result.concat(nodes)
            }
        })

        this.traceEnd(Q, T, nodes)
        return (resultExplicit ? result : nodes)
    }

    execStep (Q, T) {
        this.traceBegin(Q, T)

        /*  determine (optional) axis, (mandatory) match and (optional) filter  */
        let childs = Q.childs()
        let axis   = null
        let match  = null
        let filter = null
        let i = 0
        if (i < childs.length && childs[i].type() === "Axis")
            axis = childs[i++]
        if (i < childs.length && childs[i].type() === "Match")
            match = childs[i++]
        if (i < childs.length && childs[i].type() === "Filter")
            filter = childs[i++]
        if (match === null)
            throw new Error("no matching part in query step")

        let nodes = []

        /*  helper function for matching and taking node  */
        let id = match.get("id")
        let matchAndTake = (T) => {
            let type = this.adapter.getNodeType(T)
            if (id === "*" || id === type) {
                let take = true
                if (filter !== null)
                    if (!this.execFilter(filter, T))
                        take = false
                if (take)
                    nodes.push(T)
            }
        }

        /*  determine nodes along axis which potentially might match  */
        if (axis !== null) {
            let op = axis.get("op")
            let t = axis.get("type")
            if (op === "/") {
                /*  direct child nodes  */
                this.adapter.getChildNodes(T, t).forEach((T) => matchAndTake(T))
            }
            else if (op === "//") {
                /*  transitive child nodes  */
                let walk = (T) => {
                    matchAndTake(T)
                    this.adapter.getChildNodes(T, t).forEach((T) => walk(T)) /* RECURSION */
                }
                this.adapter.getChildNodes(T, t).forEach((T) => walk(T))
            }
            else if (op === "./") {
                /*  current node plus direct child nodes  */
                matchAndTake(T)
                this.adapter.getChildNodes(T, t).forEach((T) => matchAndTake(T))
            }
            else if (op === ".//") {
                /*  current node plus transitive child nodes  */
                matchAndTake(T)
                let walk = (T) => {
                    matchAndTake(T)
                    this.adapter.getChildNodes(T, t).forEach((T) => walk(T)) /* RECURSION */
                }
                this.adapter.getChildNodes(T, t).forEach((T) => walk(T))
            }
            else if (op === "-/") {
                /*  direct left sibling  */
                let parent = this.adapter.getParentNode(T, "*")
                if (parent !== null) {
                    let pchilds = this.adapter.getChildNodes(parent, t)
                    let leftSibling = null
                    for (let i = 0; i < pchilds.length; i++) {
                        if (pchilds[i] === T)
                            break
                        leftSibling = pchilds[i]
                    }
                    if (leftSibling !== null)
                        matchAndTake(leftSibling)
                }
            }
            else if (op === "-//") {
                /*  transitive left siblings  */
                let parent = this.adapter.getParentNode(T, "*")
                if (parent !== null) {
                    let pchilds = this.adapter.getChildNodes(parent, t)
                    let i = 0
                    for (; i < pchilds.length; i++)
                        if (pchilds[i] === T)
                            break
                    for (i--; i >= 0; i--)
                        matchAndTake(pchilds[i])
                }
            }
            else if (op === "+/") {
                /*  direct right sibling  */
                let parent = this.adapter.getParentNode(T, "*")
                if (parent !== null) {
                    let pchilds = this.adapter.getChildNodes(parent, t)
                    let i
                    for (i = 0; i < pchilds.length; i++)
                        if (pchilds[i] === T)
                            break
                    if (i < pchilds.length)
                        matchAndTake(pchilds[++i])
                }
            }
            else if (op === "+//") {
                /*  transitive right siblings  */
                let parent = this.adapter.getParentNode(T, "*")
                if (parent !== null) {
                    let pchilds = this.adapter.getChildNodes(parent, t)
                    let i
                    for (i = 0; i < pchilds.length; i++)
                        if (pchilds[i] === T)
                            break
                    if (i < pchilds.length)
                        for (i++; i < pchilds.length; i++)
                            matchAndTake(pchilds[i])
                }
            }
            else if (op === "~/") {
                /*  direct left and right sibling  */
                let parent = this.adapter.getParentNode(T, "*")
                if (parent !== null) {
                    let pchilds = this.adapter.getChildNodes(parent, t)
                    let i
                    for (i = 0; i < pchilds.length; i++)
                        if (pchilds[i] === T)
                            break
                    if (i > 0)
                        matchAndTake(pchilds[i - 1])
                    if (i < pchilds.length - 1)
                        matchAndTake(pchilds[i + 1])
                }
            }
            else if (op === "~//") {
                /*  transitive left and right siblings  */
                let parent = this.adapter.getParentNode(T, "*")
                if (parent !== null) {
                    let pchilds = this.adapter.getChildNodes(parent, t)
                    for (let i = 0; i < pchilds.length; i++)
                        if (pchilds[i] !== T)
                            matchAndTake(pchilds[i])
                }
            }
            else if (op === "../") {
                /*  direct parent  */
                let parent = this.adapter.getParentNode(T, t)
                if (parent !== null)
                    matchAndTake(parent)
            }
            else if (op === "..//") {
                /*  transitive parents  */
                let node = T
                for (;;) {
                    let parent = this.adapter.getParentNode(node, t)
                    if (parent === null)
                        break
                    matchAndTake(parent)
                    node = parent
                }
            }
            else if (op === "<//") {
                /*  transitive preceding nodes  */
                let ctx = { sentinel: T, take: true }
                for (;;) {
                    let parent = this.adapter.getParentNode(T, "*")
                    if (parent === null)
                        break
                    T = parent
                }
                let walk = (T) => {
                    if (T === ctx.sentinel)
                        ctx.take = false
                    if (ctx.take)
                        matchAndTake(T)
                    if (ctx.take)
                        this.adapter.getChildNodes(T, t).forEach((T) => walk(T)) /* RECURSION */
                }
                if (T !== ctx.sentinel) {
                    matchAndTake(T)
                    this.adapter.getChildNodes(T, t).forEach((T) => walk(T))
                }
                nodes = nodes.reverse()
            }
            else if (op === ">//") {
                /*  transitive following nodes  */
                let ctx = { sentinel: T, take: false }
                for (;;) {
                    let parent = this.adapter.getParentNode(T, "*")
                    if (parent === null)
                        break
                    T = parent
                }
                let walk = (T) => {
                    if (ctx.take)
                        matchAndTake(T)
                    if (T === ctx.sentinel)
                        ctx.take = true
                    this.adapter.getChildNodes(T, t).forEach((T) => walk(T)) /* RECURSION */
                }
                this.adapter.getChildNodes(T, t).forEach((T) => walk(T))
            }
        }
        else
            /*  current node  */
            matchAndTake(T)

        this.traceEnd(Q, T, nodes)
        return nodes
    }

    execFilter (Q, T) {
        this.traceBegin(Q, T)
        let expr = Q.childs()[0]
        let result = this.execExpr(expr, T)
        result = util.truthy(result)
        this.traceEnd(Q, T, result)
        return result
    }

    execExpr (Q, T) {
        switch (Q.type()) {
            case "ConditionalBinary":  return this.execExprConditionalBinary(Q, T)
            case "ConditionalTernary": return this.execExprConditionalTernary(Q, T)
            case "Logical":            return this.execExprLogical(Q, T)
            case "Bitwise":            return this.execExprBitwise(Q, T)
            case "Relational":         return this.execExprRelational(Q, T)
            case "Arithmetical":       return this.execExprArithmetical(Q, T)
            case "Unary":              return this.execExprUnary(Q, T)
            case "FuncCall":           return this.execExprFuncCall(Q, T)
            case "Attribute":          return this.execExprAttribute(Q, T)
            case "Param":              return this.execExprParam(Q, T)
            case "LiteralString":      return this.execExprLiteralString(Q, T)
            case "LiteralRegExp":      return this.execExprLiteralRegExp(Q, T)
            case "LiteralNumber":      return this.execExprLiteralNumber(Q, T)
            case "LiteralValue":       return this.execExprLiteralValue(Q, T)
            case "Path":               return this.execExprPath(Q, T)
        }
    }

    execExprConditionalBinary (Q, T) {
        this.traceBegin(Q, T)
        let result = this.execExpr(Q.childs()[0], T)
        if (!util.truthy(result))
            result = this.execExpr(Q.childs()[1], T)
        this.traceEnd(Q, T, result)
        return result
    }

    execExprConditionalTernary (Q, T) {
        this.traceBegin(Q, T)
        let result = this.execExpr(Q.childs()[0], T)
        if (util.truthy(result))
            result = this.execExpr(Q.childs()[1], T)
        else
            result = this.execExpr(Q.childs()[2], T)
        this.traceEnd(Q, T, result)
        return result
    }

    execExprLogical (Q, T) {
        this.traceBegin(Q, T)
        let result = false
        switch (Q.get("op")) {
            case "&&":
                result = util.truthy(this.execExpr(Q.childs()[0], T))
                if (result)
                    result = result && util.truthy(this.execExpr(Q.childs()[1], T))
                break
            case "||":
                result = util.truthy(this.execExpr(Q.childs()[0], T))
                if (!result)
                    result = result || util.truthy(this.execExpr(Q.childs()[1], T))
                break
        }
        this.traceEnd(Q, T, result)
        return result
    }

    execExprBitwise (Q, T) {
        this.traceBegin(Q, T)
        let v1 = util.coerce(this.execExpr(Q.childs()[0], T), "number")
        let v2 = util.coerce(this.execExpr(Q.childs()[1], T), "number")
        let result
        switch (Q.get("op")) {
            case "&":  result = v1 &  v2; break
            case "|":  result = v1 |  v2; break
            case "<<": result = v1 << v2; break
            case ">>": result = v1 >> v2; break
        }
        this.traceEnd(Q, T, result)
        return result
    }

    execExprRelational (Q, T) {
        this.traceBegin(Q, T)
        let v1 = this.execExpr(Q.childs()[0], T)
        let v2 = this.execExpr(Q.childs()[1], T)
        let result
        switch (Q.get("op")) {
            case "==": result = v1 === v2; break
            case "!=": result = v1 !== v2; break
            case "<=": result = util.coerce(v1, "number") <= util.coerce(v2, "number"); break
            case ">=": result = util.coerce(v1, "number") >= util.coerce(v2, "number"); break
            case "<":  result = util.coerce(v1, "number") <  util.coerce(v2, "number"); break
            case ">":  result = util.coerce(v1, "number") >  util.coerce(v2, "number"); break
            case "=~": result = util.coerce(v1, "string").match(util.coerce(v2, "regexp")) !== null; break
            case "!~": result = util.coerce(v1, "string").match(util.coerce(v2, "regexp")) === null; break
        }
        this.traceEnd(Q, T, result)
        return result
    }

    execExprArithmetical (Q, T) {
        this.traceBegin(Q, T)
        let v1 = this.execExpr(Q.childs()[0], T)
        let v2 = this.execExpr(Q.childs()[1], T)
        let result
        switch (Q.get("op")) {
            case "+":
                if (typeof v1 === "string")
                    result = v1 + util.coerce(v2, "string")
                else
                    result = util.coerce(v1, "number") + util.coerce(v2, "number")
                break
            case "-":  result = util.coerce(v1, "number") + util.coerce(v2, "number"); break
            case "*":  result = util.coerce(v1, "number") * util.coerce(v2, "number"); break
            case "/":  result = util.coerce(v1, "number") / util.coerce(v2, "number"); break
            case "%":  result = util.coerce(v1, "number") % util.coerce(v2, "number"); break
            case "**": result = Math.pow(util.coerce(v1, "number"), util.coerce(v2, "number")); break
        }
        this.traceEnd(Q, T, result)
        return result
    }

    execExprUnary (Q, T) {
        this.traceBegin(Q, T)
        let v = this.execExpr(Q.childs()[0], T)
        let result
        /* jscs: disable */
        switch (Q.get("op")) {
            case "!": result = !util.coerce(v, "boolean"); break
            case "~": result = ~util.coerce(v, "number");  break
        }
        /* jscs: enable */
        this.traceEnd(Q, T, result)
        return result
    }

    execExprFuncCall (Q, T) {
        this.traceBegin(Q, T)
        let id = Q.get("id")
        let args = [ this.adapter, T ]
        Q.childs().forEach((Q) => {
            args.push(this.execExpr(Q, T))
        })
        let result = this.funcs.run(id, args)
        this.traceEnd(Q, T, result)
        return result
    }

    execExprAttribute (Q, T) {
        this.traceBegin(Q, T)
        let id = Q.get("id")
        let result = this.adapter.getNodeAttrValue(T, id)
        this.traceEnd(Q, T, result)
        return result
    }

    execExprParam (Q, T) {
        this.traceBegin(Q, T)
        let id = Q.get("id")
        if (typeof this.params[id] === "undefined")
            throw new Error("invalid parameter \"" + id + "\"")
        let result = this.params[id]
        this.traceEnd(Q, T, result)
        return result
    }

    execExprLiteralString (Q, T) {
        this.traceBegin(Q, T)
        let result = Q.get("value")
        this.traceEnd(Q, T, result)
        return result
    }

    execExprLiteralRegExp (Q, T) {
        this.traceBegin(Q, T)
        let result = Q.get("value")
        this.traceEnd(Q, T, result)
        return result
    }

    execExprLiteralNumber (Q, T) {
        this.traceBegin(Q, T)
        let result = Q.get("value")
        this.traceEnd(Q, T, result)
        return result
    }

    execExprLiteralValue (Q, T) {
        this.traceBegin(Q, T)
        let result = Q.get("value")
        this.traceEnd(Q, T, result)
        return result
    }

    execExprPath (Q, T) {
        this.traceBegin(Q, T)
        let result = this.execPath(Q, T)
        this.traceEnd(Q, T, result)
        return result
    }
}

