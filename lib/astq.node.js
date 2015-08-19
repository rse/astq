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

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
            if (typeof node.parent !== "undefined") return node.parent;else throw new Error("Your Mozilla SpiderMonkey AST does not support parent node traversal");
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
            if (node.hasOwnProperty(attr) && typeof node[attr] !== "object" && attr !== "type" && attr !== "loc") return node[attr];else return undefined;
        }
    }]);

    return ASTQAdapterMozAST;
})();

exports["default"] = ASTQAdapterMozAST;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
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

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
                if (this._adapters[i].taste(node)) return this._adapters[i];
            }return undefined;
        }
    }]);

    return ASTQAdapter;
})();

exports["default"] = ASTQAdapter;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
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

/*  internal helper function: find position between siblings  */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _pos = function _pos(A, T) {
    var parent = A.getParentNode(T, "*");
    if (parent === null) return 1;
    var pchilds = A.getChildNodes(parent, "*");
    for (var i = 0; i < pchilds.length; i++) {
        if (pchilds[i] === T) return i + 1;
    }throw new Error("cannot find myself");
};

/*  internal helper function: find parent nodes  */
var parents = function parents(A, T) {
    var parents = [];
    while ((T = A.getParentNode(T, "*")) !== null) parents.push(T);
    return parents;
};

/*  the exported standard functions  */
var stdfuncs = {
    /*  type name of node  */
    "type": function type(A, T) {
        return A.getNodeType(T);
    },

    /*  depth of node in tree  */
    "depth": function depth(A, T) {
        var depth = 1;
        var node = T;
        while ((node = A.getParentNode(node, "*")) !== null) depth++;
        return depth;
    },

    /*  return position of node between siblings  */
    "pos": function pos(A, T) {
        return _pos(A, T);
    },

    /*  check position of node between siblings  */
    "nth": function nth(A, T, num) {
        num = parseInt(num, 10);
        var parent = A.getParentNode(T, "*");
        if (parent !== null) {
            var pchilds = A.getChildNodes(parent, "*");
            if (num < 0) num = pchilds.length - (num + 1);
            for (var i = 0; i < pchilds.length; i++) {
                if (pchilds[i] === T) return i + 1 === num;
            }return false;
        } else if (num === 1) return true;else return false;
    },

    /*  check position of node to be first of siblings  */
    "first": function first(A, T) {
        return stdfuncs.nth(A, T, 1);
    },

    /*  check position of node to be last of siblings  */
    "last": function last(A, T) {
        return stdfuncs.nth(A, T, -1);
    },

    /*  count number of keys/elements/characters/etc  */
    "count": function count(A, T, val) {
        if (typeof val === "object" && val instanceof Array) return val.length;else if (typeof val === "object") return Object.keys(val).length;else if (typeof val === "string") return val.length;else return String(val).length;
    },

    /*  check whether node is below another  */
    "below": function below(A, T, other) {
        if (!A.taste(other)) throw new Error("invalid argument to function \"below\" (node expected)");
        var node = T;
        while ((node = A.getParentNode(node, "*")) !== null) if (node === other) return true;
        return false;
    },

    /*  check whether node follows another  */
    "follows": function follows(A, T, other) {
        if (!A.taste(other)) throw new Error("invalid argument to function \"follows\" (node expected)");
        if (T === other) return false;
        var pathOfT = [T].concat(parents(A, T)).reverse();
        var pathOfOther = [other].concat(parents(A, other)).reverse();
        var len = Math.min(pathOfT.length, pathOfOther.length);
        var i = undefined;
        for (i = 0; i < len; i++) if (pathOfT[i] !== pathOfOther[i]) break;
        if (i === 0) throw new Error("internal error: root nodes have to be same same");else if (i === len) {
            if (pathOfOther.length < pathOfT.length) return true;else return false;
        } else return _pos(A, pathOfT[i]) > _pos(A, pathOfOther[i]);
    },

    /*  check whether node is in a list of nodes  */
    "in": function _in(A, T, val) {
        if (!(typeof val === "object" && val instanceof Array)) throw new Error("invalid argument to function \"in\" (array expected)");
        for (var i = 0; i < val.length; i++) {
            if (val[i] === T) return true;
        }return false;
    },

    /*  retrieve a sub-string  */
    "substr": function substr(A, T, str, pos, len) {
        return String(str).substr(pos, len);
    },

    /*  convert string to lower-case  */
    "lc": function lc(A, T, str) {
        return String(str).toLowerCase();
    },

    /*  convert string to upper-case  */
    "uc": function uc(A, T, str) {
        return String(str).toUpperCase();
    }
};

exports["default"] = stdfuncs;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
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

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _astqUtilJs = require("./astq-util.js");

var _astqUtilJs2 = _interopRequireDefault(_astqUtilJs);

var _astqQueryTraceJs = require("./astq-query-trace.js");

var _astqQueryTraceJs2 = _interopRequireDefault(_astqQueryTraceJs);

var ASTQQueryExec = (function (_ASTQQueryTrace) {
    _inherits(ASTQQueryExec, _ASTQQueryTrace);

    function ASTQQueryExec(adapter, params, funcs, trace) {
        _classCallCheck(this, ASTQQueryExec);

        _get(Object.getPrototypeOf(ASTQQueryExec.prototype), "constructor", this).call(this);
        this.adapter = adapter;
        this.params = params;
        this.funcs = funcs;
        this.trace = trace;
    }

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
                            var walk = function walk(T) {
                                matchAndTake(T);
                                _this3.adapter.getChildNodes(T, t).forEach(function (T) {
                                    return walk(T);
                                }); /* RECURSION */
                            };
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
                            if (leftSibling !== null) matchAndTake(leftSibling);
                        }
                    } else if (op === "-//") {
                        /*  transitive left siblings  */
                        var _parent2 = _this3.adapter.getParentNode(T, "*");
                        if (_parent2 !== null) {
                            var pchilds = _this3.adapter.getChildNodes(_parent2, t);
                            var _i2 = 0;
                            for (; _i2 < pchilds.length; _i2++) if (pchilds[_i2] === T) break;
                            for (_i2--; _i2 >= 0; _i2--) matchAndTake(pchilds[_i2]);
                        }
                    } else if (op === "+/") {
                        /*  direct right sibling  */
                        var _parent3 = _this3.adapter.getParentNode(T, "*");
                        if (_parent3 !== null) {
                            var pchilds = _this3.adapter.getChildNodes(_parent3, t);
                            var _i3 = undefined;
                            for (_i3 = 0; _i3 < pchilds.length; _i3++) if (pchilds[_i3] === T) break;
                            if (_i3 < pchilds.length) matchAndTake(pchilds[++_i3]);
                        }
                    } else if (op === "+//") {
                        /*  transitive right siblings  */
                        var _parent4 = _this3.adapter.getParentNode(T, "*");
                        if (_parent4 !== null) {
                            var pchilds = _this3.adapter.getChildNodes(_parent4, t);
                            var _i4 = undefined;
                            for (_i4 = 0; _i4 < pchilds.length; _i4++) if (pchilds[_i4] === T) break;
                            if (_i4 < pchilds.length) for (_i4++; _i4 < pchilds.length; _i4++) matchAndTake(pchilds[_i4]);
                        }
                    } else if (op === "../") {
                        /*  direct parent  */
                        var _parent5 = _this3.adapter.getParentNode(T, t);
                        if (_parent5 !== null) matchAndTake(_parent5);
                    } else if (op === "..//") {
                        /*  transitive parents  */
                        var node = T;
                        for (;;) {
                            var _parent6 = _this3.adapter.getParentNode(node, t);
                            if (_parent6 === null) break;
                            matchAndTake(_parent6);
                            node = _parent6;
                        }
                    } else if (op === "<//") {
                        (function () {
                            /*  transitive preceding nodes  */
                            var ctx = { sentinel: T, take: true };
                            for (;;) {
                                var _parent7 = _this3.adapter.getParentNode(T, "*");
                                if (_parent7 === null) break;
                                T = _parent7;
                            }
                            var walk = function walk(T) {
                                if (T === ctx.sentinel) ctx.take = false;
                                if (ctx.take) matchAndTake(T);
                                if (ctx.take) _this3.adapter.getChildNodes(T, t).forEach(function (T) {
                                    return walk(T);
                                }); /* RECURSION */
                            };
                            if (T !== ctx.sentinel) {
                                matchAndTake(T);
                                _this3.adapter.getChildNodes(T, t).forEach(function (T) {
                                    return walk(T);
                                });
                            }
                            nodes = nodes.reverse();
                        })();
                    } else if (op === ">//") {
                        (function () {
                            /*  transitive following nodes  */
                            var ctx = { sentinel: T, take: false };
                            for (;;) {
                                var _parent8 = _this3.adapter.getParentNode(T, "*");
                                if (_parent8 === null) break;
                                T = _parent8;
                            }
                            var walk = function walk(T) {
                                if (ctx.take) matchAndTake(T);
                                if (T === ctx.sentinel) ctx.take = true;
                                _this3.adapter.getChildNodes(T, t).forEach(function (T) {
                                    return walk(T);
                                }); /* RECURSION */
                            };
                            _this3.adapter.getChildNodes(T, t).forEach(function (T) {
                                return walk(T);
                            });
                        })();
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
            result = _astqUtilJs2["default"].truthy(result);
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
            if (!_astqUtilJs2["default"].truthy(result)) result = this.execExpr(Q.childs()[1], T);
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprConditionalTernary",
        value: function execExprConditionalTernary(Q, T) {
            this.traceBegin(Q, T);
            var result = this.execExpr(Q.childs()[0], T);
            if (_astqUtilJs2["default"].truthy(result)) result = this.execExpr(Q.childs()[1], T);else result = this.execExpr(Q.childs()[2], T);
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
                    result = _astqUtilJs2["default"].truthy(this.execExpr(Q.childs()[0], T));
                    if (result) result = result && _astqUtilJs2["default"].truthy(this.execExpr(Q.childs()[1], T));
                    break;
                case "||":
                    result = _astqUtilJs2["default"].truthy(this.execExpr(Q.childs()[0], T));
                    if (!result) result = result || _astqUtilJs2["default"].truthy(this.execExpr(Q.childs()[1], T));
                    break;
            }
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprBitwise",
        value: function execExprBitwise(Q, T) {
            this.traceBegin(Q, T);
            var v1 = _astqUtilJs2["default"].coerce(this.execExpr(Q.childs()[0], T), "number");
            var v2 = _astqUtilJs2["default"].coerce(this.execExpr(Q.childs()[1], T), "number");
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
                    result = _astqUtilJs2["default"].coerce(v1, "number") <= _astqUtilJs2["default"].coerce(v2, "number");break;
                case ">=":
                    result = _astqUtilJs2["default"].coerce(v1, "number") >= _astqUtilJs2["default"].coerce(v2, "number");break;
                case "<":
                    result = _astqUtilJs2["default"].coerce(v1, "number") < _astqUtilJs2["default"].coerce(v2, "number");break;
                case ">":
                    result = _astqUtilJs2["default"].coerce(v1, "number") > _astqUtilJs2["default"].coerce(v2, "number");break;
                case "=~":
                    result = _astqUtilJs2["default"].coerce(v1, "string").match(_astqUtilJs2["default"].coerce(v2, "regexp")) !== null;break;
                case "!~":
                    result = _astqUtilJs2["default"].coerce(v1, "string").match(_astqUtilJs2["default"].coerce(v2, "regexp")) === null;break;
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
                    if (typeof v1 === "string") result = v1 + _astqUtilJs2["default"].coerce(v2, "string");else result = _astqUtilJs2["default"].coerce(v1, "number") + _astqUtilJs2["default"].coerce(v2, "number");
                    break;
                case "-":
                    result = _astqUtilJs2["default"].coerce(v1, "number") + _astqUtilJs2["default"].coerce(v2, "number");break;
                case "*":
                    result = _astqUtilJs2["default"].coerce(v1, "number") * _astqUtilJs2["default"].coerce(v2, "number");break;
                case "/":
                    result = _astqUtilJs2["default"].coerce(v1, "number") / _astqUtilJs2["default"].coerce(v2, "number");break;
                case "%":
                    result = _astqUtilJs2["default"].coerce(v1, "number") % _astqUtilJs2["default"].coerce(v2, "number");break;
                case "**":
                    result = Math.pow(_astqUtilJs2["default"].coerce(v1, "number"), _astqUtilJs2["default"].coerce(v2, "number"));break;
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
                    result = !_astqUtilJs2["default"].coerce(v, "boolean");break;
                case "~":
                    result = ~_astqUtilJs2["default"].coerce(v, "number");break;
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
})(_astqQueryTraceJs2["default"]);

exports["default"] = ASTQQueryExec;
module.exports = exports["default"];

},{"./astq-query-trace.js":8,"./astq-util.js":10}],8:[function(require,module,exports){
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

/* eslint no-console: 0 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _astqUtilJs = require("./astq-util.js");

var _astqUtilJs2 = _interopRequireDefault(_astqUtilJs);

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
            var prefix1 = _astqUtilJs2["default"].pad("", 4 * depth);
            depth = 0;
            node = T;
            while ((node = this.adapter.getParentNode(node, "*")) !== null) depth++;
            var prefix2 = _astqUtilJs2["default"].pad("", 4 * depth);
            return { prefix1: prefix1, prefix2: prefix2 };
        }

        /*  begin tracing step  */
    }, {
        key: "traceBegin",
        value: function traceBegin(Q, T) {
            if (!this.trace) return;

            var _prefixOf = this.prefixOf(Q, T);

            var prefix1 = _prefixOf.prefix1;
            var prefix2 = _prefixOf.prefix2;

            console.log("ASTQ: execute: | " + _astqUtilJs2["default"].pad(prefix1 + Q.type() + " (", -60) + " | " + prefix2 + this.adapter.getNodeType(T));
        }

        /*  end tracing step  */
    }, {
        key: "traceEnd",
        value: function traceEnd(Q, T, val) {
            var _this = this;

            if (!this.trace) return;

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
            console.log("ASTQ: execute: | " + _astqUtilJs2["default"].pad(prefix1 + "): " + result, -60) + " | " + prefix2 + this.adapter.getNodeType(T));
        }
    }]);

    return ASTQQueryTrace;
})();

exports["default"] = ASTQQueryTrace;
module.exports = exports["default"];

},{"./astq-util.js":10}],9:[function(require,module,exports){
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
/* eslint no-console: 0 */

/*  load external dependencies  */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*  get query executor  */

var _astqQueryExecJs = require("./astq-query-exec.js");

var _astqQueryExecJs2 = _interopRequireDefault(_astqQueryExecJs);

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
        peg$c14 = "-//",
        peg$c15 = { type: "literal", value: "-//", description: "\"-//\"" },
        peg$c16 = "-/",
        peg$c17 = { type: "literal", value: "-/", description: "\"-/\"" },
        peg$c18 = "+//",
        peg$c19 = { type: "literal", value: "+//", description: "\"+//\"" },
        peg$c20 = "+/",
        peg$c21 = { type: "literal", value: "+/", description: "\"+/\"" },
        peg$c22 = "..//",
        peg$c23 = { type: "literal", value: "..//", description: "\"..//\"" },
        peg$c24 = "../",
        peg$c25 = { type: "literal", value: "../", description: "\"../\"" },
        peg$c26 = "<//",
        peg$c27 = { type: "literal", value: "<//", description: "\"<//\"" },
        peg$c28 = ">//",
        peg$c29 = { type: "literal", value: ">//", description: "\">//\"" },
        peg$c30 = function(op, t) {
                    return ast("Axis").set({ op: op, type: t !== null ? t : "*" })
                },
        peg$c31 = ":",
        peg$c32 = { type: "literal", value: ":", description: "\":\"" },
        peg$c33 = function(id) {
                    return id
                },
        peg$c34 = function(id) {
                    return ast("Match").merge(id)
                },
        peg$c35 = "*",
        peg$c36 = { type: "literal", value: "*", description: "\"*\"" },
        peg$c37 = function() {
                    return ast("Match").set({ id: "*" })
                },
        peg$c38 = "[",
        peg$c39 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c40 = "]",
        peg$c41 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c42 = function(e) {
                    return ast("Filter").add(e)
                },
        peg$c43 = "?:",
        peg$c44 = { type: "literal", value: "?:", description: "\"?:\"" },
        peg$c45 = function(e1, e2) {
                    return ast("ConditionalBinary").add(e1, e2)
                },
        peg$c46 = "?",
        peg$c47 = { type: "literal", value: "?", description: "\"?\"" },
        peg$c48 = function(e1, e2, e3) {
                    return ast("ConditionalTernary").add(e1, e2, e3)
                },
        peg$c49 = "||",
        peg$c50 = { type: "literal", value: "||", description: "\"||\"" },
        peg$c51 = function(e1, op, e2) {
                    return ast("Logical").set({ op: op }).add(e1, e2)
                },
        peg$c52 = "&&",
        peg$c53 = { type: "literal", value: "&&", description: "\"&&\"" },
        peg$c54 = "|",
        peg$c55 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c56 = function(e1, op, e2) {
                    return ast("Bitwise").set({ op: op }).add(e1, e2)
                },
        peg$c57 = "^",
        peg$c58 = { type: "literal", value: "^", description: "\"^\"" },
        peg$c59 = "&",
        peg$c60 = { type: "literal", value: "&", description: "\"&\"" },
        peg$c61 = "==",
        peg$c62 = { type: "literal", value: "==", description: "\"==\"" },
        peg$c63 = "!=",
        peg$c64 = { type: "literal", value: "!=", description: "\"!=\"" },
        peg$c65 = "<=",
        peg$c66 = { type: "literal", value: "<=", description: "\"<=\"" },
        peg$c67 = ">=",
        peg$c68 = { type: "literal", value: ">=", description: "\">=\"" },
        peg$c69 = "<",
        peg$c70 = { type: "literal", value: "<", description: "\"<\"" },
        peg$c71 = ">",
        peg$c72 = { type: "literal", value: ">", description: "\">\"" },
        peg$c73 = "=~",
        peg$c74 = { type: "literal", value: "=~", description: "\"=~\"" },
        peg$c75 = "!~",
        peg$c76 = { type: "literal", value: "!~", description: "\"!~\"" },
        peg$c77 = function(e1, op, e2) {
                    return ast("Relational").set({ op: op }).add(e1, e2)
                },
        peg$c78 = "<<",
        peg$c79 = { type: "literal", value: "<<", description: "\"<<\"" },
        peg$c80 = ">>",
        peg$c81 = { type: "literal", value: ">>", description: "\">>\"" },
        peg$c82 = "+",
        peg$c83 = { type: "literal", value: "+", description: "\"+\"" },
        peg$c84 = "-",
        peg$c85 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c86 = function(e1, op, e2) {
                    return ast("Arithmetical").set({ op: op }).add(e1, e2)
                },
        peg$c87 = "**",
        peg$c88 = { type: "literal", value: "**", description: "\"**\"" },
        peg$c89 = "%",
        peg$c90 = { type: "literal", value: "%", description: "\"%\"" },
        peg$c91 = "!",
        peg$c92 = { type: "literal", value: "!", description: "\"!\"" },
        peg$c93 = "~",
        peg$c94 = { type: "literal", value: "~", description: "\"~\"" },
        peg$c95 = function(op, e) {
                    return ast("Unary").set({ op: op }).add(e)
                },
        peg$c96 = "(",
        peg$c97 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c98 = ")",
        peg$c99 = { type: "literal", value: ")", description: "\")\"" },
        peg$c100 = function(id, p) {
                    return ast("FuncCall").merge(id).add(p)
                },
        peg$c101 = function(f, l) { /* RECURSION */
                    return unroll(f, l, 3)
                },
        peg$c102 = { type: "other", description: "node attribute" },
        peg$c103 = "@",
        peg$c104 = { type: "literal", value: "@", description: "\"@\"" },
        peg$c105 = function(id) {
                    return ast("Attribute").merge(id)
                },
        peg$c106 = { type: "other", description: "query parameter reference" },
        peg$c107 = "{",
        peg$c108 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c109 = "}",
        peg$c110 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c111 = function(name) {
                    return ast("Param").merge(name)
                },
        peg$c112 = function(e) {  /* RECURSION */
                     return e
                },
        peg$c113 = { type: "other", description: "identifier" },
        peg$c114 = void 0,
        peg$c115 = /^[a-zA-Z_]/,
        peg$c116 = { type: "class", value: "[a-zA-Z_]", description: "[a-zA-Z_]" },
        peg$c117 = /^[a-zA-Z0-9_\-]/,
        peg$c118 = { type: "class", value: "[a-zA-Z0-9_\\-]", description: "[a-zA-Z0-9_\\-]" },
        peg$c119 = function(id) {
                    return ast("Identifier").set({ id: id })
                },
        peg$c120 = { type: "other", description: "quoted string literal" },
        peg$c121 = "\"",
        peg$c122 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c123 = /^[^"]/,
        peg$c124 = { type: "class", value: "[^\"]", description: "[^\"]" },
        peg$c125 = function(s) {
                    return ast("LiteralString").set({ value: s.join("") })
                },
        peg$c126 = "'",
        peg$c127 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c128 = "\\'",
        peg$c129 = { type: "literal", value: "\\'", description: "\"\\\\'\"" },
        peg$c130 = /^[^']/,
        peg$c131 = { type: "class", value: "[^']", description: "[^']" },
        peg$c132 = function(t) {
                    return ast("LiteralString").set({ value: t.replace(/\\'/g, "'") })
                },
        peg$c133 = { type: "other", description: "escaped string character" },
        peg$c134 = "\\\\",
        peg$c135 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c136 = function() { return "\\"   },
        peg$c137 = "\\\"",
        peg$c138 = { type: "literal", value: "\\\"", description: "\"\\\\\\\"\"" },
        peg$c139 = function() { return "\""   },
        peg$c140 = function() { return "'"    },
        peg$c141 = "\\b",
        peg$c142 = { type: "literal", value: "\\b", description: "\"\\\\b\"" },
        peg$c143 = function() { return "\b"   },
        peg$c144 = "\\v",
        peg$c145 = { type: "literal", value: "\\v", description: "\"\\\\v\"" },
        peg$c146 = function() { return "\x0B" },
        peg$c147 = "\\f",
        peg$c148 = { type: "literal", value: "\\f", description: "\"\\\\f\"" },
        peg$c149 = function() { return "\f"   },
        peg$c150 = "\\t",
        peg$c151 = { type: "literal", value: "\\t", description: "\"\\\\t\"" },
        peg$c152 = function() { return "\t"   },
        peg$c153 = "\\r",
        peg$c154 = { type: "literal", value: "\\r", description: "\"\\\\r\"" },
        peg$c155 = function() { return "\r"   },
        peg$c156 = "\\n",
        peg$c157 = { type: "literal", value: "\\n", description: "\"\\\\n\"" },
        peg$c158 = function() { return "\n"   },
        peg$c159 = "\\e",
        peg$c160 = { type: "literal", value: "\\e", description: "\"\\\\e\"" },
        peg$c161 = function() { return "\x1B" },
        peg$c162 = "\\x",
        peg$c163 = { type: "literal", value: "\\x", description: "\"\\\\x\"" },
        peg$c164 = /^[0-9a-fA-F]/,
        peg$c165 = { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
        peg$c166 = function(n) {
                    return String.fromCharCode(parseInt(n, 16))
                },
        peg$c167 = "\\u",
        peg$c168 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c169 = { type: "other", description: "regular expression literal" },
        peg$c170 = "`",
        peg$c171 = { type: "literal", value: "`", description: "\"`\"" },
        peg$c172 = "\\`",
        peg$c173 = { type: "literal", value: "\\`", description: "\"\\\\`\"" },
        peg$c174 = /^[^`]/,
        peg$c175 = { type: "class", value: "[^`]", description: "[^`]" },
        peg$c176 = function(re) {
                    var v
                    try { v = new RegExp(re.replace(/\\`/g, "`")) }
                    catch (e) { error(e.message) }
                    return ast("LiteralRegExp").set({ value: v })
                },
        peg$c177 = { type: "other", description: "numeric literal" },
        peg$c178 = /^[+\-]/,
        peg$c179 = { type: "class", value: "[+\\-]", description: "[+\\-]" },
        peg$c180 = "0b",
        peg$c181 = { type: "literal", value: "0b", description: "\"0b\"" },
        peg$c182 = /^[01]/,
        peg$c183 = { type: "class", value: "[01]", description: "[01]" },
        peg$c184 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 2) })
                },
        peg$c185 = "0o",
        peg$c186 = { type: "literal", value: "0o", description: "\"0o\"" },
        peg$c187 = /^[0-7]/,
        peg$c188 = { type: "class", value: "[0-7]", description: "[0-7]" },
        peg$c189 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 8) })
                },
        peg$c190 = "0x",
        peg$c191 = { type: "literal", value: "0x", description: "\"0x\"" },
        peg$c192 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 16) })
                },
        peg$c193 = /^[0-9]/,
        peg$c194 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c195 = ".",
        peg$c196 = { type: "literal", value: ".", description: "\".\"" },
        peg$c197 = /^[eE]/,
        peg$c198 = { type: "class", value: "[eE]", description: "[eE]" },
        peg$c199 = function(n) {
                    return ast("LiteralNumber").set({ value: parseFloat(n) })
                },
        peg$c200 = function(n) {
                    return ast("LiteralNumber").set({ value: parseInt(n, 10) })
                },
        peg$c201 = { type: "other", description: "global value" },
        peg$c202 = "true",
        peg$c203 = { type: "literal", value: "true", description: "\"true\"" },
        peg$c204 = function() { return ast("LiteralValue").set({ value: true      }) },
        peg$c205 = "false",
        peg$c206 = { type: "literal", value: "false", description: "\"false\"" },
        peg$c207 = function() { return ast("LiteralValue").set({ value: false     }) },
        peg$c208 = "null",
        peg$c209 = { type: "literal", value: "null", description: "\"null\"" },
        peg$c210 = function() { return ast("LiteralValue").set({ value: null      }) },
        peg$c211 = "NaN",
        peg$c212 = { type: "literal", value: "NaN", description: "\"NaN\"" },
        peg$c213 = function() { return ast("LiteralValue").set({ value: NaN       }) },
        peg$c214 = "undefined",
        peg$c215 = { type: "literal", value: "undefined", description: "\"undefined\"" },
        peg$c216 = function() { return ast("LiteralValue").set({ value: undefined }) },
        peg$c217 = { type: "other", description: "optional blank" },
        peg$c218 = { type: "other", description: "multi-line comment" },
        peg$c219 = "/*",
        peg$c220 = { type: "literal", value: "/*", description: "\"/*\"" },
        peg$c221 = "*/",
        peg$c222 = { type: "literal", value: "*/", description: "\"*/\"" },
        peg$c223 = { type: "any", description: "any character" },
        peg$c224 = { type: "other", description: "any whitespaces" },
        peg$c225 = /^[ \t\r\n]/,
        peg$c226 = { type: "class", value: "[ \\t\\r\\n]", description: "[ \\t\\r\\n]" },
        peg$c227 = { type: "other", description: "end of file" },

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
                    if (s2 === peg$FAILED) {
                      if (input.substr(peg$currPos, 3) === peg$c26) {
                        s2 = peg$c26;
                        peg$currPos += 3;
                      } else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c27); }
                      }
                      if (s2 === peg$FAILED) {
                        if (input.substr(peg$currPos, 3) === peg$c28) {
                          s2 = peg$c28;
                          peg$currPos += 3;
                        } else {
                          s2 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c29); }
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
          s1 = peg$c30(s1, s2);
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
        s1 = peg$c31;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
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
          s1 = peg$c33(s2);
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
        s1 = peg$c34(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 42) {
          s1 = peg$c35;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c36); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c37();
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
        s1 = peg$c38;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c39); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexprConditional();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c40;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c41); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c42(s3);
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
          if (input.substr(peg$currPos, 2) === peg$c43) {
            s3 = peg$c43;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c44); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprLogicalOr();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c45(s1, s5);
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
              s3 = peg$c46;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c47); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseexprLogicalOr();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 58) {
                      s7 = peg$c31;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c32); }
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parseexprLogicalOr();
                        if (s9 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c48(s1, s5, s9);
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
          if (input.substr(peg$currPos, 2) === peg$c49) {
            s4 = peg$c49;
            peg$currPos += 2;
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
              s5 = peg$parseexprLogicalOr();
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
          if (input.substr(peg$currPos, 2) === peg$c52) {
            s4 = peg$c52;
            peg$currPos += 2;
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
              s5 = peg$parseexprLogicalAnd();
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
              s5 = peg$parseexprBitwiseOr();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c56(s1, s3, s5);
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
            s4 = peg$c57;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c58); }
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
                s1 = peg$c56(s1, s3, s5);
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
            s4 = peg$c59;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c60); }
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
                s1 = peg$c56(s1, s3, s5);
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
              if (input.substr(peg$currPos, 2) === peg$c65) {
                s4 = peg$c65;
                peg$currPos += 2;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c66); }
              }
              if (s4 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c67) {
                  s4 = peg$c67;
                  peg$currPos += 2;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c68); }
                }
                if (s4 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 60) {
                    s4 = peg$c69;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c70); }
                  }
                  if (s4 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 62) {
                      s4 = peg$c71;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c72); }
                    }
                    if (s4 === peg$FAILED) {
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
                s1 = peg$c77(s1, s3, s5);
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
          if (input.substr(peg$currPos, 2) === peg$c78) {
            s4 = peg$c78;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c79); }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c80) {
              s4 = peg$c80;
              peg$currPos += 2;
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
              s5 = peg$parseexprBitwiseShift();
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c56(s1, s3, s5);
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
            s4 = peg$c82;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c83); }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
              s4 = peg$c84;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c85); }
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
                s1 = peg$c86(s1, s3, s5);
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
          if (input.substr(peg$currPos, 2) === peg$c87) {
            s4 = peg$c87;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c88); }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 42) {
              s4 = peg$c35;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c36); }
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
                  s4 = peg$c89;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c90); }
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
                s1 = peg$c86(s1, s3, s5);
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
        s2 = peg$c91;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c92); }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 126) {
          s2 = peg$c93;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c94); }
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
          s1 = peg$c95(s1, s2);
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
            s3 = peg$c96;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c97); }
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
                    s7 = peg$c98;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c99); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c100(s1, s5);
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
          s1 = peg$c101(s1, s2);
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
        s1 = peg$c103;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c104); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseid();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c105(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c102); }
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
        s1 = peg$c107;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c108); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseid();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s5 = peg$c109;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c110); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c111(s3);
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
        if (peg$silentFails === 0) { peg$fail(peg$c106); }
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
        s1 = peg$c96;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c97); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexprConditional();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c98;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c99); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c112(s3);
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
        s3 = peg$c114;
      } else {
        peg$currPos = s3;
        s3 = peg$c0;
      }
      if (s3 !== peg$FAILED) {
        if (peg$c115.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c116); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c117.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c118); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c117.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c118); }
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
        s1 = peg$c119(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c113); }
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
        s1 = peg$c121;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c122); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsestringEscapedChar();
        if (s3 === peg$FAILED) {
          if (peg$c123.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c124); }
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsestringEscapedChar();
          if (s3 === peg$FAILED) {
            if (peg$c123.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c124); }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s3 = peg$c121;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c122); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c125(s2);
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
          s1 = peg$c126;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c127); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = [];
          if (input.substr(peg$currPos, 2) === peg$c128) {
            s4 = peg$c128;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c129); }
          }
          if (s4 === peg$FAILED) {
            if (peg$c130.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c131); }
            }
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            if (input.substr(peg$currPos, 2) === peg$c128) {
              s4 = peg$c128;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c129); }
            }
            if (s4 === peg$FAILED) {
              if (peg$c130.test(input.charAt(peg$currPos))) {
                s4 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c131); }
              }
            }
          }
          if (s3 !== peg$FAILED) {
            s3 = input.substring(s2, peg$currPos);
          }
          s2 = s3;
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s3 = peg$c126;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c127); }
            }
            if (s3 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c132(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c120); }
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
      if (input.substr(peg$currPos, 2) === peg$c134) {
        s1 = peg$c134;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c135); }
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
          if (input.charCodeAt(peg$currPos) === 39) {
            s1 = peg$c126;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c127); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c140();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c141) {
              s1 = peg$c141;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c142); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c143();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c144) {
                s1 = peg$c144;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c145); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c146();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c147) {
                  s1 = peg$c147;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c148); }
                }
                if (s1 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c149();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c150) {
                    s1 = peg$c150;
                    peg$currPos += 2;
                  } else {
                    s1 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c151); }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$reportedPos = s0;
                    s1 = peg$c152();
                  }
                  s0 = s1;
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 2) === peg$c153) {
                      s1 = peg$c153;
                      peg$currPos += 2;
                    } else {
                      s1 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c154); }
                    }
                    if (s1 !== peg$FAILED) {
                      peg$reportedPos = s0;
                      s1 = peg$c155();
                    }
                    s0 = s1;
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos;
                      if (input.substr(peg$currPos, 2) === peg$c156) {
                        s1 = peg$c156;
                        peg$currPos += 2;
                      } else {
                        s1 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c157); }
                      }
                      if (s1 !== peg$FAILED) {
                        peg$reportedPos = s0;
                        s1 = peg$c158();
                      }
                      s0 = s1;
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (input.substr(peg$currPos, 2) === peg$c159) {
                          s1 = peg$c159;
                          peg$currPos += 2;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c160); }
                        }
                        if (s1 !== peg$FAILED) {
                          peg$reportedPos = s0;
                          s1 = peg$c161();
                        }
                        s0 = s1;
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
                            if (peg$c164.test(input.charAt(peg$currPos))) {
                              s4 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s4 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c165); }
                            }
                            if (s4 !== peg$FAILED) {
                              if (peg$c164.test(input.charAt(peg$currPos))) {
                                s5 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c165); }
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
                              s1 = peg$c166(s2);
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
                            if (input.substr(peg$currPos, 2) === peg$c167) {
                              s1 = peg$c167;
                              peg$currPos += 2;
                            } else {
                              s1 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c168); }
                            }
                            if (s1 !== peg$FAILED) {
                              s2 = peg$currPos;
                              s3 = peg$currPos;
                              if (peg$c164.test(input.charAt(peg$currPos))) {
                                s4 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s4 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c165); }
                              }
                              if (s4 !== peg$FAILED) {
                                if (peg$c164.test(input.charAt(peg$currPos))) {
                                  s5 = input.charAt(peg$currPos);
                                  peg$currPos++;
                                } else {
                                  s5 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c165); }
                                }
                                if (s5 !== peg$FAILED) {
                                  if (peg$c164.test(input.charAt(peg$currPos))) {
                                    s6 = input.charAt(peg$currPos);
                                    peg$currPos++;
                                  } else {
                                    s6 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c165); }
                                  }
                                  if (s6 !== peg$FAILED) {
                                    if (peg$c164.test(input.charAt(peg$currPos))) {
                                      s7 = input.charAt(peg$currPos);
                                      peg$currPos++;
                                    } else {
                                      s7 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c165); }
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
                                s1 = peg$c166(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c133); }
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
        s1 = peg$c170;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c171); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        if (input.substr(peg$currPos, 2) === peg$c172) {
          s4 = peg$c172;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c173); }
        }
        if (s4 === peg$FAILED) {
          if (peg$c174.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c175); }
          }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (input.substr(peg$currPos, 2) === peg$c172) {
            s4 = peg$c172;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c173); }
          }
          if (s4 === peg$FAILED) {
            if (peg$c174.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c175); }
            }
          }
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 96) {
            s3 = peg$c170;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c171); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c176(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c169); }
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
      if (peg$c178.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c179); }
      }
      if (s2 === peg$FAILED) {
        s2 = peg$c7;
      }
      if (s2 !== peg$FAILED) {
        s2 = input.substring(s1, peg$currPos);
      }
      s1 = s2;
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c180) {
          s2 = peg$c180;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c181); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];
          if (peg$c182.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c183); }
          }
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c182.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c183); }
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
            s1 = peg$c184(s1, s3);
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
        if (peg$c178.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c179); }
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c7;
        }
        if (s2 !== peg$FAILED) {
          s2 = input.substring(s1, peg$currPos);
        }
        s1 = s2;
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c185) {
            s2 = peg$c185;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c186); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = [];
            if (peg$c187.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c188); }
            }
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c187.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c188); }
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
              s1 = peg$c189(s1, s3);
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
          if (peg$c178.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c179); }
          }
          if (s2 === peg$FAILED) {
            s2 = peg$c7;
          }
          if (s2 !== peg$FAILED) {
            s2 = input.substring(s1, peg$currPos);
          }
          s1 = s2;
          if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c190) {
              s2 = peg$c190;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c191); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$currPos;
              s4 = [];
              if (peg$c164.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c165); }
              }
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  if (peg$c164.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c165); }
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
                s1 = peg$c192(s1, s3);
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
            if (peg$c178.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c179); }
            }
            if (s3 === peg$FAILED) {
              s3 = peg$c7;
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              if (peg$c193.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c194); }
              }
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c193.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c194); }
                }
              }
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s5 = peg$c195;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c196); }
                }
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  if (peg$c193.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c194); }
                  }
                  if (s7 !== peg$FAILED) {
                    while (s7 !== peg$FAILED) {
                      s6.push(s7);
                      if (peg$c193.test(input.charAt(peg$currPos))) {
                        s7 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c194); }
                      }
                    }
                  } else {
                    s6 = peg$c0;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    if (peg$c197.test(input.charAt(peg$currPos))) {
                      s8 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c198); }
                    }
                    if (s8 !== peg$FAILED) {
                      if (peg$c178.test(input.charAt(peg$currPos))) {
                        s9 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c179); }
                      }
                      if (s9 === peg$FAILED) {
                        s9 = peg$c7;
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        if (peg$c193.test(input.charAt(peg$currPos))) {
                          s11 = input.charAt(peg$currPos);
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c194); }
                        }
                        if (s11 !== peg$FAILED) {
                          while (s11 !== peg$FAILED) {
                            s10.push(s11);
                            if (peg$c193.test(input.charAt(peg$currPos))) {
                              s11 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s11 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c194); }
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
              s1 = peg$c199(s1);
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$currPos;
              s2 = peg$currPos;
              if (peg$c178.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c179); }
              }
              if (s3 === peg$FAILED) {
                s3 = peg$c7;
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                if (peg$c193.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c194); }
                }
                if (s5 !== peg$FAILED) {
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    if (peg$c193.test(input.charAt(peg$currPos))) {
                      s5 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c194); }
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
                s1 = peg$c200(s1);
              }
              s0 = s1;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c177); }
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
      if (input.substr(peg$currPos, 4) === peg$c202) {
        s1 = peg$c202;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c203); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c204();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c205) {
          s1 = peg$c205;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c206); }
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c207();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 4) === peg$c208) {
            s1 = peg$c208;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c209); }
          }
          if (s1 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c210();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 3) === peg$c211) {
              s1 = peg$c211;
              peg$currPos += 3;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c212); }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c213();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 9) === peg$c214) {
                s1 = peg$c214;
                peg$currPos += 9;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c215); }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c216();
              }
              s0 = s1;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c201); }
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
        if (peg$silentFails === 0) { peg$fail(peg$c217); }
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
      if (input.substr(peg$currPos, 2) === peg$c219) {
        s1 = peg$c219;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c220); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c221) {
          s5 = peg$c221;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c222); }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = peg$c114;
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
            if (peg$silentFails === 0) { peg$fail(peg$c223); }
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
          if (input.substr(peg$currPos, 2) === peg$c221) {
            s5 = peg$c221;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c222); }
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = peg$c114;
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
              if (peg$silentFails === 0) { peg$fail(peg$c223); }
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
          if (input.substr(peg$currPos, 2) === peg$c221) {
            s3 = peg$c221;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c222); }
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
        if (peg$silentFails === 0) { peg$fail(peg$c218); }
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
      if (peg$c225.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c226); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c225.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c226); }
          }
        }
      } else {
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c224); }
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
        if (peg$silentFails === 0) { peg$fail(peg$c223); }
      }
      peg$silentFails--;
      if (s1 === peg$FAILED) {
        s0 = peg$c114;
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c227); }
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

    /*  compile query selector into AST  */

    _createClass(ASTQQuery, [{
        key: "compile",
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

        /*  dump the query AST  */
    }, {
        key: "dump",
        value: function dump() {
            return this.ast.dump();
        }

        /*  execute the query AST onto node  */
    }, {
        key: "execute",
        value: function execute(node, adapter, params, funcs, trace) {
            if (trace) console.log("ASTQ: execute: +---------------------------------------" + "-----------------------+----------------------------------------");
            var qe = new _astqQueryExecJs2["default"](adapter, params, funcs, trace);
            return qe.execQuery(this.ast, node);
        }
    }]);

    return ASTQQuery;
})();

exports["default"] = ASTQQuery;
module.exports = exports["default"];

},{"./astq-query-exec.js":7,"asty":"asty","pegjs-util":"pegjs-util"}],10:[function(require,module,exports){
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

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

        /*  check whether value is "true" (or can be considered to be true)  */
    }, {
        key: "truthy",
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

        /*  coerce value to particular type  */
    }, {
        key: "coerce",
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
/* global 5: false */
/* global 1: false */
/* global 20150819:  false */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var version = {
    major: 1,
    minor: 5,
    micro: 1,
    date: 20150819
};

exports["default"] = version;
module.exports = exports["default"];

},{}],12:[function(require,module,exports){
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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*  load internal dependencies  */

var _astqAdapterJs = require("./astq-adapter.js");

var _astqAdapterJs2 = _interopRequireDefault(_astqAdapterJs);

var _astqAdapterAstyJs = require("./astq-adapter-asty.js");

var _astqAdapterAstyJs2 = _interopRequireDefault(_astqAdapterAstyJs);

var _astqAdapterMozastJs = require("./astq-adapter-mozast.js");

var _astqAdapterMozastJs2 = _interopRequireDefault(_astqAdapterMozastJs);

var _astqAdapterXmldomJs = require("./astq-adapter-xmldom.js");

var _astqAdapterXmldomJs2 = _interopRequireDefault(_astqAdapterXmldomJs);

var _astqFuncsJs = require("./astq-funcs.js");

var _astqFuncsJs2 = _interopRequireDefault(_astqFuncsJs);

var _astqFuncsStdJs = require("./astq-funcs-std.js");

var _astqFuncsStdJs2 = _interopRequireDefault(_astqFuncsStdJs);

var _astqQueryJs = require("./astq-query.js");

var _astqQueryJs2 = _interopRequireDefault(_astqQueryJs);

var _astqVersionJs = require("./astq-version.js");

/*  define the API class  */

var _astqVersionJs2 = _interopRequireDefault(_astqVersionJs);

var CacheLRU = require("cache-lru");
var ASTQ = (function () {
    /*  create a new ASTq instance  */

    function ASTQ() {
        _classCallCheck(this, ASTQ);

        /*  create adapter registry and pre-register standard adapters  */
        this._adapter = new _astqAdapterJs2["default"]();
        this._adapter.register(_astqAdapterMozastJs2["default"]);
        this._adapter.register(_astqAdapterXmldomJs2["default"]);
        this._adapter.register(_astqAdapterAstyJs2["default"]);

        /*  create function registry and pre-register standard functions  */
        this._funcs = new _astqFuncsJs2["default"]();
        for (var _name in _astqFuncsStdJs2["default"]) {
            this.func(_name, _astqFuncsStdJs2["default"][_name]);
        } /*  create LRU cache  */
        this._cache = new CacheLRU();
    }

    /*  return the version information  */

    _createClass(ASTQ, [{
        key: "version",
        value: function version() {
            return _astqVersionJs2["default"];
        }

        /*  switch to a custom adapter  */
    }, {
        key: "adapter",
        value: function adapter(_adapter) {
            if (arguments.length !== 1) throw new Error("ASTQ#adapter: invalid number of arguments");
            this._adapter.unregister();
            this._adapter.register(_adapter);
            return this;
        }

        /*  register an additional function  */
    }, {
        key: "func",
        value: function func(name, _func) {
            if (arguments.length !== 2) throw new Error("ASTQ#func: invalid number of arguments");
            this._funcs.register(name, _func);
            return this;
        }

        /*  configure the LRU cache limit  */
    }, {
        key: "cache",
        value: function cache(entries) {
            if (arguments.length !== 1) throw new Error("ASTQ#cache: invalid number of arguments");
            this._cache.limit(entries);
            return this;
        }

        /*  individual step 1: compile selector DSL into a query AST  */
    }, {
        key: "compile",
        value: function compile(selector, trace) {
            if (arguments.length < 1) throw new Error("ASTQ#compile: too less arguments");
            if (arguments.length > 2) throw new Error("ASTQ#compile: too many arguments");
            if (trace === undefined) trace = false;
            var query = this._cache.get(selector);
            if (query === undefined) {
                query = new _astqQueryJs2["default"]();
                query.compile(selector, trace);
                this._cache.set(selector, query);
            }
            return query;
        }

        /*  individual step 2: execute query AST onto node  */
    }, {
        key: "execute",
        value: function execute(node, query, params, trace) {
            if (arguments.length < 2) throw new Error("ASTQ#execute: too less arguments");
            if (arguments.length > 4) throw new Error("ASTQ#execute: too many arguments");
            if (params === undefined) params = {};
            if (trace === undefined) trace = false;
            var adapter = this._adapter.select(node);
            if (adapter === undefined) throw new Error("ASTQ#execute: no suitable adapter found for node");
            return query.execute(node, adapter, params, this._funcs, trace);
        }

        /*  all-in-one step: execute selector DSL onto node  */
    }, {
        key: "query",
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