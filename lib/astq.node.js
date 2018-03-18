/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

var ASTQAdapterASTY = function () {
    function ASTQAdapterASTY() {
        _classCallCheck(this, ASTQAdapterASTY);
    }

    _createClass(ASTQAdapterASTY, null, [{
        key: "taste",
        value: function taste(node) {
            return (typeof node === "undefined" ? "undefined" : _typeof(node)) === "object" && node !== null && typeof node.ASTy === "boolean";
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
}();

exports.default = ASTQAdapterASTY;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

var ASTQAdapterMozAST = function () {
    function ASTQAdapterMozAST() {
        _classCallCheck(this, ASTQAdapterMozAST);
    }

    _createClass(ASTQAdapterMozAST, null, [{
        key: "taste",
        value: function taste(node) {
            return (typeof node === "undefined" ? "undefined" : _typeof(node)) === "object" && node !== null && typeof node.type === "string" && node.type !== "";
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
                if (node.hasOwnProperty(field) && _this.taste(node[field])) childs.push(node[field]);else if (node.hasOwnProperty(field) && _typeof(node[field]) === "object" && node[field] instanceof Array) {
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
                if (node.hasOwnProperty(field) && _typeof(node[field]) !== "object" && field !== "type" && field !== "loc") names.push(field);
            }return names;
        }
    }, {
        key: "getNodeAttrValue",
        value: function getNodeAttrValue(node, attr) {
            if (node.hasOwnProperty(attr) && _typeof(node[attr]) !== "object" && attr !== "type" && attr !== "loc") return node[attr];else return undefined;
        }
    }]);

    return ASTQAdapterMozAST;
}();

exports.default = ASTQAdapterMozAST;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

var ASTQAdapterParse5 = function () {
    function ASTQAdapterParse5() {
        _classCallCheck(this, ASTQAdapterParse5);
    }

    _createClass(ASTQAdapterParse5, null, [{
        key: "taste",
        value: function taste(node) {
            /* global Node: true */
            return (typeof node === "undefined" ? "undefined" : _typeof(node)) === "object" && node !== null && !((typeof Node === "undefined" ? "undefined" : _typeof(Node)) === "object" && node instanceof Node) && typeof node.nodeName === "string" && node.nodeName !== "";
        }
    }, {
        key: "getParentNode",
        value: function getParentNode(node /*, type */) {
            return node.parentNode;
        }
    }, {
        key: "getChildNodes",
        value: function getChildNodes(node /*, type */) {
            return _typeof(node.childNodes) === "object" && node.childNodes instanceof Array ? node.childNodes : [];
        }
    }, {
        key: "getNodeType",
        value: function getNodeType(node) {
            return node.nodeName;
        }
    }, {
        key: "getNodeAttrNames",
        value: function getNodeAttrNames(node) {
            var attrs = ["value"];
            if (_typeof(node.attrs) === "object" && node.attrs instanceof Array) attrs = attrs.concat(node.attrs.map(function (n) {
                return n.name;
            }));
            return attrs;
        }
    }, {
        key: "getNodeAttrValue",
        value: function getNodeAttrValue(node, attr) {
            var value = void 0;
            if (attr === "value") value = node.value;else if (_typeof(node.attrs) === "object" && node.attrs instanceof Array) {
                var values = node.attrs.filter(function (n) {
                    return n.name === attr;
                }).map(function (n) {
                    return n.value;
                });
                if (values.length === 1) value = values[0];
            }
            return value;
        }
    }]);

    return ASTQAdapterParse5;
}();

exports.default = ASTQAdapterParse5;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

var ASTQAdapterXMLDOM = function () {
    function ASTQAdapterXMLDOM() {
        _classCallCheck(this, ASTQAdapterXMLDOM);
    }

    _createClass(ASTQAdapterXMLDOM, null, [{
        key: "taste",
        value: function taste(node) {
            /* global Node: true */
            return (typeof Node === "undefined" ? "undefined" : _typeof(Node)) === "object" && node !== null && node instanceof Node && (typeof node === "undefined" ? "undefined" : _typeof(node)) === "object" && typeof node.nodeType === "number" && typeof node.nodeName === "string";
        }
    }, {
        key: "getParentNode",
        value: function getParentNode(node /*, type */) {
            return node.parentNode;
        }
    }, {
        key: "getChildNodes",
        value: function getChildNodes(node /*, type */) {
            return _typeof(node.childNodes) === "object" && node.childNodes !== null && node.hasChildNodes() ? Array.prototype.slice.call(node.childNodes, 0) : [];
        }
    }, {
        key: "getNodeType",
        value: function getNodeType(node) {
            return typeof node.nodeName === "string" ? node.nodeName : "unknown";
        }
    }, {
        key: "getNodeAttrNames",
        value: function getNodeAttrNames(node) {
            return _typeof(node.attributes) === "object" && node.attributes !== null && node.hasAttributes() ? Array.prototype.slice.call(node.attributes, 0).map(function (n) {
                return n.nodeName;
            }) : [];
        }
    }, {
        key: "getNodeAttrValue",
        value: function getNodeAttrValue(node, attr) {
            return _typeof(node.attributes) === "object" && node.attributes !== null && node.hasAttributes() ? node.getAttribute(attr) : undefined;
        }
    }]);

    return ASTQAdapterXMLDOM;
}();

exports.default = ASTQAdapterXMLDOM;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

var ASTQAdapter = function () {
    function ASTQAdapter() {
        _classCallCheck(this, ASTQAdapter);

        this._adapters = [];
        return this;
    }

    _createClass(ASTQAdapter, [{
        key: "register",
        value: function register(adapter) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            this._adapters.unshift({ adapter: adapter, force: force });
            return this;
        }
    }, {
        key: "unregister",
        value: function unregister(adapter) {
            if (adapter === undefined) this._adapters = [];else {
                var adapters = [];
                for (var i = 0; i < this._adapters.length; i++) {
                    if (this._adapters[i].adapter !== adapter) adapters.push(this._adapters[i]);
                }this._adapters = adapters;
            }
            return this;
        }
    }, {
        key: "select",
        value: function select(node) {
            for (var i = 0; i < this._adapters.length; i++) {
                if (this._adapters[i].force || this._adapters[i].adapter.taste(node)) return this._adapters[i].adapter;
            }return undefined;
        }
    }]);

    return ASTQAdapter;
}();

exports.default = ASTQAdapter;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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
    while ((T = A.getParentNode(T, "*")) !== null) {
        parents.push(T);
    }return parents;
};

/*  the exported standard functions  */
var stdfuncs = {
    /*  type name of node  */
    "type": function type(A, T) {
        return A.getNodeType(T);
    },

    /*  attribute names of node  */
    "attrs": function attrs(A, T, sep) {
        if (sep === undefined) sep = " ";
        /* eslint no-console: 0 */
        return sep + A.getNodeAttrNames(T).join(sep) + sep;
    },

    /*  depth of node in tree  */
    "depth": function depth(A, T) {
        var depth = 1;
        var node = T;
        while ((node = A.getParentNode(node, "*")) !== null) {
            depth++;
        }return depth;
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
        if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object" && val instanceof Array) return val.length;else if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object") return Object.keys(val).length;else if (typeof val === "string") return val.length;else return String(val).length;
    },

    /*  check whether node is below another  */
    "below": function below(A, T, other) {
        if (!A.taste(other)) throw new Error("invalid argument to function \"below\" (node expected)");
        var node = T;
        while ((node = A.getParentNode(node, "*")) !== null) {
            if (node === other) return true;
        }return false;
    },

    /*  check whether node follows another  */
    "follows": function follows(A, T, other) {
        if (!A.taste(other)) throw new Error("invalid argument to function \"follows\" (node expected)");
        if (T === other) return false;
        var pathOfT = [T].concat(parents(A, T)).reverse();
        var pathOfOther = [other].concat(parents(A, other)).reverse();
        var len = Math.min(pathOfT.length, pathOfOther.length);
        var i = void 0;
        for (i = 0; i < len; i++) {
            if (pathOfT[i] !== pathOfOther[i]) break;
        }if (i === 0) throw new Error("internal error: root nodes have to be same same");else if (i === len) {
            if (pathOfOther.length < pathOfT.length) return true;else return false;
        } else return _pos(A, pathOfT[i]) > _pos(A, pathOfOther[i]);
    },

    /*  check whether node is in a list of nodes  */
    "in": function _in(A, T, val) {
        if (!((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object" && val instanceof Array)) throw new Error("invalid argument to function \"in\" (array expected)");
        for (var i = 0; i < val.length; i++) {
            if (val[i] === T) return true;
        }return false;
    },

    /*  retrieve a sub-string  */
    "substr": function substr(A, T, str, pos, len) {
        return String(str).substr(pos, len);
    },

    /*  retrieve index of a sub-string  */
    "index": function index(A, T, str, sub, from) {
        return String(str).indexOf(sub, from);
    },

    /*  remove whitespaces at begin and end of string  */
    "trim": function trim(A, T, str) {
        return String(str).trim();
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

exports.default = stdfuncs;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

var ASTQFuncs = function () {
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
}();

exports.default = ASTQFuncs;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _astqUtil = require("./astq-util.js");

var _astqUtil2 = _interopRequireDefault(_astqUtil);

var _astqQueryTrace = require("./astq-query-trace.js");

var _astqQueryTrace2 = _interopRequireDefault(_astqQueryTrace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **  ASTq -- Abstract Syntax Tree (AST) Query Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

var ASTQQueryExec = function (_ASTQQueryTrace) {
    _inherits(ASTQQueryExec, _ASTQQueryTrace);

    function ASTQQueryExec(adapter, params, funcs, trace) {
        _classCallCheck(this, ASTQQueryExec);

        var _this = _possibleConstructorReturn(this, (ASTQQueryExec.__proto__ || Object.getPrototypeOf(ASTQQueryExec)).call(this));

        _this.adapter = adapter;
        _this.params = params;
        _this.funcs = funcs;
        _this.trace = trace;
        return _this;
    }

    _createClass(ASTQQueryExec, [{
        key: "execQuery",
        value: function execQuery(Q, T) {
            var _this2 = this;

            this.traceBegin(Q, T);
            var output = [];

            /*  iterate over all query paths  */
            Q.childs().forEach(function (Q) {
                output = output.concat(_this2.execPath(Q, T));
            });

            this.traceEnd(Q, T, output);
            return output;
        }
    }, {
        key: "execPath",
        value: function execPath(Q, T) {
            var _this3 = this;

            this.traceBegin(Q, T);
            var nodes = [T];
            var result = [];
            var resultExplicit = false;

            /*  iterate over all steps of a query path  */
            Q.childs().forEach(function (Q) {
                var output = [];
                nodes.forEach(function (T) {
                    output = output.concat(_this3.execStep(Q, T));
                });
                nodes = output;
                if (Q.get("isResult")) {
                    resultExplicit = true;
                    result = result.concat(nodes);
                }
            });

            this.traceEnd(Q, T, nodes);
            return resultExplicit ? result : nodes;
        }
    }, {
        key: "execStep",
        value: function execStep(Q, T) {
            var _this4 = this;

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
                var type = _this4.adapter.getNodeType(T);
                if (id === "*" || id === type) {
                    var take = true;
                    if (filter !== null) if (!_this4.execFilter(filter, T)) take = false;
                    if (take) nodes.push(T);
                }
            };

            /*  determine nodes along axis which potentially might match  */
            if (axis !== null) {
                var op = axis.get("op");
                var t = axis.get("type");
                if (op === "/") {
                    /*  direct child nodes  */
                    this.adapter.getChildNodes(T, t).forEach(function (T) {
                        return matchAndTake(T);
                    });
                } else if (op === "//") {
                    /*  transitive child nodes  */
                    var walk = function walk(T) {
                        matchAndTake(T);
                        _this4.adapter.getChildNodes(T, t).forEach(function (T) {
                            return walk(T);
                        }); /* RECURSION */
                    };
                    this.adapter.getChildNodes(T, t).forEach(function (T) {
                        return walk(T);
                    });
                } else if (op === "./") {
                    /*  current node plus direct child nodes  */
                    matchAndTake(T);
                    this.adapter.getChildNodes(T, t).forEach(function (T) {
                        return matchAndTake(T);
                    });
                } else if (op === ".//") {
                    /*  current node plus transitive child nodes  */
                    matchAndTake(T);
                    var _walk = function _walk(T) {
                        matchAndTake(T);
                        _this4.adapter.getChildNodes(T, t).forEach(function (T) {
                            return _walk(T);
                        }); /* RECURSION */
                    };
                    this.adapter.getChildNodes(T, t).forEach(function (T) {
                        return _walk(T);
                    });
                } else if (op === "-/") {
                    /*  direct left sibling  */
                    var parent = this.adapter.getParentNode(T, "*");
                    if (parent !== null) {
                        var pchilds = this.adapter.getChildNodes(parent, t);
                        var leftSibling = null;
                        for (var _i = 0; _i < pchilds.length; _i++) {
                            if (pchilds[_i] === T) break;
                            leftSibling = pchilds[_i];
                        }
                        if (leftSibling !== null) matchAndTake(leftSibling);
                    }
                } else if (op === "-//") {
                    /*  transitive left siblings  */
                    var _parent = this.adapter.getParentNode(T, "*");
                    if (_parent !== null) {
                        var _pchilds = this.adapter.getChildNodes(_parent, t);
                        var _i2 = 0;
                        for (; _i2 < _pchilds.length; _i2++) {
                            if (_pchilds[_i2] === T) break;
                        }for (_i2--; _i2 >= 0; _i2--) {
                            matchAndTake(_pchilds[_i2]);
                        }
                    }
                } else if (op === "+/") {
                    /*  direct right sibling  */
                    var _parent2 = this.adapter.getParentNode(T, "*");
                    if (_parent2 !== null) {
                        var _pchilds2 = this.adapter.getChildNodes(_parent2, t);
                        var _i3 = void 0;
                        for (_i3 = 0; _i3 < _pchilds2.length; _i3++) {
                            if (_pchilds2[_i3] === T) break;
                        }if (_i3 < _pchilds2.length) matchAndTake(_pchilds2[++_i3]);
                    }
                } else if (op === "+//") {
                    /*  transitive right siblings  */
                    var _parent3 = this.adapter.getParentNode(T, "*");
                    if (_parent3 !== null) {
                        var _pchilds3 = this.adapter.getChildNodes(_parent3, t);
                        var _i4 = void 0;
                        for (_i4 = 0; _i4 < _pchilds3.length; _i4++) {
                            if (_pchilds3[_i4] === T) break;
                        }if (_i4 < _pchilds3.length) for (_i4++; _i4 < _pchilds3.length; _i4++) {
                            matchAndTake(_pchilds3[_i4]);
                        }
                    }
                } else if (op === "~/") {
                    /*  direct left and right sibling  */
                    var _parent4 = this.adapter.getParentNode(T, "*");
                    if (_parent4 !== null) {
                        var _pchilds4 = this.adapter.getChildNodes(_parent4, t);
                        var _i5 = void 0;
                        for (_i5 = 0; _i5 < _pchilds4.length; _i5++) {
                            if (_pchilds4[_i5] === T) break;
                        }if (_i5 > 0) matchAndTake(_pchilds4[_i5 - 1]);
                        if (_i5 < _pchilds4.length - 1) matchAndTake(_pchilds4[_i5 + 1]);
                    }
                } else if (op === "~//") {
                    /*  transitive left and right siblings  */
                    var _parent5 = this.adapter.getParentNode(T, "*");
                    if (_parent5 !== null) {
                        var _pchilds5 = this.adapter.getChildNodes(_parent5, t);
                        for (var _i6 = 0; _i6 < _pchilds5.length; _i6++) {
                            if (_pchilds5[_i6] !== T) matchAndTake(_pchilds5[_i6]);
                        }
                    }
                } else if (op === "../") {
                    /*  direct parent  */
                    var _parent6 = this.adapter.getParentNode(T, t);
                    if (_parent6 !== null) matchAndTake(_parent6);
                } else if (op === "..//") {
                    /*  transitive parents  */
                    var node = T;
                    for (;;) {
                        var _parent7 = this.adapter.getParentNode(node, t);
                        if (_parent7 === null) break;
                        matchAndTake(_parent7);
                        node = _parent7;
                    }
                } else if (op === "<//") {
                    /*  transitive preceding nodes  */
                    var ctx = { sentinel: T, take: true };
                    for (;;) {
                        var _parent8 = this.adapter.getParentNode(T, "*");
                        if (_parent8 === null) break;
                        T = _parent8;
                    }
                    var _walk2 = function _walk2(T) {
                        if (T === ctx.sentinel) ctx.take = false;
                        if (ctx.take) matchAndTake(T);
                        if (ctx.take) _this4.adapter.getChildNodes(T, t).forEach(function (T) {
                            return _walk2(T);
                        }); /* RECURSION */
                    };
                    if (T !== ctx.sentinel) {
                        matchAndTake(T);
                        this.adapter.getChildNodes(T, t).forEach(function (T) {
                            return _walk2(T);
                        });
                    }
                    nodes = nodes.reverse();
                } else if (op === ">//") {
                    /*  transitive following nodes  */
                    var _ctx = { sentinel: T, take: false };
                    for (;;) {
                        var _parent9 = this.adapter.getParentNode(T, "*");
                        if (_parent9 === null) break;
                        T = _parent9;
                    }
                    var _walk3 = function _walk3(T) {
                        if (_ctx.take) matchAndTake(T);
                        if (T === _ctx.sentinel) _ctx.take = true;
                        _this4.adapter.getChildNodes(T, t).forEach(function (T) {
                            return _walk3(T);
                        }); /* RECURSION */
                    };
                    this.adapter.getChildNodes(T, t).forEach(function (T) {
                        return _walk3(T);
                    });
                }
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
            result = _astqUtil2.default.truthy(result);
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
            if (!_astqUtil2.default.truthy(result)) result = this.execExpr(Q.childs()[1], T);
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprConditionalTernary",
        value: function execExprConditionalTernary(Q, T) {
            this.traceBegin(Q, T);
            var result = this.execExpr(Q.childs()[0], T);
            if (_astqUtil2.default.truthy(result)) result = this.execExpr(Q.childs()[1], T);else result = this.execExpr(Q.childs()[2], T);
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
                    result = _astqUtil2.default.truthy(this.execExpr(Q.childs()[0], T));
                    if (result) result = result && _astqUtil2.default.truthy(this.execExpr(Q.childs()[1], T));
                    break;
                case "||":
                    result = _astqUtil2.default.truthy(this.execExpr(Q.childs()[0], T));
                    if (!result) result = result || _astqUtil2.default.truthy(this.execExpr(Q.childs()[1], T));
                    break;
            }
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprBitwise",
        value: function execExprBitwise(Q, T) {
            this.traceBegin(Q, T);
            var v1 = _astqUtil2.default.coerce(this.execExpr(Q.childs()[0], T), "number");
            var v2 = _astqUtil2.default.coerce(this.execExpr(Q.childs()[1], T), "number");
            var result = void 0;
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
            var result = void 0;
            switch (Q.get("op")) {
                case "==":
                    result = v1 === v2;break;
                case "!=":
                    result = v1 !== v2;break;
                case "<=":
                    result = _astqUtil2.default.coerce(v1, "number") <= _astqUtil2.default.coerce(v2, "number");break;
                case ">=":
                    result = _astqUtil2.default.coerce(v1, "number") >= _astqUtil2.default.coerce(v2, "number");break;
                case "<":
                    result = _astqUtil2.default.coerce(v1, "number") < _astqUtil2.default.coerce(v2, "number");break;
                case ">":
                    result = _astqUtil2.default.coerce(v1, "number") > _astqUtil2.default.coerce(v2, "number");break;
                case "=~":
                    result = _astqUtil2.default.coerce(v1, "string").match(_astqUtil2.default.coerce(v2, "regexp")) !== null;break;
                case "!~":
                    result = _astqUtil2.default.coerce(v1, "string").match(_astqUtil2.default.coerce(v2, "regexp")) === null;break;
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
            var result = void 0;
            switch (Q.get("op")) {
                case "+":
                    if (typeof v1 === "string") result = v1 + _astqUtil2.default.coerce(v2, "string");else result = _astqUtil2.default.coerce(v1, "number") + _astqUtil2.default.coerce(v2, "number");
                    break;
                case "-":
                    result = _astqUtil2.default.coerce(v1, "number") + _astqUtil2.default.coerce(v2, "number");break;
                case "*":
                    result = _astqUtil2.default.coerce(v1, "number") * _astqUtil2.default.coerce(v2, "number");break;
                case "/":
                    result = _astqUtil2.default.coerce(v1, "number") / _astqUtil2.default.coerce(v2, "number");break;
                case "%":
                    result = _astqUtil2.default.coerce(v1, "number") % _astqUtil2.default.coerce(v2, "number");break;
                case "**":
                    result = Math.pow(_astqUtil2.default.coerce(v1, "number"), _astqUtil2.default.coerce(v2, "number"));break;
            }
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprUnary",
        value: function execExprUnary(Q, T) {
            this.traceBegin(Q, T);
            var v = this.execExpr(Q.childs()[0], T);
            var result = void 0;
            /* jscs: disable */
            switch (Q.get("op")) {
                case "!":
                    result = !_astqUtil2.default.coerce(v, "boolean");break;
                case "~":
                    result = ~_astqUtil2.default.coerce(v, "number");break;
            }
            /* jscs: enable */
            this.traceEnd(Q, T, result);
            return result;
        }
    }, {
        key: "execExprFuncCall",
        value: function execExprFuncCall(Q, T) {
            var _this5 = this;

            this.traceBegin(Q, T);
            var id = Q.get("id");
            var args = [this.adapter, T];
            Q.childs().forEach(function (Q) {
                args.push(_this5.execExpr(Q, T));
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
}(_astqQueryTrace2.default);

exports.default = ASTQQueryExec;

},{"./astq-query-trace.js":9,"./astq-util.js":11}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     **  ASTq -- Abstract Syntax Tree (AST) Query Engine
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     **  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

var _astqUtil = require("./astq-util.js");

var _astqUtil2 = _interopRequireDefault(_astqUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ASTQQueryTrace = function () {
    function ASTQQueryTrace() {
        _classCallCheck(this, ASTQQueryTrace);
    }

    _createClass(ASTQQueryTrace, [{
        key: "prefixOf",

        /*  determine output prefix based on tree depth  */
        value: function prefixOf(Q, T) {
            var depth = 0;
            var node = Q;
            while ((node = node.parent()) !== null) {
                depth++;
            }var prefix1 = _astqUtil2.default.pad("", 4 * depth);
            depth = 0;
            node = T;
            while ((node = this.adapter.getParentNode(node, "*")) !== null) {
                depth++;
            }var prefix2 = _astqUtil2.default.pad("", 4 * depth);
            return { prefix1: prefix1, prefix2: prefix2 };
        }

        /*  begin tracing step  */

    }, {
        key: "traceBegin",
        value: function traceBegin(Q, T) {
            if (!this.trace) return;

            var _prefixOf = this.prefixOf(Q, T),
                prefix1 = _prefixOf.prefix1,
                prefix2 = _prefixOf.prefix2;

            console.log("ASTQ: execute: | " + _astqUtil2.default.pad(prefix1 + Q.type() + " (", -60) + " | " + prefix2 + this.adapter.getNodeType(T));
        }

        /*  end tracing step  */

    }, {
        key: "traceEnd",
        value: function traceEnd(Q, T, val) {
            var _this = this;

            if (!this.trace) return;

            var _prefixOf2 = this.prefixOf(Q, T),
                prefix1 = _prefixOf2.prefix1,
                prefix2 = _prefixOf2.prefix2;

            var result = void 0;
            if (val === undefined) result = "undefined";else if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object" && val instanceof Array) {
                result = "[";
                val.forEach(function (node) {
                    result += "node(" + _this.adapter.getNodeType(node) + "),";
                });
                result = result.replace(/,$/, "") + "]";
            } else result = (typeof val === "undefined" ? "undefined" : _typeof(val)) + "(" + val + ")";
            if (result.length > 60) result = result.substr(0, 60) + "...";
            console.log("ASTQ: execute: | " + _astqUtil2.default.pad(prefix1 + "): " + result, -60) + " | " + prefix2 + this.adapter.getNodeType(T));
        }
    }]);

    return ASTQQueryTrace;
}();

exports.default = ASTQQueryTrace;

},{"./astq-util.js":11}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _astqQueryExec = require("./astq-query-exec.js");

var _astqQueryExec2 = _interopRequireDefault(_astqQueryExec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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
var ASTY = require("asty");

var PEGUtil = require("pegjs-util");

/*  get query parser (by loading and on-the-fly compiling PEG.js grammar)  */
var ASTQQueryParse = (/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */
(function() {
  "use strict";

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  peg$SyntaxError.buildMessage = function(expected, found) {
    var DESCRIBE_EXPECTATION_FNS = {
          literal: function(expectation) {
            return "\"" + literalEscape(expectation.text) + "\"";
          },

          "class": function(expectation) {
            var escapedParts = "",
                i;

            for (i = 0; i < expectation.parts.length; i++) {
              escapedParts += expectation.parts[i] instanceof Array
                ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
                : classEscape(expectation.parts[i]);
            }

            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
          },

          any: function(expectation) {
            return "any character";
          },

          end: function(expectation) {
            return "end of input";
          },

          other: function(expectation) {
            return expectation.description;
          }
        };

    function hex(ch) {
      return ch.charCodeAt(0).toString(16).toUpperCase();
    }

    function literalEscape(s) {
      return s
        .replace(/\\/g, '\\\\')
        .replace(/"/g,  '\\"')
        .replace(/\0/g, '\\0')
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
    }

    function classEscape(s) {
      return s
        .replace(/\\/g, '\\\\')
        .replace(/\]/g, '\\]')
        .replace(/\^/g, '\\^')
        .replace(/-/g,  '\\-')
        .replace(/\0/g, '\\0')
        .replace(/\t/g, '\\t')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
        .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
    }

    function describeExpectation(expectation) {
      return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
    }

    function describeExpected(expected) {
      var descriptions = new Array(expected.length),
          i, j;

      for (i = 0; i < expected.length; i++) {
        descriptions[i] = describeExpectation(expected[i]);
      }

      descriptions.sort();

      if (descriptions.length > 0) {
        for (i = 1, j = 1; i < descriptions.length; i++) {
          if (descriptions[i - 1] !== descriptions[i]) {
            descriptions[j] = descriptions[i];
            j++;
          }
        }
        descriptions.length = j;
      }

      switch (descriptions.length) {
        case 1:
          return descriptions[0];

        case 2:
          return descriptions[0] + " or " + descriptions[1];

        default:
          return descriptions.slice(0, -1).join(", ")
            + ", or "
            + descriptions[descriptions.length - 1];
      }
    }

    function describeFound(found) {
      return found ? "\"" + literalEscape(found) + "\"" : "end of input";
    }

    return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
  };

  function peg$parse(input, options) {
    options = options !== void 0 ? options : {};

    var peg$FAILED = {},

        peg$startRuleFunctions = { query: peg$parsequery },
        peg$startRuleFunction  = peg$parsequery,

        peg$c0 = function(qs) {
                    return qs
                },
        peg$c1 = ",",
        peg$c2 = peg$literalExpectation(",", false),
        peg$c3 = function(f, l) {
                    return ast("Query").add(unroll(f, l, 3))
                },
        peg$c4 = function(f, l) {
                    return ast("Path").add(unroll(f, l, 1))
                },
        peg$c5 = "!",
        peg$c6 = peg$literalExpectation("!", false),
        peg$c7 = function(a, m, r, f) {
                    return ast("Step").add(a, m, f).set(r !== null ? { isResult: true } : {})
                },
        peg$c8 = peg$otherExpectation("axis"),
        peg$c9 = "//",
        peg$c10 = peg$literalExpectation("//", false),
        peg$c11 = "/",
        peg$c12 = peg$literalExpectation("/", false),
        peg$c13 = "-//",
        peg$c14 = peg$literalExpectation("-//", false),
        peg$c15 = "-/",
        peg$c16 = peg$literalExpectation("-/", false),
        peg$c17 = "+//",
        peg$c18 = peg$literalExpectation("+//", false),
        peg$c19 = "+/",
        peg$c20 = peg$literalExpectation("+/", false),
        peg$c21 = "~//",
        peg$c22 = peg$literalExpectation("~//", false),
        peg$c23 = "~/",
        peg$c24 = peg$literalExpectation("~/", false),
        peg$c25 = "..//",
        peg$c26 = peg$literalExpectation("..//", false),
        peg$c27 = "../",
        peg$c28 = peg$literalExpectation("../", false),
        peg$c29 = ".//",
        peg$c30 = peg$literalExpectation(".//", false),
        peg$c31 = "./",
        peg$c32 = peg$literalExpectation("./", false),
        peg$c33 = "<//",
        peg$c34 = peg$literalExpectation("<//", false),
        peg$c35 = ">//",
        peg$c36 = peg$literalExpectation(">//", false),
        peg$c37 = function(op, t) {
                    return ast("Axis").set({ op: op, type: t !== null ? t : "*" })
                },
        peg$c38 = ":",
        peg$c39 = peg$literalExpectation(":", false),
        peg$c40 = function(id) {
                    return id.get("id")
                },
        peg$c41 = function(str) {
                    return str.get("value")
                },
        peg$c42 = function(id) {
                    return ast("Match").merge(id)
                },
        peg$c43 = function(str) {
                    return ast("Match").set({ id: str.get("value") })
                },
        peg$c44 = "*",
        peg$c45 = peg$literalExpectation("*", false),
        peg$c46 = function() {
                    return ast("Match").set({ id: "*" })
                },
        peg$c47 = "[",
        peg$c48 = peg$literalExpectation("[", false),
        peg$c49 = "]",
        peg$c50 = peg$literalExpectation("]", false),
        peg$c51 = function(e) {
                    return ast("Filter").add(e)
                },
        peg$c52 = "?:",
        peg$c53 = peg$literalExpectation("?:", false),
        peg$c54 = function(e1, e2) {
                    return ast("ConditionalBinary").add(e1, e2)
                },
        peg$c55 = "?",
        peg$c56 = peg$literalExpectation("?", false),
        peg$c57 = function(e1, e2, e3) {
                    return ast("ConditionalTernary").add(e1, e2, e3)
                },
        peg$c58 = "||",
        peg$c59 = peg$literalExpectation("||", false),
        peg$c60 = function(e1, op, e2) {
                    return ast("Logical").set({ op: op }).add(e1, e2)
                },
        peg$c61 = "&&",
        peg$c62 = peg$literalExpectation("&&", false),
        peg$c63 = "|",
        peg$c64 = peg$literalExpectation("|", false),
        peg$c65 = function(e1, op, e2) {
                    return ast("Bitwise").set({ op: op }).add(e1, e2)
                },
        peg$c66 = "^",
        peg$c67 = peg$literalExpectation("^", false),
        peg$c68 = "&",
        peg$c69 = peg$literalExpectation("&", false),
        peg$c70 = "==",
        peg$c71 = peg$literalExpectation("==", false),
        peg$c72 = "!=",
        peg$c73 = peg$literalExpectation("!=", false),
        peg$c74 = "<=",
        peg$c75 = peg$literalExpectation("<=", false),
        peg$c76 = ">=",
        peg$c77 = peg$literalExpectation(">=", false),
        peg$c78 = "<",
        peg$c79 = peg$literalExpectation("<", false),
        peg$c80 = ">",
        peg$c81 = peg$literalExpectation(">", false),
        peg$c82 = "=~",
        peg$c83 = peg$literalExpectation("=~", false),
        peg$c84 = "!~",
        peg$c85 = peg$literalExpectation("!~", false),
        peg$c86 = function(e1, op, e2) {
                    return ast("Relational").set({ op: op }).add(e1, e2)
                },
        peg$c87 = "<<",
        peg$c88 = peg$literalExpectation("<<", false),
        peg$c89 = ">>",
        peg$c90 = peg$literalExpectation(">>", false),
        peg$c91 = "+",
        peg$c92 = peg$literalExpectation("+", false),
        peg$c93 = "-",
        peg$c94 = peg$literalExpectation("-", false),
        peg$c95 = function(e1, op, e2) {
                    return ast("Arithmetical").set({ op: op }).add(e1, e2)
                },
        peg$c96 = "**",
        peg$c97 = peg$literalExpectation("**", false),
        peg$c98 = "%",
        peg$c99 = peg$literalExpectation("%", false),
        peg$c100 = "~",
        peg$c101 = peg$literalExpectation("~", false),
        peg$c102 = function(op, e) {
                    return ast("Unary").set({ op: op }).add(e)
                },
        peg$c103 = "(",
        peg$c104 = peg$literalExpectation("(", false),
        peg$c105 = ")",
        peg$c106 = peg$literalExpectation(")", false),
        peg$c107 = function(id, p) {
                    return ast("FuncCall").merge(id).add(p)
                },
        peg$c108 = function(f, l) { /* RECURSION */
                    return unroll(f, l, 3)
                },
        peg$c109 = peg$otherExpectation("node attribute"),
        peg$c110 = "@",
        peg$c111 = peg$literalExpectation("@", false),
        peg$c112 = function(id) {
                    return ast("Attribute").merge(id)
                },
        peg$c113 = function(str) {
                    return ast("Attribute").set({ id: str.get("value") })
                },
        peg$c114 = peg$otherExpectation("query parameter reference"),
        peg$c115 = "{",
        peg$c116 = peg$literalExpectation("{", false),
        peg$c117 = "}",
        peg$c118 = peg$literalExpectation("}", false),
        peg$c119 = function(name) {
                    return ast("Param").merge(name)
                },
        peg$c120 = function(e) {  /* RECURSION */
                     return e
                },
        peg$c121 = peg$otherExpectation("identifier"),
        peg$c122 = /^[a-zA-Z_]/,
        peg$c123 = peg$classExpectation([["a", "z"], ["A", "Z"], "_"], false, false),
        peg$c124 = /^[a-zA-Z0-9_\-]/,
        peg$c125 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", "-"], false, false),
        peg$c126 = function(id) {
                    return ast("Identifier").set({ id: id })
                },
        peg$c127 = peg$otherExpectation("quoted string literal"),
        peg$c128 = "\"",
        peg$c129 = peg$literalExpectation("\"", false),
        peg$c130 = /^[^"]/,
        peg$c131 = peg$classExpectation(["\""], true, false),
        peg$c132 = function(s) {
                    return ast("LiteralString").set({ value: s.join("") })
                },
        peg$c133 = "'",
        peg$c134 = peg$literalExpectation("'", false),
        peg$c135 = /^[^']/,
        peg$c136 = peg$classExpectation(["'"], true, false),
        peg$c137 = peg$otherExpectation("escaped double-quoted-string character"),
        peg$c138 = "\\\\",
        peg$c139 = peg$literalExpectation("\\\\", false),
        peg$c140 = function() { return "\\"   },
        peg$c141 = "\\\"",
        peg$c142 = peg$literalExpectation("\\\"", false),
        peg$c143 = function() { return "\""   },
        peg$c144 = "\\b",
        peg$c145 = peg$literalExpectation("\\b", false),
        peg$c146 = function() { return "\b"   },
        peg$c147 = "\\v",
        peg$c148 = peg$literalExpectation("\\v", false),
        peg$c149 = function() { return "\x0B" },
        peg$c150 = "\\f",
        peg$c151 = peg$literalExpectation("\\f", false),
        peg$c152 = function() { return "\f"   },
        peg$c153 = "\\t",
        peg$c154 = peg$literalExpectation("\\t", false),
        peg$c155 = function() { return "\t"   },
        peg$c156 = "\\r",
        peg$c157 = peg$literalExpectation("\\r", false),
        peg$c158 = function() { return "\r"   },
        peg$c159 = "\\n",
        peg$c160 = peg$literalExpectation("\\n", false),
        peg$c161 = function() { return "\n"   },
        peg$c162 = "\\e",
        peg$c163 = peg$literalExpectation("\\e", false),
        peg$c164 = function() { return "\x1B" },
        peg$c165 = "\\x",
        peg$c166 = peg$literalExpectation("\\x", false),
        peg$c167 = /^[0-9a-fA-F]/,
        peg$c168 = peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false),
        peg$c169 = function(n) {
                    return String.fromCharCode(parseInt(n, 16))
                },
        peg$c170 = "\\u",
        peg$c171 = peg$literalExpectation("\\u", false),
        peg$c172 = peg$otherExpectation("escaped single-quoted-string character"),
        peg$c173 = "\\'",
        peg$c174 = peg$literalExpectation("\\'", false),
        peg$c175 = function() { return "'"    },
        peg$c176 = peg$otherExpectation("regular expression literal"),
        peg$c177 = "`",
        peg$c178 = peg$literalExpectation("`", false),
        peg$c179 = "\\`",
        peg$c180 = peg$literalExpectation("\\`", false),
        peg$c181 = /^[^`]/,
        peg$c182 = peg$classExpectation(["`"], true, false),
        peg$c183 = function(re) {
                    var v
                    try { v = new RegExp(re.replace(/\\`/g, "`")) }
                    catch (e) { error(e.message) }
                    return ast("LiteralRegExp").set({ value: v })
                },
        peg$c184 = peg$otherExpectation("numeric literal"),
        peg$c185 = /^[+\-]/,
        peg$c186 = peg$classExpectation(["+", "-"], false, false),
        peg$c187 = "0b",
        peg$c188 = peg$literalExpectation("0b", false),
        peg$c189 = /^[01]/,
        peg$c190 = peg$classExpectation(["0", "1"], false, false),
        peg$c191 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 2) })
                },
        peg$c192 = "0o",
        peg$c193 = peg$literalExpectation("0o", false),
        peg$c194 = /^[0-7]/,
        peg$c195 = peg$classExpectation([["0", "7"]], false, false),
        peg$c196 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 8) })
                },
        peg$c197 = "0x",
        peg$c198 = peg$literalExpectation("0x", false),
        peg$c199 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 16) })
                },
        peg$c200 = /^[0-9]/,
        peg$c201 = peg$classExpectation([["0", "9"]], false, false),
        peg$c202 = ".",
        peg$c203 = peg$literalExpectation(".", false),
        peg$c204 = /^[eE]/,
        peg$c205 = peg$classExpectation(["e", "E"], false, false),
        peg$c206 = function(n) {
                    return ast("LiteralNumber").set({ value: parseFloat(n) })
                },
        peg$c207 = function(n) {
                    return ast("LiteralNumber").set({ value: parseInt(n, 10) })
                },
        peg$c208 = peg$otherExpectation("global value"),
        peg$c209 = "true",
        peg$c210 = peg$literalExpectation("true", false),
        peg$c211 = function() { return ast("LiteralValue").set({ value: true      }) },
        peg$c212 = "false",
        peg$c213 = peg$literalExpectation("false", false),
        peg$c214 = function() { return ast("LiteralValue").set({ value: false     }) },
        peg$c215 = "null",
        peg$c216 = peg$literalExpectation("null", false),
        peg$c217 = function() { return ast("LiteralValue").set({ value: null      }) },
        peg$c218 = "NaN",
        peg$c219 = peg$literalExpectation("NaN", false),
        peg$c220 = function() { return ast("LiteralValue").set({ value: NaN       }) },
        peg$c221 = "undefined",
        peg$c222 = peg$literalExpectation("undefined", false),
        peg$c223 = function() { return ast("LiteralValue").set({ value: undefined }) },
        peg$c224 = peg$otherExpectation("optional blank"),
        peg$c225 = peg$otherExpectation("multi-line comment"),
        peg$c226 = "/*",
        peg$c227 = peg$literalExpectation("/*", false),
        peg$c228 = "*/",
        peg$c229 = peg$literalExpectation("*/", false),
        peg$c230 = peg$anyExpectation(),
        peg$c231 = peg$otherExpectation("any whitespaces"),
        peg$c232 = /^[ \t\r\n]/,
        peg$c233 = peg$classExpectation([" ", "\t", "\r", "\n"], false, false),
        peg$c234 = peg$otherExpectation("end of file"),

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1 }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$resultsCache = {},

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

      throw peg$buildStructuredError(
        [peg$otherExpectation(description)],
        input.substring(peg$savedPos, peg$currPos),
        location
      );
    }

    function error(message, location) {
      location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

      throw peg$buildSimpleError(message, location);
    }

    function peg$literalExpectation(text, ignoreCase) {
      return { type: "literal", text: text, ignoreCase: ignoreCase };
    }

    function peg$classExpectation(parts, inverted, ignoreCase) {
      return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
    }

    function peg$anyExpectation() {
      return { type: "any" };
    }

    function peg$endExpectation() {
      return { type: "end" };
    }

    function peg$otherExpectation(description) {
      return { type: "other", description: description };
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos], p;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column
        };

        while (p < pos) {
          if (input.charCodeAt(p) === 10) {
            details.line++;
            details.column = 1;
          } else {
            details.column++;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildSimpleError(message, location) {
      return new peg$SyntaxError(message, null, null, location);
    }

    function peg$buildStructuredError(expected, found, location) {
      return new peg$SyntaxError(
        peg$SyntaxError.buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parsequery() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 38 + 0,
          cached = peg$resultsCache[key];

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
              peg$savedPos = s0;
              s1 = peg$c0(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequerySet() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 38 + 1,
          cached = peg$resultsCache[key];

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
            s5 = peg$c1;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
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
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c1;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c2); }
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
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c3(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryPath() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 2,
          cached = peg$resultsCache[key];

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
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
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
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c4(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryStep() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 38 + 3,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parsequeryAxis();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsequeryMatch();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 33) {
                s5 = peg$c5;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c6); }
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parsequeryFilter();
                  if (s7 === peg$FAILED) {
                    s7 = null;
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c7(s1, s3, s5, s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryStepSubsequent() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 38 + 4,
          cached = peg$resultsCache[key];

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
              if (input.charCodeAt(peg$currPos) === 33) {
                s5 = peg$c5;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c6); }
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parsequeryFilter();
                  if (s7 === peg$FAILED) {
                    s7 = null;
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c7(s1, s3, s5, s7);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryAxis() {
      var s0, s1, s2;

      var key    = peg$currPos * 38 + 5,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c9) {
        s2 = peg$c9;
        peg$currPos += 2;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c10); }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 47) {
          s2 = peg$c11;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c12); }
        }
        if (s2 === peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c13) {
            s2 = peg$c13;
            peg$currPos += 3;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c14); }
          }
          if (s2 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c15) {
              s2 = peg$c15;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c16); }
            }
            if (s2 === peg$FAILED) {
              if (input.substr(peg$currPos, 3) === peg$c17) {
                s2 = peg$c17;
                peg$currPos += 3;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c18); }
              }
              if (s2 === peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c19) {
                  s2 = peg$c19;
                  peg$currPos += 2;
                } else {
                  s2 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c20); }
                }
                if (s2 === peg$FAILED) {
                  if (input.substr(peg$currPos, 3) === peg$c21) {
                    s2 = peg$c21;
                    peg$currPos += 3;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c22); }
                  }
                  if (s2 === peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c23) {
                      s2 = peg$c23;
                      peg$currPos += 2;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c24); }
                    }
                    if (s2 === peg$FAILED) {
                      if (input.substr(peg$currPos, 4) === peg$c25) {
                        s2 = peg$c25;
                        peg$currPos += 4;
                      } else {
                        s2 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c26); }
                      }
                      if (s2 === peg$FAILED) {
                        if (input.substr(peg$currPos, 3) === peg$c27) {
                          s2 = peg$c27;
                          peg$currPos += 3;
                        } else {
                          s2 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c28); }
                        }
                        if (s2 === peg$FAILED) {
                          if (input.substr(peg$currPos, 3) === peg$c29) {
                            s2 = peg$c29;
                            peg$currPos += 3;
                          } else {
                            s2 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c30); }
                          }
                          if (s2 === peg$FAILED) {
                            if (input.substr(peg$currPos, 2) === peg$c31) {
                              s2 = peg$c31;
                              peg$currPos += 2;
                            } else {
                              s2 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c32); }
                            }
                            if (s2 === peg$FAILED) {
                              if (input.substr(peg$currPos, 3) === peg$c33) {
                                s2 = peg$c33;
                                peg$currPos += 3;
                              } else {
                                s2 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c34); }
                              }
                              if (s2 === peg$FAILED) {
                                if (input.substr(peg$currPos, 3) === peg$c35) {
                                  s2 = peg$c35;
                                  peg$currPos += 3;
                                } else {
                                  s2 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c36); }
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
        }
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsequeryAxisType();
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c37(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c8); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryAxisType() {
      var s0, s1, s2;

      var key    = peg$currPos * 38 + 6,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 58) {
        s1 = peg$c38;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c39); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseid();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c40(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 58) {
          s1 = peg$c38;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c39); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsestring();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c41(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryMatch() {
      var s0, s1;

      var key    = peg$currPos * 38 + 7,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseid();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c42(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsestring();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c43(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 42) {
            s1 = peg$c44;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c45); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c46();
          }
          s0 = s1;
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsequeryFilter() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 8,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c47;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c48); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexprConditional();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c49;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c50); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c51(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprConditional() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

      var key    = peg$currPos * 38 + 9,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$parseexprLogicalOr();
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c52) {
            s3 = peg$c52;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c53); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprLogicalOr();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c54(s1, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseexprLogicalOr();
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 63) {
              s3 = peg$c55;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c56); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseexprLogicalOr();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 58) {
                      s7 = peg$c38;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c39); }
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parseexprLogicalOr();
                        if (s9 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c57(s1, s5, s9);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$parseexprLogicalOr();
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprLogicalOr() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 10,
          cached = peg$resultsCache[key];

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
          if (input.substr(peg$currPos, 2) === peg$c58) {
            s4 = peg$c58;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c59); }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprLogicalOr();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c60(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprLogicalAnd();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprLogicalAnd() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 11,
          cached = peg$resultsCache[key];

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
          if (input.substr(peg$currPos, 2) === peg$c61) {
            s4 = peg$c61;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c62); }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprLogicalAnd();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c60(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprBitwiseOr();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprBitwiseOr() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 12,
          cached = peg$resultsCache[key];

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
            s4 = peg$c63;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c64); }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprBitwiseOr();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c65(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprBitwiseXOr();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprBitwiseXOr() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 13,
          cached = peg$resultsCache[key];

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
            s4 = peg$c66;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c67); }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprBitwiseXOr();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c65(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprBitwiseAnd();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprBitwiseAnd() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 14,
          cached = peg$resultsCache[key];

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
            s4 = peg$c68;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c69); }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprBitwiseAnd();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c65(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprRelational();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprRelational() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 15,
          cached = peg$resultsCache[key];

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
          if (input.substr(peg$currPos, 2) === peg$c70) {
            s4 = peg$c70;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c71); }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c72) {
              s4 = peg$c72;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c73); }
            }
            if (s4 === peg$FAILED) {
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
                if (s4 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 60) {
                    s4 = peg$c78;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c79); }
                  }
                  if (s4 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 62) {
                      s4 = peg$c80;
                      peg$currPos++;
                    } else {
                      s4 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c81); }
                    }
                    if (s4 === peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c82) {
                        s4 = peg$c82;
                        peg$currPos += 2;
                      } else {
                        s4 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c83); }
                      }
                      if (s4 === peg$FAILED) {
                        if (input.substr(peg$currPos, 2) === peg$c84) {
                          s4 = peg$c84;
                          peg$currPos += 2;
                        } else {
                          s4 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c85); }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprRelational();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c86(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprBitwiseShift();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprBitwiseShift() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 16,
          cached = peg$resultsCache[key];

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
          if (input.substr(peg$currPos, 2) === peg$c87) {
            s4 = peg$c87;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c88); }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c89) {
              s4 = peg$c89;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c90); }
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprBitwiseShift();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c65(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprAdditive();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprAdditive() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 17,
          cached = peg$resultsCache[key];

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
            s4 = peg$c91;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c92); }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
              s4 = peg$c93;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c94); }
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprAdditive();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c95(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprMultiplicative();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprMultiplicative() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 18,
          cached = peg$resultsCache[key];

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
          if (input.substr(peg$currPos, 2) === peg$c96) {
            s4 = peg$c96;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c97); }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 42) {
              s4 = peg$c44;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c45); }
            }
            if (s4 === peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 47) {
                s4 = peg$c11;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c12); }
              }
              if (s4 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 37) {
                  s4 = peg$c98;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c99); }
                }
              }
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprMultiplicative();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c95(s1, s3, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprUnary();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprUnary() {
      var s0, s1, s2;

      var key    = peg$currPos * 38 + 19,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 33) {
        s2 = peg$c5;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 126) {
          s2 = peg$c100;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c101); }
        }
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseexprOther();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c102(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseexprOther();
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprOther() {
      var s0;

      var key    = peg$currPos * 38 + 20,
          cached = peg$resultsCache[key];

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

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprFunctionCall() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 38 + 21,
          cached = peg$resultsCache[key];

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
            s3 = peg$c103;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c104); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprFunctionCallParams();
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 41) {
                    s7 = peg$c105;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c106); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c107(s1, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprFunctionCallParams() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 38 + 22,
          cached = peg$resultsCache[key];

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
            s5 = peg$c1;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c2); }
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
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c1;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c2); }
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
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c108(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprAttribute() {
      var s0, s1, s2;

      var key    = peg$currPos * 38 + 23,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 64) {
        s1 = peg$c110;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c111); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseid();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c112(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 64) {
          s1 = peg$c110;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c111); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsestring();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c113(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c109); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprParam() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 24,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c115;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c116); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseid();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s5 = peg$c117;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c118); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c119(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c114); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprLiteral() {
      var s0;

      var key    = peg$currPos * 38 + 25,
          cached = peg$resultsCache[key];

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

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseexprParenthesis() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 26,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 40) {
        s1 = peg$c103;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c104); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexprConditional();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c105;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c106); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c120(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseid() {
      var s0, s1, s2, s3, s4, s5, s6;

      var key    = peg$currPos * 38 + 27,
          cached = peg$resultsCache[key];

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
        s3 = void 0;
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        if (peg$c122.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c123); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c124.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c125); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c124.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c125); }
            }
          }
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c126(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c121); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestring() {
      var s0, s1, s2, s3;

      var key    = peg$currPos * 38 + 28,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 34) {
        s1 = peg$c128;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c129); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsestringEscapedCharDQ();
        if (s3 === peg$FAILED) {
          if (peg$c130.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c131); }
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsestringEscapedCharDQ();
          if (s3 === peg$FAILED) {
            if (peg$c130.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c131); }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s3 = peg$c128;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c129); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c132(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 39) {
          s1 = peg$c133;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c134); }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsestringEscapedCharSQ();
          if (s3 === peg$FAILED) {
            if (peg$c135.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c136); }
            }
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsestringEscapedCharSQ();
            if (s3 === peg$FAILED) {
              if (peg$c135.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c136); }
              }
            }
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s3 = peg$c133;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c134); }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c132(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c127); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestringEscapedCharDQ() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      var key    = peg$currPos * 38 + 29,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c138) {
        s1 = peg$c138;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c139); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
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
          peg$savedPos = s0;
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
            peg$savedPos = s0;
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
              peg$savedPos = s0;
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
                peg$savedPos = s0;
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
                  peg$savedPos = s0;
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
                    peg$savedPos = s0;
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
                      peg$savedPos = s0;
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
                        peg$savedPos = s0;
                        s1 = peg$c164();
                      }
                      s0 = s1;
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        if (input.substr(peg$currPos, 2) === peg$c165) {
                          s1 = peg$c165;
                          peg$currPos += 2;
                        } else {
                          s1 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c166); }
                        }
                        if (s1 !== peg$FAILED) {
                          s2 = peg$currPos;
                          s3 = peg$currPos;
                          if (peg$c167.test(input.charAt(peg$currPos))) {
                            s4 = input.charAt(peg$currPos);
                            peg$currPos++;
                          } else {
                            s4 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c168); }
                          }
                          if (s4 !== peg$FAILED) {
                            if (peg$c167.test(input.charAt(peg$currPos))) {
                              s5 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s5 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c168); }
                            }
                            if (s5 !== peg$FAILED) {
                              s4 = [s4, s5];
                              s3 = s4;
                            } else {
                              peg$currPos = s3;
                              s3 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                          }
                          if (s3 !== peg$FAILED) {
                            s2 = input.substring(s2, peg$currPos);
                          } else {
                            s2 = s3;
                          }
                          if (s2 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$c169(s2);
                            s0 = s1;
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                        if (s0 === peg$FAILED) {
                          s0 = peg$currPos;
                          if (input.substr(peg$currPos, 2) === peg$c170) {
                            s1 = peg$c170;
                            peg$currPos += 2;
                          } else {
                            s1 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c171); }
                          }
                          if (s1 !== peg$FAILED) {
                            s2 = peg$currPos;
                            s3 = peg$currPos;
                            if (peg$c167.test(input.charAt(peg$currPos))) {
                              s4 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s4 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c168); }
                            }
                            if (s4 !== peg$FAILED) {
                              if (peg$c167.test(input.charAt(peg$currPos))) {
                                s5 = input.charAt(peg$currPos);
                                peg$currPos++;
                              } else {
                                s5 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c168); }
                              }
                              if (s5 !== peg$FAILED) {
                                if (peg$c167.test(input.charAt(peg$currPos))) {
                                  s6 = input.charAt(peg$currPos);
                                  peg$currPos++;
                                } else {
                                  s6 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c168); }
                                }
                                if (s6 !== peg$FAILED) {
                                  if (peg$c167.test(input.charAt(peg$currPos))) {
                                    s7 = input.charAt(peg$currPos);
                                    peg$currPos++;
                                  } else {
                                    s7 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c168); }
                                  }
                                  if (s7 !== peg$FAILED) {
                                    s4 = [s4, s5, s6, s7];
                                    s3 = s4;
                                  } else {
                                    peg$currPos = s3;
                                    s3 = peg$FAILED;
                                  }
                                } else {
                                  peg$currPos = s3;
                                  s3 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s3;
                                s3 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s3;
                              s3 = peg$FAILED;
                            }
                            if (s3 !== peg$FAILED) {
                              s2 = input.substring(s2, peg$currPos);
                            } else {
                              s2 = s3;
                            }
                            if (s2 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c169(s2);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
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
        if (peg$silentFails === 0) { peg$fail(peg$c137); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsestringEscapedCharSQ() {
      var s0, s1;

      var key    = peg$currPos * 38 + 30,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c173) {
        s1 = peg$c173;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c174); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c175();
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c172); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseregexp() {
      var s0, s1, s2, s3, s4;

      var key    = peg$currPos * 38 + 31,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 96) {
        s1 = peg$c177;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c178); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        if (input.substr(peg$currPos, 2) === peg$c179) {
          s4 = peg$c179;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c180); }
        }
        if (s4 === peg$FAILED) {
          if (peg$c181.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c182); }
          }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (input.substr(peg$currPos, 2) === peg$c179) {
            s4 = peg$c179;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c180); }
          }
          if (s4 === peg$FAILED) {
            if (peg$c181.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c182); }
            }
          }
        }
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 96) {
            s3 = peg$c177;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c178); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c183(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c176); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;

      var key    = peg$currPos * 38 + 32,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c185.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c186); }
      }
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s1 = input.substring(s1, peg$currPos);
      } else {
        s1 = s2;
      }
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c187) {
          s2 = peg$c187;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c188); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
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
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s3 = input.substring(s3, peg$currPos);
          } else {
            s3 = s4;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c191(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (peg$c185.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c186); }
        }
        if (s2 === peg$FAILED) {
          s2 = null;
        }
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
        if (s1 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c192) {
            s2 = peg$c192;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c193); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = [];
            if (peg$c194.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c195); }
            }
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c194.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c195); }
                }
              }
            } else {
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              s3 = input.substring(s3, peg$currPos);
            } else {
              s3 = s4;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c196(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$currPos;
          if (peg$c185.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c186); }
          }
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            s1 = input.substring(s1, peg$currPos);
          } else {
            s1 = s2;
          }
          if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c197) {
              s2 = peg$c197;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c198); }
            }
            if (s2 !== peg$FAILED) {
              s3 = peg$currPos;
              s4 = [];
              if (peg$c167.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c168); }
              }
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  if (peg$c167.test(input.charAt(peg$currPos))) {
                    s5 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s5 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c168); }
                  }
                }
              } else {
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                s3 = input.substring(s3, peg$currPos);
              } else {
                s3 = s4;
              }
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c199(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$currPos;
            s2 = peg$currPos;
            if (peg$c185.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c186); }
            }
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              if (peg$c200.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c201); }
              }
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c200.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c201); }
                }
              }
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s5 = peg$c202;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c203); }
                }
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  if (peg$c200.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c201); }
                  }
                  if (s7 !== peg$FAILED) {
                    while (s7 !== peg$FAILED) {
                      s6.push(s7);
                      if (peg$c200.test(input.charAt(peg$currPos))) {
                        s7 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c201); }
                      }
                    }
                  } else {
                    s6 = peg$FAILED;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    if (peg$c204.test(input.charAt(peg$currPos))) {
                      s8 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c205); }
                    }
                    if (s8 !== peg$FAILED) {
                      if (peg$c185.test(input.charAt(peg$currPos))) {
                        s9 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c186); }
                      }
                      if (s9 === peg$FAILED) {
                        s9 = null;
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        if (peg$c200.test(input.charAt(peg$currPos))) {
                          s11 = input.charAt(peg$currPos);
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c201); }
                        }
                        if (s11 !== peg$FAILED) {
                          while (s11 !== peg$FAILED) {
                            s10.push(s11);
                            if (peg$c200.test(input.charAt(peg$currPos))) {
                              s11 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s11 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c201); }
                            }
                          }
                        } else {
                          s10 = peg$FAILED;
                        }
                        if (s10 !== peg$FAILED) {
                          s8 = [s8, s9, s10];
                          s7 = s8;
                        } else {
                          peg$currPos = s7;
                          s7 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                    if (s7 === peg$FAILED) {
                      s7 = null;
                    }
                    if (s7 !== peg$FAILED) {
                      s3 = [s3, s4, s5, s6, s7];
                      s2 = s3;
                    } else {
                      peg$currPos = s2;
                      s2 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
              s1 = input.substring(s1, peg$currPos);
            } else {
              s1 = s2;
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c206(s1);
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$currPos;
              s2 = peg$currPos;
              if (peg$c185.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c186); }
              }
              if (s3 === peg$FAILED) {
                s3 = null;
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                if (peg$c200.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c201); }
                }
                if (s5 !== peg$FAILED) {
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    if (peg$c200.test(input.charAt(peg$currPos))) {
                      s5 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c201); }
                    }
                  }
                } else {
                  s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                  s3 = [s3, s4];
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
              if (s2 !== peg$FAILED) {
                s1 = input.substring(s1, peg$currPos);
              } else {
                s1 = s2;
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c207(s1);
              }
              s0 = s1;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c184); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsevalue() {
      var s0, s1;

      var key    = peg$currPos * 38 + 33,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 4) === peg$c209) {
        s1 = peg$c209;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c210); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c211();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c212) {
          s1 = peg$c212;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c213); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c214();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 4) === peg$c215) {
            s1 = peg$c215;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c216); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c217();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 3) === peg$c218) {
              s1 = peg$c218;
              peg$currPos += 3;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c219); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c220();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 9) === peg$c221) {
                s1 = peg$c221;
                peg$currPos += 9;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c222); }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c223();
              }
              s0 = s1;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c208); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parse_() {
      var s0, s1;

      var key    = peg$currPos * 38 + 34,
          cached = peg$resultsCache[key];

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
        if (peg$silentFails === 0) { peg$fail(peg$c224); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseco() {
      var s0, s1, s2, s3, s4, s5;

      var key    = peg$currPos * 38 + 35,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c226) {
        s1 = peg$c226;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c227); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c228) {
          s5 = peg$c228;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c229); }
        }
        peg$silentFails--;
        if (s5 === peg$FAILED) {
          s4 = void 0;
        } else {
          peg$currPos = s4;
          s4 = peg$FAILED;
        }
        if (s4 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c230); }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$currPos;
          peg$silentFails++;
          if (input.substr(peg$currPos, 2) === peg$c228) {
            s5 = peg$c228;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c229); }
          }
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c230); }
            }
            if (s5 !== peg$FAILED) {
              s4 = [s4, s5];
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.substr(peg$currPos, 2) === peg$c228) {
            s3 = peg$c228;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c229); }
          }
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c225); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      var key    = peg$currPos * 38 + 36,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      peg$silentFails++;
      s0 = [];
      if (peg$c232.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c233); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c232.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c233); }
          }
        }
      } else {
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c231); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }

    function peg$parseeof() {
      var s0, s1;

      var key    = peg$currPos * 38 + 37,
          cached = peg$resultsCache[key];

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
        if (peg$silentFails === 0) { peg$fail(peg$c230); }
      }
      peg$silentFails--;
      if (s1 === peg$FAILED) {
        s0 = void 0;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c234); }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: s0 };

      return s0;
    }


        /*  standard PEGUtil integration code  */
        var unroll = options.util.makeUnroll(location, options)
        var ast    = options.util.makeAST   (location, options)


    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail(peg$endExpectation());
      }

      throw peg$buildStructuredError(
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})());

/*  get query executor  */

var ASTQQuery = function () {
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
            var qe = new _astqQueryExec2.default(adapter, params, funcs, trace);
            return qe.execQuery(this.ast, node);
        }
    }]);

    return ASTQQuery;
}();

exports.default = ASTQQuery;

},{"./astq-query-exec.js":8,"asty":"asty","pegjs-util":"pegjs-util"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

var ASTQUtil = function () {
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
            var result = void 0;
            switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
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
            if ((typeof value === "undefined" ? "undefined" : _typeof(value)) !== type) {
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
                            if (!((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && value instanceof RegExp)) value = new RegExp(value);
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
}();

exports.default = ASTQUtil;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

/* global 2: false */
/* global 1: false */
/* global 0: false */
/* global 20180318:  false */

var version = {
    major: 2,
    minor: 1,
    micro: 0,
    date: 20180318
};

exports.default = version;

},{}],13:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _astqAdapter = require("./astq-adapter.js");

var _astqAdapter2 = _interopRequireDefault(_astqAdapter);

var _astqAdapterXmldom = require("./astq-adapter-xmldom.js");

var _astqAdapterXmldom2 = _interopRequireDefault(_astqAdapterXmldom);

var _astqAdapterParse = require("./astq-adapter-parse5.js");

var _astqAdapterParse2 = _interopRequireDefault(_astqAdapterParse);

var _astqAdapterMozast = require("./astq-adapter-mozast.js");

var _astqAdapterMozast2 = _interopRequireDefault(_astqAdapterMozast);

var _astqAdapterAsty = require("./astq-adapter-asty.js");

var _astqAdapterAsty2 = _interopRequireDefault(_astqAdapterAsty);

var _astqFuncs = require("./astq-funcs.js");

var _astqFuncs2 = _interopRequireDefault(_astqFuncs);

var _astqFuncsStd = require("./astq-funcs-std.js");

var _astqFuncsStd2 = _interopRequireDefault(_astqFuncsStd);

var _astqQuery = require("./astq-query.js");

var _astqQuery2 = _interopRequireDefault(_astqQuery);

var _astqVersion = require("./astq-version.js");

var _astqVersion2 = _interopRequireDefault(_astqVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2018 Ralf S. Engelschall <rse@engelschall.com>
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

/*  define the API class  */
var ASTQ = function () {
    /*  create a new ASTq instance  */
    function ASTQ() {
        _classCallCheck(this, ASTQ);

        /*  create adapter registry and pre-register standard adapters  */
        this._adapter = new _astqAdapter2.default().register(_astqAdapterXmldom2.default, false).register(_astqAdapterParse2.default, false).register(_astqAdapterMozast2.default, false).register(_astqAdapterAsty2.default, false);

        /*  create function registry and pre-register standard functions  */
        this._funcs = new _astqFuncs2.default();
        for (var name in _astqFuncsStd2.default) {
            this.func(name, _astqFuncsStd2.default[name]);
        } /*  create LRU cache  */
        this._cache = new CacheLRU();
    }

    /*  return the version information  */


    _createClass(ASTQ, [{
        key: "version",
        value: function version() {
            return _astqVersion2.default;
        }

        /*  switch to a single custom adapter  */

    }, {
        key: "adapter",
        value: function adapter(_adapter) {
            var _this = this;

            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (arguments.length < 1 || arguments.length > 2) throw new Error("ASTQ#adapter: invalid number of arguments");
            this._adapter.unregister();
            if (!((typeof _adapter === "undefined" ? "undefined" : _typeof(_adapter)) === "object" && _adapter instanceof Array)) _adapter = [_adapter];
            if (_adapter.length > 1 && force) throw new Error("ASTQ#adapter: you can force just a single adapter to not taste the AST node");
            _adapter.forEach(function (adapter) {
                if (typeof adapter === "string") {
                    if (adapter === "mozast") adapter = _astqAdapterMozast2.default;else if (adapter === "xmldom") adapter = _astqAdapterXmldom2.default;else if (adapter === "parse5") adapter = _astqAdapterParse2.default;else if (adapter === "asty") adapter = _astqAdapterAsty2.default;else throw new Error("ASTQ#adapter: unknown built-in adapter");
                }
                _this._adapter.register(adapter, force);
            });
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
                query = new _astqQuery2.default();
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
}();

/*  export the traditional way for interoperability reasons
    (as Babel would export an object with a 'default' field)  */


module.exports = ASTQ;

},{"./astq-adapter-asty.js":1,"./astq-adapter-mozast.js":2,"./astq-adapter-parse5.js":3,"./astq-adapter-xmldom.js":4,"./astq-adapter.js":5,"./astq-funcs-std.js":6,"./astq-funcs.js":7,"./astq-query.js":10,"./astq-version.js":12,"cache-lru":"cache-lru"}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13])(13)
});