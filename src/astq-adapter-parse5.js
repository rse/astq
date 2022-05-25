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

export default class ASTQAdapterParse5 {
    static taste (node) {
        /* global Node: true */
        return (typeof node === "object"
            && node !== null
            && !(typeof Node === "object" && node instanceof Node)
            && typeof node.nodeName === "string"
            && node.nodeName !== "")
    }
    static getParentNode (node /*, type */) {
        return node.parentNode
    }
    static getChildNodes (node /*, type */) {
        return ((typeof node.childNodes === "object"
            && node.childNodes instanceof Array) ?
            node.childNodes : [])
    }
    static getNodeType (node) {
        return node.nodeName
    }
    static getNodeAttrNames (node) {
        let attrs = [ "value" ]
        if (typeof node.attrs === "object" && node.attrs instanceof Array)
            attrs = attrs.concat(node.attrs.map((n) => n.name))
        return attrs
    }
    static getNodeAttrValue (node, attr) {
        let value
        if (attr === "value")
            value = node.value
        else if (typeof node.attrs === "object" && node.attrs instanceof Array) {
            let values = node.attrs
                .filter((n) => n.name === attr)
                .map((n) => n.value)
            if (values.length === 1)
                value = values[0]
        }
        return value
    }
}

