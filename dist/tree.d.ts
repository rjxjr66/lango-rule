import { INode, IRule, ICommand } from "./rule.interface";
export declare class Tree {
    private _tree;
    private _curNode;
    private _curIndex;
    constructor(_tree: any);
    buildParent(parent: INode, cur: INode): void;
    static fromJSON(json: any): Tree;
    static fromNode(node: INode): Tree;
    toXML(): string;
    reset(): void;
    search(rule: IRule): INode;
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
    private static _replace;
}
