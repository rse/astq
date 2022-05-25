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

export default class ASTQAdapterXMLDOM {
    static taste (node) {
        /* global Node: true */
        return (typeof Node === "object"
            && node !== null
            && node instanceof Node
            && typeof node === "object"
            && typeof node.nodeType === "number"
            && typeof node.nodeName === "string")
    }
    static getParentNode (node /*, type */) {
        return node.parentNode
    }
    static getChildNodes (node /*, type */) {
        return typeof node.childNodes === "object" && node.childNodes !== null && node.hasChildNodes() ?
            Array.prototype.slice.call(node.childNodes, 0) : []
    }
    static getNodeType (node) {
        return typeof node.nodeName === "string" ?
            node.nodeName : "unknown"
    }
    static getNodeAttrNames (node) {
        return typeof node.attributes === "object" && node.attributes !== null && node.hasAttributes() ?
            Array.prototype.slice.call(node.attributes, 0).map((n) => n.nodeName) : []
    }
    static getNodeAttrValue (node, attr) {
        return typeof node.attributes === "object" && node.attributes !== null && node.hasAttributes() ?
            node.getAttribute(attr) : undefined
    }
}

