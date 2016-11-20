/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
                (function () {
                    var op = axis.get("op");
                    var t = axis.get("type");
                    if (op === "/") {
                        /*  direct child nodes  */
                        _this4.adapter.getChildNodes(T, t).forEach(function (T) {
                            return matchAndTake(T);
                        });
                    } else if (op === "//") {
                        (function () {
                            /*  transitive child nodes  */
                            var walk = function walk(T) {
                                matchAndTake(T);
                                _this4.adapter.getChildNodes(T, t).forEach(function (T) {
                                    return walk(T);
                                }); /* RECURSION */
                            };
                            _this4.adapter.getChildNodes(T, t).forEach(function (T) {
                                return walk(T);
                            });
                        })();
                    } else if (op === "-/") {
                        /*  direct left sibling  */
                        var parent = _this4.adapter.getParentNode(T, "*");
                        if (parent !== null) {
                            var pchilds = _this4.adapter.getChildNodes(parent, t);
                            var leftSibling = null;
                            for (var _i = 0; _i < pchilds.length; _i++) {
                                if (pchilds[_i] === T) break;
                                leftSibling = pchilds[_i];
                            }
                            if (leftSibling !== null) matchAndTake(leftSibling);
                        }
                    } else if (op === "-//") {
                        /*  transitive left siblings  */
                        var _parent = _this4.adapter.getParentNode(T, "*");
                        if (_parent !== null) {
                            var _pchilds = _this4.adapter.getChildNodes(_parent, t);
                            var _i2 = 0;
                            for (; _i2 < _pchilds.length; _i2++) {
                                if (_pchilds[_i2] === T) break;
                            }for (_i2--; _i2 >= 0; _i2--) {
                                matchAndTake(_pchilds[_i2]);
                            }
                        }
                    } else if (op === "+/") {
                        /*  direct right sibling  */
                        var _parent2 = _this4.adapter.getParentNode(T, "*");
                        if (_parent2 !== null) {
                            var _pchilds2 = _this4.adapter.getChildNodes(_parent2, t);
                            var _i3 = void 0;
                            for (_i3 = 0; _i3 < _pchilds2.length; _i3++) {
                                if (_pchilds2[_i3] === T) break;
                            }if (_i3 < _pchilds2.length) matchAndTake(_pchilds2[++_i3]);
                        }
                    } else if (op === "+//") {
                        /*  transitive right siblings  */
                        var _parent3 = _this4.adapter.getParentNode(T, "*");
                        if (_parent3 !== null) {
                            var _pchilds3 = _this4.adapter.getChildNodes(_parent3, t);
                            var _i4 = void 0;
                            for (_i4 = 0; _i4 < _pchilds3.length; _i4++) {
                                if (_pchilds3[_i4] === T) break;
                            }if (_i4 < _pchilds3.length) for (_i4++; _i4 < _pchilds3.length; _i4++) {
                                matchAndTake(_pchilds3[_i4]);
                            }
                        }
                    } else if (op === "../") {
                        /*  direct parent  */
                        var _parent4 = _this4.adapter.getParentNode(T, t);
                        if (_parent4 !== null) matchAndTake(_parent4);
                    } else if (op === "..//") {
                        /*  transitive parents  */
                        var node = T;
                        for (;;) {
                            var _parent5 = _this4.adapter.getParentNode(node, t);
                            if (_parent5 === null) break;
                            matchAndTake(_parent5);
                            node = _parent5;
                        }
                    } else if (op === "<//") {
                        (function () {
                            /*  transitive preceding nodes  */
                            var ctx = { sentinel: T, take: true };
                            for (;;) {
                                var _parent6 = _this4.adapter.getParentNode(T, "*");
                                if (_parent6 === null) break;
                                T = _parent6;
                            }
                            var walk = function walk(T) {
                                if (T === ctx.sentinel) ctx.take = false;
                                if (ctx.take) matchAndTake(T);
                                if (ctx.take) _this4.adapter.getChildNodes(T, t).forEach(function (T) {
                                    return walk(T);
                                }); /* RECURSION */
                            };
                            if (T !== ctx.sentinel) {
                                matchAndTake(T);
                                _this4.adapter.getChildNodes(T, t).forEach(function (T) {
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
                                var _parent7 = _this4.adapter.getParentNode(T, "*");
                                if (_parent7 === null) break;
                                T = _parent7;
                            }
                            var walk = function walk(T) {
                                if (ctx.take) matchAndTake(T);
                                if (T === ctx.sentinel) ctx.take = true;
                                _this4.adapter.getChildNodes(T, t).forEach(function (T) {
                                    return walk(T);
                                }); /* RECURSION */
                            };
                            _this4.adapter.getChildNodes(T, t).forEach(function (T) {
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     **  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
        peg$c21 = "..//",
        peg$c22 = peg$literalExpectation("..//", false),
        peg$c23 = "../",
        peg$c24 = peg$literalExpectation("../", false),
        peg$c25 = "<//",
        peg$c26 = peg$literalExpectation("<//", false),
        peg$c27 = ">//",
        peg$c28 = peg$literalExpectation(">//", false),
        peg$c29 = function(op, t) {
                    return ast("Axis").set({ op: op, type: t !== null ? t : "*" })
                },
        peg$c30 = ":",
        peg$c31 = peg$literalExpectation(":", false),
        peg$c32 = function(id) {
                    return id.get("id")
                },
        peg$c33 = function(str) {
                    return str.get("value")
                },
        peg$c34 = function(id) {
                    return ast("Match").merge(id)
                },
        peg$c35 = function(str) {
                    return ast("Match").set({ id: str.get("value") })
                },
        peg$c36 = "*",
        peg$c37 = peg$literalExpectation("*", false),
        peg$c38 = function() {
                    return ast("Match").set({ id: "*" })
                },
        peg$c39 = "[",
        peg$c40 = peg$literalExpectation("[", false),
        peg$c41 = "]",
        peg$c42 = peg$literalExpectation("]", false),
        peg$c43 = function(e) {
                    return ast("Filter").add(e)
                },
        peg$c44 = "?:",
        peg$c45 = peg$literalExpectation("?:", false),
        peg$c46 = function(e1, e2) {
                    return ast("ConditionalBinary").add(e1, e2)
                },
        peg$c47 = "?",
        peg$c48 = peg$literalExpectation("?", false),
        peg$c49 = function(e1, e2, e3) {
                    return ast("ConditionalTernary").add(e1, e2, e3)
                },
        peg$c50 = "||",
        peg$c51 = peg$literalExpectation("||", false),
        peg$c52 = function(e1, op, e2) {
                    return ast("Logical").set({ op: op }).add(e1, e2)
                },
        peg$c53 = "&&",
        peg$c54 = peg$literalExpectation("&&", false),
        peg$c55 = "|",
        peg$c56 = peg$literalExpectation("|", false),
        peg$c57 = function(e1, op, e2) {
                    return ast("Bitwise").set({ op: op }).add(e1, e2)
                },
        peg$c58 = "^",
        peg$c59 = peg$literalExpectation("^", false),
        peg$c60 = "&",
        peg$c61 = peg$literalExpectation("&", false),
        peg$c62 = "==",
        peg$c63 = peg$literalExpectation("==", false),
        peg$c64 = "!=",
        peg$c65 = peg$literalExpectation("!=", false),
        peg$c66 = "<=",
        peg$c67 = peg$literalExpectation("<=", false),
        peg$c68 = ">=",
        peg$c69 = peg$literalExpectation(">=", false),
        peg$c70 = "<",
        peg$c71 = peg$literalExpectation("<", false),
        peg$c72 = ">",
        peg$c73 = peg$literalExpectation(">", false),
        peg$c74 = "=~",
        peg$c75 = peg$literalExpectation("=~", false),
        peg$c76 = "!~",
        peg$c77 = peg$literalExpectation("!~", false),
        peg$c78 = function(e1, op, e2) {
                    return ast("Relational").set({ op: op }).add(e1, e2)
                },
        peg$c79 = "<<",
        peg$c80 = peg$literalExpectation("<<", false),
        peg$c81 = ">>",
        peg$c82 = peg$literalExpectation(">>", false),
        peg$c83 = "+",
        peg$c84 = peg$literalExpectation("+", false),
        peg$c85 = "-",
        peg$c86 = peg$literalExpectation("-", false),
        peg$c87 = function(e1, op, e2) {
                    return ast("Arithmetical").set({ op: op }).add(e1, e2)
                },
        peg$c88 = "**",
        peg$c89 = peg$literalExpectation("**", false),
        peg$c90 = "%",
        peg$c91 = peg$literalExpectation("%", false),
        peg$c92 = "~",
        peg$c93 = peg$literalExpectation("~", false),
        peg$c94 = function(op, e) {
                    return ast("Unary").set({ op: op }).add(e)
                },
        peg$c95 = "(",
        peg$c96 = peg$literalExpectation("(", false),
        peg$c97 = ")",
        peg$c98 = peg$literalExpectation(")", false),
        peg$c99 = function(id, p) {
                    return ast("FuncCall").merge(id).add(p)
                },
        peg$c100 = function(f, l) { /* RECURSION */
                    return unroll(f, l, 3)
                },
        peg$c101 = peg$otherExpectation("node attribute"),
        peg$c102 = "@",
        peg$c103 = peg$literalExpectation("@", false),
        peg$c104 = function(id) {
                    return ast("Attribute").merge(id)
                },
        peg$c105 = function(str) {
                    return ast("Attribute").set({ id: str.get("value") })
                },
        peg$c106 = peg$otherExpectation("query parameter reference"),
        peg$c107 = "{",
        peg$c108 = peg$literalExpectation("{", false),
        peg$c109 = "}",
        peg$c110 = peg$literalExpectation("}", false),
        peg$c111 = function(name) {
                    return ast("Param").merge(name)
                },
        peg$c112 = function(e) {  /* RECURSION */
                     return e
                },
        peg$c113 = peg$otherExpectation("identifier"),
        peg$c114 = /^[a-zA-Z_]/,
        peg$c115 = peg$classExpectation([["a", "z"], ["A", "Z"], "_"], false, false),
        peg$c116 = /^[a-zA-Z0-9_\-]/,
        peg$c117 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", "-"], false, false),
        peg$c118 = function(id) {
                    return ast("Identifier").set({ id: id })
                },
        peg$c119 = peg$otherExpectation("quoted string literal"),
        peg$c120 = "\"",
        peg$c121 = peg$literalExpectation("\"", false),
        peg$c122 = /^[^"]/,
        peg$c123 = peg$classExpectation(["\""], true, false),
        peg$c124 = function(s) {
                    return ast("LiteralString").set({ value: s.join("") })
                },
        peg$c125 = "'",
        peg$c126 = peg$literalExpectation("'", false),
        peg$c127 = /^[^']/,
        peg$c128 = peg$classExpectation(["'"], true, false),
        peg$c129 = peg$otherExpectation("escaped double-quoted-string character"),
        peg$c130 = "\\\\",
        peg$c131 = peg$literalExpectation("\\\\", false),
        peg$c132 = function() { return "\\"   },
        peg$c133 = "\\\"",
        peg$c134 = peg$literalExpectation("\\\"", false),
        peg$c135 = function() { return "\""   },
        peg$c136 = "\\b",
        peg$c137 = peg$literalExpectation("\\b", false),
        peg$c138 = function() { return "\b"   },
        peg$c139 = "\\v",
        peg$c140 = peg$literalExpectation("\\v", false),
        peg$c141 = function() { return "\x0B" },
        peg$c142 = "\\f",
        peg$c143 = peg$literalExpectation("\\f", false),
        peg$c144 = function() { return "\f"   },
        peg$c145 = "\\t",
        peg$c146 = peg$literalExpectation("\\t", false),
        peg$c147 = function() { return "\t"   },
        peg$c148 = "\\r",
        peg$c149 = peg$literalExpectation("\\r", false),
        peg$c150 = function() { return "\r"   },
        peg$c151 = "\\n",
        peg$c152 = peg$literalExpectation("\\n", false),
        peg$c153 = function() { return "\n"   },
        peg$c154 = "\\e",
        peg$c155 = peg$literalExpectation("\\e", false),
        peg$c156 = function() { return "\x1B" },
        peg$c157 = "\\x",
        peg$c158 = peg$literalExpectation("\\x", false),
        peg$c159 = /^[0-9a-fA-F]/,
        peg$c160 = peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false),
        peg$c161 = function(n) {
                    return String.fromCharCode(parseInt(n, 16))
                },
        peg$c162 = "\\u",
        peg$c163 = peg$literalExpectation("\\u", false),
        peg$c164 = peg$otherExpectation("escaped single-quoted-string character"),
        peg$c165 = "\\'",
        peg$c166 = peg$literalExpectation("\\'", false),
        peg$c167 = function() { return "'"    },
        peg$c168 = peg$otherExpectation("regular expression literal"),
        peg$c169 = "`",
        peg$c170 = peg$literalExpectation("`", false),
        peg$c171 = "\\`",
        peg$c172 = peg$literalExpectation("\\`", false),
        peg$c173 = /^[^`]/,
        peg$c174 = peg$classExpectation(["`"], true, false),
        peg$c175 = function(re) {
                    var v
                    try { v = new RegExp(re.replace(/\\`/g, "`")) }
                    catch (e) { error(e.message) }
                    return ast("LiteralRegExp").set({ value: v })
                },
        peg$c176 = peg$otherExpectation("numeric literal"),
        peg$c177 = /^[+\-]/,
        peg$c178 = peg$classExpectation(["+", "-"], false, false),
        peg$c179 = "0b",
        peg$c180 = peg$literalExpectation("0b", false),
        peg$c181 = /^[01]/,
        peg$c182 = peg$classExpectation(["0", "1"], false, false),
        peg$c183 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 2) })
                },
        peg$c184 = "0o",
        peg$c185 = peg$literalExpectation("0o", false),
        peg$c186 = /^[0-7]/,
        peg$c187 = peg$classExpectation([["0", "7"]], false, false),
        peg$c188 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 8) })
                },
        peg$c189 = "0x",
        peg$c190 = peg$literalExpectation("0x", false),
        peg$c191 = function(s, n) {
                    return ast("LiteralNumber").set({ value: parseInt(s + n, 16) })
                },
        peg$c192 = /^[0-9]/,
        peg$c193 = peg$classExpectation([["0", "9"]], false, false),
        peg$c194 = ".",
        peg$c195 = peg$literalExpectation(".", false),
        peg$c196 = /^[eE]/,
        peg$c197 = peg$classExpectation(["e", "E"], false, false),
        peg$c198 = function(n) {
                    return ast("LiteralNumber").set({ value: parseFloat(n) })
                },
        peg$c199 = function(n) {
                    return ast("LiteralNumber").set({ value: parseInt(n, 10) })
                },
        peg$c200 = peg$otherExpectation("global value"),
        peg$c201 = "true",
        peg$c202 = peg$literalExpectation("true", false),
        peg$c203 = function() { return ast("LiteralValue").set({ value: true      }) },
        peg$c204 = "false",
        peg$c205 = peg$literalExpectation("false", false),
        peg$c206 = function() { return ast("LiteralValue").set({ value: false     }) },
        peg$c207 = "null",
        peg$c208 = peg$literalExpectation("null", false),
        peg$c209 = function() { return ast("LiteralValue").set({ value: null      }) },
        peg$c210 = "NaN",
        peg$c211 = peg$literalExpectation("NaN", false),
        peg$c212 = function() { return ast("LiteralValue").set({ value: NaN       }) },
        peg$c213 = "undefined",
        peg$c214 = peg$literalExpectation("undefined", false),
        peg$c215 = function() { return ast("LiteralValue").set({ value: undefined }) },
        peg$c216 = peg$otherExpectation("optional blank"),
        peg$c217 = peg$otherExpectation("multi-line comment"),
        peg$c218 = "/*",
        peg$c219 = peg$literalExpectation("/*", false),
        peg$c220 = "*/",
        peg$c221 = peg$literalExpectation("*/", false),
        peg$c222 = peg$anyExpectation(),
        peg$c223 = peg$otherExpectation("any whitespaces"),
        peg$c224 = /^[ \t\r\n]/,
        peg$c225 = peg$classExpectation([" ", "\t", "\r", "\n"], false, false),
        peg$c226 = peg$otherExpectation("end of file"),

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
                  if (input.substr(peg$currPos, 4) === peg$c21) {
                    s2 = peg$c21;
                    peg$currPos += 4;
                  } else {
                    s2 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c22); }
                  }
                  if (s2 === peg$FAILED) {
                    if (input.substr(peg$currPos, 3) === peg$c23) {
                      s2 = peg$c23;
                      peg$currPos += 3;
                    } else {
                      s2 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c24); }
                    }
                    if (s2 === peg$FAILED) {
                      if (input.substr(peg$currPos, 3) === peg$c25) {
                        s2 = peg$c25;
                        peg$currPos += 3;
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
          s1 = peg$c29(s1, s2);
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
        s1 = peg$c30;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c31); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseid();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c32(s2);
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
          s1 = peg$c30;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c31); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsestring();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c33(s2);
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
        s1 = peg$c34(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsestring();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c35(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 42) {
            s1 = peg$c36;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c37); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c38();
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
        s1 = peg$c39;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexprConditional();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 93) {
                s5 = peg$c41;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c42); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c43(s3);
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
          if (input.substr(peg$currPos, 2) === peg$c44) {
            s3 = peg$c44;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c45); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseexprLogicalOr();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c46(s1, s5);
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
              s3 = peg$c47;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c48); }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseexprLogicalOr();
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 58) {
                      s7 = peg$c30;
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c31); }
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parse_();
                      if (s8 !== peg$FAILED) {
                        s9 = peg$parseexprLogicalOr();
                        if (s9 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c49(s1, s5, s9);
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
          if (input.substr(peg$currPos, 2) === peg$c50) {
            s4 = peg$c50;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c51); }
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
                s1 = peg$c52(s1, s3, s5);
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
          if (input.substr(peg$currPos, 2) === peg$c53) {
            s4 = peg$c53;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c54); }
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
                s1 = peg$c52(s1, s3, s5);
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
            s4 = peg$c55;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c56); }
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
                s1 = peg$c57(s1, s3, s5);
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
            s4 = peg$c58;
            peg$currPos++;
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
              s5 = peg$parseexprBitwiseXOr();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c57(s1, s3, s5);
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
            s4 = peg$c60;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c61); }
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
                s1 = peg$c57(s1, s3, s5);
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
          if (input.substr(peg$currPos, 2) === peg$c62) {
            s4 = peg$c62;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c63); }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c64) {
              s4 = peg$c64;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c65); }
            }
            if (s4 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c66) {
                s4 = peg$c66;
                peg$currPos += 2;
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
                  if (input.charCodeAt(peg$currPos) === 60) {
                    s4 = peg$c70;
                    peg$currPos++;
                  } else {
                    s4 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c71); }
                  }
                  if (s4 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 62) {
                      s4 = peg$c72;
                      peg$currPos++;
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
                s1 = peg$c78(s1, s3, s5);
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
          if (input.substr(peg$currPos, 2) === peg$c79) {
            s4 = peg$c79;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c80); }
          }
          if (s4 === peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c81) {
              s4 = peg$c81;
              peg$currPos += 2;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c82); }
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
                s1 = peg$c57(s1, s3, s5);
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
            s4 = peg$c83;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c84); }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 45) {
              s4 = peg$c85;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c86); }
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
                s1 = peg$c87(s1, s3, s5);
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
          if (input.substr(peg$currPos, 2) === peg$c88) {
            s4 = peg$c88;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c89); }
          }
          if (s4 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 42) {
              s4 = peg$c36;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c37); }
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
                  s4 = peg$c90;
                  peg$currPos++;
                } else {
                  s4 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c91); }
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
                s1 = peg$c87(s1, s3, s5);
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
          s2 = peg$c92;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c93); }
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
          s1 = peg$c94(s1, s2);
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
            s3 = peg$c95;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c96); }
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
                    s7 = peg$c97;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c98); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c99(s1, s5);
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
          s1 = peg$c100(s1, s2);
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
        s1 = peg$c102;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c103); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parseid();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c104(s2);
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
          s1 = peg$c102;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c103); }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsestring();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c105(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c101); }
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
                peg$savedPos = s0;
                s1 = peg$c111(s3);
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
        if (peg$silentFails === 0) { peg$fail(peg$c106); }
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
        s1 = peg$c95;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c96); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseexprConditional();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 41) {
                s5 = peg$c97;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c98); }
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c112(s3);
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
        if (peg$c114.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c115); }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c116.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c117); }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c116.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c117); }
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
        s1 = peg$c118(s1);
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c113); }
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
        s1 = peg$c120;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c121); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsestringEscapedCharDQ();
        if (s3 === peg$FAILED) {
          if (peg$c122.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c123); }
          }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsestringEscapedCharDQ();
          if (s3 === peg$FAILED) {
            if (peg$c122.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c123); }
            }
          }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s3 = peg$c120;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c121); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c124(s2);
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
          s1 = peg$c125;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c126); }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsestringEscapedCharSQ();
          if (s3 === peg$FAILED) {
            if (peg$c127.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c128); }
            }
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$parsestringEscapedCharSQ();
            if (s3 === peg$FAILED) {
              if (peg$c127.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c128); }
              }
            }
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s3 = peg$c125;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c126); }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c124(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c119); }
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
      if (input.substr(peg$currPos, 2) === peg$c130) {
        s1 = peg$c130;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c131); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
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
          peg$savedPos = s0;
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
            peg$savedPos = s0;
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
              peg$savedPos = s0;
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
                peg$savedPos = s0;
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
                  peg$savedPos = s0;
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
                    peg$savedPos = s0;
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
                      peg$savedPos = s0;
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
                        peg$savedPos = s0;
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
                            s1 = peg$c161(s2);
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
                              s1 = peg$c161(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c129); }
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
      if (input.substr(peg$currPos, 2) === peg$c165) {
        s1 = peg$c165;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c166); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c167();
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c164); }
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
        s1 = peg$c169;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c170); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        if (input.substr(peg$currPos, 2) === peg$c171) {
          s4 = peg$c171;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c172); }
        }
        if (s4 === peg$FAILED) {
          if (peg$c173.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c174); }
          }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (input.substr(peg$currPos, 2) === peg$c171) {
            s4 = peg$c171;
            peg$currPos += 2;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c172); }
          }
          if (s4 === peg$FAILED) {
            if (peg$c173.test(input.charAt(peg$currPos))) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c174); }
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
            s3 = peg$c169;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c170); }
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c175(s2);
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
        if (peg$silentFails === 0) { peg$fail(peg$c168); }
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
      if (peg$c177.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c178); }
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
        if (input.substr(peg$currPos, 2) === peg$c179) {
          s2 = peg$c179;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c180); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = [];
          if (peg$c181.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c182); }
          }
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c181.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c182); }
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
            s1 = peg$c183(s1, s3);
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
        if (peg$c177.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c178); }
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
          if (input.substr(peg$currPos, 2) === peg$c184) {
            s2 = peg$c184;
            peg$currPos += 2;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c185); }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
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
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              s3 = input.substring(s3, peg$currPos);
            } else {
              s3 = s4;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c188(s1, s3);
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
          if (peg$c177.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c178); }
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
            if (input.substr(peg$currPos, 2) === peg$c189) {
              s2 = peg$c189;
              peg$currPos += 2;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c190); }
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
            s2 = peg$currPos;
            if (peg$c177.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c178); }
            }
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              if (peg$c192.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c193); }
              }
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c192.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c193); }
                }
              }
              if (s4 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s5 = peg$c194;
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c195); }
                }
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  if (peg$c192.test(input.charAt(peg$currPos))) {
                    s7 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c193); }
                  }
                  if (s7 !== peg$FAILED) {
                    while (s7 !== peg$FAILED) {
                      s6.push(s7);
                      if (peg$c192.test(input.charAt(peg$currPos))) {
                        s7 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s7 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c193); }
                      }
                    }
                  } else {
                    s6 = peg$FAILED;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    if (peg$c196.test(input.charAt(peg$currPos))) {
                      s8 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c197); }
                    }
                    if (s8 !== peg$FAILED) {
                      if (peg$c177.test(input.charAt(peg$currPos))) {
                        s9 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c178); }
                      }
                      if (s9 === peg$FAILED) {
                        s9 = null;
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        if (peg$c192.test(input.charAt(peg$currPos))) {
                          s11 = input.charAt(peg$currPos);
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c193); }
                        }
                        if (s11 !== peg$FAILED) {
                          while (s11 !== peg$FAILED) {
                            s10.push(s11);
                            if (peg$c192.test(input.charAt(peg$currPos))) {
                              s11 = input.charAt(peg$currPos);
                              peg$currPos++;
                            } else {
                              s11 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c193); }
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
              s1 = peg$c198(s1);
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              s1 = peg$currPos;
              s2 = peg$currPos;
              if (peg$c177.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c178); }
              }
              if (s3 === peg$FAILED) {
                s3 = null;
              }
              if (s3 !== peg$FAILED) {
                s4 = [];
                if (peg$c192.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c193); }
                }
                if (s5 !== peg$FAILED) {
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    if (peg$c192.test(input.charAt(peg$currPos))) {
                      s5 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s5 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c193); }
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
                s1 = peg$c199(s1);
              }
              s0 = s1;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c176); }
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
      if (input.substr(peg$currPos, 4) === peg$c201) {
        s1 = peg$c201;
        peg$currPos += 4;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c202); }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c203();
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 5) === peg$c204) {
          s1 = peg$c204;
          peg$currPos += 5;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c205); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c206();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 4) === peg$c207) {
            s1 = peg$c207;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c208); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c209();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 3) === peg$c210) {
              s1 = peg$c210;
              peg$currPos += 3;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c211); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c212();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 9) === peg$c213) {
                s1 = peg$c213;
                peg$currPos += 9;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c214); }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c215();
              }
              s0 = s1;
            }
          }
        }
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c200); }
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
        if (peg$silentFails === 0) { peg$fail(peg$c216); }
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
      if (input.substr(peg$currPos, 2) === peg$c218) {
        s1 = peg$c218;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c219); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$currPos;
        peg$silentFails++;
        if (input.substr(peg$currPos, 2) === peg$c220) {
          s5 = peg$c220;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c221); }
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
            if (peg$silentFails === 0) { peg$fail(peg$c222); }
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
          if (input.substr(peg$currPos, 2) === peg$c220) {
            s5 = peg$c220;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c221); }
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
              if (peg$silentFails === 0) { peg$fail(peg$c222); }
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
          if (input.substr(peg$currPos, 2) === peg$c220) {
            s3 = peg$c220;
            peg$currPos += 2;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c221); }
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
        if (peg$silentFails === 0) { peg$fail(peg$c217); }
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
      if (peg$c224.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c225); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c224.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c225); }
          }
        }
      } else {
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c223); }
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
        if (peg$silentFails === 0) { peg$fail(peg$c222); }
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
        if (peg$silentFails === 0) { peg$fail(peg$c226); }
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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
/* global 0: false */
/* global 0: false */
/* global 20161120:  false */

var version = {
    major: 2,
    minor: 0,
    micro: 0,
    date: 20161120
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
**  Copyright (c) 2014-2016 Ralf S. Engelschall <rse@engelschall.com>
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