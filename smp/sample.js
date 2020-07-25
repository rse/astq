
const ASTQ = require("..")

/*  query ECMAScript source-code  */
;(() => {
    let source = `
        class Foo {
            foo () {
                const bar = "quux"
                let baz = 42
            }
        }
    `
    const acorn = require("acorn")
    let ast = acorn.parse(source, { ecmaVersion: 6 })
    let astq = new ASTQ()
    astq.adapter("mozast")
    astq.query(ast, `
        /* query all variable declaration */
        // VariableDeclarator [
               /:id   Identifier [ @name  ]
            && /:init Literal    [ @value ]
        ]
    `).forEach((node) => {
        console.log(`FOUND MOZAST: variable: ${node.id.name}, value: ${node.init.value}`)
    })
})();

/*  query HTML source-code  */
(() => {
    let source = `
        <html>
            <head>
                <title>Foo</title>
            </head>
            <body>
                <h1>Bar <i>Baz</i></h1>
                Sample
                <h2>Bar</h2>
                Sample
                <h1>Quux</h1>
                Sample
            </body>
        </html>
    `
    const parse5 = require("parse5")
    let ast = parse5.parse(source)
    let astq = new ASTQ()
    astq.adapter("parse5")
    astq.query(ast, `
        /* query all headlines */
        // * [
            type() =~ \`^h[1-9]$\`
            && / "#text"
        ]
    `).forEach((node) => {
        let tag   = node.nodeName
        let value = astq.query(node, `// "#text"`).map((node) => node.value).join("")
        console.log(`FOUND PARSE5: tag: ${tag}, value: ${value}`)
    })
})();

/*  query XML source-code  */
(() => {
    let source = `
        <config>
            <foo enabled="true">Foo</foo>
            <bar>Bar</bar>
            <quux enabled="true">Quux</quux>
        </config>
    `
    const xmldom = require("xmldom")
    var DOMParser = xmldom.DOMParser
    var ast = new DOMParser().parseFromString(source)
    let astq = new ASTQ()
    astq.adapter("xmldom", true)
    astq.query(ast, `
        // * [
            @enabled == "true"
        ]
    `).forEach((node) => {
        console.log(`FOUND XMLDOM: ${node.nodeName}`)
    })
})();

/*  query JSON source-code  */
(() => {
    let ast = {
        config: {
            foo: { enabled: true, body: "Foo" },
            bar: { body: "Bar" },
            quux: { enabled: true, body: "Quux" }
        }
    }
    let astq = new ASTQ()
    astq.adapter("json", true)
    astq.query(ast, `
        // * /:foo * [
            @enabled == true
        ]
    `).forEach((node) => {
        console.log(`FOUND JSON: ${JSON.stringify(node)}`)
    })
})();

/*  query HTML source-code  */
(() => {
    let source = `
        <html>
            <head>
                <title>Foo</title>
            </head>
            <body>
                <h1>Bar <i>Baz</i></h1>
                Sample
                <h2>Bar</h2>
                Sample
                <h3>Quux</h3>
                Sample
            </body>
        </html>
    `
    const cheerio = require("cheerio")
    let $ = cheerio.load(source)
    let ast = $.root()[0]
    let astq = new ASTQ()
    astq.adapter("cheerio")
    astq.query(ast, `
        /* query all headlines */
        // * [
            type() =~ \`^h[1-9]$\`
            && // "#text"
        ]
    `).forEach((node) => {
        let tag = node.tagName
        let value = astq.query(node, `// "#text"`).map((node) => node.nodeValue).join("")
        console.log(`FOUND PARSE5: tag: ${tag}, value: ${value}`)
    })
})();

/*  query UniST/MDAST  */
(() => {
    let source =
        "# Foo\n" +
        "Foo\n" +
        "# Bar\n" +
        "Bar\n"
    const unified  = require("unified")
    const markdown = require("remark-parse")
    const ast = unified().use(markdown).parse(source)
    const astq = new ASTQ()
    astq.adapter("unist")
    astq.query(ast, `
        /* query all text elements */
        // text
    `).forEach((node) => {
        console.log(`FOUND UniST: tag: ${node.type}, value: ${node.value}`)
    })
})();

