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

Object.defineProperty(exports, "__esModule", { value: true });
var tree_1 = __webpack_require__(1);
exports.Tree = tree_1.Tree;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Tree {
    constructor(_tree) {
        this._tree = _tree;
        this.reset();
    }
    buildParent(parent, cur) {
        cur.parent = parent;
        for (let node of cur.children) {
            this.buildParent(cur, node);
        }
    }
    static fromJSON(json) {
        const tree = new Tree(json.rootNode);
        tree.buildParent(null, tree._curNode);
        return tree;
    }
    static fromNode(node) {
        return new Tree(node);
    }
    // 트리를 xml 로 변환한다.
    toXML() {
        return null;
    }
    // 노드 포인터를 루트노드로 옮긴다.
    reset() {
        this._curNode = this._tree;
        this._curIndex = 0;
    }
    // 패턴과 매칭되는 노드를 선택한다.
    // 선택된 노드를 현재 노드로 설정하고 매칭된 노드가 없으면 null 을 리턴한다.
    search(rule) {
        this.reset();
        const match = this._loopMatchNode(this._curNode, Tree._getTokens(rule.match));
        if (match) {
            this._setCurrent(match);
            return match;
        }
        else {
            return null;
        }
    }
    // 커맨드를 적용한다.
    static apply(node, commands) {
        for (let command of commands) {
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
    }
    // 현재 노드를 리턴한다.
    cur() {
        return this._curNode;
    }
    // 부모 노드로 이동하고 리턴한다. 실패시 null
    parent() {
        if (this._curNode.parent) {
            return this._setCurrent(this._curNode.parent);
        }
        else {
            return null;
        }
    }
    // 다음 형제노드로 이동하고 리턴한다. 실패시 null
    nextSibiling() {
        if (this._curNode.parent) {
            const nextIndex = this._curIndex + 1;
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
    }
    // 이전 형제노드로 이동하고 리턴한다. 실패시 null
    prevSibiling() {
        if (this._curNode.parent) {
            const prevIndex = this._curIndex - 1;
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
    }
    // 자식 노드로 이동
    child() {
        if (this._curNode.children.length) {
            this._curNode = this._curNode.children[0];
            this._curIndex = 0;
            return this._curNode;
        }
        else {
            return null;
        }
    }
    // 트리를 LL로 돌면서 매칭되는 노드가 있는지 순회
    _loopMatchNode(node, tokens) {
        if (this._matchRule(node, tokens)) {
            return node;
        }
        else {
            if (node.children) {
                for (let _node of node.children) {
                    const match = this._loopMatchNode(_node, tokens);
                    if (match) {
                        return match;
                    }
                }
            }
            else {
                return null;
            }
        }
    }
    // Node와 RuleNode가 매칭되는지 확인한다. (같은 Depth의 regex로 검색)
    // ex) S (NP (PRP)) (VP (VBP) (SBAR (...))) 와 S(*+VP(*+[SBAR|...]+*))
    // 일때 S와 S, NP+VP와 *+VP+*, VBP+SBAR와 *+SBAR+* 단계로 검색
    _matchRule(node, tokens) {
        const tree = Tree.fromNode(node);
        let star = false;
        let checkNext = false;
        for (let token of tokens) {
            let cur = null;
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
                    const node = token.split('=');
                    const _token = node[0].split('|');
                    const lemma = node[1];
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
    }
    static _getTokens(match) {
        let tokens = [];
        let token = '';
        for (let c of match) {
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
    }
    _setCurrent(node) {
        this._curNode = node;
        this._setCurrentIndex();
        return this._curNode;
    }
    _setCurrentIndex() {
        if (this._curNode.parent) {
            this._curIndex = this._curNode.parent.children.findIndex(_ => _ == this._curNode);
        }
        else {
            this._curIndex = 0;
        }
    }
    static _select(node, arg) {
        const tree = Tree.fromNode(node);
        const tokens = Tree._getTokens(arg);
        const selection = [];
        let star = false;
        let select = false;
        let shouldStartSelection = false;
        let shouldEndSelection = false;
        for (let token of tokens) {
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
                                if (!selection.find(_ => _ == tree.cur())) {
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
                    let nodes = token.split('|');
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
    }
    static _move(node, args) {
        const source = Tree._select(node, args[0]);
        const target = Tree._select(node, args[1])[0];
        const method = args[3] || 'push';
        // 삭제
        let tmp = [...source];
        for (let node of tmp) {
            node.parent.children.splice(node.parent.children.findIndex(_ => _ == node), 1);
        }
        // 삽입
        if (method == 'push') {
            target.children.push(...tmp);
        }
        else {
            target.children.unshift(...tmp);
        }
    }
    static _delete(node, args) {
        const target = Tree._select(node, args[0])[0];
        const parent = target.parent;
        //삭제
        parent.children.splice(parent.children.findIndex(_ => _ == target), 1);
        //삽입
        parent.children.push(...target.children);
    }
    static _create(node, args) {
    }
    static _set(node, args) {
        const target = Tree._select(node, args[0])[0];
        if (!target.attr) {
            target.attr = {};
        }
        target.attr[args[1]] = args[2];
    }
    static _replace(node, args) {
        const target = Tree._select(node, args[0])[0];
        target.pos = args[1];
    }
    static _element(node, args) {
        const target = Tree._select(node, args[0])[0];
        target.element = args[1];
    }
}
exports.Tree = Tree;


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map