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

let ASTQAdapter       = require("./astq-adapter.js")
let ASTQAdapterASTY   = require("./astq-adapter-asty.js")
let ASTQAdapterMOZAST = require("./astq-adapter-xmldom.js")
let ASTQAdapterXMLDOM = require("./astq-adapter-xmldom.js")
let ASTQFuncs         = require("./astq-funcs.js")
let ASTQFuncsSTD      = require("./astq-funcs-std.js")
let ASTQCache         = require("./astq-cache.js")
let ASTQQuery         = require("./astq-query.js")

let ASTQ = class ASTQ {
    constructor () {
        if (!(this instanceof ASTQ))
            return new ASTQ()
        this._adapter = new ASTQAdapter()
        this._funcs   = new ASTQFuncs()
        this._cache   = new ASTQCache()
        this._adapter.register(ASTQAdapterMOZAST)
        this._adapter.register(ASTQAdapterXMLDOM)
        this._adapter.register(ASTQAdapterASTY)
        for (let name in ASTQFuncsSTD)
            this.func(name, ASTQFuncsSTD[name])
    }
    adapter (adapter) {
        if (arguments.length !== 1)
            throw new Error("ASTQ#adapter: invalid number of arguments")
        this._adapter.unregister()
        this._adapter.register(adapter)
        return this
    }
    func (name, func) {
        if (arguments.length !== 2)
            throw new Error("ASTQ#func: invalid number of arguments")
        this._funcs.register(name, func)
        return this
    }
    cache (entries) {
        if (arguments.length !== 1)
            throw new Error("ASTQ#cache: invalid number of arguments")
        this._cache.limit(entries)
        return this
    }
    compile (selector, trace) {
        if (arguments.length < 1)
            throw new Error("ASTQ#compile: too less arguments")
        if (arguments.length > 2)
            throw new Error("ASTQ#compile: too many arguments")
        if (trace === undefined)
            trace = false
        let query = this._cache.get(selector)
        if (query === undefined) {
            query = new ASTQQuery()
            query.compile(selector, trace)
            this._cache.set(selector, query)
        }
        return query
    }
    execute (node, query, params, trace) {
        if (arguments.length < 2)
            throw new Error("ASTQ#execute: too less arguments")
        if (arguments.length > 4)
            throw new Error("ASTQ#execute: too many arguments")
        if (params === undefined)
            params = {}
        if (trace === undefined)
            trace = false
        let adapter = this._adapter.select(node)
        if (adapter === undefined)
            throw new Error("ASTQ#execute: no suitable adapter found for node")
        return query.execute(node, adapter, params, this._funcs, trace)
    }
    query (node, selector, params, trace) {
        if (arguments.length < 2)
            throw new Error("ASTQ#query: too less arguments")
        if (arguments.length > 4)
            throw new Error("ASTQ#query: too many arguments")
        if (params === undefined)
            params = {}
        if (trace === undefined)
            trace = false
        return this.execute(node, this.compile(selector, trace), params, trace)
    }
}

module.exports = ASTQ

