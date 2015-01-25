
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

ASTq is a Abstract Syntax Tree (AST) query engine library for
JavaScript, i.e., it allows you to query nodes of an arbitary AST-style
hierarchical data structure with the help of a powerful XPath-inspired
query language.

Usage
-----

The ASTq API, here assumed to be exposed through the variable `ASTQ`,
provides the following methods (in a notation somewhat resembling
TypeScript type definitions) is:

### ASTQ API

- `new ASTQ(): ASTQ`:<br/>
  Create a new ASTQ instance.

- `ASTQ#adapter(adapter: ASTQAdapter): ASTQ`:<br/>
  Register a custom tree access adapter to support arbitrary AST-style
  data structures. The `ASTQAdapter` has to conform to a particular
  duck-typed interface. See below for more information.

        /*  the built-in implementation for supporting ASTy  */
        astq.adapter({
            taste:            function (node)       { return (typeof node === "object" && node.ASTy) },
            getParentNode:    function (node)       { return node.parent()  },
            getChildNodes:    function (node)       { return node.childs()  },
            getNodeType:      function (node)       { return node.type()    },
            getNodeAttrNames: function (node)       { return node.attrs()   },
            getNodeAttrValue: function (node, attr) { return node.get(attr) }
        }

- `ASTQ#func(name: String, func: (adapter: Adapter, node: Object, [...]) => Any): ASTQ`:<br/>
  Register function named `name` by providing the callback `func` which has
  to return an arbitrary value and optionally can access the current `node` with
  the help of the selected `adapter`.

        /*  the built-in implementation for "type"  */
        astq.func("type", function (adapter, node) => {
            var depth = 1
            while ((node = adapter.getParentNode(node)) !== null)
                depth++
            return depth
        })

- `ASTQ#cache(num: Number): ASTQ`:<br/>
  Set the upper limit for the internal query cache to `num`, i.e.,
  up to `num` ASTs of parsed queries will be cached. Set `num` to
  `0` to disable the cache at all.

- `ASTQ#compile(selector: String, trace?: Boolean): ASTQQuery {
  Compile `selector` DSL into an internal query object for subsequent
  processing by `ASTQ#execute`.
  If `trace` is `true` the compiling is dumped to the console.

- `ASTQ#execute(node: Object, query: ASTQQuery, params, trace?: Boolean): Object[]`:<br/>
  Execute the previously compiled `query` (see `compile` above) at `node`.
  The optional `params` object can provide parameters for the `{name}` query constructs.
  If `trace` is `true` the execution is dumped to the console.

- `ASTQ#query(node: Object, selector: String, params?: Object, trace: Boolean): Object[]`: <br/>
  Just the convenient combination of `compile` and `execute`:
  `execute(node, compile(selector, trace), params, trace)`.
  Use this as the standard query method except you need more control.
  The optional `params` object can provide parameters for the `{name}` query constructs.
  If `trace` is `true` the compiling and execution is dumped to the console.

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

