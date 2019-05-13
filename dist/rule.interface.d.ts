export type POS = 'S' | 'SBAR' | 'NP' | 'VP' | 'ADJP' | 'ADVP' | 'PP' | 'WHNP' | 'WHADJP' | 'WHAVP' | 'WHPP' | 'IN' | 'CC' | 'TO' | 'EX' | 'WDT' |
    'WP' | 'WP$' | 'WRB' | 'NN' | 'NNS' | 'NNP' | 'NNPS' | 'PRP' | 'VB' | 'VBP' | 'VBZ' | 'MD' | 'PRT' | 'JJ' | 'JJR' | 'JJS' | 'DT' | 'PRP$' |
    'CD' | 'VBG' | 'VBN' | 'RB' | 'RBS' | 'NP-TMP';


export interface IRule {
    name?: string;
    match: string; // 자식관계는 (), 형제관계는 +, lemma는 =
    tokens?: string[];
    tree?: IRuleNode;
    commands: ICommand[];
    relations: IRelation[]; // 관계 패턴
    // apply: Function;
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
    args?: string[]; // 피연산자(타겟 노드). Rule 작성 규칙을 따르되 선택할 노드는 [], match 된 트리 중 root 노드 기준으로 작성
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
    relation?: string; // ex1) nmod, ex2) nsubj|nsubjpass, ex3) nsubj&xcomp
    node1?: string; // 검색 패턴으로 선택
    node2?: string; // 검색 패턴으로 선택, optional
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
    sources?: string[]
}

export enum ECommand {
    DELETE = "DELETE",
    MOVE = "MOVE",
    CREATE = "CREATE",
    SET = "SET",
    REPLACE = "REPLACE",
    ELEMENT = "ELEMENT",
}
