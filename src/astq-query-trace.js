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

/* eslint no-console: 0 */

import util from "./astq-util.js"

export default class ASTQQueryTrace {
    /*  determine output prefix based on tree depth  */
    prefixOf (Q, T) {
        let depth = 0
        let node = Q
        while ((node = node.parent()) !== null)
            depth++
        let prefix1 = util.pad("", 4 * depth)
        depth = 0
        node = T
        while ((node = this.adapter.getParentNode(node, "*")) !== null)
            depth++
        let prefix2 = util.pad("", 4 * depth)
        return { prefix1, prefix2 }
    }

    /*  begin tracing step  */
    traceBegin (Q, T) {
        if (!this.trace)
            return
        let { prefix1, prefix2 } = this.prefixOf(Q, T)
        console.log("ASTQ: execute: | " +
            util.pad(prefix1 + Q.type() + " (", -60) + " | " +
            prefix2 + this.adapter.getNodeType(T))
    }

    /*  end tracing step  */
    traceEnd (Q, T, val) {
        if (!this.trace)
            return
        let { prefix1, prefix2 } = this.prefixOf(Q, T)
        let result
        if (val === undefined)
            result = "undefined"
        else if (typeof val === "object" && val instanceof Array) {
            result = "["
            val.forEach((node) => {
                result += "node(" + this.adapter.getNodeType(node) + "),"
            })
            result = result.replace(/,$/, "") + "]"
        }
        else
            result = typeof val + "(" + val + ")"
        if (result.length > 60)
            result = result.substr(0, 60) + "..."
        console.log("ASTQ: execute: | " +
            util.pad(prefix1 + "): " + result, -60) + " | " +
            prefix2 + this.adapter.getNodeType(T))
    }
}

