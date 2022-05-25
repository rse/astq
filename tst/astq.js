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

/* global describe: false */
/* global it: false */
/* jshint -W030 */
/* eslint no-unused-expressions: 0 */

const chai = require("chai")
const expect = chai.expect
chai.config.includeStack = true

const ASTQ = require("../lib/astq.node.js")

describe("ASTq Library", function () {
    const astq = new ASTQ()

    it("API availability", function () {
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
    })

    astq.func("add", function (a, b) { return a + b })

    /*
     *  node1
     *      node2
     *      node3
     *          node5
     *          node6
     *              node8
     *              node9
     *          node7
     *      node4
     */
    const ASTY = require("asty")
    const asty = new ASTY()
    const node1 = asty.create("node1")
    const node2 = asty.create("node2")
    const node3 = asty.create("node3")
    const node4 = asty.create("node4")
    const node5 = asty.create("node5")
    const node6 = asty.create("node6").set("foo", "bar")
    const node7 = asty.create("node7").set("quux", "baz")
    const node8 = asty.create("node8")
    const node9 = asty.create("node9")
    node1.add(node2)
    node1.add(node3)
    node1.add(node4)
    node3.add(node5)
    node3.add(node6)
    node3.add(node7)
    node6.add(node8)
    node6.add(node9)

    it("simple queries", function () {
        expect(astq.query(node1, "node1")).to.have.members([ node1 ])
        expect(astq.query(node1, "badNodeName")).to.be.empty
        expect(astq.query(node1, "*")).to.have.members([ node1 ])
    })

    it("axis queries", function () {
        expect(astq.query(node1, "/ *"))
            .to.be.deep.equal([ node2, node3, node4 ])
        expect(astq.query(node1, "// *"))
            .to.be.deep.equal([ node2, node3, node5, node6, node8, node9, node7, node4 ])
        expect(astq.query(node1, "./ *"))
            .to.be.deep.equal([ node1, node2, node3, node4 ])
        expect(astq.query(node1, ".// *"))
            .to.be.deep.equal([ node1, node2, node3, node5, node6, node8, node9, node7, node4 ])
        expect(astq.query(node3, "-/ *"))
            .to.be.deep.equal([ node2 ])
        expect(astq.query(node4, "-// *"))
            .to.be.deep.equal([ node3, node2 ])
        expect(astq.query(node3, "+/ *"))
            .to.be.deep.equal([ node4 ])
        expect(astq.query(node2, "+// *"))
            .to.be.deep.equal([ node3, node4 ])
        expect(astq.query(node3, "~/ *"))
            .to.be.deep.equal([ node2, node4 ])
        expect(astq.query(node3, "~// *"))
            .to.be.deep.equal([ node2, node4 ])
        expect(astq.query(node6, "../ *"))
            .to.be.deep.equal([ node3 ])
        expect(astq.query(node6, "..// *"))
            .to.be.deep.equal([ node3, node1 ])
        expect(astq.query(node6, "<// *"))
            .to.be.deep.equal([ node5, node3, node2, node1 ])
        expect(astq.query(node6, ">// *"))
            .to.be.deep.equal([ node8, node9, node7, node4 ])
    })

    it("filter functions", function () {
        expect(astq.query(node1, "// * [ type() == 'node3' ]"))
            .to.have.members([ node3 ])
        expect(astq.query(node1, "// * [ depth() == 3 ]"))
            .to.have.members([ node5, node6, node7 ])
        expect(astq.query(node1, "// * [ pos() <= 1 ]"))
            .to.have.members([ node2, node5, node8 ])
        expect(astq.query(node1, "// * [ nth(2) ]"))
            .to.have.members([ node3, node6, node9 ])
        expect(astq.query(node1, "// * [ first() ]"))
            .to.have.members([ node2, node5, node8 ])
        expect(astq.query(node1, "// * [ last() ]"))
            .to.have.members([ node4, node7, node9 ])
        expect(astq.query(node1, "// * [ count(/*) == 3 ]"))
            .to.have.members([ node3 ])
        expect(astq.query(node1, "// * [ below({node}) ]", { node: node3 }))
            .to.have.members([ node5, node6, node7, node8, node9 ])
        expect(astq.query(node1, "// * [ follows({node}) ]", { node: node6 }))
            .to.be.deep.equal([ node8, node9, node7, node4 ])
        expect(astq.query(node1, "// * [ in({nodes}) ]", { nodes: [ node3, node6 ] }))
            .to.have.members([ node3, node6 ])
        expect(astq.query(node1, "// * [ in( * [ @foo == 'bar' || @quux == 'baz' ]) ]"))
            .to.have.members([ node6, node7 ])
    })

    it("complex queries", function () {
        expect(astq.query(node1, "* [ * [ * [ node1 ]]]"))
            .to.have.members([ node1 ])
        expect(astq.query(node1, "// * [ @foo == 'bar' ]"))
            .to.have.members([ node6 ])
        expect(astq.query(node1, "// * [ @foo == 'bar' ] +// * [ @quux == 'baz' ]"))
            .to.have.members([ node7 ])
        expect(astq.query(node1, "// * [ @foo == 'bar' && +// * [ @quux == 'baz' ] ]"))
            .to.have.members([ node6 ])
        expect(astq.query(node1, "/ node2 ../ node1 / node2"))
            .to.have.members([ node2 ])
    })

    it("subset queries", function () {
        expect(astq.query(node1, "*, // *"))
            .to.have.members([ node1, node2, node3, node5, node6, node8, node9, node7, node4 ])
        expect(astq.query(node6, "<// *")).to.be.deep.equal([ node5, node3, node2, node1 ])
        expect(astq.query(node6, ">// *")).to.be.deep.equal([ node8, node9, node7, node4 ])
    })

    it("quoted identifiers", function () {
        expect(astq.query(node1, "// \"node3\"")).to.be.deep.equal([ node3 ])
        expect(astq.query(node1, "// * [ @\"foo\" ]")).to.be.deep.equal([ node6 ])
    })

    it("result marking", function () {
        expect(astq.query(node1, "* ! / * / * /*")).to.be.deep.equal([ node1 ])
        expect(astq.query(node1, "* / * ! / * /*")).to.be.deep.equal([ node2, node3, node4 ])
        expect(astq.query(node1, "* / * / * ! /*")).to.be.deep.equal([ node5, node6, node7 ])
        expect(astq.query(node1, "* / * / * / * !")).to.be.deep.equal([ node8, node9 ])
        expect(astq.query(node1, "* / * ! [ count(/ * ! / *) == 3 ]")).to.be.deep.equal([ node3 ])
    })
})

