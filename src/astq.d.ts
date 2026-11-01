/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2024 Dr. Ralf S. Engelschall <rse@engelschall.com>
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

declare namespace ASTQ {
    /**
     * Duck-typed tree access adapter for arbitrary AST-style data structures.
     * Both plain objects and classes with static methods conform to it.
     */
    interface Adapter<N = any> {
        /**
         * Taste node to be sure this adapter is intended to handle it
         */
        taste (node: any): boolean

        /**
         * Return parent node of node (or null for the root node),
         * or throw an exception if parent traversal is not supported
         */
        getParentNode (node: N, type?: string): N | null

        /**
         * Return the list of child nodes of node
         * (type is "*" for all childs or a particular child field name)
         */
        getChildNodes (node: N, type?: string): N[]

        /**
         * Return the type of node
         */
        getNodeType (node: N): string

        /**
         * Return the list of all attribute names of node
         */
        getNodeAttrNames (node: N): string[]

        /**
         * Return the value of attribute attr of node
         */
        getNodeAttrValue (node: N, attr: string): any
    }

    /**
     * Names of the built-in adapters
     */
    type AdapterName =
        "asty" | "xmldom" | "parse5" | "mozast" |
        "graphql" | "json" | "cheerio" | "unist"

    /**
     * Version information of the library
     */
    interface Version {
        major: number
        minor: number
        micro: number
        date:  number
    }

    /**
     * Query function, receiving the selected adapter, the current node,
     * and the evaluated arguments of the function call in the query
     */
    type Func = (adapter: Adapter, node: any, ...args: any[]) => any

    /**
     * Parameters for the "{name}" query constructs
     */
    type Params = { [ name: string ]: any }

    /**
     * Compiled query object
     */
    interface Query {
        /**
         * Dump the internal query AST
         */
        dump (): string
    }
}

declare class ASTQ {
    /**
     * Create a new ASTq instance
     */
    constructor ()

    /**
     * Return the ASTq library version details
     */
    version (): ASTQ.Version

    /**
     * Replace the registered adapters with one or more custom or built-in adapter(s).
     * With force set to true, the (single) adapter does not taste the node.
     */
    adapter (adapter: ASTQ.Adapter | ASTQ.AdapterName | Array<ASTQ.Adapter | ASTQ.AdapterName>, force?: boolean): this

    /**
     * Register an additional query function
     */
    func (name: string, func: ASTQ.Func): this

    /**
     * Set the upper limit of the internal query cache (0 disables the cache)
     */
    cache (entries: number): this

    /**
     * Compile the selector DSL into a query object
     * (if trace is true, the compiling is dumped to the console)
     */
    compile (selector: string, trace?: boolean): ASTQ.Query

    /**
     * Execute a previously compiled query onto node and return the matching nodes
     * (if trace is true, the execution is dumped to the console)
     */
    execute<N = any> (node: any, query: ASTQ.Query, params?: ASTQ.Params, trace?: boolean): N[]

    /**
     * Compile and execute the selector DSL onto node and return the matching nodes
     * (if trace is true, the compiling and execution is dumped to the console)
     */
    query<N = any> (node: any, selector: string, params?: ASTQ.Params, trace?: boolean): N[]
}

export = ASTQ

