// 주석으로 달아놓긴 했는데 README.md 작성 필요할것같아요..

export type POS = 'S' | 'SBAR' | 'NP' | 'VP' | 'ADJP' | 'ADVP' | 'PP' | 'WHNP' | 'WHADJP' | 'WHAVP' | 'WHPP' | 'IN' | 'CC' | 'TO' | 'EX' | 'WDT' |
    'WP' | 'WP$' | 'WRB' | 'NN' | 'NNS' | 'NNP' | 'NNPS' | 'PRP' | 'VB' | 'VBP' | 'VBZ' | 'MD' | 'PRT' | 'JJ' | 'JJR' | 'JJS' | 'DT' | 'PRP$' |
    'CD' | 'VBG' | 'VBN' | 'RB' | 'RBS' | 'NP-TMP';


export interface IRule {
    name?: string;
    match?: string; // 검색 패턴
    commands?: ICommand[],
    relations: IRelation[] // 관계 패턴
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
    cmd?: "DELETE" | "MOVE" | "SET";
    args?: string[]; // 매개변수(검색 패턴), 문장성분, "unshift"|"push"
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


interface IRelation {
    relation?: string; // ex1) nmod, ex2) nsubj|nsubjpass
    governor?: string; // 검색 패턴으로 선택
    dependent?: string; // 검색 패턴으로 선택
}

export interface INode {
    pos?: POS;
    parent?: INode;
    children?: INode[];
    word?: string;
    token?: IToken;
    matchRules: string[];
    // XML 변환시 사용 될 attribute
    attr?: any;
    // XML 변환시 사용 될 엘리먼트 이름
    element?: 'sentence' | 'part' | 'cChunk' | 'sChunk' | 'word';
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
    SET = "SET",
    CREATE = "CREATE",
    REPLACE = "REPLACE",
    ELEMENT = "ELEMENT"
}
