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
__export(__webpack_require__(3));
<<<<<<< HEAD
exports.LANGO_RULE_VERSION = 'v0.0.31';
=======
exports.LANGO_RULE_VERSION = 'v0.0.33';
>>>>>>> 0b9792c5080af87c8d013ca88f22b97ded035364


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var convert = __webpack_require__(2);
var relRegExp = new RegExp("\\{|\\}", "g");
var invertRegExp = new RegExp("^\\!", "g");
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
        // build parent
        Tree.loopNode(tree._curNode, function (node) {
            var nodeTokens = [];
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                child.parent = node;
                child.tokens && nodeTokens.push(child.tokens);
            }
            node.tokens = node.pos;
            if (node.token)
                node.tokens += "=" + node.token.lemma;
            if (nodeTokens.length)
                node.tokens += "(" + nodeTokens.join("+") + ")";
        });
        // tree.buildParent(null, tree._curNode);
        return tree;
    };
    Tree.fromNode = function (node) {
        return new Tree(node);
    };
    // 트리를 xml 로 변환한다.
    Tree.prototype.toXML = function () {
        var options = {
            compact: false,
            ignoreComment: true, spaces: 4,
            doctypeFn: function (val) {
                return val.toUpperCase();
            },
            cdataFn: function (val) {
                return val;
            },
            instructionFn: function (val) {
                return val;
            },
            instructionNameFn: function (val) {
                return val;
            },
            elementNameFn: function (val) {
                return val;
            },
            attributeNameFn: function (val) {
                return val;
            },
            attributeValueFn: function (val) {
                return val;
            },
            attributesFn: function (val) {
                return val;
            },
            fullTagEmptyElementFn: function (val) {
                return val;
            }
        };
        var form = {
            declaration: {
                attributes: {
                    version: "1.0",
                    encoding: "utf-8"
                }
            },
            elements: []
        };
        var json = Object.assign({}, this._tree).children[0];
        Tree.loopNode(json, function (node) {
            var element = { type: "" };
            // leaf node
            if (!(node.children && node.children.length)) {
                if (node.word) {
                    element["type"] = "text";
                    element["text"] = node.word;
                }
                else {
                    element["type"] = "element";
                    element["name"] = node.element;
                }
            }
            // non-leaf node
            else {
                element["type"] = "element";
                if (!element.elements)
                    element.elements = [];
                for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    // 띄어쓰기 추가
                    if (child.element.type === "text" && element.elements.length)
                        child.element.text = " " + child.element.text;
                    element.elements.push(child.element);
                }
                if (node.parent && node.parent.pos === "ROOT") {
                    element["name"] = "sentence";
                }
                else if (node.element) {
                    element["name"] = node.element;
                }
                else {
                    if (element.elements.filter(function (child) { return child.type === "text"; }).length)
                        element["name"] = "word";
                    else if (element.elements.filter(function (child) { return ["word", "chunk"].includes(child["name"]); }).length)
                        element["name"] = "part";
                    else
                        element["name"] = "chunk";
                }
            }
            if (node.attr)
                element["attributes"] = node.attr;
            node.element = element;
        });
        form.elements.push(json.element);
        // const result = convert.json2xml(JSON.parse(JSON.stringify({ sentence: this.toJSON() })), options);
        var result = convert.json2xml(JSON.stringify(form), options);
        return result;
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
    // search2(rule: IRule, dependencies: IDependency[] = [], curNode: INode = null): INode {
    //     if (curNode) this._setCurrent(curNode);
    //     else this.reset();
    //     const ruleTokens = Tree._getTokens(rule.match);
    //     // const matches = this._loopMatchNode(this._curNode, rule, Tree._getTokens(rule.match));
    //     return null;
    // }
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
                case 'WORD':
                    Tree._word(node, command.args);
                    break;
                case 'MERGE':
                    Tree._merge(node, command.args);
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
        var matched;
        if (node.matchRules && node.matchRules.includes(rule)) {
            matched = { match: false };
        }
        else {
            matched = this._matchRule(node, tokens);
        }
        if (matched.match) {
            if (rule.relations && rule.relations.length && matched.relArgs) {
                var passed = rule.relations.filter(function (relation) {
                    if (relation.governor) {
                        if (!matched.relArgs[relation.governor])
                            return false;
                    }
                    if (relation.dependent) {
                        if (!matched.relArgs[relation.dependent])
                            return false;
                    }
                    var found = relation.references.find(function (ref) {
                        if (relation.governor && !Tree._findRefNode(matched.relArgs[relation.governor], {
                            index: ref.governor,
                            lemma: ref.governorGloss
                        }))
                            return false;
                        if (relation.dependent && !Tree._findRefNode(matched.relArgs[relation.dependent], {
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
    };
    // Node내에 해당 릴레이션 정보를 가진 하위 Node를 찾는다.
    Tree._findRefNode = function (node, ref) {
        if (node.token && node.token.index === ref.index && node.token.lemma === ref.lemma)
            return node;
        if (node.children) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (["S", "SBAR"].includes(child.pos))
                    continue;
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
                    if (!star)
                        cur = tree.nextSibiling();
                    break;
                case '*':
                    star = true;
                    break;
                default:
                    var _node = token.split('=');
                    var _token = _node[0].split('|');
                    var lemmas = [], rels = [];
                    if (_node[1]) {
                        for (var _a = 0, _b = _node[1].split("|"); _a < _b.length; _a++) {
                            var query = _b[_a];
                            if (query.match(relRegExp)) {
                                rels.push(query.replace(relRegExp, ""));
                            }
                            else {
                                lemmas.push(query);
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
                                for (var _c = 0, rels_1 = rels; _c < rels_1.length; _c++) {
                                    var rel = rels_1[_c];
                                    relArgs[rel] = tree._curNode;
                                }
                                if (lemmas.length) {
                                    var include = false;
                                    for (var _d = 0, lemmas_1 = lemmas; _d < lemmas_1.length; _d++) {
                                        var _lemma = lemmas_1[_d];
                                        if (_lemma.match(invertRegExp)) {
                                            if (tree._curNode.token.lemma !== _lemma.replace(invertRegExp, "")) {
                                                include = true;
                                                break;
                                            }
                                        }
                                        else {
                                            if (tree._curNode.token.lemma === _lemma) {
                                                include = true;
                                                break;
                                            }
                                        }
                                    }
                                    if (!include)
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
                            for (var _e = 0, rels_2 = rels; _e < rels_2.length; _e++) {
                                var rel = rels_2[_e];
                                relArgs[rel] = tree._curNode;
                            }
                            if (lemmas.length && !lemmas.includes(tree._curNode.token.lemma)) {
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
    Tree.select = function (node, arg) {
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
    Tree.move = function (source, target, method) {
        var _a, _b;
        if (method === void 0) { method = "push"; }
        // 삭제
        var tmp = source.slice();
        var _loop_2 = function (node) {
            node.parent.children.splice(node.parent.children.findIndex(function (_) { return _ == node; }), 1);
            node.parent = target; // parent가 업데이트됨
        };
        for (var _i = 0, tmp_1 = tmp; _i < tmp_1.length; _i++) {
            var node = tmp_1[_i];
            _loop_2(node);
        }
        // 삽입
        if (method === 'push') {
            (_a = target.children).push.apply(_a, tmp);
        }
        else {
            (_b = target.children).unshift.apply(_b, tmp);
        }
    };
    Tree._move = function (node, args) {
        var source = Tree.select(node, args[0]);
        var target = Tree.select(node, args[1])[0];
        Tree.move(source, target, args[2]);
    };
    Tree.delete = function (node, recursive) {
        var _a;
        if (recursive === void 0) { recursive = false; }
        var parent = node.parent;
        // 전체제거
        if (recursive) {
            parent.children.splice(parent.children.findIndex(function (_) { return _ == node; }), 1);
        }
        // 타겟만 제거
        else {
            (_a = parent.children).splice.apply(_a, [parent.children.findIndex(function (_) { return _ == node; }), 1].concat(node.children));
            // 부모변경
            for (var _i = 0, _b = node.children; _i < _b.length; _i++) {
                var child = _b[_i];
                child.parent = parent;
            }
        }
    };
    Tree._delete = function (node, args) {
        var target = Tree.select(node, args[0])[0];
        Tree.delete(target, args[1] === "true");
    };
    Tree.create = function (node, pos, method) {
        if (method === void 0) { method = "push"; }
        var newNode = {
            pos: pos,
            parent: node,
            children: [],
            word: ""
        };
        // 삽입
        if (method === 'push') {
            node.children.push(newNode);
        }
        else {
            node.children.unshift(newNode);
        }
    };
    Tree._create = function (node, args) {
        var target = Tree.select(node, args[0])[0];
        Tree.create(target, args[1], args[2]);
        // const method = args[2] || 'push';
        // const newNode = {
        //     pos: args[1],
        //     parent: target,
        //     children: [],
        //     word: ""
        // }
        // // 삽입
        // if (method === 'push') {
        //     target.children.push(<INode>newNode);
        // } else {
        //     target.children.unshift(<INode>newNode);
        // }
    };
    Tree.set = function (node, attrName, attrVal) {
        if (!node.attr) {
            node.attr = {};
        }
        node.attr[attrName] = attrVal;
    };
    Tree._set = function (node, args) {
        var target = Tree.select(node, args[0])[0];
        Tree.set(target, args[1], args[2]);
    };
    Tree.replace = function (node, pos) {
        node.pos = pos;
    };
    Tree._replace = function (node, args) {
        var target = Tree.select(node, args[0])[0];
        Tree.replace(target, args[1]);
    };
    Tree.element = function (node, element) {
<<<<<<< HEAD
        // WORD 엘리먼트로 확정된 상태에서 다른 ELEMENT의 룰이 중복 선언되면 하위에 WORD를 생성후에 현재 노드에 ELEMENT를 부여한다
        if (node.element && node.element !== element) {
            var clone = Object.assign({}, node);
            clone.parent = node;
            node.children = [clone];
            node.attr = {};
        }
=======
        // // WORD 엘리먼트로 확정된 상태에서 다른 ELEMENT의 룰이 중복 선언되면 하위에 WORD를 생성후에 현재 노드에 ELEMENT를 부여한다
        // if (node.element && node.element !== element) {
        //     const clone = Object.assign({}, node);
        //     clone.parent = node;
        //     node.children = [clone];
        //     node.attr = {}
        // }
>>>>>>> 0b9792c5080af87c8d013ca88f22b97ded035364
        node.element = element;
    };
    Tree._element = function (node, args) {
        var target = Tree.select(node, args[0])[0];
        Tree.element(target, args[1]);
    };
    Tree.word = function (node, word) {
<<<<<<< HEAD
        node.word = word;
        var token = Object.assign({}, node.token);
        token.lemma = word;
        node.token = token;
=======
        var curNode = node;
        // 해당 노드의 최하위(leaf) 노드를 선택
        while (curNode.children && curNode.children.length) {
            curNode = curNode.children[0];
        }
        curNode.word = word;
        var token = Object.assign({}, curNode.token);
        token.lemma = word;
        curNode.token = token;
>>>>>>> 0b9792c5080af87c8d013ca88f22b97ded035364
    };
    Tree._word = function (node, args) {
        var target = Tree.select(node, args[0])[0];
        Tree.word(target, args[1]);
    };
    // TODO merge 만들기
    Tree._merge = function (node, args) {
    };
    Tree.loopNode = function (node, cb) {
        if (cb === void 0) { cb = null; }
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            Tree.loopNode(child, cb);
        }
        cb && cb(node);
    };
    Tree.prototype.toJSON = function () {
        var jsonObj = Object.assign({}, this._tree);
        Tree.loopNode(jsonObj, function (node) {
            delete node.parent;
        });
        return jsonObj;
    };
    return Tree;
}());
exports.Tree = Tree;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("xml-js");

/***/ }),
/* 3 */
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
    ECommand["MERGE"] = "MERGE";
    ECommand["WORD"] = "WORD";
})(ECommand = exports.ECommand || (exports.ECommand = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map