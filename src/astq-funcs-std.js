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

/*  internal helper function: find position between siblings  */
const pos = (A, T) => {
    let parent = A.getParentNode(T, "*")
    if (parent === null)
        return 1
    let pchilds = A.getChildNodes(parent, "*")
    for (let i = 0; i < pchilds.length; i++)
        if (pchilds[i] === T)
            return (i + 1)
    throw new Error("cannot find myself")
}

/*  internal helper function: find parent nodes  */
const parents = (A, T) => {
    let parents = []
    while ((T = A.getParentNode(T, "*")) !== null)
        parents.push(T)
    return parents
}

/*  the exported standard functions  */
const stdfuncs = {
    /*  type name of node  */
    "type": (A, T) => {
        return A.getNodeType(T)
    },

    /*  attribute names of node  */
    "attrs": (A, T, sep) => {
        if (sep === undefined)
            sep = " "
        /* eslint no-console: 0 */
        return sep + A.getNodeAttrNames(T).join(sep) + sep
    },

    /*  depth of node in tree  */
    "depth": (A, T) => {
        let depth = 1
        let node = T
        while ((node = A.getParentNode(node, "*")) !== null)
            depth++
        return depth
    },

    /*  return position of node between siblings  */
    "pos": (A, T) => {
        return pos(A, T)
    },

    /*  check position of node between siblings  */
    "nth": (A, T, num) => {
        num = parseInt(num, 10)
        let parent = A.getParentNode(T, "*")
        if (parent !== null) {
            let pchilds = A.getChildNodes(parent, "*")
            if (num < 0)
                num = pchilds.length - (num + 1)
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

    /*  check whether node is below another  */
    "below": (A, T, other) => {
        if (!A.taste(other))
            throw new Error("invalid argument to function \"below\" (node expected)")
        let node = T
        while ((node = A.getParentNode(node, "*")) !== null)
            if (node === other)
                return true
        return false
    },

    /*  check whether node follows another  */
    "follows": (A, T, other) => {
        if (!A.taste(other))
            throw new Error("invalid argument to function \"follows\" (node expected)")
        if (T === other)
            return false
        let pathOfT = [ T ].concat(parents(A, T)).reverse()
        let pathOfOther = [ other ].concat(parents(A, other)).reverse()
        let len = Math.min(pathOfT.length, pathOfOther.length)
        let i
        for (i = 0; i < len; i++)
            if (pathOfT[i] !== pathOfOther[i])
                break
        if (i === 0)
            throw new Error("internal error: root nodes have to be same same")
        else if (i === len) {
            if (pathOfOther.length < pathOfT.length)
                return true
            else
                return false
        }
        else
            return pos(A, pathOfT[i]) > pos(A, pathOfOther[i])
    },

    /*  check whether node is in a list of nodes  */
    "in": (A, T, val) => {
        if (!(typeof val === "object" && val instanceof Array))
            throw new Error("invalid argument to function \"in\" (array expected)")
        for (let i = 0; i < val.length; i++)
            if (val[i] === T)
                return true
        return false
    },

    /*  retrieve a sub-string  */
    "substr": (A, T, str, pos, len) => {
        return String(str).substr(pos, len)
    },

    /*  retrieve index of a sub-string  */
    "index": (A, T, str, sub, from) => {
        return String(str).indexOf(sub, from)
    },

    /*  remove whitespaces at begin and end of string  */
    "trim": (A, T, str) => {
        return String(str).trim()
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

export default stdfuncs

