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

export default class ASTQAdapterJSON {
    static taste (node) {
        return (typeof node === "object" && node !== null)
    }
    static getParentNode (node, type) {
        throw new Error("JSON does not support parent node traversal")
    }
    static getChildNodes (node, type) {
        let childs = []
        let checkField = (node, field) => {
            if (   Object.prototype.hasOwnProperty.call(node, field)
                && this.taste(node[field]))
                childs.push(node[field])
            else if (   Object.prototype.hasOwnProperty.call(node, field)
                     && typeof node[field] === "object"
                     && node[field] instanceof Array) {
                node[field].forEach((node) => {
                    if (this.taste(node))
                        childs.push(node)
                })
            }
        }
        if (type === "*") {
            for (let field in node)
                checkField(node, field)
        }
        else {
            if (typeof node[type] !== "undefined")
                checkField(node, type)
        }
        return childs
    }
    static getNodeType (node) {
        if (node === null)
            return "Null"
        else if (node instanceof Boolean)
            return "Boolean"
        else if (node instanceof Number)
            return "Number"
        else if (node instanceof String)
            return "String"
        else if (typeof node === "object") {
            if (node instanceof Array)
                return "Array"
            else if (typeof node.constructor === "function" && typeof node.constructor.name === "string")
                return node.constructor.name
            else
                return "Object"
        }
        else
            return "Unknown"
    }
    static getNodeAttrNames (node) {
        let names = []
        for (let field in node)
            if (   Object.prototype.hasOwnProperty.call(node, field)
                && typeof node[field] !== "object")
                names.push(field)
        return names
    }
    static getNodeAttrValue (node, attr) {
        if (   Object.prototype.hasOwnProperty.call(node, attr)
            && typeof node[attr] !== "object")
            return node[attr]
        else
            return undefined
    }
}

