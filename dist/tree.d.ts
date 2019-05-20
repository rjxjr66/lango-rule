import { INode, IRule, IDependency, ICommand } from "./rule.interface";
export declare class Tree {
    private _tree;
    private _curNode;
    private _curIndex;
    constructor(_tree: any);
    buildParent(parent: INode, cur: any): void;
    static fromJSON(json: any): Tree;
    static fromNode(node: INode): Tree;
    toXML(): string;
    root(): any;
    reset(): void;
    mergeRuleWithRelation(rule: any): void;
    search(rule: IRule, dependencies?: IDependency[], curNode?: INode): INode;
    init(): void;
    initNode(node: INode): void;
    static apply(node: INode, commands: ICommand[]): void;
    cur(): INode;
    parent(): INode;
    nextSibiling(): INode;
    prevSibiling(): INode;
    child(): INode;
    private _loopMatchNode;
    private _matchRule;
    private static _getTokens;
    private _setCurrent;
    private _setCurrentIndex;
    private static _select;
    private static _move;
    private static _delete;
    private static _create;
    private static _set;
    private static _replace;
    private static _element;
    private loopNode;
    toJSON(): any;
}
