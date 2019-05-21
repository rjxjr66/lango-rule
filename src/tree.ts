import { INode, IRule, IDependency, ICommand, POS } from "./rule.interface";

export class Tree {
    private _curNode: INode;
    private _curIndex: number;

    constructor(private _tree) {
        this.reset();
    }

    buildParent(parent: INode, cur: any) {
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

    static fromNode(node: INode) {
        return new Tree(node);
    }

    // 트리를 xml 로 변환한다.
    toXML(): string {

        return null;
    }

    root() {
        return this._tree
    }

    // 노드 포인터를 루트노드로 옮긴다.
    reset() {
        this._curNode = this._tree;
        if (this._curNode.parent) {
            this._curIndex = this._curNode.parent.children.findIndex(_ => _ === this._curNode)
        } else {
            this._curIndex = 0;
        }
    }

    mergeRuleWithRelation(rule) {

    }
    // 패턴과 매칭되는 노드를 선택한다.
    // 선택된 노드를 현재 노드로 설정하고 매칭된 노드가 없으면 null 을 리턴한다.
    search(rule: IRule, dependencies: IDependency[] = [], curNode: INode = null): INode {
        if (curNode) this._setCurrent(curNode);
        else this.reset();

        const _dependencies = dependencies.filter(dep => {
            return rule.relations.filter(_ => _.relation === dep.dep).length
        })
        // for (let relation of rule.relations) {
        //     const _dep = dependencies.find(_ => _.dep === relation.relation);
        //     if (_dep) {
        //         relation.governorIdx = _dep.governor;
        //         relation.dependentIdx = _dep.dependent;
        //     }
        // }
        // rule.relations.map(relation => {
        //     const _dep = dependencies.find(_ => _.dep === relation.relation);
        //     let ret = { ...relation };
        //     if (_dep) ret = Object.assign(ret, {
        //         governorIdx: _dep.governor,
        //         dependentIdx: _dep.dependent
        //     })
        //     return ret;
        // })
        const match = this._loopMatchNode(this._curNode, rule, Tree._getTokens(rule.match));
        if (match) {
            this._setCurrent(match);

            if (!match.matchRules) match.matchRules = [];
            match.matchRules.push(rule);

            return match;
        } else {
            return null;
        }
    }

    // Tree 전체 Node들을 초기화한다.
    init() {
        this.reset();
        this.initNode(this._curNode);
    }

    // 하위 node들을 돌면서 저장된 matchRules을 초기화시킨다.
    initNode(node: INode) {
        if (node.matchRules && node.matchRules.length) node.matchRules = [];
        for (let child of node.children) {
            this.initNode(child);
        }
    }


    // 커맨드를 적용한다.
    static apply(node: INode, commands: ICommand[]) {
        for (let command of commands) {
            switch (command.cmd) {
                case 'MOVE':
                    Tree._move(node, command.args)
                    break;
                case 'DELETE':
                    Tree._delete(node, command.args)
                    break;
                case 'CREATE':
                    Tree._create(node, command.args)
                    break;
                case 'SET':
                    Tree._set(node, command.args)
                    break;
                case 'REPLACE':
                    Tree._replace(node, command.args)
                    break;
                case 'ELEMENT':
                    Tree._element(node, command.args)
                    break;
            }
        }
    }

    // 현재 노드를 리턴한다.
    cur() {
        return this._curNode;
    }

    // 부모 노드로 이동하고 리턴한다. 실패시 null
    // TODO : 실패시 현재 노드 그대로는 어떨지? (지호)
    parent(): INode {
        if (this._curNode.parent) {
            return this._setCurrent(this._curNode.parent);
        } else {
            return null;
        }
    }

    // 다음 형제노드로 이동하고 리턴한다. 실패시 null
    // TODO : 실패시 현재 노드 그대로는 어떨지? (지호)
    nextSibiling(): INode {
        if (this._curNode.parent) {
            const nextIndex = this._curIndex + 1;
            if (nextIndex <= this._curNode.parent.children.length - 1) {
                this._curIndex = nextIndex;
                this._curNode = this._curNode.parent.children[nextIndex];

                return this._curNode;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    // 이전 형제노드로 이동하고 리턴한다. 실패시 null
    // TODO : 실패시 현재 노드 그대로는 어떨지? (지호)
    prevSibiling(): INode {
        if (this._curNode.parent) {
            const prevIndex = this._curIndex - 1;
            if (prevIndex >= 0) {
                this._curIndex = prevIndex;
                this._curNode = this._curNode.parent.children[prevIndex];

                return this._curNode;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    // 자식 노드로 이동
    // TODO : 실패시 현재 노드 그대로는 어떨지? (지호)
    child(): INode {
        if (this._curNode.children.length) {
            this._curNode = this._curNode.children[0];
            this._curIndex = 0;

            return this._curNode;
        } else {
            return null;
        }
    }

    // 트리를 LL로 돌면서 매칭되는 노드가 있는지 순회
    private _loopMatchNode(node: INode, rule: IRule, tokens: string[]): INode {
        if (node.matchRules && node.matchRules.includes(rule)) {
            return null;
        } else if (this._matchRule(node, tokens)) {
            return node;
        } else {
            if (node.children) {
                for (let _node of node.children) {
                    const match = this._loopMatchNode(_node, rule, tokens);
                    if (match) {
                        return match;
                    }
                }
            } else {
                return null;
            }
        }
    }

    // Node와 RuleNode가 매칭되는지 확인한다. (같은 Depth의 regex로 검색)
    // ex) S (NP (PRP)) (VP (VBP) (SBAR (...))) 와 S(*+VP(*+[SBAR|...]+*))
    // 일때 S와 S, NP+VP와 *+VP+*, VBP+SBAR와 *+SBAR+* 단계로 검색
    private _matchRule(node: INode, tokens: string[]): boolean {
        const tree = Tree.fromNode(node);
        let star = false;

        let checkNext = false;
        for (let token of tokens) {
            let cur = null;

            // 다음 노드가 없을 때 * 이 아니면 false
            if (checkNext) {
                if (token != '*') {
                    return false;
                } else {
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
                    cur = tree.nextSibiling()
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
                        } while (tree.nextSibiling())

                        if (!cur) {
                            return false;
                        }
                    } else {
                        // 이전 토큰이 * 이 아닌경우 노드가 반드시 일치해야 함
                        if (!_token.includes(tree._curNode.pos)) {
                            return false;
                        } else {
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
                } else {
                    // 자식, 부모, 해당 노드가 없을 때
                    return false;
                }
            }
        }

        return true;
    }

    private static _getTokens(match: string): string[] {
        let tokens = [];
        let token = '';
        for (let c of match) {
            if ('()+[]'.includes(c)) {
                if (token) {
                    tokens.push(token);
                    token = '';
                }

                tokens.push(c);
            } else {
                token += c;
            }
        }

        if (token) {
            tokens.push(token);
        }
        // let tokens = match.match(tokenRegexp);
        return tokens;
    }

    private _setCurrent(node: INode): INode {
        this._curNode = node;
        this._setCurrentIndex();

        return this._curNode;
    }

    private _setCurrentIndex(): number {
        if (this._curNode.parent) {
            return this._curIndex = this._curNode.parent.children.findIndex(_ => _ == this._curNode);
        } else {
            return this._curIndex = 0;
        }
    }

    private static _select(node: INode, arg: string): INode[] {
        const tree = Tree.fromNode(node);
        const tokens = Tree._getTokens(arg);
        const selection: INode[] = [];

        let shouldStartSelection = false;
        let shouldEndSelection = false;

        let selectStartIdx = -1;
        let selectEndIdx = -1;
        let lastToken = null;
        for (let token of tokens) {
            switch (token) {
                case '(':
                    tree.child();
                    break;
                case ')':
                    if (shouldEndSelection) {
                        selectEndIdx = tree._curIndex + 1;
                        if (selectStartIdx >= 0 && selectEndIdx >= 0)
                            selection.push(...(tree._curNode.parent.children.slice(selectStartIdx, selectEndIdx)))
                        shouldEndSelection = false;
                    }
                    tree.parent();
                    break;
                case '+':
                    if (lastToken !== "*") {
                        tree.nextSibiling()
                    }
                    break;
                case '*':
                    lastToken = token;
                    break;
                case '[':
                    if (lastToken === "*") {
                        shouldStartSelection = true;
                    } else {
                        selectStartIdx = tree._curIndex;
                    }
                    break;
                case ']':
                    if (lastToken === "*") {
                        shouldEndSelection = true;
                    } else {
                        selectEndIdx = tree._curIndex + 1;
                        if (selectStartIdx >= 0 && selectEndIdx >= 0)
                            selection.push(...(tree._curNode.parent.children.slice(selectStartIdx, selectEndIdx)))
                    }
                    break;
                default:
                    lastToken = token;
                    let nodes = token.split('|');

                    do {
                        if (nodes.includes(tree._curNode.pos)) {
                            if (shouldStartSelection) {
                                selectStartIdx = tree._curIndex;
                                shouldStartSelection = false;
                            }
                            if (shouldEndSelection) {
                                selectEndIdx = tree._curIndex + 1;
                                if (selectStartIdx >= 0 && selectEndIdx >= 0)
                                    selection.push(...(tree._curNode.parent.children.slice(selectStartIdx, selectEndIdx)))
                                shouldEndSelection = false;
                            }
                            break;
                        }
                    } while (tree.nextSibiling())
                    break;
            }
        }

        return selection;
    }

    private static _move(node: INode, args: string[]) {
        const source = Tree._select(node, args[0]);
        const target = Tree._select(node, args[1])[0];
        const method = args[2] || 'push';

        // 삭제
        let tmp = [...source];
        for (let node of tmp) {
            node.parent.children.splice(node.parent.children.findIndex(_ => _ == node), 1);
            node.parent = target;   // parent가 업데이트됨
        }

        // 삽입
        if (method === 'push') {
            target.children.push(...tmp);
        } else {
            target.children.unshift(...tmp);
        }
    }

    private static _delete(node: INode, args: string[]) {
        const target = Tree._select(node, args[0])[0];
        const parent = target.parent;

        // 교체
        parent.children.splice(parent.children.findIndex(_ => _ == target), 1, ...target.children);

        // 부모변경
        for (let child of target.children) {
            child.parent = parent;
        }
    }

    private static _create(node: INode, args: string[]) {
        const target = Tree._select(node, args[0])[0];
        const method = args[2] || 'push';

        const newNode = {
            pos: args[1],
            parent: node,
            children: [],
            word: ""
        }
        // 삽입
        if (method === 'push') {
            target.children.push(<INode>newNode);
        } else {
            target.children.unshift(<INode>newNode);
        }
    }

    private static _set(node: INode, args: string[]) {
        const target = Tree._select(node, args[0])[0];
        if (!target.attr) {
            target.attr = {}
        }

        target.attr[args[1]] = args[2];
    }

    private static _replace(node: INode, args: string[]) {
        const target = Tree._select(node, args[0])[0];
        target.pos = args[1] as POS;
    }

    private static _element(node: INode, args: string[]) {
        const target = Tree._select(node, args[0])[0];
        target.element = args[1];
    }

    private loopNode(node: INode, cb: Function = null) {
        cb && cb(node);
        for (let child of node.children) {
            this.loopNode(child, cb);
        }
    }

    public toJSON() {
        const jsonObj = Object.assign({}, this._tree);
        this.loopNode(jsonObj, (node) => { node.parent = null })
        return jsonObj;
    }
}
