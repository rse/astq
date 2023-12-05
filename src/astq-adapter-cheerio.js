/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2023 Dr. Ralf S. Engelschall <rse@engelschall.com>
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

export default class ASTQAdapterCheerio {
    static taste (node) {
        /* global Document: true */
        /* global Element: true */
        return (
            typeof node === "object"
            && node !== null
            && ((
                !(typeof Element === "object" && node instanceof Element)
                && typeof node.tagName === "string"
                && node.tagName !== ""
            ) || (
                !(typeof Document === "object" && node instanceof Document)
                && typeof node.type === "string"
                && node.type === "root"
            ))
        )
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
        return node.tagName || `#${node.type || "unknown"}`
    }
    static getNodeAttrNames (node) {
        let attrs = [ "value" ]
        if (typeof node.attribs === "object")
            attrs = attrs.concat(Object.keys(node.attribs))
        return attrs
    }
    static getNodeAttrValue (node, attr) {
        let value
        if (attr === "value")
            value = node.nodeValue
        else if (typeof node.attribs === "object")
            value = node.attribs[attr]
        return value
    }
}

