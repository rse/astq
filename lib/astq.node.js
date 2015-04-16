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

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var ASTQAdapterASTY = (function () {
    function ASTQAdapterASTY() {
        _classCallCheck(this, ASTQAdapterASTY);
    }

    _createClass(ASTQAdapterASTY, null, [{
        key: "taste",
        value: function taste(node) {
            return typeof node === "object" && typeof node.ASTy === "boolean";
        }
    }, {
        key: "getParentNode",
        value: function getParentNode(node /*, type */) {
            return node.parent();
        }
    }, {
        key: "getChildNodes",
        value: function getChildNodes(node /*, type */) {
            return node.childs();
        }
    }, {
        key: "getNodeType",
        value: function getNodeType(node) {
            return node.type();
        }
    }, {
        key: "getNodeAttrNames",
        value: function getNodeAttrNames(node) {
            return node.attrs();
        }
    }, {
        key: "getNodeAttrValue",
        value: function getNodeAttrValue(node, attr) {
            return node.get(attr);
        }
    }]);

    return ASTQAdapterASTY;
})();

exports["default"] = ASTQAdapterASTY;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var ASTQAdapterMozAST = (function () {
    function ASTQAdapterMozAST() {
        _classCallCheck(this, ASTQAdapterMozAST);
    }

    _createClass(ASTQAdapterMozAST, null, [{
        key: "taste",
        value: function taste(node) {
            return typeof node === "object" && node !== null && typeof node.type === "string" && node.type !== "";
        }
    }, {
        key: "getParentNode",
        value: function getParentNode(node, type) {
            if (type !== "*" && type !== "parent") throw new Error("no such axis named \"" + type + "\" for walking to parent nodes");
            if (typeof node.parent !== "undefined") {
                return node.parent;
            } else throw new Error("Your Mozilla SpiderMonkey AST does not support parent node traversal");
        }
    }, {
        key: "getChildNodes",
        value: function getChildNodes(node, type) {
            var _this = this;

            var childs = [];
            var checkField = function checkField(node, field) {
                if (node.hasOwnProperty(field) && _this.taste(node[field])) childs.push(node[field]);else if (node.hasOwnProperty(field) && typeof node[field] === "object" && node[field] instanceof Array) {
                    node[field].forEach(function (node) {
                        if (_this.taste(node)) childs.push(node);
                    });
                }
            };
            if (type === "*") {
                for (var field in node) {
                    checkField(node, field);
                }
            } else {
                if (typeof node[type] === "undefined") throw new Error("no such axis named \"" + type + "\" for walking to child nodes");
                checkField(node, type);
            }
            return childs;
        }
    }, {
        key: "getNodeType",
        value: function getNodeType(node) {
            return node.type;
        }
    }, {
        key: "getNodeAttrNames",
        value: function getNodeAttrNames(node) {
            var names = [];
            for (var field in node) {
                if (node.hasOwnProperty(field) && typeof node[field] !== "object" && field !== "type" && field !== "loc") names.push(field);
            }return names;
        }
    }, {
        key: "getNodeAttrValue",
        value: function getNodeAttrValue(node, attr) {
            if (node.hasOwnProperty(attr) && typeof node[attr] !== "object" && attr !== "type" && attr !== "loc") {
                return node[attr];
            } else {
                return undefined;
            }
        }
    }]);

    return ASTQAdapterMozAST;
})();

exports["default"] = ASTQAdapterMozAST;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var ASTQAdapterXMLDOM = (function () {
    function ASTQAdapterXMLDOM() {
        _classCallCheck(this, ASTQAdapterXMLDOM);
    }

    _createClass(ASTQAdapterXMLDOM, null, [{
        key: "taste",
        value: function taste(node) {
            /* global Node: true */
            return typeof Node === "object" && node instanceof Node && typeof node === "object" && typeof node.nodeType === "number" && typeof node.nodeName === "string";
        }
    }, {
        key: "getParentNode",
        value: function getParentNode(node /*, type */) {
            return node.parentNode;
        }
    }, {
        key: "getChildNodes",
        value: function getChildNodes(node /*, type */) {
            return node.childNodes;
        }
    }, {
        key: "getNodeType",
        value: function getNodeType(node) {
            return node.nodeName;
        }
    }, {
        key: "getNodeAttrNames",
        value: function getNodeAttrNames(node) {
            return Array.prototype.slice.call(node.attributes, 0).map(function (n) {
                return n.nodeName;
            });
        }
    }, {
        key: "getNodeAttrValue",
        value: function getNodeAttrValue(node, attr) {
            return node.getAttribute(attr);
        }
    }]);

    return ASTQAdapterXMLDOM;
})();

exports["default"] = ASTQAdapterXMLDOM;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

    _createClass(ASTQAdapter, [{
        key: "register",
        value: function register(adapter) {
            this._adapters.unshift(adapter);
            return this;
        }
    }, {
        key: "unregister",
        value: function unregister(adapter) {
            if (adapter === undefined) this._adapters = [];else {
                var adapters = [];
                for (var i = 0; i < this._adapters.length; i++) {
                    if (this._adapters[i] !== adapter) adapters.push(this._adapters[i]);
                }this._adapters = adapters;
            }
            return this;
        }
    }, {
        key: "select",
        value: function select(node) {
            for (var i = 0; i < this._adapters.length; i++) {
                if (this._adapters[i].taste(node)) {
                    return this._adapters[i];
                }
            }return undefined;
        }
    }]);

    return ASTQAdapter;
})();

exports["default"] = ASTQAdapter;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
    type: function type(A, T) {
        return A.getNodeType(T);
    },

    /*  depth of node in tree  */
    depth: function depth(A, T) {
        var depth = 1;
        var node = T;
        while ((node = A.getParentNode(node, "*")) !== null) depth++;
        return depth;
    },

    /*  return position of node between siblings  */
    pos: function pos(A, T) {
        var parent = A.getParentNode(T, "*");
        if (parent === null) {
            return 1;
        }var pchilds = A.getChildNodes(parent, "*");
        for (var i = 0; i < pchilds.length; i++) {
            if (pchilds[i] === T) {
                return i + 1;
            }
        }throw new Error("cannot find myself");
    },

    /*  check position of node between siblings  */
    nth: function nth(A, T, num) {
        num = parseInt(num, 10);
        var parent = A.getParentNode(T, "*");
        if (parent !== null) {
            var pchilds = A.getChildNodes(parent, "*");
            if (num < 0) num = pchilds - (num + 1);
            for (var i = 0; i < pchilds.length; i++) {
                if (pchilds[i] === T) {
                    return i + 1 === num;
                }
            }return false;
        } else if (num === 1) {
            return true;
        } else {
            return false;
        }
    },

    /*  check position of node to be first of siblings  */
    first: function first(A, T) {
        return stdfuncs.nth(A, T, 1);
    },

    /*  check position of node to be last of siblings  */
    last: function last(A, T) {
        return stdfuncs.nth(A, T, -1);
    },

    /*  count number of keys/elements/characters/etc  */
    count: function count(A, T, val) {
        if (typeof val === "object" && val instanceof Array) {
            return val.length;
        } else if (typeof val === "object") {
            return Object.keys(val).length;
        } else if (typeof val === "string") {
            return val.length;
        } else {
            return String(val).length;
        }
    },

    /*  retrieve a sub-string  */
    substr: function substr(A, T, str, pos, len) {
        return String(str).substr(pos, len);
    },

    /*  convert string to lower-case  */
    lc: function lc(A, T, str) {
        return String(str).toLowerCase();
    },

    /*  convert string to upper-case  */
    uc: function uc(A, T, str) {
        return String(str).toUpperCase();
    }
};

exports["default"] = stdfuncs;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

    _createClass(ASTQFuncs, [{
        key: "register",
        value: function register(name, func) {
            this._funcs[name] = func;
        }
    }, {
        key: "run",
        value: function run(name, args) {
            var func = this._funcs[name];
            if (typeof func !== "function") throw new Error("invalid function \"" + name + "\"");
            return func.apply(null, args);
        }
    }]);

    return ASTQFuncs;
})();

exports["default"] = ASTQFuncs;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var _util = require("./astq-util.js");

var _util2 = _interopRequireWildcard(_util);

var _ASTQQueryTrace2 = require("./astq-query-trace.js");

var _ASTQQueryTrace3 = _interopRequireWildcard(_ASTQQueryTrace2);

var ASTQQueryExec = (function (_ASTQQueryTrace) {
    function ASTQQueryExec(adapter, params, funcs, trace) {
        _classCallCheck(this, ASTQQueryExec);

        _get(Object.getPrototypeOf(ASTQQueryExec.prototype), "constructor", this).call(this);
        this.adapter = adapter;
        this.params = params;
        this.funcs = funcs;
        this.trace = trace;
    }

    _inherits(ASTQQueryExec, _ASTQQueryTrace);

    _createClass(ASTQQueryExec, [{
        key: "execQuery",
        value: function execQuery(Q, T) {
            var _this = this;

            this.traceBegin(Q, T);
            var output = [];
            Q.childs().forEach(function (Q) {
                output = output.concat(_this.execPath(Q, T));
            });
            this.traceEnd(Q, T, output);
            return output;
        }
    }, {
        key: "execPath",
        value: function execPath(Q, T) {
            var _this2 = this;

            this.traceBegin(Q, T);
            var nodes = [T];
            Q.childs().forEach(function (Q) {
                var output = [];
                nodes.forEach(function (T) {
                    output = output.concat(_this2.execStep(Q, T));
                });
                nodes = output;
            });
            this.traceEnd(Q, T, nodes);
            return nodes;
        }
    }, {
        key: "execStep",
        value: function execStep(Q, T) {
            var _this3 = this;

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
            var matchAndTake = function matchAndTake(T) {
                var type = _this3.adapter.getNodeType(T);
                if (id === "*" || id === type) {
                    var take = true;
                    if (filter !== null) if (!_this3.execFilter(filter, T)) take = false;
                    if (take) nodes.push(T);
                }
            };

            /*  determine nodes along axis which potentially might match  */
            if (axis !== null) {
                (function () {
                    var op = axis.get("op");
                    var t = axis.get("type");
                    if (op === "/") {
                        /*  direct child nodes  */
                        _this3.adapter.getChildNodes(T, t).forEach(function (T) {
                            return matchAndTake(T);
                        });
                    } else if (op === "//") {
                        (function () {
                            /*  transitive child nodes  */
                            var walk = (function (_walk) {
                                function walk(_x) {
                                    return _walk.apply(this, arguments);
                                }

                                walk.toString = function () {
                                    return _walk.toString();
                                };

                                return walk;
                            })(function (T) {
                                matchAndTake(T);
                                _this3.adapter.getChildNodes(T, t).forEach(function (T) {
                                    return walk(T);
                                });
                            });
                            _this3.adapter.getChildNodes(T, t).forEach(function (T) {
                                return walk(T);
                            });
                        })();
                    } else if (op === "-/") {
                        /*  direct left sibling  */
                        var _parent = _this3.adapter.getParentNode(T, "*");
                        if (_parent !== null) {
                            var pchilds = _this3.adapter.getChildNodes(_parent, t);
                            var leftSibling = null;
                            for (var _i = 0; _i < pchilds.length; _i++) {
                                if (pchilds[_i] === T) break;
                                leftSibling = pchilds[_i];
                            }
                            matchAndTake(leftSibling);
                        }
                    } else if (op === "-//") {
                        /*  transitive left siblings  */
                        var _parent2 = _this3.adapter.getParentNode(T, "*");
                        if (_parent2 !== null) {
                            var pchilds = _this3.adapter.getChildNodes(_parent2, t);
                            for (var _i2 = 0; _i2 < pchilds.length; _i2++) {
                                if (pchilds[_i2] === T) break;
                                matchAndTake(pchilds[_i2]);
                            }
                        }
                    } else if (op === "+/") {
                        /*  direct right sibling  */
                        var _parent3 = _this3.adapter.getParentNode(T, "*");
                        if (_parent3 !== null) {
                            var pchilds = _this3.adapter.getChildNodes(_parent3, t);
                            var _i3 = undefined;
                            for (_i3 = 0; _i3 < pchilds.length; _i3++) if (pchilds[_i3] === T) break;
                            if (_i3 < pchilds.length) {
                                _i3++;
                                matchAndTake(pchilds[_i3]);
                            }
                        }
                    } else if (op === "+//") {
                        /*  transitive right siblings  */
                        var _parent4 = _this3.adapter.getParentNode(T, "*");
                        if (_parent4 !== null) {
                            var pchilds = _this3.adapter.getChildNodes(_parent4, t);
                            var _i4 = undefined;
                            for (_i4 = 0; _i4 < pchilds.length; _i4++) if (pchilds[_i4] === T) break;
                            if (_i4 < pchilds.length) {
                                _i4++;
                                while (_i4 < pchilds.length) matchAndTake(pchilds[_i4++]);
                            }
                        }
                    } else if (op === "../") {
                        /*  direct parent  */
                        var _parent5 = _this3.adapter.getParentNode(T, t);
                        if (_parent5 !== null) matchAndTake(_parent5);
                    } else if (op === "..//") {
                        /*  transitive parents  */
                        var node = T;
                        while (true) {
                            var _parent6 = _this3.adapter.getParentNode(node, t);
                            if (_parent6 === null) break;
                            matchAndTake(_parent6);
                            node = _parent6;
                        }
                    }
                })();
            } else
                /*  current node  */
                matchAndTake(T);

            this.traceEnd(Q, T, nodes);
            return nodes;
        }
    }, {
        key: "execFilter",
        value: function execFilter(Q, T) {
            this.traceBegin(Q, T);
            var expr = Q.childs()[0];
            var result = this.execExpr(expr, T);
            result = _util2["default"].truthy(result);
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExpr",
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
        }
    }, {
        key: "execExprConditionalBinary",
        value: function execExprConditionalBinary(Q, T) {
            this.traceBegin(Q, T);
            var result = this.execExpr(Q.childs()[0], T);
            if (!_util2["default"].truthy(result)) result = this.execExpr(Q.childs()[1], T);
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprConditionalTernary",
        value: function execExprConditionalTernary(Q, T) {
            this.traceBegin(Q, T);
            var result = this.execExpr(Q.childs()[0], T);
            if (_util2["default"].truthy(result)) result = this.execExpr(Q.childs()[1], T);else result = this.execExpr(Q.childs()[2], T);
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprLogical",
        value: function execExprLogical(Q, T) {
            this.traceBegin(Q, T);
            var result = false;
            switch (Q.get("op")) {
                case "&&":
                    result = _util2["default"].truthy(this.execExpr(Q.childs()[0], T));
                    if (result) result = result && _util2["default"].truthy(this.execExpr(Q.childs()[1], T));
                    break;
                case "||":
                    result = _util2["default"].truthy(this.execExpr(Q.childs()[0], T));
                    if (!result) result = result || _util2["default"].truthy(this.execExpr(Q.childs()[1], T));
                    break;
            }
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprBitwise",
        value: function execExprBitwise(Q, T) {
            this.traceBegin(Q, T);
            var v1 = _util2["default"].coerce(this.execExpr(Q.childs()[0], T), "number");
            var v2 = _util2["default"].coerce(this.execExpr(Q.childs()[1], T), "number");
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
        }
    }, {
        key: "execExprRelational",
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
                    result = _util2["default"].coerce(v1, "number") <= _util2["default"].coerce(v2, "number");break;
                case ">=":
                    result = _util2["default"].coerce(v1, "number") >= _util2["default"].coerce(v2, "number");break;
                case "<":
                    result = _util2["default"].coerce(v1, "number") < _util2["default"].coerce(v2, "number");break;
                case ">":
                    result = _util2["default"].coerce(v1, "number") > _util2["default"].coerce(v2, "number");break;
                case "=~":
                    result = _util2["default"].coerce(v1, "string").match(_util2["default"].coerce(v2, "regexp")) !== null;break;
                case "!~":
                    result = _util2["default"].coerce(v1, "string").match(_util2["default"].coerce(v2, "regexp")) === null;break;
            }
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprArithmetical",
        value: function execExprArithmetical(Q, T) {
            this.traceBegin(Q, T);
            var v1 = this.execExpr(Q.childs()[0], T);
            var v2 = this.execExpr(Q.childs()[1], T);
            var result = undefined;
            switch (Q.get("op")) {
                case "+":
                    if (typeof v1 === "string") result = v1 + _util2["default"].coerce(v2, "string");else result = _util2["default"].coerce(v1, "number") + _util2["default"].coerce(v2, "number");
                    break;
                case "-":
                    result = _util2["default"].coerce(v1, "number") + _util2["default"].coerce(v2, "number");break;
                case "*":
                    result = _util2["default"].coerce(v1, "number") * _util2["default"].coerce(v2, "number");break;
                case "/":
                    result = _util2["default"].coerce(v1, "number") / _util2["default"].coerce(v2, "number");break;
                case "%":
                    result = _util2["default"].coerce(v1, "number") % _util2["default"].coerce(v2, "number");break;
                case "**":
                    result = Math.pow(_util2["default"].coerce(v1, "number"), _util2["default"].coerce(v2, "number"));break;
            }
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprUnary",
        value: function execExprUnary(Q, T) {
            this.traceBegin(Q, T);
            var v = this.execExpr(Q.childs()[0], T);
            var result = undefined;
            /* jscs: disable */
            switch (Q.get("op")) {
                case "!":
                    result = !_util2["default"].coerce(v, "boolean");break;
                case "~":
                    result = ~_util2["default"].coerce(v, "number");break;
            }
            /* jscs: enable */
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprFuncCall",
        value: function execExprFuncCall(Q, T) {
            var _this4 = this;

            this.traceBegin(Q, T);
            var id = Q.get("id");
            var args = [this.adapter, T];
            Q.childs().forEach(function (Q) {
                args.push(_this4.execExpr(Q, T));
            });
            var result = this.funcs.run(id, args);
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprAttribute",
        value: function execExprAttribute(Q, T) {
            this.traceBegin(Q, T);
            var id = Q.get("id");
            var result = this.adapter.getNodeAttrValue(T, id);
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprParam",
        value: function execExprParam(Q, T) {
            this.traceBegin(Q, T);
            var id = Q.get("id");
            if (typeof this.params[id] === "undefined") throw new Error("invalid parameter \"" + id + "\"");
            var result = this.params[id];
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprLiteralString",
        value: function execExprLiteralString(Q, T) {
            this.traceBegin(Q, T);
            var result = Q.get("value");
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprLiteralRegExp",
        value: function execExprLiteralRegExp(Q, T) {
            this.traceBegin(Q, T);
            var result = Q.get("value");
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprLiteralNumber",
        value: function execExprLiteralNumber(Q, T) {
            this.traceBegin(Q, T);
            var result = Q.get("value");
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprLiteralValue",
        value: function execExprLiteralValue(Q, T) {
            this.traceBegin(Q, T);
            var result = Q.get("value");
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprPath",
        value: function execExprPath(Q, T) {
            this.traceBegin(Q, T);
            var result = this.execPath(Q, T);
            this.traceEnd(Q, T, result);
            return result;
        }
    }]);

    return ASTQQueryExec;
})(_ASTQQueryTrace3["default"]);

exports["default"] = ASTQQueryExec;
module.exports = exports["default"];
/* RECURSION */

},{"./astq-query-trace.js":8,"./astq-util.js":10}],8:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var _util = require("./astq-util.js");

var _util2 = _interopRequireWildcard(_util);

var ASTQQueryTrace = (function () {
    function ASTQQueryTrace() {
        _classCallCheck(this, ASTQQueryTrace);
    }

    _createClass(ASTQQueryTrace, [{
        key: "prefixOf",

        /*  determine output prefix based on tree depth  */
        value: function prefixOf(Q, T) {
            var depth = 0;
            var node = Q;
            while ((node = node.parent()) !== null) depth++;
            var prefix1 = _util2["default"].pad("", 4 * depth);
            depth = 0;
            node = T;
            while ((node = this.adapter.getParentNode(node, "*")) !== null) depth++;
            var prefix2 = _util2["default"].pad("", 4 * depth);
            return { prefix1: prefix1, prefix2: prefix2 };
        }
    }, {
        key: "traceBegin",

        /*  begin tracing step  */
        value: function traceBegin(Q, T) {
            if (!this.trace) {
                return;
            }
            var _prefixOf = this.prefixOf(Q, T);

            var prefix1 = _prefixOf.prefix1;
            var prefix2 = _prefixOf.prefix2;

            console.log("ASTQ: execute: | " + _util2["default"].pad(prefix1 + Q.type() + " (", -60) + " | " + prefix2 + this.adapter.getNodeType(T));
        }
    }, {
        key: "traceEnd",

        /*  end tracing step  */
        value: function traceEnd(Q, T, val) {
            var _this = this;

            if (!this.trace) {
                return;
            }
            var _prefixOf2 = this.prefixOf(Q, T);

            var prefix1 = _prefixOf2.prefix1;
            var prefix2 = _prefixOf2.prefix2;

            var result = undefined;
            if (val === undefined) result = "undefined";else if (typeof val === "object" && val instanceof Array) {
                result = "[";
                val.forEach(function (node) {
                    result += "node(" + _this.adapter.getNodeType(node) + "),";
                });
                result = result.replace(/,$/, "") + "]";
            } else result = typeof val + "(" + val + ")";
            if (result.length > 60) result = result.substr(0, 60) + "...";
            console.log("ASTQ: execute: | " + _util2["default"].pad(prefix1 + "): " + result, -60) + " | " + prefix2 + this.adapter.getNodeType(T));
        }
    }]);

    return ASTQQueryTrace;
})();

exports["default"] = ASTQQueryTrace;
module.exports = exports["default"];

},{"./astq-util.js":10}],9:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

/*  get query executor  */

var _ASTQQueryExec = require("./astq-query-exec.js");

var _ASTQQueryExec2 = _interopRequireWildcard(_ASTQQueryExec);

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
        peg$c26 = function(op, t) {
                    return ast("Axis").set({ op: op, type: t !== null ? t : "*" })
                },
        peg$c27 = ":",
        peg$c28 = { type: "literal", value: ":", description: "\":\"" },
        peg$c29 = function(id) {
                    return id
                },
        peg$c30 = function(id) {
                    return ast("Match").merge(id)
                },
        peg$c31 = "*",
        peg$c32 = { type: "literal", value: "*", description: "\"*\"" },
        peg$c33 = function() {
                    return ast("Match").set({ id: "*" })
                },
        peg$c34 = "[",
        peg$c35 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c36 = "]",
        peg$c37 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c38 = function(e) {
                    return ast("Filter").add(e)
                },
        peg$c39 = "?:",
        peg$c40 = { type: "literal", value: "?:", description: "\"?:\"" },
        peg$c41 = function(e1, e2) {
                    return ast("ConditionalBinary").add(e1, e2)
                },
        peg$c42 = "?",
        peg$c43 = { type: "literal", value: "?", description: "\"?\"" },
        peg$c44 = function(e1, e2, e3) {
                    return ast("ConditionalTernary").add(e1, e2, e3)
                },
        peg$c45 = "||",
        peg$c46 = { type: "literal", value: "||", description: "\"||\"" },
        peg$c47 = function(e1, op, e2) {
                    return ast("Logical").set({ op: op }).add(e1, e2)
                },
        peg$c48 = "&&",
        peg$c49 = { type: "literal", value: "&&", description: "\"&&\"" },
        peg$c50 = "|",
        peg$c51 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c52 = function(e1, op, e2) {
                    return ast("Bitwise").set({ op: op }).add(e1, e2)
                },
        peg$c53 = "^",
        peg$c54 = { type: "literal", value: "^", description: "\"^\"" },
        peg$c55 = "&",
        peg$c56 = { type: "literal", value: "&", description: "\"&\"" },
        peg$c57 = "==",
        peg$c58 = { type: "literal", value: "==", description: "\"==\"" },
        peg$c59 = "!=",
        peg$c60 = { type: "literal", value: "!=", description: "\"!=\"" },
        peg$c61 = "<=",
        peg$c62 = { type: "literal", value: "<=", description: "\"<=\"" },
        peg$c63 = ">=",
        peg$c64 = { type: "literal", value: ">=", description: "\">=\"" },
        peg$c65 = "<",
        peg$c66 = { type: "literal", value: "<", description: "\"<\"" },
        peg$c67 = ">",
        peg$c68 = { type: "literal", value: ">", description: "\">\"" },
        peg$c69 = "=~",
        peg$c70 = { type: "literal", value: "=~", description: "\"=~\"" },
        peg$c71 = "!~",
        peg$c72 = { type: "literal", value: "!~", description: "\"!~\"" },
        peg$c73 = function(e1, op, e2) {
                    return ast("Relational").set({ op: op }).add(e1, e2)
                },
        peg$c74 = "<<",
        peg$c75 = { type: "literal", value: "<<", description: "\"<<\"" },
        peg$c76 = ">>",
        peg$c77 = { type: "literal", value: ">>", description: "\">>\"" },
        peg$c78 = "+",
        peg$c79 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c80 = "-",
        peg$c81 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c82 = function(e1, op, e2) {
                    return ast("Arithmetical").set({ op: op }).add(e1, e2)
                },
        peg$c83 = "**",
        peg$c84 = { type: "literal", value: "**", description: "\"**\"" },
        peg$c85 = "%",
        peg$c86 = { type: "literal", value: "%", description: "\"%\"" },
        peg$c87 = "!",
        peg$c88 = { type: "literal", value: "!", description: "\"!\"" },
        peg$c89 = "~",
        peg$c90 = { type: "literal", value: "~", description: "\"~\"" },
        peg$c91 = function(op, e) {
                    return ast("Unary").set({ op: op }).add(e)
                },
        peg$c92 = "(",
        peg$c93 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c94 = ")",
        peg$c95 = { type: "literal", value: ")", description: "\")\"" },
        peg$c96 = function(id, p) {
                    return ast("FuncCall").merge(id).add(p)
                },
        peg$c97 = function(f, l) { /* RECURSION */
                    return unroll(f, l, 3)
                },
        peg$c98 = { type: "other", description: "node attribute" },
        peg$c99 = "@",
        peg$c100 = { type: "literal", value: "@", description: "\"@\"" },
        peg$c101 = function(id) {
                    return ast("Attribute").merge(id)
                },
        peg$c102 = { type: "other", description: "query parameter reference" },
        peg$c103 = "{",
        peg$c104 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c105 = "}",
        peg$c106 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c107 = function(name) {
                    return ast("Param").merge(name)
                },
        peg$c108 = function(e) {  /* RECURSION */
                     return e
                },
        peg$c109 = { type: "other", description: "identifier" },
        peg$c110 = void 0,
        peg$c111 = /^[a-zA-Z_]/,
        peg$c112 = { type: "class", value: "[a-zA-Z_]", description: "[a-zA-Z_]" },
        peg$c113 = /^[a-zA-Z0-9_\-]/,
        peg$c114 = { type: "class", value: "[a-zA-Z0-9_\\-]", description: "[a-zA-Z0-9_\\-]" },
        peg$c115 = function(id) {
                    return ast("Identifier").set({ id: id })
                },
        peg$c116 = { type: "other", description: "quoted string literal" },
        peg$c117 = "\"",
        peg$c118 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c119 = /^[^"]/,
        peg$c120 = { type: "class", value: "[^\"]", description: "[^\"]" },
        peg$c121 = function(s) {
                    return ast("LiteralString").set({ value: s.join("") })
                },
        peg$c122 = "'",
        peg$c123 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c124 = "\\'",
        peg$c125 = { type: "literal", value: "\\'", description: "\"\\\\'\"" },
        peg$c126 = /^[^']/,
        peg$c127 = { type: "class", value: "[^']", description: "[^']" },
        peg$c128 = function(t) {
                    return ast("LiteralString").set({ value: t.replace(/\\'/g, "'") })
                },
        peg$c129 = { type: "other", description: "escaped string character" },
        peg$c130 = "\\\\",
        peg$c131 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c132 = function() { return "\\"   },
        peg$c133 = "\\\"",
        peg$c134 = { type: "literal", value: "\\\"", description: "\"\\\\\\\"\"" },
        peg$c135 = function() { return "\""   },
        peg$c136 = function() { return "'"    },
        peg$c137 = "\\b",
        peg$c138 = { type: "literal", value: "\\b", description: "\"\\\\b\"" },
        peg$c139 = function() { return "\b"   },
        peg$c140 = "\\v",
        peg$c141 = { type: "literal", value: "\\v", description: "\"\\\\v\"" },
        peg$c142 = function() { return "\x0B" },
        peg$c143 = "\\f",
        peg$c144 = { type: "literal", value: "\\f", description: "\"\\\\f\"" },
        peg$c145 = function() { return "\f"   },
        peg$c146 = "\\t",
        peg$c147 = { type: "literal", value: "\\t", description: "\"\\\\t\"" },
        peg$c148 = function() { return "\t"   },
        peg$c149 = "\\r",
        peg$c150 = { type: "literal", value: "\\r", description: "\"\\\\r\"" },
        peg$c151 = function() { return "\r"   },
        peg$c152 = "\\n",
        peg$c153 = { type: "literal", value: "\\n", description: "\"\\\\n\"" },
        peg$c154 = function() { return "\n"   },
        peg$c155 = "\\e",
        peg$c156 = { type: "literal", value: "\\e", description: "\"\\\\e\"" },
        peg$c157 = function() { return "\x1B" },
        peg$c158 = "\\x",
        peg$c159 = { type: "literal", value: "\\x", description: "\"\\\\x\"" },
        peg$c160 = /^[0-9a-fA-F]/,
        peg$c161 = { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
        peg$c162 = function(n) {
                    return String.fromCharCode(parseInt(n, 16))
                },
        peg$c163 = "\\u",
        peg$c164 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c165 = { type: "other", description: "regular expression literal" },
        peg$c166 = "`",
        peg$c167 = { type: "literal", value: "`", description: "\"`\"" },
        peg$c168 = "\\`",
        peg$c169 = { type: "literal", value: "\\`", description: "\"\\\\`\"" },
        peg$c170 = /^[^`]/,
        peg$c171 = { type: "class", value: "[^`]", description: "[^`]" },
        peg$c172 = function(re) {
                    var v
                    try { v = new RegExp(re.replace(/\\`/g, "`")) }
                    catch (e) { error(e.message) }
                    return ast("LiteralRegExp").set({ value: v })
                },
        peg$c173 = { type: "other", description: "numeric literal" },
        peg$c174 = /^[+\-]/,
        peg$c175 = { type: "class", value: "[+\\-]", description: "[+\\-]" },
        peg$c176 = "0b",
        peg$c177 = { type: "literal", value: "0b", description: "\"0b\"" },
        peg$c178 = /^[01]/,
        peg$c179 = { type: "class", value: "[01]", description: "[01]" },
        peg$c180 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 2) })
                },
        peg$c181 = "0o",
        peg$c182 = { type: "literal", value: "0o", description: "\"0o\"" },
        peg$c183 = /^[0-7]/,
        peg$c184 = { type: "class", value: "[0-7]", description: "[0-7]" },
        peg$c185 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 8) })
                },
        peg$c186 = "0x",
        peg$c187 = { type: "literal", value: "0x", description: "\"0x\"" },
        peg$c188 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 16) })
                },
        peg$c189 = /^[0-9]/,
        peg$c190 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c191 = ".",
        peg$c192 = { type: "literal", value: ".", description: "\".\"" },
        peg$c193 = /^[eE]/,
        peg$c194 = { type: "class", value: "[eE]", description: "[eE]" },
        peg$c195 = function(n) {
                    return ast("LiteralNumber").set({ value: parseFloat(n) })
                },
        peg$c196 = function(n) {
                    return ast("LiteralNumber").set({ value: parseInt(n, 10) })
                },
        peg$c197 = { type: "other", description: "global value" },
        peg$c198 = "true",
        peg$c199 = { type: "literal", value: "true", description: "\"true\"" },
        peg$c200 = function() { return ast("LiteralValue").set({ value: true      }) },
        peg$c201 = "false",
        peg$c202 = { type: "literal", value: "false", description: "\"false\"" },
        peg$c203 = function() { return ast("LiteralValue").set({ value: false     }) },
        peg$c204 = "null",
        peg$c205 = { type: "literal", value: "null", description: "\"null\"" },
        peg$c206 = function() { return ast("LiteralValue").set({ value: null      }) },
        peg$c207 = "NaN",
        peg$c208 = { type: "literal", value: "NaN", description: "\"NaN\"" },
        peg$c209 = function() { return ast("LiteralValue").set({ value: NaN       }) },
        peg$c210 = "undefined",
        peg$c211 = { type: "literal", value: "undefined", description: "\"undefined\"" },
        peg$c212 = function() { return ast("LiteralValue").set({ value: undefined }) },
        peg$c213 = { type: "other", description: "optional blank" },
        peg$c214 = { type: "other", description: "multi-line comment" },
        peg$c215 = "/*",
        peg$c216 = { type: "literal", value: "/*", description: "\"/*\"" },
        peg$c217 = "*/",
        peg$c218 = { type: "literal", value: "*/", description: "\"*/\"" },
        peg$c219 = { type: "any", description: "any character" },
        peg$c220 = { type: "other", description: "any whitespaces" },
        peg$c221 = /^[ \t\r\n]/,
        peg$c222 = { type: "class", value: "[ \\t\\r\\n]", description: "[ \\t\\r\\n]" },
        peg$c223 = { type: "other", description: "end of file" },

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

      var key    = peg$currPos * 37 + 0,
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

      var key    = peg$currPos * 37 + 1,
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

      var key    = peg$currPos * 37 + 2,
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

      var key    = peg$currPos * 37 + 3,
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

      var key    = peg$currPos * 37 + 4,
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

      var key    = peg$currPos * 37 + 5,
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
        s2 = peg$parsequeryAxisType();
        if (s2 === peg$FAILED) {
          s2 = peg$c7;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c26(s1, s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c9); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryAxisType() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 37 + 6,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 58) {
        s1 = peg$c27;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c28); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseid();
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c29(s2);
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

    function peg$parsequeryMatch() {
      var s0, s1;

      var key    = peg$currPos * 37 + 7,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseid();
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c30(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 42) {
          s1 = peg$c31;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c32); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c33();
        }
        s0 = s1;
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryFilter() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 37 + 8,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c34;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexprConditional();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c36;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c37); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c38(s3);
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

      var key    = peg$currPos * 37 + 9,
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
          if (input.substr(peg$currPos, 2) === peg$c39) {
            s3 = peg$c39;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c40); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprLogicalOr();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c41(s1, s5);
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
              s3 = peg$c42;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c43); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseexprLogicalOr();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 58) {
                      s7 = peg$c27;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c28); }
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parseexprLogicalOr();
                        if (s9 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c44(s1, s5, s9);
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

      var key    = peg$currPos * 37 + 10,
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
          if (input.substr(peg$currPos, 2) === peg$c45) {
            s4 = peg$c45;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c46); }
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
                s1 = peg$c47(s1, s3, s5);
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

      var key    = peg$currPos * 37 + 11,
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
          if (input.substr(peg$currPos, 2) === peg$c48) {
            s4 = peg$c48;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c49); }
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
                s1 = peg$c47(s1, s3, s5);
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

      var key    = peg$currPos * 37 + 12,
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
            s4 = peg$c50;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c51); }
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
                s1 = peg$c52(s1, s3, s5);
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

      var key    = peg$currPos * 37 + 13,
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
            s4 = peg$c53;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c54); }
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
                s1 = peg$c52(s1, s3, s5);
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

      var key    = peg$currPos * 37 + 14,
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
            s4 = peg$c55;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c56); }
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
                s1 = peg$c52(s1, s3, s5);
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

      var key    = peg$currPos * 37 + 15,
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
          if (input.substr(peg$currPos, 2) === peg$c57) {
            s4 = peg$c57;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c58); }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c59) {
              s4 = peg$c59;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c60); }
            }
            if (s4 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c61) {
                s4 = peg$c61;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c62); }
              }
              if (s4 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c63) {
                  s4 = peg$c63;
                  peg$currPos += 2;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c64); }
                }
                if (s4 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 60) {
                    s4 = peg$c65;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c66); }
                  }
                  if (s4 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 62) {
                      s4 = peg$c67;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c68); }
                    }
                    if (s4 === peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c69) {
                        s4 = peg$c69;
                        peg$currPos += 2;
                      } else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c70); }
                      }
                      if (s4 === peg$FAILED) {
                        if (input.substr(peg$currPos, 2) === peg$c71) {
                          s4 = peg$c71;
                          peg$currPos += 2;
                        } else {
                          s4 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c72); }
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
                s1 = peg$c73(s1, s3, s5);
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

      var key    = peg$currPos * 37 + 16,
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
          if (input.substr(peg$currPos, 2) === peg$c74) {
            s4 = peg$c74;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c75); }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c76) {
              s4 = peg$c76;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c77); }
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
                s1 = peg$c52(s1, s3, s5);
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

      var key    = peg$currPos * 37 + 17,
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
            s4 = peg$c78;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c79); }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
              s4 = peg$c80;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c81); }
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
                s1 = peg$c82(s1, s3, s5);
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

      var key    = peg$currPos * 37 + 18,
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
          if (input.substr(peg$currPos, 2) === peg$c83) {
            s4 = peg$c83;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c84); }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 42) {
              s4 = peg$c31;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c32); }
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
                  s4 = peg$c85;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c86); }
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
                s1 = peg$c82(s1, s3, s5);
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

      var key    = peg$currPos * 37 + 19,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 33) {
        s2 = peg$c87;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c88); }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 126) {
          s2 = peg$c89;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c90); }
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
          s1 = peg$c91(s1, s2);
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

      var key    = peg$currPos * 37 + 20,
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

      var key    = peg$currPos * 37 + 21,
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
            s3 = peg$c92;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c93); }
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
                    s7 = peg$c94;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c95); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c96(s1, s5);
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

      var key    = peg$currPos * 37 + 22,
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
          s1 = peg$c97(s1, s2);
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

      var key    = peg$currPos * 37 + 23,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 64) {
        s1 = peg$c99;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c100); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseid();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c101(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c98); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprParam() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 37 + 24,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c103;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c104); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseid();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s5 = peg$c105;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c106); }
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
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c102); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprLiteral() {
      var s0;

      var key    = peg$currPos * 37 + 25,
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

      var key    = peg$currPos * 37 + 26,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c92;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c93); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexprConditional();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c94;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c95); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c108(s3);
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

      var key    = peg$currPos * 37 + 27,
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
        s3 = peg$c110;
      } else {
        peg$currPos = s3;
        s3 = peg$c0;
      }
      if (s3 !== peg$FAILED) {
        if (peg$c111.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c112); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c113.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c114); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c113.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c114); }
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
        s1 = peg$c115(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c109); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestring() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 37 + 28,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 34) {
        s1 = peg$c117;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c118); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsestringEscapedChar();
        if (s3 === peg$FAILED) {
          if (peg$c119.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c120); }
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsestringEscapedChar();
          if (s3 === peg$FAILED) {
            if (peg$c119.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c120); }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s3 = peg$c117;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c118); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c121(s2);
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
          s1 = peg$c122;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c123); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = [];
          if (input.substr(peg$currPos, 2) === peg$c124) {
            s4 = peg$c124;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c125); }
          }
          if (s4 === peg$FAILED) {
            if (peg$c126.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c127); }
            }
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (input.substr(peg$currPos, 2) === peg$c124) {
              s4 = peg$c124;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c125); }
            }
            if (s4 === peg$FAILED) {
              if (peg$c126.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c127); }
              }
            }
          }
          if (s3 !== peg$FAILED) {
            s3 = input.substring(s2, peg$currPos);
          }
          s2 = s3;
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s3 = peg$c122;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c123); }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c128(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c116); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestringEscapedChar() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 37 + 29,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c130) {
        s1 = peg$c130;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c131); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c132();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c133) {
          s1 = peg$c133;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c134); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c135();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 39) {
            s1 = peg$c122;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c123); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c136();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c137) {
              s1 = peg$c137;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c138); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c139();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c140) {
                s1 = peg$c140;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c141); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c142();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c143) {
                  s1 = peg$c143;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c144); }
                }
                if (s1 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c145();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c146) {
                    s1 = peg$c146;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c147); }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c148();
                  }
                  s0 = s1;
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 2) === peg$c149) {
                      s1 = peg$c149;
                      peg$currPos += 2;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c150); }
                    }
                    if (s1 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c151();
                    }
                    s0 = s1;
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      if (input.substr(peg$currPos, 2) === peg$c152) {
                        s1 = peg$c152;
                        peg$currPos += 2;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c153); }
                      }
                      if (s1 !== peg$FAILED) {
                        peg$reportedPos = s0;
                        s1 = peg$c154();
                      }
                      s0 = s1;
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (input.substr(peg$currPos, 2) === peg$c155) {
                          s1 = peg$c155;
                          peg$currPos += 2;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c156); }
                        }
                        if (s1 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c157();
                        }
                        s0 = s1;
                        if (s0 === peg$FAILED) {
                          s0 = peg$currPos;
                          if (input.substr(peg$currPos, 2) === peg$c158) {
                            s1 = peg$c158;
                            peg$currPos += 2;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c159); }
                          }
                          if (s1 !== peg$FAILED) {
                            s2 = peg$currPos;
                            s3 = peg$currPos;
                            if (peg$c160.test(input.charAt(peg$currPos))) {
                              s4 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s4 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c161); }
                            }
                            if (s4 !== peg$FAILED) {
                              if (peg$c160.test(input.charAt(peg$currPos))) {
                                s5 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c161); }
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
                              s1 = peg$c162(s2);
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
                            if (input.substr(peg$currPos, 2) === peg$c163) {
                              s1 = peg$c163;
                              peg$currPos += 2;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c164); }
                            }
                            if (s1 !== peg$FAILED) {
                              s2 = peg$currPos;
                              s3 = peg$currPos;
                              if (peg$c160.test(input.charAt(peg$currPos))) {
                                s4 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s4 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c161); }
                              }
                              if (s4 !== peg$FAILED) {
                                if (peg$c160.test(input.charAt(peg$currPos))) {
                                  s5 = input.charAt(peg$currPos);
                                  peg$currPos++;
                                } else {
                                  s5 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c161); }
                                }
                                if (s5 !== peg$FAILED) {
                                  if (peg$c160.test(input.charAt(peg$currPos))) {
                                    s6 = input.charAt(peg$currPos);
                                    peg$currPos++;
                                  } else {
                                    s6 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c161); }
                                  }
                                  if (s6 !== peg$FAILED) {
                                    if (peg$c160.test(input.charAt(peg$currPos))) {
                                      s7 = input.charAt(peg$currPos);
                                      peg$currPos++;
                                    } else {
                                      s7 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c161); }
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
                                s1 = peg$c162(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c129); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseregexp() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 37 + 30,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 96) {
        s1 = peg$c166;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c167); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        if (input.substr(peg$currPos, 2) === peg$c168) {
          s4 = peg$c168;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c169); }
        }
        if (s4 === peg$FAILED) {
          if (peg$c170.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c171); }
          }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (input.substr(peg$currPos, 2) === peg$c168) {
            s4 = peg$c168;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c169); }
          }
          if (s4 === peg$FAILED) {
            if (peg$c170.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c171); }
            }
          }
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 96) {
            s3 = peg$c166;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c167); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c172(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c165); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

      var key    = peg$currPos * 37 + 31,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c174.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c175); }
      }
      if (s2 === peg$FAILED) {
        s2 = peg$c7;
      }
      if (s2 !== peg$FAILED) {
        s2 = input.substring(s1, peg$currPos);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c176) {
          s2 = peg$c176;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c177); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];
          if (peg$c178.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c179); }
          }
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c178.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c179); }
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
            s1 = peg$c180(s1, s3);
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
        if (peg$c174.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c175); }
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c7;
        }
        if (s2 !== peg$FAILED) {
          s2 = input.substring(s1, peg$currPos);
        }
        s1 = s2;
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c181) {
            s2 = peg$c181;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c182); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = [];
            if (peg$c183.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c184); }
            }
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c183.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c184); }
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
          if (peg$c174.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c175); }
          }
          if (s2 === peg$FAILED) {
            s2 = peg$c7;
          }
          if (s2 !== peg$FAILED) {
            s2 = input.substring(s1, peg$currPos);
          }
          s1 = s2;
          if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c186) {
              s2 = peg$c186;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c187); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$currPos;
              s4 = [];
              if (peg$c160.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c161); }
              }
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  if (peg$c160.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c161); }
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
                s1 = peg$c188(s1, s3);
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
            if (peg$c174.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c175); }
            }
            if (s3 === peg$FAILED) {
              s3 = peg$c7;
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              if (peg$c189.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c190); }
              }
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c189.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c190); }
                }
              }
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s5 = peg$c191;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c192); }
                }
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  if (peg$c189.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c190); }
                  }
                  if (s7 !== peg$FAILED) {
                    while (s7 !== peg$FAILED) {
                      s6.push(s7);
                      if (peg$c189.test(input.charAt(peg$currPos))) {
                        s7 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c190); }
                      }
                    }
                  } else {
                    s6 = peg$c0;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    if (peg$c193.test(input.charAt(peg$currPos))) {
                      s8 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c194); }
                    }
                    if (s8 !== peg$FAILED) {
                      if (peg$c174.test(input.charAt(peg$currPos))) {
                        s9 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c175); }
                      }
                      if (s9 === peg$FAILED) {
                        s9 = peg$c7;
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        if (peg$c189.test(input.charAt(peg$currPos))) {
                          s11 = input.charAt(peg$currPos);
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c190); }
                        }
                        if (s11 !== peg$FAILED) {
                          while (s11 !== peg$FAILED) {
                            s10.push(s11);
                            if (peg$c189.test(input.charAt(peg$currPos))) {
                              s11 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s11 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c190); }
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
              s1 = peg$c195(s1);
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$currPos;
              s2 = peg$currPos;
              if (peg$c174.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c175); }
              }
              if (s3 === peg$FAILED) {
                s3 = peg$c7;
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                if (peg$c189.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c190); }
                }
                if (s5 !== peg$FAILED) {
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    if (peg$c189.test(input.charAt(peg$currPos))) {
                      s5 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c190); }
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
                s1 = peg$c196(s1);
              }
              s0 = s1;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c173); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsevalue() {
      var s0, s1;

      var key    = peg$currPos * 37 + 32,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c198) {
        s1 = peg$c198;
        peg$currPos += 4;
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
        if (input.substr(peg$currPos, 5) === peg$c201) {
          s1 = peg$c201;
          peg$currPos += 5;
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
          if (input.substr(peg$currPos, 4) === peg$c204) {
            s1 = peg$c204;
            peg$currPos += 4;
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
            if (input.substr(peg$currPos, 3) === peg$c207) {
              s1 = peg$c207;
              peg$currPos += 3;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c208); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c209();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 9) === peg$c210) {
                s1 = peg$c210;
                peg$currPos += 9;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c211); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c212();
              }
              s0 = s1;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c197); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parse_() {
      var s0, s1;

      var key    = peg$currPos * 37 + 33,
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
        if (peg$silentFails === 0) { peg$fail(peg$c213); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseco() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 37 + 34,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c215) {
        s1 = peg$c215;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c216); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c217) {
          s5 = peg$c217;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c218); }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = peg$c110;
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
            if (peg$silentFails === 0) { peg$fail(peg$c219); }
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
          if (input.substr(peg$currPos, 2) === peg$c217) {
            s5 = peg$c217;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c218); }
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = peg$c110;
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
              if (peg$silentFails === 0) { peg$fail(peg$c219); }
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
          if (input.substr(peg$currPos, 2) === peg$c217) {
            s3 = peg$c217;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c218); }
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
        if (peg$silentFails === 0) { peg$fail(peg$c214); }
      }

      peg$cache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      var key    = peg$currPos * 37 + 35,
          cached = peg$cache[key];

      if (cached) {
        peg$currPos = cached.nextPos;
        return cached.result;
      }

      peg$silentFails++;
      s0 = [];
      if (peg$c221.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c222); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c221.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c222); }
          }
        }
      } else {
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

    function peg$parseeof() {
      var s0, s1;

      var key    = peg$currPos * 37 + 36,
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
        if (peg$silentFails === 0) { peg$fail(peg$c219); }
      }
      peg$silentFails--;
      if (s1 === peg$FAILED) {
        s0 = peg$c110;
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c223); }
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
var ASTQQuery = (function () {
    /*  create a new instance of the query instance  */

    function ASTQQuery(selector) {
        _classCallCheck(this, ASTQQuery);

        this.asty = new ASTY();
        this.ast = null;
        if (selector) this.compile(selector);
    }

    _createClass(ASTQQuery, [{
        key: "compile",

        /*  compile query selector into AST  */
        value: function compile(selector, trace) {
            var _this = this;

            if (trace) console.log("ASTQ: compile: +---------------------------------------" + "----------------------------------------------------------------\n" + "ASTQ: compile: | " + selector);
            var result = PEGUtil.parse(ASTQQueryParse, selector, {
                startRule: "query",
                makeAST: function makeAST(line, column, offset, args) {
                    return _this.asty.create.apply(_this.asty, args).pos(line, column, offset);
                }
            });
            if (result.error !== null) throw new Error("ASTQ: compile: query parsing failed:\n" + PEGUtil.errorMessage(result.error, true).replace(/^/mg, "ERROR: "));
            this.ast = result.ast;
            if (trace) console.log("ASTQ: compile: +---------------------------------------" + "----------------------------------------------------------------\n" + this.dump().replace(/\n$/, "").replace(/^/mg, "ASTQ: compile: | "));
            return this;
        }
    }, {
        key: "dump",

        /*  dump the query AST  */
        value: function dump() {
            return this.ast.dump();
        }
    }, {
        key: "execute",

        /*  execute the query AST onto node  */
        value: function execute(node, adapter, params, funcs, trace) {
            if (trace) console.log("ASTQ: execute: +---------------------------------------" + "-----------------------+----------------------------------------");
            var qe = new _ASTQQueryExec2["default"](adapter, params, funcs, trace);
            return qe.execQuery(this.ast, node);
        }
    }]);

    return ASTQQuery;
})();

exports["default"] = ASTQQuery;
module.exports = exports["default"];

},{"./astq-query-exec.js":7,"asty":"asty","pegjs-util":"pegjs-util"}],10:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

    _createClass(ASTQUtil, null, [{
        key: "pad",

        /*  pad a string with spaces to the left/right  */
        value: function pad(str, num) {
            var n = num < 0 ? -num : num;
            if (str.length > n) str = str.substr(0, n);else {
                var pad = Array(n + 1 - str.length).join(" ");
                str = num < 0 ? str + pad : pad + str;
            }
            return str;
        }
    }, {
        key: "truthy",

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
        }
    }, {
        key: "coerce",

        /*  coerce value to particular type  */
        value: function coerce(value, type) {
            if (typeof value !== type) {
                try {
                    switch (type) {
                        case "boolean":
                            if (typeof value !== "boolean") value = Boolean(value);
                            break;
                        case "number":
                            if (typeof value !== "number") value = Number(value);
                            break;
                        case "string":
                            if (typeof value !== "string") value = String(value);
                            break;
                        case "regexp":
                            if (!(typeof value === "object" && value instanceof RegExp)) value = new RegExp(value);
                            break;
                    }
                } catch (e) {
                    throw new Error("cannot coerce value into type " + type);
                }
            }
            return value;
        }
    }]);

    return ASTQUtil;
})();

exports["default"] = ASTQUtil;
module.exports = exports["default"];

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
/* global 4: false */
/* global 1: false */
/* global 20150416:  false */

var version = {
    major: 1,
    minor: 4,
    micro: 1,
    date: 20150416
};

exports["default"] = version;
module.exports = exports["default"];

},{}],12:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

/*  load internal dependencies  */

var _ASTQAdapter = require("./astq-adapter.js");

var _ASTQAdapter2 = _interopRequireWildcard(_ASTQAdapter);

var _ASTQAdapterASTY = require("./astq-adapter-asty.js");

var _ASTQAdapterASTY2 = _interopRequireWildcard(_ASTQAdapterASTY);

var _ASTQAdapterMOZAST = require("./astq-adapter-mozast.js");

var _ASTQAdapterMOZAST2 = _interopRequireWildcard(_ASTQAdapterMOZAST);

var _ASTQAdapterXMLDOM = require("./astq-adapter-xmldom.js");

var _ASTQAdapterXMLDOM2 = _interopRequireWildcard(_ASTQAdapterXMLDOM);

var _ASTQFuncs = require("./astq-funcs.js");

var _ASTQFuncs2 = _interopRequireWildcard(_ASTQFuncs);

var _ASTQFuncsSTD = require("./astq-funcs-std.js");

var _ASTQFuncsSTD2 = _interopRequireWildcard(_ASTQFuncsSTD);

var _ASTQQuery = require("./astq-query.js");

var _ASTQQuery2 = _interopRequireWildcard(_ASTQQuery);

var _ASTQVersion = require("./astq-version.js");

var _ASTQVersion2 = _interopRequireWildcard(_ASTQVersion);

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

/*  define the API class  */

var ASTQ = (function () {
    /*  create a new ASTq instance  */

    function ASTQ() {
        _classCallCheck(this, ASTQ);

        /*  create adapter registry and pre-register standard adapters  */
        this._adapter = new _ASTQAdapter2["default"]();
        this._adapter.register(_ASTQAdapterMOZAST2["default"]);
        this._adapter.register(_ASTQAdapterXMLDOM2["default"]);
        this._adapter.register(_ASTQAdapterASTY2["default"]);

        /*  create function registry and pre-register standard functions  */
        this._funcs = new _ASTQFuncs2["default"]();
        for (var _name in _ASTQFuncsSTD2["default"]) {
            this.func(_name, _ASTQFuncsSTD2["default"][_name]);
        } /*  create LRU cache  */
        this._cache = new CacheLRU();
    }

    _createClass(ASTQ, [{
        key: "version",

        /*  return the version information  */
        value: function version() {
            return _ASTQVersion2["default"];
        }
    }, {
        key: "adapter",

        /*  switch to a custom adapter  */
        value: (function (_adapter) {
            function adapter(_x) {
                return _adapter.apply(this, arguments);
            }

            adapter.toString = function () {
                return _adapter.toString();
            };

            return adapter;
        })(function (adapter) {
            if (arguments.length !== 1) throw new Error("ASTQ#adapter: invalid number of arguments");
            this._adapter.unregister();
            this._adapter.register(adapter);
            return this;
        })
    }, {
        key: "func",

        /*  register an additional function  */
        value: (function (_func) {
            function func(_x2, _x3) {
                return _func.apply(this, arguments);
            }

            func.toString = function () {
                return _func.toString();
            };

            return func;
        })(function (name, func) {
            if (arguments.length !== 2) throw new Error("ASTQ#func: invalid number of arguments");
            this._funcs.register(name, func);
            return this;
        })
    }, {
        key: "cache",

        /*  configure the LRU cache limit  */
        value: function cache(entries) {
            if (arguments.length !== 1) throw new Error("ASTQ#cache: invalid number of arguments");
            this._cache.limit(entries);
            return this;
        }
    }, {
        key: "compile",

        /*  individual step 1: compile selector DSL into a query AST  */
        value: function compile(selector, trace) {
            if (arguments.length < 1) throw new Error("ASTQ#compile: too less arguments");
            if (arguments.length > 2) throw new Error("ASTQ#compile: too many arguments");
            if (trace === undefined) trace = false;
            var query = this._cache.get(selector);
            if (query === undefined) {
                query = new _ASTQQuery2["default"]();
                query.compile(selector, trace);
                this._cache.set(selector, query);
            }
            return query;
        }
    }, {
        key: "execute",

        /*  individual step 2: execute query AST onto node  */
        value: function execute(node, query, params, trace) {
            if (arguments.length < 2) throw new Error("ASTQ#execute: too less arguments");
            if (arguments.length > 4) throw new Error("ASTQ#execute: too many arguments");
            if (params === undefined) params = {};
            if (trace === undefined) trace = false;
            var adapter = this._adapter.select(node);
            if (adapter === undefined) throw new Error("ASTQ#execute: no suitable adapter found for node");
            return query.execute(node, adapter, params, this._funcs, trace);
        }
    }, {
        key: "query",

        /*  all-in-one step: execute selector DSL onto node  */
        value: function query(node, selector, params, trace) {
            if (arguments.length < 2) throw new Error("ASTQ#query: too less arguments");
            if (arguments.length > 4) throw new Error("ASTQ#query: too many arguments");
            if (params === undefined) params = {};
            if (trace === undefined) trace = false;
            return this.execute(node, this.compile(selector, trace), params, trace);
        }
    }]);

    return ASTQ;
})();

exports["default"] = ASTQ;
module.exports = exports["default"];

},{"./astq-adapter-asty.js":1,"./astq-adapter-mozast.js":2,"./astq-adapter-xmldom.js":3,"./astq-adapter.js":4,"./astq-funcs-std.js":5,"./astq-funcs.js":6,"./astq-query.js":9,"./astq-version.js":11,"cache-lru":"cache-lru"}]},{},[1,2,3,4,5,6,7,8,9,10,11,12])(12)
});