export declare type POS = 'S' | 'SBAR' | 'NP' | 'VP' | 'ADJP' | 'ADVP' | 'PP' | 'WHNP' | 'WHADJP' | 'WHAVP' | 'WHPP' | 'IN' | 'CC' | 'TO' | 'EX' | 'WDT' | 'WP' | 'WP$' | 'WRB' | 'NN' | 'NNS' | 'NNP' | 'NNPS' | 'PRP' | 'VB' | 'VBP' | 'VBZ' | 'MD' | 'PRT' | 'JJ' | 'JJR' | 'JJS' | 'DT' | 'PRP$' | 'CD' | 'VBG' | 'VBN' | 'RB' | 'RBS' | 'NP-TMP';
export interface IRule {
    name?: string;
    match: string;
    tokens?: string[];
    tree?: IRuleNode;
    commands: ICommand[];
    relations?: IRelation[];
}
/*******
* Rule 작성 예시
S(
    VP(
        *+NP|S|PP|SBAR|ADJP|ADVP+*
    )
)
********/
export interface ICommand {
    cmd: ECommand;
    tree?: ICommandNode;
    args?: string[];
}
/*******
* Command 작성 예시 - NP|S|PP|SBAR|ADJP|ADVP 이후의 노드들을 모두 S 로 연결
{
    cmd: ECommand.MOVE,
    args: [
        `
        S(
            VP(
                *+[NP|S|PP|SBAR|ADJP|ADVP+*]
            )
        )
        `,
        `
        [S]
        `
    ]
}
********/
export interface IRelation {
    relation?: string;
    governor?: string;
    dependent?: string;
}
export interface INode {
    pos: POS;
    parent: INode;
    children: INode[];
    word: string;
    token: IToken;
    matchRules: IRule[];
    attr: any;
    element: string;
}
export interface IDependency {
    dep: string;
    governor: number;
    governorGloss: string;
    dependent: number;
    dependentGloss: string;
}
export interface IToken {
    index?: number;
    lemma?: string;
}
export interface IRuleNode {
    tokens: string[];
    parent: IRuleNode;
    word: string;
    lemma: string;
    children: IRuleNode[];
}
export interface ICommandNode {
    tokens: string[];
    parent: ICommandNode;
    children?: ICommandNode[];
    sources?: string[];
}
export declare enum ECommand {
    DELETE = "DELETE",
    MOVE = "MOVE",
    CREATE = "CREATE",
    SET = "SET",
    REPLACE = "REPLACE",
    ELEMENT = "ELEMENT"
}
