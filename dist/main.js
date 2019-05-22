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
exports.LANGO_RULE_VERSION = 'v0.0.29';


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var relRegExp = new RegExp("\\{|\\}", "g");
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
    Tree.prototype.root = function () {
        return this._tree;
    };
    // 노드 포인터를 루트노드로 옮긴다.
    Tree.prototype.reset = function () {
        var _this = this;
        this._curNode = this._tree;
        if (this._curNode.parent) {
            this._curIndex = this._curNode.parent.children.findIndex(function (_) { return _ === _this._curNode; });
        }
        else {
            this._curIndex = 0;
        }
    };
    // 패턴과 매칭되는 노드를 선택한다.
    // 선택된 노드를 현재 노드로 설정하고 매칭된 노드가 없으면 null 을 리턴한다.
    Tree.prototype.search = function (rule, dependencies, curNode) {
        if (dependencies === void 0) { dependencies = []; }
        if (curNode === void 0) { curNode = null; }
        if (curNode)
            this._setCurrent(curNode);
        else
            this.reset();
        if (!rule.relations) {
            rule.relations = [];
        }
        var _loop_1 = function (relation) {
            relation.references = dependencies.filter(function (dep) {
                return relation.relation.split("|").includes(dep.dep);
            });
        };
        // relation의 OR조건
        for (var _i = 0, _a = rule.relations; _i < _a.length; _i++) {
            var relation = _a[_i];
            _loop_1(relation);
        }
        var match = this._loopMatchNode(this._curNode, rule, Tree._getTokens(rule.match));
        if (match) {
            this._setCurrent(match);
            if (!match.matchRules)
                match.matchRules = [];
            match.matchRules.push(rule);
            return match;
        }
        else {
            return null;
        }
    };
    // Tree 전체 Node들을 초기화한다.
    Tree.prototype.init = function () {
        this.reset();
        this.initNode(this._curNode);
    };
    // 하위 node들을 돌면서 저장된 matchRules을 초기화시킨다.
    Tree.prototype.initNode = function (node) {
        if (node.matchRules && node.matchRules.length)
            node.matchRules = [];
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            this.initNode(child);
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
                case 'SET':
                    Tree._set(node, command.args);
                    break;
                case 'REPLACE':
                    Tree._replace(node, command.args);
                    break;
                case 'ELEMENT':
                    Tree._element(node, command.args);
                    break;
            }
        }
    };
    // 현재 노드를 리턴한다.
    Tree.prototype.cur = function () {
        return this._curNode;
    };
    // 부모 노드로 이동하고 리턴한다. 실패시 null
    // TODO : 실패시 현재 노드 그대로는 어떨지? (지호)
    Tree.prototype.parent = function () {
        if (this._curNode.parent) {
            return this._setCurrent(this._curNode.parent);
        }
        else {
            return null;
        }
    };
    // 다음 형제노드로 이동하고 리턴한다. 실패시 null
    // TODO : 실패시 현재 노드 그대로는 어떨지? (지호)
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
    // TODO : 실패시 현재 노드 그대로는 어떨지? (지호)
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
    // TODO : 실패시 현재 노드 그대로는 어떨지? (지호)
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
    Tree.prototype._loopMatchNode = function (node, rule, tokens) {
        if (node.matchRules && node.matchRules.includes(rule)) {
            return null;
        }
        else {
            var matched_1 = this._matchRule(node, tokens);
            if (matched_1.match) {
                if (rule.relations && rule.relations.length && matched_1.relArgs) {
                    var passed = rule.relations.filter(function (relation) {
                        if (relation.governor) {
                            if (!matched_1.relArgs[relation.governor])
                                return false;
                        }
                        if (relation.dependent) {
                            if (!matched_1.relArgs[relation.dependent])
                                return false;
                        }
                        var found = relation.references.find(function (ref) {
                            if (relation.governor && !Tree._findRefNode(matched_1.relArgs[relation.governor], {
                                index: ref.governor,
                                lemma: ref.governorGloss
                            }))
                                return false;
                            if (relation.dependent && !Tree._findRefNode(matched_1.relArgs[relation.dependent], {
                                index: ref.dependent,
                                lemma: ref.dependentGloss
                            }))
                                return false;
                            return true;
                        });
                        return !!found;
                    });
                    if (passed.length === rule.relations.length)
                        return node;
                }
                else
                    return node;
            }
            if (node.children) {
                for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                    var _node = _a[_i];
                    var match = this._loopMatchNode(_node, rule, tokens);
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
    // Node내에 해당 릴레이션 정보를 가진 하위 Node를 찾는다.
    Tree._findRefNode = function (node, ref) {
        if (node.token && node.token.index === ref.index && node.token.lemma === ref.lemma)
            return node;
        if (node.children) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var ret = Tree._findRefNode(child, ref);
                if (ret)
                    return ret;
            }
        }
        return null;
    };
    // Node와 RuleNode가 매칭되는지 확인한다. (같은 Depth의 regex로 검색)
    // ex) S (NP (PRP)) (VP (VBP) (SBAR (...))) 와 S(*+VP(*+[SBAR|...]+*))
    // 일때 S와 S, NP+VP와 *+VP+*, VBP+SBAR와 *+SBAR+* 단계로 검색
    Tree.prototype._matchRule = function (node, tokens) {
        var relArgs = {};
        var tree = Tree.fromNode(node);
        var star = false;
        var checkNext = false;
        for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
            var token = tokens_1[_i];
            var cur = null;
            // 다음 노드가 없을 때 * 이 아니면 false
            if (checkNext) {
                if (token != '*') {
                    return { match: false };
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
                    var lemma = void 0, rel = void 0;
                    if (node_1[1]) {
                        for (var _a = 0, _b = node_1[1].split("&"); _a < _b.length; _a++) {
                            var query = _b[_a];
                            if (query.match(relRegExp)) {
                                rel = query.replace(relRegExp, "");
                            }
                            else {
                                lemma = query;
                            }
                        }
                    }
                    // 이전 토큰이 * 인경우
                    if (star) {
                        star = false;
                        // 노드가 나올때까지 다음 노드로 이동
                        do {
                            if (_token.includes(tree._curNode.pos)) {
                                // relation 변수 등록
                                if (rel)
                                    relArgs[rel] = tree._curNode;
                                if (lemma && lemma !== tree._curNode.token.lemma) {
                                    continue;
                                }
                                cur = tree._curNode;
                                break; // 노드가 검색됨
                            }
                        } while (tree.nextSibiling());
                        if (!cur) {
                            return { match: false };
                        }
                    }
                    else {
                        // 이전 토큰이 * 이 아닌경우 노드가 반드시 일치해야 함
                        if (!_token.includes(tree._curNode.pos)) {
                            return { match: false };
                        }
                        else {
                            // relation 변수 등록
                            if (rel)
                                relArgs[rel] = tree._curNode;
                            if (lemma && lemma !== tree._curNode.token.lemma) {
                                return { match: false };
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
                    return { match: false };
                }
            }
        }
        return { relArgs: relArgs, match: true };
    };
    Tree._getTokens = function (match) {
        var tokens = [];
        var token = '';
        for (var _i = 0, match_1 = match; _i < match_1.length; _i++) {
            var c = match_1[_i];
            if ('()+[]'.includes(c)) {
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
        // let tokens = match.match(tokenRegexp);
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
            return this._curIndex = this._curNode.parent.children.findIndex(function (_) { return _ == _this._curNode; });
        }
        else {
            return this._curIndex = 0;
        }
    };
    Tree._select = function (node, arg) {
        var tree = Tree.fromNode(node);
        var tokens = Tree._getTokens(arg);
        var selection = [];
        var shouldStartSelection = false;
        var shouldEndSelection = false;
        var selectStartIdx = -1;
        var selectEndIdx = -1;
        var lastToken = null;
        for (var _i = 0, tokens_2 = tokens; _i < tokens_2.length; _i++) {
            var token = tokens_2[_i];
            switch (token) {
                case '(':
                    tree.child();
                    break;
                case ')':
                    if (shouldEndSelection) {
                        selectEndIdx = tree._curNode.parent.children.length;
                        if (selectStartIdx >= 0 && selectEndIdx >= 0)
                            selection.push.apply(selection, (tree._curNode.parent.children.slice(selectStartIdx, selectEndIdx)));
                        shouldEndSelection = false;
                    }
                    tree.parent();
                    break;
                case '+':
                    if (lastToken !== "*") {
                        tree.nextSibiling();
                    }
                    break;
                case '*':
                    lastToken = token;
                    break;
                case '[':
                    if (lastToken === "*") {
                        shouldStartSelection = true;
                    }
                    else {
                        selectStartIdx = tree._curIndex;
                    }
                    break;
                case ']':
                    if (lastToken === "*") {
                        shouldEndSelection = true;
                    }
                    else {
                        selectEndIdx = tree._curIndex + 1;
                        if (selectStartIdx >= 0 && selectEndIdx >= 0)
                            selection.push.apply(selection, (tree._curNode.parent.children.slice(selectStartIdx, selectEndIdx)));
                    }
                    break;
                default:
                    lastToken = token;
                    var nodes = token.split('|');
                    do {
                        if (nodes.includes(tree._curNode.pos)) {
                            if (shouldStartSelection) {
                                selectStartIdx = tree._curIndex;
                                shouldStartSelection = false;
                            }
                            if (shouldEndSelection) {
                                selectEndIdx = tree._curIndex + 1;
                                if (selectStartIdx >= 0 && selectEndIdx >= 0)
                                    selection.push.apply(selection, (tree._curNode.parent.children.slice(selectStartIdx, selectEndIdx)));
                                shouldEndSelection = false;
                            }
                            break;
                        }
                    } while (tree.nextSibiling());
                    break;
            }
        }
        return selection;
    };
    Tree._move = function (node, args) {
        var _a, _b;
        var source = Tree._select(node, args[0]);
        var target = Tree._select(node, args[1])[0];
        var method = args[2] || 'push';
        // 삭제
        var tmp = source.slice();
        var _loop_2 = function (node_2) {
            node_2.parent.children.splice(node_2.parent.children.findIndex(function (_) { return _ == node_2; }), 1);
            node_2.parent = target; // parent가 업데이트됨
        };
        for (var _i = 0, tmp_1 = tmp; _i < tmp_1.length; _i++) {
            var node_2 = tmp_1[_i];
            _loop_2(node_2);
        }
        // 삽입
        if (method === 'push') {
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
        // 교체
        (_a = parent.children).splice.apply(_a, [parent.children.findIndex(function (_) { return _ == target; }), 1].concat(target.children));
        // 부모변경
        for (var _i = 0, _b = target.children; _i < _b.length; _i++) {
            var child = _b[_i];
            child.parent = parent;
        }
    };
    Tree._create = function (node, args) {
        var target = Tree._select(node, args[0])[0];
        var method = args[2] || 'push';
        var newNode = {
            pos: args[1],
            parent: target,
            children: [],
            word: ""
        };
        // 삽입
        if (method === 'push') {
            target.children.push(newNode);
        }
        else {
            target.children.unshift(newNode);
        }
    };
    Tree._set = function (node, args) {
        var target = Tree._select(node, args[0])[0];
        if (!target.attr) {
            target.attr = {};
        }
        target.attr[args[1]] = args[2];
    };
    Tree._replace = function (node, args) {
        var target = Tree._select(node, args[0])[0];
        target.pos = args[1];
    };
    Tree._element = function (node, args) {
        var target = Tree._select(node, args[0])[0];
        target.element = args[1];
    };
    Tree.prototype.loopNode = function (node, cb) {
        if (cb === void 0) { cb = null; }
        cb && cb(node);
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            this.loopNode(child, cb);
        }
    };
    Tree.prototype.toJSON = function () {
        var jsonObj = Object.assign({}, this._tree);
        this.loopNode(jsonObj, function (node) { node.parent = null; });
        return jsonObj;
    };
    return Tree;
}());
exports.Tree = Tree;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ECommand;
(function (ECommand) {
    ECommand["DELETE"] = "DELETE";
    ECommand["MOVE"] = "MOVE";
    ECommand["CREATE"] = "CREATE";
    ECommand["SET"] = "SET";
    ECommand["REPLACE"] = "REPLACE";
    ECommand["ELEMENT"] = "ELEMENT";
})(ECommand = exports.ECommand || (exports.ECommand = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map