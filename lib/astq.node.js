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

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ASTQ = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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

var ASTQAdapterASTY = {
    taste: function taste(node) {
        return typeof node === "object" && typeof node.ASTy === "boolean";
    },
    getParentNode: function getParentNode(node) {
        return node.parent();
    },
    getChildNodes: function getChildNodes(node) {
        return node.childs();
    },
    getNodeType: function getNodeType(node) {
        return node.type();
    },
    getNodeAttrNames: function getNodeAttrNames(node) {
        return node.attrs();
    },
    getNodeAttrValue: function getNodeAttrValue(node, attr) {
        return node.get(attr);
    }
};

module.exports = ASTQAdapterASTY;

},{}],2:[function(require,module,exports){
"use strict";

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

/*  See also: https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API  */

var ASTQAdapterMozAST = {
    taste: function taste(node) {
        return typeof node === "object" && typeof node.type === "string" && typeof node.loc === "object";
    },
    getParentNode: function getParentNode() {
        throw new Error("Mozilla SpiderMonkey AST does not support parent node traversal");
    },
    getChildNodes: function getChildNodes(node) {
        var _this = this;

        var childs = [];
        for (var field in node) {
            if (node.hasOwnProperty(field) && this.taste(node[field])) childs.push(node);else if (node.hasOwnProperty(field) && typeof node[field] === "object" && node[field] instanceof Array) {
                node[field].forEach(function (node) {
                    if (_this.taste(node)) childs.push(node);
                });
            }
        }
        return childs;
    },
    getNodeType: function getNodeType(node) {
        return node.type;
    },
    getNodeAttrNames: function getNodeAttrNames(node) {
        var names = [];
        for (var field in node) {
            if (node.hasOwnProperty(field) && typeof node[field] !== "object" && field !== "type" && field !== "loc") names.push(field);
        }return names;
    },
    getNodeAttrValue: function getNodeAttrValue(node, attr) {
        if (node.hasOwnProperty(attr) && typeof node[attr] !== "object" && attr !== "type" && attr !== "loc") {
            return node[attr];
        } else {
            return undefined;
        }
    }
};

module.exports = ASTQAdapterMozAST;
/* node */

},{}],3:[function(require,module,exports){
"use strict";

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

var ASTQAdapterXMLDOM = {
    taste: function taste(node) {
        /* global Node: true */
        return typeof Node === "object" && node instanceof Node && typeof node === "object" && typeof node.nodeType === "number" && typeof node.nodeName === "string";
    },
    getParentNode: function getParentNode(node) {
        return node.parentNode;
    },
    getChildNodes: function getChildNodes(node) {
        return node.childNodes;
    },
    getNodeType: function getNodeType(node) {
        return node.nodeName;
    },
    getNodeAttrNames: function getNodeAttrNames(node) {
        return Array.prototype.slice.call(node.attributes, 0).map(function (n) {
            return n.nodeName;
        });
    },
    getNodeAttrValue: function getNodeAttrValue(node, attr) {
        return node.getAttribute(attr);
    }
};

module.exports = ASTQAdapterXMLDOM;

},{}],4:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

var ASTQAdapter = (function () {
    function ASTQAdapter() {
        _classCallCheck(this, ASTQAdapter);

        this._adapters = [];
        return this;
    }

    _prototypeProperties(ASTQAdapter, null, {
        register: {
            value: function register(adapter) {
                this._adapters.unshift(adapter);
                return this;
            },
            writable: true,
            configurable: true
        },
        unregister: {
            value: function unregister(adapter) {
                if (adapter === undefined) this._adapters = [];else {
                    var adapters = [];
                    for (var i = 0; i < this._adapters.length; i++) {
                        if (this._adapters[i] !== adapter) adapters.push(this._adapters[i]);
                    }this._adapters = adapters;
                }
                return this;
            },
            writable: true,
            configurable: true
        },
        select: {
            value: function select(node) {
                for (var i = 0; i < this._adapters.length; i++) {
                    if (this._adapters[i].taste(node)) {
                        return this._adapters[i];
                    }
                }return undefined;
            },
            writable: true,
            configurable: true
        }
    });

    return ASTQAdapter;
})();

module.exports = ASTQAdapter;

},{}],5:[function(require,module,exports){
"use strict";

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

var stdfuncs = {
    /*  type name of node  */
    type: function (A, T) {
        return A.getNodeType(T);
    },

    /*  depth of node in tree  */
    depth: function (A, T) {
        var depth = 1;
        var node = T;
        while ((node = A.getParentNode(node)) !== null) depth++;
        return depth;
    },

    /*  return position of node between siblings  */
    pos: function (A, T) {
        var parent = A.getParentNode(T);
        if (parent === null) return 1;
        var pchilds = A.getChildNodes(parent);
        for (var i = 0; i < pchilds.length; i++) {
            if (pchilds[i] === T) return i + 1;
        }throw new Error("cannot find myself");
    },

    /*  check position of node between siblings  */
    nth: function (A, T, num) {
        num = parseInt(num, 10);
        var parent = A.getParentNode(T);
        if (parent !== null) {
            var pchilds = A.getChildNodes(parent);
            if (num < 0) num = pchilds - (num + 1);
            for (var i = 0; i < pchilds.length; i++) {
                if (pchilds[i] === T) return i + 1 === num;
            }return false;
        } else if (num === 1) return true;else return false;
    },

    /*  check position of node to be first of siblings  */
    first: function (A, T) {
        return stdfuncs.nth(A, T, 1);
    },

    /*  check position of node to be last of siblings  */
    last: function (A, T) {
        return stdfuncs.nth(A, T, -1);
    },

    /*  count number of keys/elements/characters/etc  */
    count: function (A, T, val) {
        if (typeof val === "object" && val instanceof Array) return val.length;else if (typeof val === "object") return Object.keys(val).length;else if (typeof val === "string") return val.length;else return String(val).length;
    },

    /*  retrieve a sub-string  */
    substr: function (A, T, str, pos, len) {
        return String(str).substr(pos, len);
    },

    /*  convert string to lower-case  */
    lc: function (A, T, str) {
        return String(str).toLowerCase();
    },

    /*  convert string to upper-case  */
    uc: function (A, T, str) {
        return String(str).toUpperCase();
    }
};

module.exports = stdfuncs;

},{}],6:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

var ASTQFuncs = (function () {
    function ASTQFuncs() {
        _classCallCheck(this, ASTQFuncs);

        this._funcs = {};
        return this;
    }

    _prototypeProperties(ASTQFuncs, null, {
        register: {
            value: function register(name, func) {
                this._funcs[name] = func;
            },
            writable: true,
            configurable: true
        },
        run: {
            value: function run(name, args) {
                var func = this._funcs[name];
                if (typeof func !== "function") throw new Error("invalid function \"" + name + "\"");
                return func.apply(null, args);
            },
            writable: true,
            configurable: true
        }
    });

    return ASTQFuncs;
})();

module.exports = ASTQFuncs;

},{}],7:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

var util = _interopRequire(require("./astq-util.js"));

var ASTQQueryTrace = _interopRequire(require("./astq-query-trace.js"));

var ASTQQueryExec = (function (ASTQQueryTrace) {
    function ASTQQueryExec(adapter, params, funcs, trace) {
        _classCallCheck(this, ASTQQueryExec);

        this.adapter = adapter;
        this.params = params;
        this.funcs = funcs;
        this.trace = trace;
    }

    _inherits(ASTQQueryExec, ASTQQueryTrace);

    _prototypeProperties(ASTQQueryExec, null, {
        execQuery: {
            value: function execQuery(Q, T) {
                var _this = this;

                this.traceBegin(Q, T);
                var output = [];
                Q.childs().forEach(function (Q) {
                    output = output.concat(_this.execPath(Q, T));
                });
                this.traceEnd(Q, T, output);
                return output;
            },
            writable: true,
            configurable: true
        },
        execPath: {
            value: function execPath(Q, T) {
                var _this = this;

                this.traceBegin(Q, T);
                var nodes = [T];
                Q.childs().forEach(function (Q) {
                    var output = [];
                    nodes.forEach(function (T) {
                        output = output.concat(_this.execStep(Q, T));
                    });
                    nodes = output;
                });
                this.traceEnd(Q, T, nodes);
                return nodes;
            },
            writable: true,
            configurable: true
        },
        execStep: {
            value: function execStep(Q, T) {
                var _this = this;

                this.traceBegin(Q, T);

                /*  determine (optional) axis, (mandatory) match and (optional) filter  */
                var childs = Q.childs();
                var axis = null;
                var match = null;
                var filter = null;
                var i = 0;
                if (i < childs.length && childs[i].type() === "Axis") axis = childs[i++];
                if (i < childs.length && childs[i].type() === "Match") match = childs[i++];
                if (i < childs.length && childs[i].type() === "Filter") filter = childs[i++];
                if (match === null) throw new Error("no matching part in query step");

                var nodes = [];

                /*  helper function for matching and taking node  */
                var id = match.get("id");
                var matchAndTake = function (T) {
                    var type = _this.adapter.getNodeType(T);
                    if (id === "*" || id === type) {
                        var take = true;
                        if (filter !== null) if (!_this.execFilter(filter, T)) take = false;
                        if (take) nodes.push(T);
                    }
                };

                /*  determine nodes along axis which potentially might match  */
                if (axis !== null) {
                    var op = axis.get("op");
                    if (op === "/") {
                        /*  direct child nodes  */
                        this.adapter.getChildNodes(T).forEach(function (T) {
                            return matchAndTake(T);
                        });
                    } else if (op === "//") {
                        (function () {
                            /*  transitive child nodes  */
                            var walk = function (T) {
                                matchAndTake(T);
                                _this.adapter.getChildNodes(T).forEach(function (T) {
                                    return walk(T);
                                });
                            };
                            _this.adapter.getChildNodes(T).forEach(function (T) {
                                return walk(T);
                            });
                        })();
                    } else if (op === "-/") {
                        /*  direct left sibling  */
                        var _parent = this.adapter.getParentNode(T);
                        if (_parent !== null) {
                            var pchilds = this.adapter.getChildNodes(_parent);
                            var leftSibling = null;
                            for (var _i = 0; _i < pchilds.length; _i++) {
                                if (pchilds[_i] === T) break;
                                leftSibling = pchilds[_i];
                            }
                            matchAndTake(leftSibling);
                        }
                    } else if (op === "-//") {
                        /*  transitive left siblings  */
                        var _parent2 = this.adapter.getParentNode(T);
                        if (_parent2 !== null) {
                            var pchilds = this.adapter.getChildNodes(_parent2);
                            for (var _i2 = 0; _i2 < pchilds.length; _i2++) {
                                if (pchilds[_i2] === T) break;
                                matchAndTake(pchilds[_i2]);
                            }
                        }
                    } else if (op === "+/") {
                        /*  direct right sibling  */
                        var _parent3 = this.adapter.getParentNode(T);
                        if (_parent3 !== null) {
                            var pchilds = this.adapter.getChildNodes(_parent3);
                            var _i3 = undefined;
                            for (_i3 = 0; _i3 < pchilds.length; _i3++) if (pchilds[_i3] === T) break;
                            if (_i3 < pchilds.length) {
                                _i3++;
                                matchAndTake(pchilds[_i3]);
                            }
                        }
                    } else if (op === "+//") {
                        /*  transitive right siblings  */
                        var _parent4 = this.adapter.getParentNode(T);
                        if (_parent4 !== null) {
                            var pchilds = this.adapter.getChildNodes(_parent4);
                            var _i4 = undefined;
                            for (_i4 = 0; _i4 < pchilds.length; _i4++) if (pchilds[_i4] === T) break;
                            if (_i4 < pchilds.length) {
                                _i4++;
                                while (_i4 < pchilds.length) matchAndTake(pchilds[_i4++]);
                            }
                        }
                    } else if (op === "../") {
                        /*  direct parent  */
                        var _parent5 = this.adapter.getParentNode(T);
                        if (_parent5 !== null) matchAndTake(_parent5);
                    } else if (op === "..//") {
                        /*  transitive parents  */
                        var node = T;
                        while (true) {
                            var _parent6 = this.adapter.getParentNode(node);
                            if (_parent6 === null) break;
                            matchAndTake(_parent6);
                            node = _parent6;
                        }
                    }
                } else
                    /*  current node  */
                    matchAndTake(T);

                this.traceEnd(Q, T, nodes);
                return nodes;
            },
            writable: true,
            configurable: true
        },
        execFilter: {
            value: function execFilter(Q, T) {
                this.traceBegin(Q, T);
                var expr = Q.childs()[0];
                var result = this.execExpr(expr, T);
                result = util.truthy(result);
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExpr: {
            value: function execExpr(Q, T) {
                switch (Q.type()) {
                    case "ConditionalBinary":
                        return this.execExprConditionalBinary(Q, T);
                    case "ConditionalTernary":
                        return this.execExprConditionalTernary(Q, T);
                    case "Logical":
                        return this.execExprLogical(Q, T);
                    case "Bitwise":
                        return this.execExprBitwise(Q, T);
                    case "Relational":
                        return this.execExprRelational(Q, T);
                    case "Arithmetical":
                        return this.execExprArithmetical(Q, T);
                    case "Unary":
                        return this.execExprUnary(Q, T);
                    case "FuncCall":
                        return this.execExprFuncCall(Q, T);
                    case "Attribute":
                        return this.execExprAttribute(Q, T);
                    case "Param":
                        return this.execExprParam(Q, T);
                    case "LiteralString":
                        return this.execExprLiteralString(Q, T);
                    case "LiteralRegExp":
                        return this.execExprLiteralRegExp(Q, T);
                    case "LiteralNumber":
                        return this.execExprLiteralNumber(Q, T);
                    case "LiteralValue":
                        return this.execExprLiteralValue(Q, T);
                    case "Path":
                        return this.execExprPath(Q, T);
                }
            },
            writable: true,
            configurable: true
        },
        execExprConditionalBinary: {
            value: function execExprConditionalBinary(Q, T) {
                this.traceBegin(Q, T);
                var result = this.execExpr(Q.childs()[0], T);
                if (!util.truthy(result)) result = this.execExpr(Q.childs()[1], T);
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprConditionalTernary: {
            value: function execExprConditionalTernary(Q, T) {
                this.traceBegin(Q, T);
                var result = this.execExpr(Q.childs()[0], T);
                if (util.truthy(result)) result = this.execExpr(Q.childs()[1], T);else result = this.execExpr(Q.childs()[2], T);
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprLogical: {
            value: function execExprLogical(Q, T) {
                this.traceBegin(Q, T);
                var result = false;
                switch (Q.get("op")) {
                    case "&&":
                        result = util.truthy(this.execExpr(Q.childs()[0], T));
                        if (result) result = result && util.truthy(this.execExpr(Q.childs()[1], T));
                        break;
                    case "||":
                        result = util.truthy(this.execExpr(Q.childs()[0], T));
                        if (!result) result = result || util.truthy(this.execExpr(Q.childs()[1], T));
                        break;
                }
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprBitwise: {
            value: function execExprBitwise(Q, T) {
                this.traceBegin(Q, T);
                var v1 = util.coerce(this.execExpr(Q.childs()[0], T), "number");
                var v2 = util.coerce(this.execExpr(Q.childs()[1], T), "number");
                var result = undefined;
                switch (Q.get("op")) {
                    case "&":
                        result = v1 & v2;break;
                    case "|":
                        result = v1 | v2;break;
                    case "<<":
                        result = v1 << v2;break;
                    case ">>":
                        result = v1 >> v2;break;
                }
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprRelational: {
            value: function execExprRelational(Q, T) {
                this.traceBegin(Q, T);
                var v1 = this.execExpr(Q.childs()[0], T);
                var v2 = this.execExpr(Q.childs()[1], T);
                var result = undefined;
                switch (Q.get("op")) {
                    case "==":
                        result = v1 === v2;break;
                    case "!=":
                        result = v1 !== v2;break;
                    case "<=":
                        result = util.coerce(v1, "number") <= util.coerce(v2, "number");break;
                    case ">=":
                        result = util.coerce(v1, "number") >= util.coerce(v2, "number");break;
                    case "<":
                        result = util.coerce(v1, "number") < util.coerce(v2, "number");break;
                    case ">":
                        result = util.coerce(v1, "number") > util.coerce(v2, "number");break;
                    case "=~":
                        result = util.coerce(v1, "string").match(util.coerce(v2, "regexp")) !== null;break;
                    case "!~":
                        result = util.coerce(v1, "string").match(util.coerce(v2, "regexp")) === null;break;
                }
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprArithmetical: {
            value: function execExprArithmetical(Q, T) {
                this.traceBegin(Q, T);
                var v1 = this.execExpr(Q.childs()[0], T);
                var v2 = this.execExpr(Q.childs()[1], T);
                var result = undefined;
                switch (Q.get("op")) {
                    case "+":
                        if (typeof v1 === "string") result = v1 + util.coerce(v2, "string");else result = util.coerce(v1, "number") + util.coerce(v2, "number");
                        break;
                    case "-":
                        result = util.coerce(v1, "number") + util.coerce(v2, "number");break;
                    case "*":
                        result = util.coerce(v1, "number") * util.coerce(v2, "number");break;
                    case "/":
                        result = util.coerce(v1, "number") / util.coerce(v2, "number");break;
                    case "%":
                        result = util.coerce(v1, "number") % util.coerce(v2, "number");break;
                    case "**":
                        result = Math.pow(util.coerce(v1, "number"), util.coerce(v2, "number"));break;
                }
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprUnary: {
            value: function execExprUnary(Q, T) {
                this.traceBegin(Q, T);
                var v = this.execExpr(Q.childs()[0], T);
                var result = undefined;
                /* jscs: disable */
                switch (Q.get("op")) {
                    case "!":
                        result = !util.coerce(v, "boolean");break;
                    case "~":
                        result = ~util.coerce(v, "number");break;
                }
                /* jscs: enable */
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprFuncCall: {
            value: function execExprFuncCall(Q, T) {
                var _this = this;

                this.traceBegin(Q, T);
                var id = Q.get("id");
                var args = [this.adapter, T];
                Q.childs().forEach(function (Q) {
                    args.push(_this.execExpr(Q, T));
                });
                var result = this.funcs.run(id, args);
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprAttribute: {
            value: function execExprAttribute(Q, T) {
                this.traceBegin(Q, T);
                var id = Q.get("id");
                var result = this.adapter.getNodeAttrValue(T, id);
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprParam: {
            value: function execExprParam(Q, T) {
                this.traceBegin(Q, T);
                var id = Q.get("id");
                if (typeof this.params[id] === "undefined") throw new Error("invalid parameter \"" + id + "\"");
                var result = this.params[id];
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprLiteralString: {
            value: function execExprLiteralString(Q, T) {
                this.traceBegin(Q, T);
                var result = Q.get("value");
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprLiteralRegExp: {
            value: function execExprLiteralRegExp(Q, T) {
                this.traceBegin(Q, T);
                var result = Q.get("value");
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprLiteralNumber: {
            value: function execExprLiteralNumber(Q, T) {
                this.traceBegin(Q, T);
                var result = Q.get("value");
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprLiteralValue: {
            value: function execExprLiteralValue(Q, T) {
                this.traceBegin(Q, T);
                var result = Q.get("value");
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        },
        execExprPath: {
            value: function execExprPath(Q, T) {
                this.traceBegin(Q, T);
                var result = this.execPath(Q, T);
                this.traceEnd(Q, T, result);
                return result;
            },
            writable: true,
            configurable: true
        }
    });

    return ASTQQueryExec;
})(ASTQQueryTrace);

module.exports = ASTQQueryExec;
/* RECURSION */

},{"./astq-query-trace.js":8,"./astq-util.js":10}],8:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

var util = _interopRequire(require("./astq-util.js"));

var ASTQQueryTrace = (function () {
    function ASTQQueryTrace() {
        _classCallCheck(this, ASTQQueryTrace);
    }

    _prototypeProperties(ASTQQueryTrace, null, {
        prefixOf: {
            /*  determine output prefix based on tree depth  */

            value: function prefixOf(Q, T) {
                var depth = 0;
                var node = Q;
                while ((node = node.parent()) !== null) depth++;
                var prefix1 = util.pad("", 4 * depth);
                depth = 0;
                node = T;
                while ((node = this.adapter.getParentNode(node)) !== null) depth++;
                var prefix2 = util.pad("", 4 * depth);
                return { prefix1: prefix1, prefix2: prefix2 };
            },
            writable: true,
            configurable: true
        },
        traceBegin: {

            /*  begin tracing step  */

            value: function traceBegin(Q, T) {
                if (!this.trace) {
                    return;
                }
                var _prefixOf = this.prefixOf(Q, T);

                var prefix1 = _prefixOf.prefix1;
                var prefix2 = _prefixOf.prefix2;

                console.log("ASTQ: execute: | " + util.pad(prefix1 + Q.type() + " (", -60) + " | " + prefix2 + this.adapter.getNodeType(T));
            },
            writable: true,
            configurable: true
        },
        traceEnd: {

            /*  end tracing step  */

            value: function traceEnd(Q, T, val) {
                var _this = this;

                if (!this.trace) {
                    return;
                }
                var _prefixOf = this.prefixOf(Q, T);

                var prefix1 = _prefixOf.prefix1;
                var prefix2 = _prefixOf.prefix2;

                var result = undefined;
                if (val === undefined) result = "undefined";else if (typeof val === "object" && val instanceof Array) {
                    result = "[";
                    val.forEach(function (node) {
                        result += "node(" + _this.adapter.getNodeType(node) + "),";
                    });
                    result = result.replace(/,$/, "") + "]";
                } else result = typeof val + "(" + val + ")";
                if (result.length > 60) result = result.substr(0, 60) + "...";
                console.log("ASTQ: execute: | " + util.pad(prefix1 + "): " + result, -60) + " | " + prefix2 + this.adapter.getNodeType(T));
            },
            writable: true,
            configurable: true
        }
    });

    return ASTQQueryTrace;
})();

module.exports = ASTQQueryTrace;

},{"./astq-util.js":10}],9:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

/*  load external dependencies  */
var ASTY = require("asty");

var PEGUtil = require("pegjs-util");

/*  get query parser (by loading and on-the-fly compiling PEG.js grammar)  */
var ASTQQueryParse = ((function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { query: peg$parsequery },
        peg$startRuleFunction  = peg$parsequery,

        peg$c0 = peg$FAILED,
        peg$c1 = function(qs) {
                    return qs
                },
        peg$c2 = [],
        peg$c3 = ",",
        peg$c4 = { type: "literal", value: ",", description: "\",\"" },
        peg$c5 = function(f, l) {
                    return ast("Query").add(unroll(f, l, 3))
                },
        peg$c6 = function(f, l) {
                    return ast("Path").add(unroll(f, l, 1))
                },
        peg$c7 = null,
        peg$c8 = function(a, m, f) {
                    return ast("Step").add(a, m, f)
                },
        peg$c9 = { type: "other", description: "axis" },
        peg$c10 = "//",
        peg$c11 = { type: "literal", value: "//", description: "\"//\"" },
        peg$c12 = "/",
        peg$c13 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c14 = "+//",
        peg$c15 = { type: "literal", value: "+//", description: "\"+//\"" },
        peg$c16 = "+/",
        peg$c17 = { type: "literal", value: "+/", description: "\"+/\"" },
        peg$c18 = "-//",
        peg$c19 = { type: "literal", value: "-//", description: "\"-//\"" },
        peg$c20 = "-/",
        peg$c21 = { type: "literal", value: "-/", description: "\"-/\"" },
        peg$c22 = "..//",
        peg$c23 = { type: "literal", value: "..//", description: "\"..//\"" },
        peg$c24 = "../",
        peg$c25 = { type: "literal", value: "../", description: "\"../\"" },
        peg$c26 = function(op) {
                    return ast("Axis").set({ op: op })
                },
        peg$c27 = function(id) {
                    return ast("Match").merge(id)
                },
        peg$c28 = "*",
        peg$c29 = { type: "literal", value: "*", description: "\"*\"" },
        peg$c30 = function() {
                    return ast("Match").set({ id: "*" })
                },
        peg$c31 = "[",
        peg$c32 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c33 = "]",
        peg$c34 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c35 = function(e) {
                    return ast("Filter").add(e)
                },
        peg$c36 = "?:",
        peg$c37 = { type: "literal", value: "?:", description: "\"?:\"" },
        peg$c38 = function(e1, e2) {
                    return ast("ConditionalBinary").add(e1, e2)
                },
        peg$c39 = "?",
        peg$c40 = { type: "literal", value: "?", description: "\"?\"" },
        peg$c41 = ":",
        peg$c42 = { type: "literal", value: ":", description: "\":\"" },
        peg$c43 = function(e1, e2, e3) {
                    return ast("ConditionalTernary").add(e1, e2, e3)
                },
        peg$c44 = "||",
        peg$c45 = { type: "literal", value: "||", description: "\"||\"" },
        peg$c46 = function(e1, op, e2) {
                    return ast("Logical").set({ op: op }).add(e1, e2)
                },
        peg$c47 = "&&",
        peg$c48 = { type: "literal", value: "&&", description: "\"&&\"" },
        peg$c49 = "|",
        peg$c50 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c51 = function(e1, op, e2) {
                    return ast("Bitwise").set({ op: op }).add(e1, e2)
                },
        peg$c52 = "^",
        peg$c53 = { type: "literal", value: "^", description: "\"^\"" },
        peg$c54 = "&",
        peg$c55 = { type: "literal", value: "&", description: "\"&\"" },
        peg$c56 = "==",
        peg$c57 = { type: "literal", value: "==", description: "\"==\"" },
        peg$c58 = "!=",
        peg$c59 = { type: "literal", value: "!=", description: "\"!=\"" },
        peg$c60 = "<=",
        peg$c61 = { type: "literal", value: "<=", description: "\"<=\"" },
        peg$c62 = ">=",
        peg$c63 = { type: "literal", value: ">=", description: "\">=\"" },
        peg$c64 = "<",
        peg$c65 = { type: "literal", value: "<", description: "\"<\"" },
        peg$c66 = ">",
        peg$c67 = { type: "literal", value: ">", description: "\">\"" },
        peg$c68 = "=~",
        peg$c69 = { type: "literal", value: "=~", description: "\"=~\"" },
        peg$c70 = "!~",
        peg$c71 = { type: "literal", value: "!~", description: "\"!~\"" },
        peg$c72 = function(e1, op, e2) {
                    return ast("Relational").set({ op: op }).add(e1, e2)
                },
        peg$c73 = "<<",
        peg$c74 = { type: "literal", value: "<<", description: "\"<<\"" },
        peg$c75 = ">>",
        peg$c76 = { type: "literal", value: ">>", description: "\">>\"" },
        peg$c77 = "+",
        peg$c78 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c79 = "-",
        peg$c80 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c81 = function(e1, op, e2) {
                    return ast("Arithmetical").set({ op: op }).add(e1, e2)
                },
        peg$c82 = "**",
        peg$c83 = { type: "literal", value: "**", description: "\"**\"" },
        peg$c84 = "%",
        peg$c85 = { type: "literal", value: "%", description: "\"%\"" },
        peg$c86 = "!",
        peg$c87 = { type: "literal", value: "!", description: "\"!\"" },
        peg$c88 = "~",
        peg$c89 = { type: "literal", value: "~", description: "\"~\"" },
        peg$c90 = function(op, e) {
                    return ast("Unary").set({ op: op }).add(e)
                },
        peg$c91 = "(",
        peg$c92 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c93 = ")",
        peg$c94 = { type: "literal", value: ")", description: "\")\"" },
        peg$c95 = function(id, p) {
                    return ast("FuncCall").merge(id).add(p)
                },
        peg$c96 = function(f, l) { /* RECURSION */
                    return unroll(f, l, 3)
                },
        peg$c97 = { type: "other", description: "node attribute" },
        peg$c98 = "@",
        peg$c99 = { type: "literal", value: "@", description: "\"@\"" },
        peg$c100 = function(id) {
                    return ast("Attribute").merge(id)
                },
        peg$c101 = { type: "other", description: "query parameter reference" },
        peg$c102 = "{",
        peg$c103 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c104 = "}",
        peg$c105 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c106 = function(name) {
                    return ast("Param").merge(name)
                },
        peg$c107 = function(e) {  /* RECURSION */
                     return e
                },
        peg$c108 = { type: "other", description: "identifier" },
        peg$c109 = void 0,
        peg$c110 = /^[a-zA-Z_]/,
        peg$c111 = { type: "class", value: "[a-zA-Z_]", description: "[a-zA-Z_]" },
        peg$c112 = /^[a-zA-Z0-9_\-]/,
        peg$c113 = { type: "class", value: "[a-zA-Z0-9_\\-]", description: "[a-zA-Z0-9_\\-]" },
        peg$c114 = function(id) {
                    return ast("Identifier").set({ id: id })
                },
        peg$c115 = { type: "other", description: "quoted string literal" },
        peg$c116 = "\"",
        peg$c117 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c118 = /^[^"]/,
        peg$c119 = { type: "class", value: "[^\"]", description: "[^\"]" },
        peg$c120 = function(s) {
                    return ast("LiteralString").set({ value: s.join("") })
                },
        peg$c121 = "'",
        peg$c122 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c123 = "\\'",
        peg$c124 = { type: "literal", value: "\\'", description: "\"\\\\'\"" },
        peg$c125 = /^[^']/,
        peg$c126 = { type: "class", value: "[^']", description: "[^']" },
        peg$c127 = function(t) {
                    return ast("LiteralString").set({ value: t.replace(/\\'/g, "'") })
                },
        peg$c128 = { type: "other", description: "escaped string character" },
        peg$c129 = "\\\\",
        peg$c130 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c131 = function() { return "\\"   },
        peg$c132 = "\\\"",
        peg$c133 = { type: "literal", value: "\\\"", description: "\"\\\\\\\"\"" },
        peg$c134 = function() { return "\""   },
        peg$c135 = function() { return "'"    },
        peg$c136 = "\\b",
        peg$c137 = { type: "literal", value: "\\b", description: "\"\\\\b\"" },
        peg$c138 = function() { return "\b"   },
        peg$c139 = "\\v",
        peg$c140 = { type: "literal", value: "\\v", description: "\"\\\\v\"" },
        peg$c141 = function() { return "\x0B" },
        peg$c142 = "\\f",
        peg$c143 = { type: "literal", value: "\\f", description: "\"\\\\f\"" },
        peg$c144 = function() { return "\f"   },
        peg$c145 = "\\t",
        peg$c146 = { type: "literal", value: "\\t", description: "\"\\\\t\"" },
        peg$c147 = function() { return "\t"   },
        peg$c148 = "\\r",
        peg$c149 = { type: "literal", value: "\\r", description: "\"\\\\r\"" },
        peg$c150 = function() { return "\r"   },
        peg$c151 = "\\n",
        peg$c152 = { type: "literal", value: "\\n", description: "\"\\\\n\"" },
        peg$c153 = function() { return "\n"   },
        peg$c154 = "\\e",
        peg$c155 = { type: "literal", value: "\\e", description: "\"\\\\e\"" },
        peg$c156 = function() { return "\x1B" },
        peg$c157 = "\\x",
        peg$c158 = { type: "literal", value: "\\x", description: "\"\\\\x\"" },
        peg$c159 = /^[0-9a-fA-F]/,
        peg$c160 = { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
        peg$c161 = function(n) {
                    return String.fromCharCode(parseInt(n, 16))
                },
        peg$c162 = "\\u",
        peg$c163 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c164 = { type: "other", description: "regular expression literal" },
        peg$c165 = "\\/",
        peg$c166 = { type: "literal", value: "\\/", description: "\"\\\\/\"" },
        peg$c167 = /^[^\/]/,
        peg$c168 = { type: "class", value: "[^\\/]", description: "[^\\/]" },
        peg$c169 = function(re) {
                    var v
                    try { v = new RegExp(re.replace(/\\\//g, "/")) }
                    catch (e) { error(e.message) }
                    return ast("LiteralRegExp").set({ value: v })
                },
        peg$c170 = { type: "other", description: "numeric literal" },
        peg$c171 = /^[+\-]/,
        peg$c172 = { type: "class", value: "[+\\-]", description: "[+\\-]" },
        peg$c173 = "0b",
        peg$c174 = { type: "literal", value: "0b", description: "\"0b\"" },
        peg$c175 = /^[01]/,
        peg$c176 = { type: "class", value: "[01]", description: "[01]" },
        peg$c177 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 2) })
                },
        peg$c178 = "0o",
        peg$c179 = { type: "literal", value: "0o", description: "\"0o\"" },
        peg$c180 = /^[0-7]/,
        peg$c181 = { type: "class", value: "[0-7]", description: "[0-7]" },
        peg$c182 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 8) })
                },
        peg$c183 = "0x",
        peg$c184 = { type: "literal", value: "0x", description: "\"0x\"" },
        peg$c185 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 16) })
                },
        peg$c186 = /^[0-9]/,
        peg$c187 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c188 = ".",
        peg$c189 = { type: "literal", value: ".", description: "\".\"" },
        peg$c190 = /^[eE]/,
        peg$c191 = { type: "class", value: "[eE]", description: "[eE]" },
        peg$c192 = function(n) {
                    return ast("LiteralNumber").set({ value: parseFloat(n) })
                },
        peg$c193 = function(n) {
                    return ast("LiteralNumber").set({ value: parseInt(n, 10) })
                },
        peg$c194 = { type: "other", description: "global value" },
        peg$c195 = "true",
        peg$c196 = { type: "literal", value: "true", description: "\"true\"" },
        peg$c197 = function() { return ast("LiteralValue").set({ value: true      }) },
        peg$c198 = "false",
        peg$c199 = { type: "literal", value: "false", description: "\"false\"" },
        peg$c200 = function() { return ast("LiteralValue").set({ value: false     }) },
        peg$c201 = "null",
        peg$c202 = { type: "literal", value: "null", description: "\"null\"" },
        peg$c203 = function() { return ast("LiteralValue").set({ value: null      }) },
        peg$c204 = "NaN",
        peg$c205 = { type: "literal", value: "NaN", description: "\"NaN\"" },
        peg$c206 = function() { return ast("LiteralValue").set({ value: NaN       }) },
        peg$c207 = "undefined",
        peg$c208 = { type: "literal", value: "undefined", description: "\"undefined\"" },
        peg$c209 = function() { return ast("LiteralValue").set({ value: undefined }) },
        peg$c210 = { type: "other", description: "optional blank" },
        peg$c211 = { type: "other", description: "multi-line comment" },
        peg$c212 = "/*",
        peg$c213 = { type: "literal", value: "/*", description: "\"/*\"" },
        peg$c214 = "*/",
        peg$c215 = { type: "literal", value: "*/", description: "\"*/\"" },
        peg$c216 = { type: "any", description: "any character" },
        peg$c217 = { type: "other", description: "any whitespaces" },
        peg$c218 = /^[ \t\r\n]/,
        peg$c219 = { type: "class", value: "[ \\t\\r\\n]", description: "[ \\t\\r\\n]" },
        peg$c220 = { type: "other", description: "end of file" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$cache = {},
        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsequery() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 36 + 0,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsequerySet();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseeof();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c1(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequerySet() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 36 + 1,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsequeryPath();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c3;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parsequeryPath();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c3;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parsequeryPath();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c5(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryPath() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 2,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsequeryStep();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          s5 = peg$parsequeryStepSubsequent();
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsequeryStepSubsequent();
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c6(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryStep() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 3,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsequeryAxis();
      if (s1 === peg$FAILED) {
        s1 = peg$c7;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsequeryMatch();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsequeryFilter();
              if (s5 === peg$FAILED) {
                s5 = peg$c7;
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c8(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryStepSubsequent() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 4,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsequeryAxis();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsequeryMatch();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsequeryFilter();
              if (s5 === peg$FAILED) {
                s5 = peg$c7;
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c8(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryAxis() {
      var s0, s1, s2;

      var key    = peg$currPos * 36 + 5,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c10) {
        s2 = peg$c10;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 47) {
          s2 = peg$c12;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c13); }
        }
        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c14) {
            s2 = peg$c14;
            peg$currPos += 3;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c15); }
          }
          if (s2 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c16) {
              s2 = peg$c16;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c17); }
            }
            if (s2 === peg$FAILED) {
              if (input.substr(peg$currPos, 3) === peg$c18) {
                s2 = peg$c18;
                peg$currPos += 3;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c19); }
              }
              if (s2 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c20) {
                  s2 = peg$c20;
                  peg$currPos += 2;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c21); }
                }
                if (s2 === peg$FAILED) {
                  if (input.substr(peg$currPos, 4) === peg$c22) {
                    s2 = peg$c22;
                    peg$currPos += 4;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c23); }
                  }
                  if (s2 === peg$FAILED) {
                    if (input.substr(peg$currPos, 3) === peg$c24) {
                      s2 = peg$c24;
                      peg$currPos += 3;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c25); }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (s2 !== peg$FAILED) {
        s2 = input.substring(s1, peg$currPos);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c26(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c9); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryMatch() {
      var s0, s1;

      var key    = peg$currPos * 36 + 6,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseid();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c27(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 42) {
          s1 = peg$c28;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c29); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c30();
        }
        s0 = s1;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryFilter() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 7,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c31;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexprConditional();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c33;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c34); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c35(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprConditional() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      var key    = peg$currPos * 36 + 8,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprLogicalOr();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c36) {
            s3 = peg$c36;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c37); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprLogicalOr();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c38(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseexprLogicalOr();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 63) {
              s3 = peg$c39;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c40); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseexprLogicalOr();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 58) {
                      s7 = peg$c41;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c42); }
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parseexprLogicalOr();
                        if (s9 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c43(s1, s5, s9);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$c0;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$c0;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$c0;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$parseexprLogicalOr();
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprLogicalOr() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 9,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprLogicalAnd();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c44) {
            s4 = peg$c44;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c45); }
          }
          if (s4 !== peg$FAILED) {
            s4 = input.substring(s3, peg$currPos);
          }
          s3 = s4;
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprLogicalOr();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c46(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprLogicalAnd();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprLogicalAnd() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 10,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprBitwiseOr();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c47) {
            s4 = peg$c47;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c48); }
          }
          if (s4 !== peg$FAILED) {
            s4 = input.substring(s3, peg$currPos);
          }
          s3 = s4;
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprLogicalAnd();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c46(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprBitwiseOr();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprBitwiseOr() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 11,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprBitwiseXOr();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 124) {
            s4 = peg$c49;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c50); }
          }
          if (s4 !== peg$FAILED) {
            s4 = input.substring(s3, peg$currPos);
          }
          s3 = s4;
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprBitwiseOr();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c51(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprBitwiseXOr();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprBitwiseXOr() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 12,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprBitwiseAnd();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 94) {
            s4 = peg$c52;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c53); }
          }
          if (s4 !== peg$FAILED) {
            s4 = input.substring(s3, peg$currPos);
          }
          s3 = s4;
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprBitwiseXOr();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c51(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprBitwiseAnd();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprBitwiseAnd() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 13,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprRelational();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 38) {
            s4 = peg$c54;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c55); }
          }
          if (s4 !== peg$FAILED) {
            s4 = input.substring(s3, peg$currPos);
          }
          s3 = s4;
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprBitwiseAnd();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c51(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprRelational();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprRelational() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 14,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprBitwiseShift();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c56) {
            s4 = peg$c56;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c57); }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c58) {
              s4 = peg$c58;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c59); }
            }
            if (s4 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c60) {
                s4 = peg$c60;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c61); }
              }
              if (s4 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c62) {
                  s4 = peg$c62;
                  peg$currPos += 2;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c63); }
                }
                if (s4 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 60) {
                    s4 = peg$c64;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c65); }
                  }
                  if (s4 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 62) {
                      s4 = peg$c66;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c67); }
                    }
                    if (s4 === peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c68) {
                        s4 = peg$c68;
                        peg$currPos += 2;
                      } else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c69); }
                      }
                      if (s4 === peg$FAILED) {
                        if (input.substr(peg$currPos, 2) === peg$c70) {
                          s4 = peg$c70;
                          peg$currPos += 2;
                        } else {
                          s4 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c71); }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          if (s4 !== peg$FAILED) {
            s4 = input.substring(s3, peg$currPos);
          }
          s3 = s4;
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprRelational();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c72(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprBitwiseShift();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprBitwiseShift() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 15,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprAdditive();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c73) {
            s4 = peg$c73;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c74); }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c75) {
              s4 = peg$c75;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c76); }
            }
          }
          if (s4 !== peg$FAILED) {
            s4 = input.substring(s3, peg$currPos);
          }
          s3 = s4;
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprBitwiseShift();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c51(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprAdditive();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprAdditive() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 16,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprMultiplicative();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 43) {
            s4 = peg$c77;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c78); }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
              s4 = peg$c79;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c80); }
            }
          }
          if (s4 !== peg$FAILED) {
            s4 = input.substring(s3, peg$currPos);
          }
          s3 = s4;
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprAdditive();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c81(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprMultiplicative();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprMultiplicative() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 17,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprUnary();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c82) {
            s4 = peg$c82;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c83); }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 42) {
              s4 = peg$c28;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c29); }
            }
            if (s4 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 47) {
                s4 = peg$c12;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c13); }
              }
              if (s4 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 37) {
                  s4 = peg$c84;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c85); }
                }
              }
            }
          }
          if (s4 !== peg$FAILED) {
            s4 = input.substring(s3, peg$currPos);
          }
          s3 = s4;
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprMultiplicative();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c81(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprUnary();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprUnary() {
      var s0, s1, s2;

      var key    = peg$currPos * 36 + 18,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 33) {
        s2 = peg$c86;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c87); }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 126) {
          s2 = peg$c88;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c89); }
        }
      }
      if (s2 !== peg$FAILED) {
        s2 = input.substring(s1, peg$currPos);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        s2 = peg$parseexprOther();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c90(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprOther();
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprOther() {
      var s0;

      var key    = peg$currPos * 36 + 19,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parseexprFunctionCall();
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprAttribute();
        if (s0 === peg$FAILED) {
          s0 = peg$parseexprParam();
          if (s0 === peg$FAILED) {
            s0 = peg$parseexprLiteral();
            if (s0 === peg$FAILED) {
              s0 = peg$parseexprParenthesis();
              if (s0 === peg$FAILED) {
                s0 = peg$parsequeryPath();
              }
            }
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprFunctionCall() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 36 + 20,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseid();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 40) {
            s3 = peg$c91;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c92); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprFunctionCallParams();
              if (s5 === peg$FAILED) {
                s5 = peg$c7;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s7 = peg$c93;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c94); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c95(s1, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$c0;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprFunctionCallParams() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 36 + 21,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprConditional();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parse_();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s5 = peg$c3;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c4); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseexprConditional();
              if (s7 !== peg$FAILED) {
                s4 = [s4, s5, s6, s7];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c3;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                s7 = peg$parseexprConditional();
                if (s7 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c96(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprAttribute() {
      var s0, s1, s2;

      var key    = peg$currPos * 36 + 22,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 64) {
        s1 = peg$c98;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c99); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseid();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c100(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c97); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprParam() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 23,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c102;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c103); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseid();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s5 = peg$c104;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c105); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c106(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c101); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprLiteral() {
      var s0;

      var key    = peg$currPos * 36 + 24,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$parsestring();
      if (s0 === peg$FAILED) {
        s0 = peg$parseregexp();
        if (s0 === peg$FAILED) {
          s0 = peg$parsenumber();
          if (s0 === peg$FAILED) {
            s0 = peg$parsevalue();
          }
        }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprParenthesis() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 25,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c91;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c92); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexprConditional();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c93;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c94); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c107(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseid() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 36 + 26,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      s2 = peg$currPos;
      s3 = peg$currPos;
      peg$silentFails++;
      s4 = peg$parsevalue();
      peg$silentFails--;
      if (s4 === peg$FAILED) {
        s3 = peg$c109;
      } else {
        peg$currPos = s3;
        s3 = peg$c0;
      }
      if (s3 !== peg$FAILED) {
        if (peg$c110.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c111); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c112.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c113); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c112.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c113); }
            }
          }
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c0;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c0;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$c0;
      }
      if (s2 !== peg$FAILED) {
        s2 = input.substring(s1, peg$currPos);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c114(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c108); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestring() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 36 + 27,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 34) {
        s1 = peg$c116;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c117); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsestringEscapedChar();
        if (s3 === peg$FAILED) {
          if (peg$c118.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c119); }
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsestringEscapedChar();
          if (s3 === peg$FAILED) {
            if (peg$c118.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c119); }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s3 = peg$c116;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c117); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c120(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 39) {
          s1 = peg$c121;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c122); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = [];
          if (input.substr(peg$currPos, 2) === peg$c123) {
            s4 = peg$c123;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c124); }
          }
          if (s4 === peg$FAILED) {
            if (peg$c125.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c126); }
            }
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (input.substr(peg$currPos, 2) === peg$c123) {
              s4 = peg$c123;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c124); }
            }
            if (s4 === peg$FAILED) {
              if (peg$c125.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c126); }
              }
            }
          }
          if (s3 !== peg$FAILED) {
            s3 = input.substring(s2, peg$currPos);
          }
          s2 = s3;
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s3 = peg$c121;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c122); }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c127(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c115); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestringEscapedChar() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 36 + 28,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c129) {
        s1 = peg$c129;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c130); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c131();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c132) {
          s1 = peg$c132;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c133); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c134();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 39) {
            s1 = peg$c121;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c122); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c135();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c136) {
              s1 = peg$c136;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c137); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c138();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c139) {
                s1 = peg$c139;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c140); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c141();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c142) {
                  s1 = peg$c142;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c143); }
                }
                if (s1 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c144();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c145) {
                    s1 = peg$c145;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c146); }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c147();
                  }
                  s0 = s1;
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 2) === peg$c148) {
                      s1 = peg$c148;
                      peg$currPos += 2;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c149); }
                    }
                    if (s1 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c150();
                    }
                    s0 = s1;
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      if (input.substr(peg$currPos, 2) === peg$c151) {
                        s1 = peg$c151;
                        peg$currPos += 2;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c152); }
                      }
                      if (s1 !== peg$FAILED) {
                        peg$reportedPos = s0;
                        s1 = peg$c153();
                      }
                      s0 = s1;
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (input.substr(peg$currPos, 2) === peg$c154) {
                          s1 = peg$c154;
                          peg$currPos += 2;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c155); }
                        }
                        if (s1 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c156();
                        }
                        s0 = s1;
                        if (s0 === peg$FAILED) {
                          s0 = peg$currPos;
                          if (input.substr(peg$currPos, 2) === peg$c157) {
                            s1 = peg$c157;
                            peg$currPos += 2;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c158); }
                          }
                          if (s1 !== peg$FAILED) {
                            s2 = peg$currPos;
                            s3 = peg$currPos;
                            if (peg$c159.test(input.charAt(peg$currPos))) {
                              s4 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s4 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c160); }
                            }
                            if (s4 !== peg$FAILED) {
                              if (peg$c159.test(input.charAt(peg$currPos))) {
                                s5 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c160); }
                              }
                              if (s5 !== peg$FAILED) {
                                s4 = [s4, s5];
                                s3 = s4;
                              } else {
                                peg$currPos = s3;
                                s3 = peg$c0;
                              }
                            } else {
                              peg$currPos = s3;
                              s3 = peg$c0;
                            }
                            if (s3 !== peg$FAILED) {
                              s3 = input.substring(s2, peg$currPos);
                            }
                            s2 = s3;
                            if (s2 !== peg$FAILED) {
                              peg$reportedPos = s0;
                              s1 = peg$c161(s2);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$c0;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$c0;
                          }
                          if (s0 === peg$FAILED) {
                            s0 = peg$currPos;
                            if (input.substr(peg$currPos, 2) === peg$c162) {
                              s1 = peg$c162;
                              peg$currPos += 2;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c163); }
                            }
                            if (s1 !== peg$FAILED) {
                              s2 = peg$currPos;
                              s3 = peg$currPos;
                              if (peg$c159.test(input.charAt(peg$currPos))) {
                                s4 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s4 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c160); }
                              }
                              if (s4 !== peg$FAILED) {
                                if (peg$c159.test(input.charAt(peg$currPos))) {
                                  s5 = input.charAt(peg$currPos);
                                  peg$currPos++;
                                } else {
                                  s5 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c160); }
                                }
                                if (s5 !== peg$FAILED) {
                                  if (peg$c159.test(input.charAt(peg$currPos))) {
                                    s6 = input.charAt(peg$currPos);
                                    peg$currPos++;
                                  } else {
                                    s6 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c160); }
                                  }
                                  if (s6 !== peg$FAILED) {
                                    if (peg$c159.test(input.charAt(peg$currPos))) {
                                      s7 = input.charAt(peg$currPos);
                                      peg$currPos++;
                                    } else {
                                      s7 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c160); }
                                    }
                                    if (s7 !== peg$FAILED) {
                                      s4 = [s4, s5, s6, s7];
                                      s3 = s4;
                                    } else {
                                      peg$currPos = s3;
                                      s3 = peg$c0;
                                    }
                                  } else {
                                    peg$currPos = s3;
                                    s3 = peg$c0;
                                  }
                                } else {
                                  peg$currPos = s3;
                                  s3 = peg$c0;
                                }
                              } else {
                                peg$currPos = s3;
                                s3 = peg$c0;
                              }
                              if (s3 !== peg$FAILED) {
                                s3 = input.substring(s2, peg$currPos);
                              }
                              s2 = s3;
                              if (s2 !== peg$FAILED) {
                                peg$reportedPos = s0;
                                s1 = peg$c161(s2);
                                s0 = s1;
                              } else {
                                peg$currPos = s0;
                                s0 = peg$c0;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$c0;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c128); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseregexp() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 36 + 29,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 47) {
        s1 = peg$c12;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        if (input.substr(peg$currPos, 2) === peg$c165) {
          s4 = peg$c165;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c166); }
        }
        if (s4 === peg$FAILED) {
          if (peg$c167.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c168); }
          }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (input.substr(peg$currPos, 2) === peg$c165) {
            s4 = peg$c165;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c166); }
          }
          if (s4 === peg$FAILED) {
            if (peg$c167.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c168); }
            }
          }
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 47) {
            s3 = peg$c12;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c13); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c169(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c164); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

      var key    = peg$currPos * 36 + 30,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c171.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c172); }
      }
      if (s2 === peg$FAILED) {
        s2 = peg$c7;
      }
      if (s2 !== peg$FAILED) {
        s2 = input.substring(s1, peg$currPos);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c173) {
          s2 = peg$c173;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c174); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];
          if (peg$c175.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c176); }
          }
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c175.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c176); }
              }
            }
          } else {
            s4 = peg$c0;
          }
          if (s4 !== peg$FAILED) {
            s4 = input.substring(s3, peg$currPos);
          }
          s3 = s4;
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c177(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (peg$c171.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c172); }
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c7;
        }
        if (s2 !== peg$FAILED) {
          s2 = input.substring(s1, peg$currPos);
        }
        s1 = s2;
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c178) {
            s2 = peg$c178;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c179); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = [];
            if (peg$c180.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c181); }
            }
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c180.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c181); }
                }
              }
            } else {
              s4 = peg$c0;
            }
            if (s4 !== peg$FAILED) {
              s4 = input.substring(s3, peg$currPos);
            }
            s3 = s4;
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c182(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$currPos;
          if (peg$c171.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c172); }
          }
          if (s2 === peg$FAILED) {
            s2 = peg$c7;
          }
          if (s2 !== peg$FAILED) {
            s2 = input.substring(s1, peg$currPos);
          }
          s1 = s2;
          if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c183) {
              s2 = peg$c183;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c184); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$currPos;
              s4 = [];
              if (peg$c159.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c160); }
              }
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  if (peg$c159.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c160); }
                  }
                }
              } else {
                s4 = peg$c0;
              }
              if (s4 !== peg$FAILED) {
                s4 = input.substring(s3, peg$currPos);
              }
              s3 = s4;
              if (s3 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c185(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$currPos;
            s2 = peg$currPos;
            if (peg$c171.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c172); }
            }
            if (s3 === peg$FAILED) {
              s3 = peg$c7;
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              if (peg$c186.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c187); }
              }
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c186.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c187); }
                }
              }
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s5 = peg$c188;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c189); }
                }
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  if (peg$c186.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c187); }
                  }
                  if (s7 !== peg$FAILED) {
                    while (s7 !== peg$FAILED) {
                      s6.push(s7);
                      if (peg$c186.test(input.charAt(peg$currPos))) {
                        s7 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c187); }
                      }
                    }
                  } else {
                    s6 = peg$c0;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    if (peg$c190.test(input.charAt(peg$currPos))) {
                      s8 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c191); }
                    }
                    if (s8 !== peg$FAILED) {
                      if (peg$c171.test(input.charAt(peg$currPos))) {
                        s9 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c172); }
                      }
                      if (s9 === peg$FAILED) {
                        s9 = peg$c7;
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        if (peg$c186.test(input.charAt(peg$currPos))) {
                          s11 = input.charAt(peg$currPos);
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c187); }
                        }
                        if (s11 !== peg$FAILED) {
                          while (s11 !== peg$FAILED) {
                            s10.push(s11);
                            if (peg$c186.test(input.charAt(peg$currPos))) {
                              s11 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s11 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c187); }
                            }
                          }
                        } else {
                          s10 = peg$c0;
                        }
                        if (s10 !== peg$FAILED) {
                          s8 = [s8, s9, s10];
                          s7 = s8;
                        } else {
                          peg$currPos = s7;
                          s7 = peg$c0;
                        }
                      } else {
                        peg$currPos = s7;
                        s7 = peg$c0;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$c0;
                    }
                    if (s7 === peg$FAILED) {
                      s7 = peg$c7;
                    }
                    if (s7 !== peg$FAILED) {
                      s3 = [s3, s4, s5, s6, s7];
                      s2 = s3;
                    } else {
                      peg$currPos = s2;
                      s2 = peg$c0;
                    }
                  } else {
                    peg$currPos = s2;
                    s2 = peg$c0;
                  }
                } else {
                  peg$currPos = s2;
                  s2 = peg$c0;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$c0;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$c0;
            }
            if (s2 !== peg$FAILED) {
              s2 = input.substring(s1, peg$currPos);
            }
            s1 = s2;
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c192(s1);
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$currPos;
              s2 = peg$currPos;
              if (peg$c171.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c172); }
              }
              if (s3 === peg$FAILED) {
                s3 = peg$c7;
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                if (peg$c186.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c187); }
                }
                if (s5 !== peg$FAILED) {
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    if (peg$c186.test(input.charAt(peg$currPos))) {
                      s5 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c187); }
                    }
                  }
                } else {
                  s4 = peg$c0;
                }
                if (s4 !== peg$FAILED) {
                  s3 = [s3, s4];
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$c0;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$c0;
              }
              if (s2 !== peg$FAILED) {
                s2 = input.substring(s1, peg$currPos);
              }
              s1 = s2;
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c193(s1);
              }
              s0 = s1;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c170); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsevalue() {
      var s0, s1;

      var key    = peg$currPos * 36 + 31,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c195) {
        s1 = peg$c195;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c196); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c197();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c198) {
          s1 = peg$c198;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c199); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c200();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 4) === peg$c201) {
            s1 = peg$c201;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c202); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c203();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 3) === peg$c204) {
              s1 = peg$c204;
              peg$currPos += 3;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c205); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c206();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 9) === peg$c207) {
                s1 = peg$c207;
                peg$currPos += 9;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c208); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c209();
              }
              s0 = s1;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c194); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parse_() {
      var s0, s1;

      var key    = peg$currPos * 36 + 32,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = [];
      s1 = peg$parseco();
      if (s1 === peg$FAILED) {
        s1 = peg$parsews();
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parseco();
        if (s1 === peg$FAILED) {
          s1 = peg$parsews();
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c210); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseco() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 36 + 33,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c212) {
        s1 = peg$c212;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c213); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c214) {
          s5 = peg$c214;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c215); }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = peg$c109;
        } else {
          peg$currPos = s4;
          s4 = peg$c0;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c216); }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$currPos;
          peg$silentFails++;
          if (input.substr(peg$currPos, 2) === peg$c214) {
            s5 = peg$c214;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c215); }
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = peg$c109;
          } else {
            peg$currPos = s4;
            s4 = peg$c0;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c216); }
            }
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c214) {
            s3 = peg$c214;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c215); }
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c211); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      var key    = peg$currPos * 36 + 34,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = [];
      if (peg$c218.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c219); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c218.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c219); }
          }
        }
      } else {
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c217); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseeof() {
      var s0, s1;

      var key    = peg$currPos * 36 + 35,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      peg$silentFails++;
      if (input.length > peg$currPos) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c216); }
      }
      peg$silentFails--;
      if (s1 === peg$FAILED) {
        s0 = peg$c109;
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c220); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }


        /*  standard PEGUtil integration code  */
        var unroll = options.util.makeUnroll(line, column, offset, SyntaxError)
        var ast    = options.util.makeAST   (line, column, offset, options)


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})());

/*  get query executor  */

var ASTQQueryExec = _interopRequire(require("./astq-query-exec.js"));

var ASTQQuery = (function () {
    /*  create a new instance of the query instance  */

    function ASTQQuery(selector) {
        _classCallCheck(this, ASTQQuery);

        this.asty = new ASTY();
        this.ast = null;
        if (selector) this.compile(selector);
    }

    _prototypeProperties(ASTQQuery, null, {
        compile: {

            /*  compile query selector into AST  */

            value: function compile(selector, trace) {
                var _this = this;

                if (trace) console.log("ASTQ: compile: +---------------------------------------" + "----------------------------------------------------------------\n" + "ASTQ: compile: | " + selector);
                var result = PEGUtil.parse(ASTQQueryParse, selector, {
                    startRule: "query",
                    makeAST: function (line, column, offset, args) {
                        return _this.asty.create.apply(_this.asty, args).pos(line, column, offset);
                    }
                });
                if (result.error !== null) throw new Error("ASTQ: compile: query parsing failed:\n" + PEGUtil.errorMessage(result.error, true).replace(/^/mg, "ERROR: "));
                this.ast = result.ast;
                if (trace) console.log("ASTQ: compile: +---------------------------------------" + "----------------------------------------------------------------\n" + this.dump().replace(/\n$/, "").replace(/^/mg, "ASTQ: compile: | "));
                return this;
            },
            writable: true,
            configurable: true
        },
        dump: {

            /*  dump the query AST  */

            value: function dump() {
                return this.ast.dump();
            },
            writable: true,
            configurable: true
        },
        execute: {

            /*  execute the query AST onto node  */

            value: function execute(node, adapter, params, funcs, trace) {
                if (trace) console.log("ASTQ: execute: +---------------------------------------" + "-----------------------+----------------------------------------");
                var qe = new ASTQQueryExec(adapter, params, funcs, trace);
                return qe.execQuery(this.ast, node);
            },
            writable: true,
            configurable: true
        }
    });

    return ASTQQuery;
})();

module.exports = ASTQQuery;

},{"./astq-query-exec.js":7,"asty":"asty","pegjs-util":"pegjs-util"}],10:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

var ASTQUtil = (function () {
    function ASTQUtil() {
        _classCallCheck(this, ASTQUtil);
    }

    _prototypeProperties(ASTQUtil, {
        pad: {
            /*  pad a string with spaces to the left/right  */

            value: function pad(str, num) {
                var n = num < 0 ? -num : num;
                if (str.length > n) str = str.substr(0, n);else {
                    var pad = Array(n + 1 - str.length).join(" ");
                    str = num < 0 ? str + pad : pad + str;
                }
                return str;
            },
            writable: true,
            configurable: true
        },
        truthy: {

            /*  check whether value is "true" (or can be considered to be true)  */

            value: function truthy(value) {
                var result = undefined;
                switch (typeof value) {
                    case "boolean":
                        result = value;
                        break;
                    case "number":
                        result = value !== 0 && !isNaN(value);
                        break;
                    case "string":
                        result = value !== "";
                        break;
                    case "object":
                        result = false;
                        if (value !== null) {
                            result = true;
                            if (value instanceof Array) result = value.length > 0;
                        }
                        break;
                    default:
                        result = false;
                }
                return result;
            },
            writable: true,
            configurable: true
        },
        coerce: {

            /*  coerce value to particular type  */

            value: function coerce(value, type) {
                if (typeof value !== type) {
                    try {
                        switch (type) {
                            case "boolean":
                                value = Boolean(value);
                                break;
                            case "number":
                                value = Number(value);
                                break;
                            case "string":
                                value = String(value);
                                break;
                            case "regexp":
                                value = new RegExp(value);
                                break;
                        }
                    } catch (e) {
                        throw new Error("cannot coerce value into type " + type);
                    }
                }
                return value;
            },
            writable: true,
            configurable: true
        }
    });

    return ASTQUtil;
})();

module.exports = ASTQUtil;

},{}],11:[function(require,module,exports){
"use strict";

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

/* global 1: false */
/* global 2: false */
/* global 7: false */
/* global 20150221:  false */

var version = {
    major: 1,
    minor: 2,
    micro: 7,
    date: 20150221
};

module.exports = version;

},{}],12:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

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

/*  load external depdendencies  */
var CacheLRU = require("cache-lru");

/*  load internal dependencies  */

var ASTQAdapter = _interopRequire(require("./astq-adapter.js"));

var ASTQAdapterASTY = _interopRequire(require("./astq-adapter-asty.js"));

var ASTQAdapterMOZAST = _interopRequire(require("./astq-adapter-mozast.js"));

var ASTQAdapterXMLDOM = _interopRequire(require("./astq-adapter-xmldom.js"));

var ASTQFuncs = _interopRequire(require("./astq-funcs.js"));

var ASTQFuncsSTD = _interopRequire(require("./astq-funcs-std.js"));

var ASTQQuery = _interopRequire(require("./astq-query.js"));

var ASTQVersion = _interopRequire(require("./astq-version.js"));

/*  define the API class  */

var ASTQ = (function () {
    /*  create a new ASTq instance  */

    function ASTQ() {
        _classCallCheck(this, ASTQ);

        /*  create adapter registry and pre-register standard adapters  */
        this._adapter = new ASTQAdapter();
        this._adapter.register(ASTQAdapterMOZAST);
        this._adapter.register(ASTQAdapterXMLDOM);
        this._adapter.register(ASTQAdapterASTY);

        /*  create function registry and pre-register standard functions  */
        this._funcs = new ASTQFuncs();
        for (var _name in ASTQFuncsSTD) {
            this.func(_name, ASTQFuncsSTD[_name]);
        } /*  create LRU cache  */
        this._cache = new CacheLRU();
    }

    _prototypeProperties(ASTQ, null, {
        version: {

            /*  return the version information  */

            value: function version() {
                return ASTQVersion;
            },
            writable: true,
            configurable: true
        },
        adapter: {

            /*  switch to a custom adapter  */

            value: function adapter(adapter) {
                if (arguments.length !== 1) throw new Error("ASTQ#adapter: invalid number of arguments");
                this._adapter.unregister();
                this._adapter.register(adapter);
                return this;
            },
            writable: true,
            configurable: true
        },
        func: {

            /*  register an additional function  */

            value: function func(name, func) {
                if (arguments.length !== 2) throw new Error("ASTQ#func: invalid number of arguments");
                this._funcs.register(name, func);
                return this;
            },
            writable: true,
            configurable: true
        },
        cache: {

            /*  configure the LRU cache limit  */

            value: function cache(entries) {
                if (arguments.length !== 1) throw new Error("ASTQ#cache: invalid number of arguments");
                this._cache.limit(entries);
                return this;
            },
            writable: true,
            configurable: true
        },
        compile: {

            /*  individual step 1: compile selector DSL into a query AST  */

            value: function compile(selector, trace) {
                if (arguments.length < 1) throw new Error("ASTQ#compile: too less arguments");
                if (arguments.length > 2) throw new Error("ASTQ#compile: too many arguments");
                if (trace === undefined) trace = false;
                var query = this._cache.get(selector);
                if (query === undefined) {
                    query = new ASTQQuery();
                    query.compile(selector, trace);
                    this._cache.set(selector, query);
                }
                return query;
            },
            writable: true,
            configurable: true
        },
        execute: {

            /*  individual step 2: execute query AST onto node  */

            value: function execute(node, query, params, trace) {
                if (arguments.length < 2) throw new Error("ASTQ#execute: too less arguments");
                if (arguments.length > 4) throw new Error("ASTQ#execute: too many arguments");
                if (params === undefined) params = {};
                if (trace === undefined) trace = false;
                var adapter = this._adapter.select(node);
                if (adapter === undefined) throw new Error("ASTQ#execute: no suitable adapter found for node");
                return query.execute(node, adapter, params, this._funcs, trace);
            },
            writable: true,
            configurable: true
        },
        query: {

            /*  all-in-one step: execute selector DSL onto node  */

            value: function query(node, selector, params, trace) {
                if (arguments.length < 2) throw new Error("ASTQ#query: too less arguments");
                if (arguments.length > 4) throw new Error("ASTQ#query: too many arguments");
                if (params === undefined) params = {};
                if (trace === undefined) trace = false;
                return this.execute(node, this.compile(selector, trace), params, trace);
            },
            writable: true,
            configurable: true
        }
    });

    return ASTQ;
})();

module.exports = ASTQ;

},{"./astq-adapter-asty.js":1,"./astq-adapter-mozast.js":2,"./astq-adapter-xmldom.js":3,"./astq-adapter.js":4,"./astq-funcs-std.js":5,"./astq-funcs.js":6,"./astq-query.js":9,"./astq-version.js":11,"cache-lru":"cache-lru"}]},{},[1,2,3,4,5,6,7,8,9,10,11,12])(12)
});