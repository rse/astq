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

/* global __dirname: true */
/* global console: true */

let ASTY     = require("asty")
let PEG      = require("pegjs-otf")
let PEGUtil  = require("pegjs-util")

let ASTQQueryParse = PEG.buildParserFromFile(
    __dirname + "/astq-query-parse.pegjs",
    { optimize: "speed", cache: true }
)

let ASTQQueryExec = require("./astq-query-exec.js")

let ASTQQuery = class ASTQQuery {
    constructor (selector) {
        this.ast = null
        if (selector)
            this.compile(selector)
    }
    compile (selector, trace) {
        if (trace)
            console.log("ASTQ: compile: +-------------------------------------------------------------------------------------------------------\n" +
                "ASTQ: compile: | " + selector)
        let result = PEGUtil.parse(ASTQQueryParse, selector, {
            startRule: "query",
            makeAST: (line, column, offset, args) => {
                return ASTY.apply(null, args).pos(line, column, offset)
            }
        })
        if (result.error !== null)
            throw new Error("ASTQ: compile: query parsing failed:\n" +
                PEGUtil.errorMessage(result.error, true).replace(/^/mg, "ERROR: "))
        this.ast = result.ast
        if (trace)
            console.log("ASTQ: compile: +-------------------------------------------------------------------------------------------------------\n" +
                this.dump().replace(/\n$/, "").replace(/^/mg, "ASTQ: compile: | "))
        return this
    }
    dump () {
        return this.ast.dump()
    }
    execute (node, adapter, params, funcs, trace) {
        if (trace)
            console.log("ASTQ: execute: +--------------------------------------------------------------+----------------------------------------")
        let qe = new ASTQQueryExec(adapter, params, funcs, trace)
        return qe.execQuery(this.ast, node)
    }
}

module.exports = ASTQQuery
