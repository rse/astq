/*
**  ASTq -- Abstract Syntax Tree (AST) Query Engine
**  Copyright (c) 2014-2017 Ralf S. Engelschall <rse@engelschall.com>
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

/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-eslint");
    grunt.loadNpmTasks("grunt-jscs");

    grunt.initConfig({
        version: grunt.file.readYAML("VERSION.yml"),
        jshint: {
            options: {
                jshintrc: "jshint.json"
            },
            "gruntfile":  [ "Gruntfile.js" ],
            "astq": [ "src/**/*.js", "tst/**/*.js" ]
        },
        eslint: {
            options: {
                configFile: "eslint.json"
            },
            "astq": [ "src/**/*.js", "tst/**/*.js" ]
        },
        jscs: {
            "astq": {
                options: {
                    config: "jscs.json"
                },
                files: {
                    src: [ "src/**/*.js", "tst/**/*.js" ]
                }
            }
        },
        browserify: {
            "astq-browser": {
                files: {
                    "lib/astq.browser.js": [ "src/**/*.js" ]
                },
                options: {
                    transform: [
                        [ "browserify-replace", { replace: [
                            { from: /\$major/g, to: "<%= version.major %>" },
                            { from: /\$minor/g, to: "<%= version.minor %>" },
                            { from: /\$micro/g, to: "<%= version.micro %>" },
                            { from: /\$date/g,  to: "<%= version.date  %>" }
                        ]}],
                        [ "babelify", { presets: [ "es2015" ] } ],
                        "pegjs-otf/transform"
                    ],
                    plugin: [
                        [ "minifyify", { map: "astq.browser.map", output: "lib/astq.browser.map" } ],
                        "browserify-derequire",
                        "browserify-header"
                    ],
                    browserifyOptions: {
                        standalone: "ASTQ",
                        debug: true
                    }
                }
            },
            "astq-node": {
                files: {
                    "lib/astq.node.js": [ "src/**/*.js" ]
                },
                options: {
                    transform: [
                        [ "browserify-replace", { replace: [
                            { from: /\$major/g, to: "<%= version.major %>" },
                            { from: /\$minor/g, to: "<%= version.minor %>" },
                            { from: /\$micro/g, to: "<%= version.micro %>" },
                            { from: /\$date/g,  to: "<%= version.date  %>" }
                        ]}],
                        [ "babelify", { presets: [ "es2015" ] } ],
                        "pegjs-otf/transform"
                    ],
                    plugin: [
                        "browserify-header"
                    ],
                    external: [
                        "pegjs-otf",
                        "pegjs-util",
                        "asty",
                        "cache-lru"
                    ],
                    browserifyOptions: {
                        standalone: "ASTQ",
                        debug: false
                    }
                }
            }
        },
        mochaTest: {
            "astq": {
                src: [ "tst/*.js" ]
            },
            options: {
                reporter: "spec",
                timeout: 5*1000
            }
        },
        clean: {
            clean: [],
            distclean: [ "node_modules" ]
        }
    });

    grunt.registerTask("default", [ "jshint", "eslint", "jscs", "browserify", "mochaTest" ]);
    grunt.registerTask("test", [ "jshint:astq", "browserify:astq-node", "mochaTest" ]);
};

