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

class ASTQCache {
    constructor () {
        this._index         = {}
        this._oldHead       = { newer: null }
        this._newHead       = { older: null }
        this._oldHead.newer = this._newHead
        this._newHead.older = this._oldHead
        this._cur           = 0
        this._max           = Infinity
        this._dispose       = (/* key, val, op */) => {}
        return this
    }
    limit (max) {
        let maxOld = this._max
        if (arguments.length > 0) {
            this._max = max
            this._purge()
        }
        return maxOld
    }
    dispose (cb) {
        this._dispose = cb
        return this
    }
    length () {
        return this._cur
    }
    keys () {
        return this.each(function (val, key) { this.push(key) }, [])
    }
    values () {
        return this.each(function (val /*, key */) { this.push(val) }, [])
    }
    each (cb, ctx) {
        if (arguments < 2)
            ctx = this
        let i = 0
        let bucket = this._newHead.older
        while (bucket !== this._oldHead) {
            cb.call(ctx, bucket.val, bucket.key, i++)
            bucket = bucket.older
        }
        return ctx
    }
    has (key) {
        let bucket = this._index[key]
        return (bucket !== undefined)
    }
    peek (key) {
        let bucket = this._index[key]
        if (bucket === undefined)
            return undefined
        if (bucket.expires < Date.now()) {
            this.del(bucket.key)
            return undefined
        }
        return bucket.val
    }
    touch (key) {
        let bucket = this._index[key]
        if (bucket !== undefined)
            this._promote(bucket)
        return this
    }
    get (key) {
        let val = this.peek(key)
        this.touch(key)
        return val
    }
    set (key, val, expires) {
        if (arguments.length < 3)
            expires = Infinity
        expires += Date.now()
        let bucket = this._index[key]
        if (bucket === undefined) {
            /*  insert new bucket  */
            bucket = {
                older:   null,
                newer:   null,
                key:     key,
                val:     val,
                expires: expires
            }
            this._index[key] = bucket
            this._attach(bucket)
            this._cur++
            this._purge()
        }
        else {
            /*  replace existing bucket  */
            let valOld = bucket.val
            bucket.val = val
            this._promote(bucket)
            this._dispose(undefined, bucket.key, valOld, "set")
        }
        return this
    }
    del (key) {
        let bucket = this._index[key]
        if (bucket === undefined)
            throw new Error("ASTQ::Cache#del: no such item")
        delete this._index[key]
        this._detach(bucket)
        this._cur--
        this._dispose(undefined, key, bucket.val, "del")
        return this
    }
    clear () {
        while (this._cur > 0)
            this.del(this._oldHead.newer.key)
        return this
    }
    _purge () {
        while (this._cur > this._max)
            this.del(this._oldHead.newer.key)
    }
    _promote (bucket) {
        /*  promote bucket to be MRU bucket  */
        this._detach(bucket)
        this._attach(bucket)
    }
    _detach (bucket) {
        /*  detach bucket from list  */
        bucket.older.newer = bucket.newer
        bucket.newer.older = bucket.older
        bucket.older       = null
        bucket.newer       = null
    }
    _attach (bucket) {
        /*  attach bucket to list as MRU bucket  */
        bucket.older       = this._newHead.older
        bucket.newer       = this._newHead
        bucket.newer.older = bucket
        bucket.older.newer = bucket
    }
}

module.exports = ASTQCache

