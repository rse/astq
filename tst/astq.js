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

/* global describe: false */
/* global it: false */

var chai = require("chai")
var expect = chai.expect
chai.config.includeStack = true

var ASTQ = require("../lib/astq.node.js")

describe("ASTq Library", function () {
    it("basic functionality", function () {
        var astq = new ASTQ()
        expect(astq).to.respondTo("version")
        expect(astq).to.respondTo("adapter")
        expect(astq).to.respondTo("func")
        expect(astq).to.respondTo("cache")
        expect(astq).to.respondTo("compile")
        expect(astq).to.respondTo("execute")
        expect(astq).to.respondTo("query")

        expect(astq.version()).to.have.property("major")
        expect(astq.version()).to.have.property("minor")
        expect(astq.version()).to.have.property("micro")
        expect(astq.version()).to.have.property("date")

        astq.func("add", function (a, b) { return a + b })

        var ASTY = require("asty")
        var asty = new ASTY()
        var node1 = asty.create("node1")
        var node2 = asty.create("node2")
        var node3 = asty.create("node3")
        var node4 = asty.create("node4")
        var node5 = asty.create("node5")
        var node6 = asty.create("node6").set("foo", "bar")
        var node7 = asty.create("node7").set("quux", "baz")
        node1.add(node2)
        node1.add(node3)
        node1.add(node4)
        node3.add(node5)
        node3.add(node6)
        node3.add(node7)

        expect(astq.query(node1, "node1")).to.have.members([ node1 ])
        expect(astq.query(node1, "badNodeName")).to.be.empty()
        expect(astq.query(node1, "*")).to.have.members([ node1 ])
        expect(astq.query(node1, "* [ * [ * [ node1 ]]]")).to.have.members([ node1 ])
        expect(astq.query(node1, "// * [ @foo == 'bar' ]")).to.have.members([ node6 ])
        expect(astq.query(node1, "// * [ @foo == 'bar' ] +// * [ @quux == 'baz' ]")).to.have.members([ node7 ])
        expect(astq.query(node1, "// * [ @foo == 'bar' && +// * [ @quux == 'baz' ] ]")).to.have.members([ node6 ])
        expect(astq.query(node1, "// * [ pos() <= 1 ]")).to.have.members([ node2, node5 ])
        expect(astq.query(node1, "// * [ count(/*) == 3 ]")).to.have.members([ node3 ])
        expect(astq.query(node1, "// * [ depth() == 3 ]", {}, true)).to.have.members([ node5, node6, node7 ])
    })
})

