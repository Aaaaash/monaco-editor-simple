/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/monaco-editor/esm/vs/basic-languages/php/php.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/php/php.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/php/php.js ***!
  \**********************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}', notIn: ['string'] },\n        { open: '[', close: ']', notIn: ['string'] },\n        { open: '(', close: ')', notIn: ['string'] },\n        { open: '\"', close: '\"', notIn: ['string'] },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*(#|\\/\\/)region\\\\b\"),\n            end: new RegExp(\"^\\\\s*(#|\\/\\/)endregion\\\\b\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '',\n    // ignoreCase: true,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.root' }],\n            [/<!DOCTYPE/, 'metatag.html', '@doctype'],\n            [/<!--/, 'comment.html', '@comment'],\n            [/(<)(\\w+)(\\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\n            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],\n            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],\n            [/(<)([:\\w]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\n            [/(<\\/)(\\w+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\n            [/</, 'delimiter.html'],\n            [/[^<]+/] // text\n        ],\n        doctype: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.comment' }],\n            [/[^>]+/, 'metatag.content.html'],\n            [/>/, 'metatag.html', '@pop'],\n        ],\n        comment: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.comment' }],\n            [/-->/, 'comment.html', '@pop'],\n            [/[^-]+/, 'comment.content.html'],\n            [/./, 'comment.content.html']\n        ],\n        otherTag: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.otherTag' }],\n            [/\\/?>/, 'delimiter.html', '@pop'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n        ],\n        // -- BEGIN <script> tags handling\n        // After <script\n        script: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.script' }],\n            [/type/, 'attribute.name', '@scriptAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/(<\\/)(script\\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]\n        ],\n        // After <script ... type\n        scriptAfterType: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.scriptAfterType' }],\n            [/=/, 'delimiter', '@scriptAfterTypeEquals'],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type =\n        scriptAfterTypeEquals: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.scriptAfterTypeEquals' }],\n            [/\"([^\"]*)\"/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],\n            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@scriptWithCustomType.$1' }],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.text/javascript', nextEmbedded: 'text/javascript' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type = $S2\n        scriptWithCustomType: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.scriptWithCustomType.$S2' }],\n            [/>/, { token: 'delimiter.html', next: '@scriptEmbedded.$S2', nextEmbedded: '$S2' }],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        scriptEmbedded: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInEmbeddedState.scriptEmbedded.$S2', nextEmbedded: '@pop' }],\n            [/<\\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]\n        ],\n        // -- END <script> tags handling\n        // -- BEGIN <style> tags handling\n        // After <style\n        style: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.style' }],\n            [/type/, 'attribute.name', '@styleAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/(<\\/)(style\\s*)(>)/, ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]]\n        ],\n        // After <style ... type\n        styleAfterType: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.styleAfterType' }],\n            [/=/, 'delimiter', '@styleAfterTypeEquals'],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type =\n        styleAfterTypeEquals: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.styleAfterTypeEquals' }],\n            [/\"([^\"]*)\"/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],\n            [/'([^']*)'/, { token: 'attribute.value', switchTo: '@styleWithCustomType.$1' }],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.text/css', nextEmbedded: 'text/css' }],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type = $S2\n        styleWithCustomType: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInSimpleState.styleWithCustomType.$S2' }],\n            [/>/, { token: 'delimiter.html', next: '@styleEmbedded.$S2', nextEmbedded: '$S2' }],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        styleEmbedded: [\n            [/<\\?((php)|=)?/, { token: '@rematch', switchTo: '@phpInEmbeddedState.styleEmbedded.$S2', nextEmbedded: '@pop' }],\n            [/<\\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]\n        ],\n        // -- END <style> tags handling\n        phpInSimpleState: [\n            [/<\\?((php)|=)?/, 'metatag.php'],\n            [/\\?>/, { token: 'metatag.php', switchTo: '@$S2.$S3' }],\n            { include: 'phpRoot' }\n        ],\n        phpInEmbeddedState: [\n            [/<\\?((php)|=)?/, 'metatag.php'],\n            [/\\?>/, { token: 'metatag.php', switchTo: '@$S2.$S3', nextEmbedded: '$S3' }],\n            { include: 'phpRoot' }\n        ],\n        phpRoot: [\n            [/[a-zA-Z_]\\w*/, {\n                    cases: {\n                        '@phpKeywords': { token: 'keyword.php' },\n                        '@phpCompileTimeConstants': { token: 'constant.php' },\n                        '@default': 'identifier.php'\n                    }\n                }],\n            [/[$a-zA-Z_]\\w*/, {\n                    cases: {\n                        '@phpPreDefinedVariables': { token: 'variable.predefined.php' },\n                        '@default': 'variable.php'\n                    }\n                }],\n            // brackets\n            [/[{}]/, 'delimiter.bracket.php'],\n            [/[\\[\\]]/, 'delimiter.array.php'],\n            [/[()]/, 'delimiter.parenthesis.php'],\n            // whitespace\n            [/[ \\t\\r\\n]+/],\n            // comments\n            [/#/, 'comment.php', '@phpLineComment'],\n            [/\\/\\//, 'comment.php', '@phpLineComment'],\n            // block comments\n            [/\\/\\*/, 'comment.php', '@phpComment'],\n            // strings\n            [/\"/, 'string.php', '@phpDoubleQuoteString'],\n            [/'/, 'string.php', '@phpSingleQuoteString'],\n            // delimiters\n            [/[\\+\\-\\*\\%\\&\\|\\^\\~\\!\\=\\<\\>\\/\\?\\;\\:\\.\\,\\@]/, 'delimiter.php'],\n            // numbers\n            [/\\d*\\d+[eE]([\\-+]?\\d+)?/, 'number.float.php'],\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float.php'],\n            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex.php'],\n            [/0[0-7']*[0-7]/, 'number.octal.php'],\n            [/0[bB][0-1']*[0-1]/, 'number.binary.php'],\n            [/\\d[\\d']*/, 'number.php'],\n            [/\\d/, 'number.php'],\n        ],\n        phpComment: [\n            [/\\*\\//, 'comment.php', '@pop'],\n            [/[^*]+/, 'comment.php'],\n            [/./, 'comment.php']\n        ],\n        phpLineComment: [\n            [/\\?>/, { token: '@rematch', next: '@pop' }],\n            [/.$/, 'comment.php', '@pop'],\n            [/[^?]+$/, 'comment.php', '@pop'],\n            [/[^?]+/, 'comment.php'],\n            [/./, 'comment.php']\n        ],\n        phpDoubleQuoteString: [\n            [/[^\\\\\"]+/, 'string.php'],\n            [/@escapes/, 'string.escape.php'],\n            [/\\\\./, 'string.escape.invalid.php'],\n            [/\"/, 'string.php', '@pop']\n        ],\n        phpSingleQuoteString: [\n            [/[^\\\\']+/, 'string.php'],\n            [/@escapes/, 'string.escape.php'],\n            [/\\\\./, 'string.escape.invalid.php'],\n            [/'/, 'string.php', '@pop']\n        ],\n    },\n    phpKeywords: [\n        'abstract', 'and', 'array', 'as', 'break',\n        'callable', 'case', 'catch', 'cfunction', 'class', 'clone',\n        'const', 'continue', 'declare', 'default', 'do',\n        'else', 'elseif', 'enddeclare', 'endfor', 'endforeach',\n        'endif', 'endswitch', 'endwhile', 'extends', 'false', 'final',\n        'for', 'foreach', 'function', 'global', 'goto',\n        'if', 'implements', 'interface', 'instanceof', 'insteadof',\n        'namespace', 'new', 'null', 'object', 'old_function', 'or', 'private',\n        'protected', 'public', 'resource', 'static', 'switch', 'throw', 'trait',\n        'try', 'true', 'use', 'var', 'while', 'xor',\n        'die', 'echo', 'empty', 'exit', 'eval',\n        'include', 'include_once', 'isset', 'list', 'require',\n        'require_once', 'return', 'print', 'unset', 'yield',\n        '__construct'\n    ],\n    phpCompileTimeConstants: [\n        '__CLASS__',\n        '__DIR__',\n        '__FILE__',\n        '__LINE__',\n        '__NAMESPACE__',\n        '__METHOD__',\n        '__FUNCTION__',\n        '__TRAIT__'\n    ],\n    phpPreDefinedVariables: [\n        '$GLOBALS',\n        '$_SERVER',\n        '$_GET',\n        '$_POST',\n        '$_FILES',\n        '$_REQUEST',\n        '$_SESSION',\n        '$_ENV',\n        '$_COOKIE',\n        '$php_errormsg',\n        '$HTTP_RAW_POST_DATA',\n        '$http_response_header',\n        '$argc',\n        '$argv'\n    ],\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/php/php.js?");

/***/ })

/******/ });