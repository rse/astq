/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2015 Ralf S. Engelschall <rse@engelschall.com>
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

let stdfuncs = {
    /*  type name of node  */
    "type": (A, T) => {
        return A.getNodeType(T)
    },

    /*  depth of node in tree  */
    "depth": (A, T) => {
        let depth = 1
        let node = T
        while ((node = A.getParentNode(node)) !== null)
            depth++
        return depth
    },

    /*  return position of node between siblings  */
    "pos": (A, T) => {
        let parent = A.getParentNode(T)
        if (parent === null)
            return 1
        let pchilds = A.getChildNodes(parent)
        for (let i = 0; i < pchilds.length; i++)
            if (pchilds[i] === T)
                return (i + 1)
        throw new Error("cannot find myself") 
    },

    /*  check position of node between siblings  */
    "nth": (A, T, num) => {
        num = parseInt(num, 10)
        let parent = A.getParentNode(T)
        if (parent !== null) {
            let pchilds = A.getChildNodes(parent)
            if (num < 0)
                num = pchilds - (num + 1);
            for (let i = 0; i < pchilds.length; i++)
                if (pchilds[i] === T)
                    return ((i + 1) === num)
            return false
        }
        else if (num === 1)
            return true
        else
            return false
    },

    /*  check position of node to be first of siblings  */
    "first": (A, T) => {
        return stdfuncs.nth(A, T, 1)
    },

    /*  check position of node to be last of siblings  */
    "last": (A, T) => {
        return stdfuncs.nth(A, T, -1)
    },

    /*  count number of keys/elements/characters/etc  */
    "count": (A, T, val) => {
        if (typeof val === "object" && val instanceof Array)
            return val.length
        else if (typeof val === "object")
            return Object.keys(val).length
        else if (typeof val === "string")
            return val.length
        else
            return String(val).length
    },

    /*  retrieve a sub-string  */
    "substr": (A, T, str, pos, len) => {
        return String(str).substr(pos, len)
    },

    /*  convert string to lower-case  */
    "lc": (A, T, str) => {
        return String(str).toLowerCase()
    },

    /*  convert string to upper-case  */
    "uc": (A, T, str) => {
        return String(str).toUpperCase()
    }
}

module.exports = stdfuncs
