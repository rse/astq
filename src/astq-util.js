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

let ASTQUtil = {
    pad (str, num) {
        if (num < 0)
            return (str.length > -num ? str.substr(0, -num) : (str + Array((-num) + 1 - str.length).join(" ")))
        else
            return (str.length > num ? str.substr(0, num) : Array(num + 1 - str.length).join(" ") + str)
    },
    truthy (value) {
        let result
        switch (typeof value) {
            case "boolean":
                result = value
                break
            case "number":
                result = (value !== 0 && !isNaN(value))
                break
            case "string":
                result = (value !== "")
                break
            case "object":
                result = false
                if (value !== null) {
                    result = true
                    if (value instanceof Array)
                        result = (value.length > 0)
                }
                break
            default:
                result = false
        }
        return result
    },
    coerce (value, type) {
        let result
        try {
            switch (type) {
                case "boolean":
                    result = Boolean(value)
                    break
                case "number":
                    result = Number(value)
                    break
                case "string":
                    result = String(value)
                    break
                case "regexp":
                    result = new RegExp(value)
                    break
                default:
                    result = value
            }
        }
        catch (e) {
            throw new Error("cannot coerce value into type " + type)
        }
        return result
    }
}

module.exports = ASTQUtil
