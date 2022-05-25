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

export default class ASTQAdapter {
    constructor () {
        this._adapters = []
        return this
    }
    register (adapter, force = false) {
        this._adapters.unshift({ adapter, force })
        return this
    }
    unregister (adapter) {
        if (adapter === undefined)
            this._adapters = []
        else {
            let adapters = []
            for (let i = 0; i < this._adapters.length; i++)
                if (this._adapters[i].adapter !== adapter)
                    adapters.push(this._adapters[i])
            this._adapters = adapters
        }
        return this
    }
    select (node) {
        for (let i = 0; i < this._adapters.length; i++)
            if (this._adapters[i].force || this._adapters[i].adapter.taste(node))
                return this._adapters[i].adapter
        return undefined
    }
}

