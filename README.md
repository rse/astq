
ASTq
====

Abstract Syntax Tree (AST) Query Engine

<p/>
<img src="https://nodei.co/npm/astq.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/astq.png" alt=""/>

Installation
------------

#### Node environments (with NPM package manager):

```shell
$ npm install astq
```

#### Browser environments (with Bower package manager):

```shell
$ bower install astq
```

About
-----

ASTq is an Abstract Syntax Tree (AST) query engine library for
JavaScript, i.e., it allows you to query nodes of an arbitary AST-style
hierarchical data structure with the help of a powerful XPath-inspired
query language. ASTq can operate on arbitrary AST-style data structures
through the help of pluggable access adapters.

Query Language
--------------

ASTq uses an XPath-inspired Domain Specific Language (DSL)
for querying the supplied AST-style hierarchical data structure.

### By Example

At its simplest form, a query looks like a POSIX filesystem path:

    Foo/Bar/Quux

This means: query and return all nodes of type `Quux`, which in turn
are childs of nodes of type `Bar`, which in turn are childs of nodes of
type `Foo`, which in turn has to be the start node.

A little bit more sophisticated query, showing more features,
like axis, filter and optional whitespaces for padding:

    // Foo [ /Bar [ @bar == 'baz1' || @bar == 'baz2' ] && /Quux ]

This means: query and return all nodes anywhere under the start node
which are of type `Foo` and which have both childs of type `Bar` -- and
with an attribute `bar` of values `baz1` or `baz2` -- and childs of type
`Quux`.

### By Grammar

In general, a query consists of one or more individual query paths,
separated by comma. A path consists of a mandatory initial query step
and optionally zero or more subsequent query steps. The difference
between initial and subsequent query steps is
that an initial query step does not need an axis while all subsequent
query steps require it.

    query            ::= path (, path)*
    path             ::= step-initial step-subsequent*
    step-initial     ::= axis? match filter?
    step-subsequent  ::= axis  match filter?

A query step consists of an (optional) AST node search axis (direct/any
child, direct/any left sibling, direct/any right sibling or direct/any
parent), a (mandatory) AST node type match and an (optional) AST node
filter expression:

    axis             ::= ("/" | "//" | "-/" | "-//" | "+/" | "+//" | "../" | "..//") (":" id)?
    match            ::= id | "*"
    filter           ::= "[" expr "]"

A search axis usually walks along all parent/child references (at least
in case of ASTy based AST). But in case the underlying AST and its
adapter use typed parent/child references, one can optionally constrain
the search axis to use only parent/child references matching the type
`id`.

The real power comes through the optional filter expression: it can be
applied to each query step and it recursively(!) can contain sub-queries
with the help of embedded query paths!
An illustrating combined example is:

    // Foo / Bar [ / Baz [ @bar == 'baz' ] && / Quux ], // Foo2
    +---------------------------------------------------------+  query
    +------------------------------------------------+  +-----+  path
                   +---------------------+    +-----+            path
    +----+ +-----------------------------------------+  +-----+  step
    ++     +       +                          +         ++       axis
       +-+   +-+     +-+                        +--+       +--+  match
                 +-----------------------------------+           filter
                   +-------------------------------+             expr
                         +---------------+                       filter
                           +----------+                          expr

The result of a query are always all nodes which match against the last
query step of any path. The queries in filter expressions just lead to
a boolean decision for the filter, but never cause any resulting nodes
theirself.

An expression can be either a ternary/binary conditional expression,
logical expression, bitwise expression, relational expression,
arithmethical expression, functional call, attribute reference, query
parameter, literal value, parenthesis expression or path of a sub-query.

    expr             ::= conditional
                       | logical
                       | bitwise
                       | relational
                       | arithmentical
                       | function-call
                       | attribute-ref
                       | query-parameter
                       | literal
                       | parenthesis
                       | sub-query
    conditional      ::= expr "?" expr ":" expr
                       | expr "?:" expr
    logical          ::= expr ("&&" | "||") expr
                       | "!" expr
    bitwise          ::= expr ("&" | "|" | "<<" | ">>") expr
                       | "~" expr
    relational       ::= expr ("==" | "!=" | "<=" | ">=" | "<" | ">" | "=~" | "!~") expr
    arithmethical    ::= expr ("+" | "-" | "*" | "/" | "%" | "**") expr
    function-call    ::= id "(" (param ("," param)*)? ")"
    attribute-ref    ::= "@" id
    query-parameter  ::= "{" id "}"
    id               ::= /[a-zA-Z_][a-zA-Z0-9_-]*/
    literal          ::= string | regexp | number | value
    string           ::= /"(\\"|.)*"/ | /'(\\'|.)*'/
    regexp           ::= /`(\\`|.)*`/
    number           ::= /\d+(\.\d+)?$/
    value            ::= "true" | "false" | "null" | "NaN" | "undefined"
    parenthesis      ::= "(" expr ")"
    sub-query        ::= path           // <-- ESSENTIAL RECURSION !!

Application Programming Interface (API)
---------------------------------------

The ASTq API, here assumed to be exposed through the variable `ASTQ`,
provides the following methods (in a notation somewhat resembling
TypeScript type definitions):

### ASTQ API

- `new ASTQ(): ASTQ`:<br/>
  Create a new ASTQ instance.

- `ASTQ#adapter(adapter: ASTQAdapter): ASTQ`:<br/>
  Register a custom tree access adapter to support arbitrary AST-style
  data structures. The `ASTQAdapter` has to conform to a particular
  duck-typed interface. See below for more information.
  By default ASTq has built-in adapters for ASTy, XML DOM and Mozilla AST.
  Calling `adapter()` causes these three to be replaced with a single custom adapter.
  Returns the API itself.

        /*  the built-in implementation for supporting ASTy  */
        astq.adapter({
            taste:            function (node)       { return (typeof node === "object" && node.ASTy) },
            getParentNode:    function (node)       { return node.parent()  },
            getChildNodes:    function (node)       { return node.childs()  },
            getNodeType:      function (node)       { return node.type()    },
            getNodeAttrNames: function (node)       { return node.attrs()   },
            getNodeAttrValue: function (node, attr) { return node.get(attr) }
        }

- `ASTQ#version(): { major: Number, minor: Number, micro: Number, date: Number }`:<br/>
  Return the current ASTq library version details.

- `ASTQ#func(name: String, func: (adapter: Adapter, node: Object, [...]) => Any): ASTQ`:<br/>
  Register function named `name` by providing the callback `func` which has
  to return an arbitrary value and optionally can access the current `node` with
  the help of the selected `adapter`. Returns the API itself.

        /*  the built-in implementation for "depth"  */
        astq.func("depth", function (adapter, node) => {
            var depth = 1
            while ((node = adapter.getParentNode(node)) !== null)
                depth++
            return depth
        })

- `ASTQ#cache(num: Number): ASTQ`:<br/>
  Set the upper limit for the internal query cache to `num`, i.e.,
  up to `num` ASTs of parsed queries will be cached. Set `num` to
  `0` to disable the cache at all. Returns the API itself.

- `ASTQ#compile(selector: String, trace?: Boolean): ASTQQuery {
  Compile `selector` DSL into an internal query object for subsequent
  processing by `ASTQ#execute`.
  If `trace` is `true` the compiling is dumped to the console.
  Returns the query object.

- `ASTQ#execute(node: Object, query: ASTQQuery, params, trace?: Boolean): Object[]`:<br/>
  Execute the previously compiled `query` (see `compile` above) at `node`.
  The optional `params` object can provide parameters for the `{name}` query constructs.
  If `trace` is `true` the execution is dumped to the console.
  Returns an array of zero or more matching AST nodes.

- `ASTQ#query(node: Object, selector: String, params?: Object, trace: Boolean): Object[]`: <br/>
  Just the convenient combination of `compile` and `execute`:
  `execute(node, compile(selector, trace), params, trace)`.
  Use this as the standard query method except you need more control.
  The optional `params` object can provide parameters for the `{name}` query constructs.
  If `trace` is `true` the compiling and execution is dumped to the console.
  Returns an array of zero or more matching AST nodes.

### ASTQAdapter API

For accessing arbitrary AST-style data structures, an adapter has to be
provided. By default ASTq has adapters for use with ASTy, XML DOM and
Mozilla AST. The `ASTQAdapter` interface is:

- `ASTQAdapter#taste(node: Object): Boolean`:<br/>
  Taste `node` to be sure this adapter is intended to handle it.

- `ASTQAdapter#getParentNode(node: Object): Object`:<br/>
  Return parent node of `node`. In case the underyling
  data structure does not support traversing to parent nodes,
  throw an exception.

- `ASTQAdapter#getChildNodes(node: Object): Object[]`:<br/>
  Return the list of all child nodes of `node`.

- `ASTQAdapter#getNodeType(node: Object): String`:<br/>
  Return the type of `node`.

- `ASTQAdapter#getNodeAttrNames(node: Object): String[]`:<br/>
  Return the list of all attribute names of `node`.

- `ASTQAdapter#getNodeAttrValue(node: Object, attr: String): Any`:<br/>
  Return the value of attribute `attr` of `node`.

Example
-------

```
$ cat sample.js
const acorn = require("acorn")
const ASTQ  = require("astq")

let source = `
    class Foo {
        foo () {
            const bar = "quux"
            let baz = 42
        }
    }
`

let ast = acorn.parse(source, { ecmaVersion: 6 })

let astq = new ASTQ()
astq.query(ast, `
    // VariableDeclarator [
           /:id   Identifier [ @name  ]
        && /:init Literal    [ @value ]
    ]
`).forEach(function (node) {
    console.log(`${node.id.name}: ${node.init.value}`)
})

$ babel-node sample.js
bar: quux
baz: 42
```

Implementation Notice
---------------------

Although ASTq is written in ECMAScript 6, it is transpiled to ECMAScript
5 and this way runs in really all(!) current (as of 2015) JavaScript
environments, of course.

Additionally, there are two transpilation results: first, there is
`astq.browser.js` (plus `astq.browser.map`) for Browser environments.
This is a size-compressed variant but still with source-map for
debugging and with the external dependencies `asty`, `pegjs-otf` and
`pegjs-util` directly embedded. Second, there is `astq.node.js` for
Node.js/IO.js environments. This is a variant without compression and no
source-maps and with the external dependencies `asty`, `pegjs-otf` and
`pegjs-util` kept.

License
-------

Copyright (c) 2014-2015 Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

