module.exports =
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
__export(__webpack_require__(2));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tree = /** @class */ (function () {
    function Tree(_tree) {
        this._tree = _tree;
        this.reset();
    }
    Tree.prototype.buildParent = function (parent, cur) {
        cur.parent = parent;
        for (var _i = 0, _a = cur.children; _i < _a.length; _i++) {
            var node = _a[_i];
            this.buildParent(cur, node);
        }
    };
    Tree.fromJSON = function (json) {
        var tree = new Tree(json.rootNode);
        tree.buildParent(null, tree._curNode);
        return tree;
    };
    Tree.fromNode = function (node) {
        return new Tree(node);
    };
    // 트리를 xml 로 변환한다.
    Tree.prototype.toXML = function () {
        return null;
    };
    // 노드 포인터를 루트노드로 옮긴다.
    Tree.prototype.reset = function () {
        this._curNode = this._tree;
        this._curIndex = 0;
    };
    // 패턴과 매칭되는 노드를 선택한다.
    // 선택된 노드를 현재 노드로 설정하고 매칭된 노드가 없으면 null 을 리턴한다.
    Tree.prototype.search = function (rule) {
        this.reset();
        var match = this._loopMatchNode(this._curNode, Tree._getTokens(rule.match));
        if (match) {
            this._setCurrent(match);
            return match;
        }
        else {
            return null;
        }
    };
    // 커맨드를 적용한다.
    Tree.apply = function (node, commands) {
        for (var _i = 0, commands_1 = commands; _i < commands_1.length; _i++) {
            var command = commands_1[_i];
            switch (command.cmd) {
                case 'MOVE':
                    Tree._move(node, command.args);
                    break;
                case 'DELETE':
                    Tree._delete(node, command.args);
                    break;
                case 'CREATE':
                    Tree._create(node, command.args);
                    break;
                case 'REPLACE':
                    Tree._replace(node, command.args);
                    break;
            }
        }
    };
    // 현재 노드를 리턴한다.
    Tree.prototype.cur = function () {
        return this._curNode;
    };
    // 부모 노드로 이동하고 리턴한다. 실패시 null
    Tree.prototype.parent = function () {
        if (this._curNode.parent) {
            return this._setCurrent(this._curNode.parent);
        }
        else {
            return null;
        }
    };
    // 다음 형제노드로 이동하고 리턴한다. 실패시 null
    Tree.prototype.nextSibiling = function () {
        if (this._curNode.parent) {
            var nextIndex = this._curIndex + 1;
            if (nextIndex <= this._curNode.parent.children.length - 1) {
                this._curIndex = nextIndex;
                this._curNode = this._curNode.parent.children[nextIndex];
                return this._curNode;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    // 이전 형제노드로 이동하고 리턴한다. 실패시 null
    Tree.prototype.prevSibiling = function () {
        if (this._curNode.parent) {
            var prevIndex = this._curIndex - 1;
            if (prevIndex >= 0) {
                this._curIndex = prevIndex;
                this._curNode = this._curNode.parent.children[prevIndex];
                return this._curNode;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    // 자식 노드로 이동
    Tree.prototype.child = function () {
        if (this._curNode.children.length) {
            this._curNode = this._curNode.children[0];
            this._curIndex = 0;
            return this._curNode;
        }
        else {
            return null;
        }
    };
    // 트리를 LL로 돌면서 매칭되는 노드가 있는지 순회
    Tree.prototype._loopMatchNode = function (node, tokens) {
        if (this._matchRule(node, tokens)) {
            return node;
        }
        else {
            if (node.children) {
                for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                    var _node = _a[_i];
                    var match = this._loopMatchNode(_node, tokens);
                    if (match) {
                        return match;
                    }
                }
            }
            else {
                return null;
            }
        }
    };
    // Node와 RuleNode가 매칭되는지 확인한다. (같은 Depth의 regex로 검색)
    // ex) S (NP (PRP)) (VP (VBP) (SBAR (...))) 와 S(*+VP(*+[SBAR|...]+*))
    // 일때 S와 S, NP+VP와 *+VP+*, VBP+SBAR와 *+SBAR+* 단계로 검색
    Tree.prototype._matchRule = function (node, tokens) {
        var tree = Tree.fromNode(node);
        var star = false;
        var checkNext = false;
        for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            var cur = null;
            // 다음 노드가 없을 때 * 이 아니면 false
            if (checkNext) {
                if (token != '*') {
                    return false;
                }
                else {
                    checkNext = false;
                }
            }
            switch (token) {
                case '(':
                    cur = tree.child();
                    star = false;
                    break;
                case ')':
                    cur = tree.parent();
                    star = false;
                    break;
                case '+':
                    cur = tree.nextSibiling();
                    break;
                case '*':
                    star = true;
                    break;
                default:
                    var node_1 = token.split('=');
                    var _token = node_1[0].split('|');
                    var lemma = node_1[1];
                    // 이전 토큰이 * 인경우
                    if (star) {
                        star = false;
                        // 노드가 나올때까지 다음 노드로 이동
                        do {
                            if (_token.includes(tree._curNode.pos)) {
                                if (lemma && lemma != tree._curNode.token.lemma) {
                                    continue;
                                }
                                cur = tree._curNode;
                                break; // 노드가 검색됨
                            }
                        } while (tree.nextSibiling());
                        if (!cur) {
                            return false;
                        }
                    }
                    else {
                        // 이전 토큰이 * 이 아닌경우 노드가 반드시 일치해야 함
                        if (!_token.includes(tree._curNode.pos)) {
                            return false;
                        }
                        else {
                            if (lemma && lemma != tree._curNode.token.lemma) {
                                return false;
                            }
                            cur = tree._curNode;
                        }
                    }
                    break;
            }
            // 형제나 다음 노드가 없을 때
            if (!cur && !star) {
                if (token == '+') {
                    // 형제가 없을 때 다음 토큰이 * 인지 검사해야 함
                    checkNext = true;
                }
                else {
                    // 자식, 부모, 해당 노드가 없을 때
                    return false;
                }
            }
        }
        return true;
    };
    Tree._getTokens = function (match) {
        var tokens = [];
        var token = '';
        for (var _i = 0, match_1 = match; _i < match_1.length; _i++) {
            var c = match_1[_i];
            if ('()+[]='.includes(c)) {
                if (token) {
                    tokens.push(token);
                    token = '';
                }
                tokens.push(c);
            }
            else {
                token += c;
            }
        }
        if (token) {
            tokens.push(token);
        }
        return tokens;
    };
    Tree.prototype._setCurrent = function (node) {
        this._curNode = node;
        this._setCurrentIndex();
        return this._curNode;
    };
    Tree.prototype._setCurrentIndex = function () {
        var _this = this;
        if (this._curNode.parent) {
            this._curIndex = this._curNode.parent.children.findIndex(function (_) { return _ == _this._curNode; });
        }
        else {
            this._curIndex = 0;
        }
    };
    Tree._select = function (node, arg) {
        var tree = Tree.fromNode(node);
        var tokens = Tree._getTokens(arg);
        var selection = [];
        var star = false;
        var select = false;
        var shouldStartSelection = false;
        var shouldEndSelection = false;
        for (var _i = 0, tokens_2 = tokens; _i < tokens_2.length; _i++) {
            var token = tokens_2[_i];
            switch (token) {
                case '(':
                    tree.child();
                    star = false;
                    break;
                case ')':
                    if (star) {
                        star = false;
                        if (shouldEndSelection) {
                            select = false;
                            shouldEndSelection = false;
                            do {
                                if (!selection.find(function (_) { return _ == tree.cur(); })) {
                                    selection.push(tree.cur());
                                }
                            } while (tree.nextSibiling());
                        }
                    }
                    tree.parent();
                    break;
                case '+':
                    tree.nextSibiling();
                    break;
                case '*':
                    star = true;
                    break;
                case '[':
                    if (star) {
                        shouldStartSelection = true;
                    }
                    else {
                        select = true;
                    }
                    break;
                case ']':
                    if (star) {
                        shouldEndSelection = true;
                    }
                    else {
                        select = false;
                    }
                    break;
                default:
                    var nodes = token.split('|');
                    // 이전 토큰이 * 인경우
                    if (star) {
                        star = false;
                        // 노드가 나올때까지 다음 노드로 이동
                        do {
                            if (select && !shouldEndSelection) {
                                selection.push(tree._curNode);
                            }
                            if (nodes.includes(tree._curNode.pos)) {
                                if (shouldStartSelection) {
                                    select = true;
                                    shouldStartSelection = false;
                                    selection.push(tree._curNode);
                                }
                                break; // 노드가 검색됨
                            }
                            if (select && shouldEndSelection) {
                                select = false;
                                shouldEndSelection = false;
                                selection.push(tree._curNode);
                            }
                        } while (tree.nextSibiling());
                    }
                    else {
                        if (select) {
                            selection.push(tree._curNode);
                        }
                    }
                    break;
            }
        }
        return selection;
    };
    Tree._move = function (node, args) {
        var _a, _b;
        var source = Tree._select(node, args[0]);
        var target = Tree._select(node, args[1])[0];
        var method = args[3] || 'push';
        // 삭제
        var tmp = source.slice();
        var _loop_1 = function (node_2) {
            node_2.parent.children.splice(node_2.parent.children.findIndex(function (_) { return _ == node_2; }), 1);
        };
        for (var _i = 0, tmp_1 = tmp; _i < tmp_1.length; _i++) {
            var node_2 = tmp_1[_i];
            _loop_1(node_2);
        }
        // 삽입
        if (method == 'push') {
            (_a = target.children).push.apply(_a, tmp);
        }
        else {
            (_b = target.children).unshift.apply(_b, tmp);
        }
    };
    Tree._delete = function (node, args) {
        var _a;
        var target = Tree._select(node, args[0])[0];
        var parent = target.parent;
        //삭제
        parent.children.splice(parent.children.findIndex(function (_) { return _ == target; }), 1);
        //삽입
        (_a = parent.children).push.apply(_a, target.children);
    };
    Tree._create = function (node, args) {
    };
    Tree._replace = function (node, args) {
    };
    return Tree;
}());
exports.Tree = Tree;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 주석으로 달아놓긴 했는데 README.md 작성 필요할것같아요..
Object.defineProperty(exports, "__esModule", { value: true });
var ECommand;
(function (ECommand) {
    ECommand["DELETE"] = "DELETE";
    ECommand["MOVE"] = "MOVE";
    ECommand["CREATE"] = "CREATE";
    ECommand["REPLACE"] = "REPLACE";
})(ECommand = exports.ECommand || (exports.ECommand = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map