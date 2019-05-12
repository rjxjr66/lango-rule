import { Tree } from "../src/tree";
import { INode, IRule, ECommand } from "../src/rule.interface";
const sampleTree = {
    "rootNode": {
        "pos": "ROOT",
        "word": "",
        "children": [
            {
                "pos": "S",
                "word": "",
                "desc": "1st matched S",
                "children": [
                    {
                        "pos": "NP",
                        "word": "",
                        "children": [
                            {
                                "pos": "EX",
                                "word": "There",
                                "token": {
                                    "index": 1,
                                    "word": "There",
                                    "originalText": "There",
                                    "characterOffsetBegin": 0,
                                    "characterOffsetEnd": 5,
                                    "before": "", "after": " ",
                                    "pos": "EX", "lemma": "there"
                                },
                                "children": []
                            }]
                    }, {
                        "pos": "VP",
                        "word": "",
                        "children": [
                            {
                                "pos": "VBZ",
                                "word": "is",
                                "token": {
                                    "index": 2,
                                    "word": "is",
                                    "originalText": "is",
                                    "characterOffsetBegin": 6,
                                    "characterOffsetEnd": 8,
                                    "before": " ",
                                    "after": " ",
                                    "pos": "VBZ",
                                    "lemma": "be"
                                },
                                "children": []
                            }, {
                                "pos": "NP",
                                "word": "", "children": [
                                    {
                                        "pos": "DT",
                                        "word": "a",
                                        "token": {
                                            "index": 3,
                                            "word": "a",
                                            "originalText": "a",
                                            "characterOffsetBegin": 9,
                                            "characterOffsetEnd": 10,
                                            "before": " ",
                                            "after": " ",
                                            "pos": "DT",
                                            "lemma": "a"
                                        }, "children": []
                                    }, {
                                        "pos": "NN",
                                        "word": "hero",
                                        "token": {
                                            "index": 4,
                                            "word": "hero",
                                            "originalText": "hero",
                                            "characterOffsetBegin": 11,
                                            "characterOffsetEnd": 15,
                                            "before": " ",
                                            "after": " ",
                                            "pos": "NN",
                                            "lemma": "hero"
                                        }, "children": []
                                    }]
                            }, {
                                "pos": "SBAR",
                                "word": "",
                                "children": [
                                    {
                                        "pos": "IN",
                                        "word": "if",
                                        "token": {
                                            "index": 5,
                                            "word": "if",
                                            "originalText": "if",
                                            "characterOffsetBegin": 16,
                                            "characterOffsetEnd": 18,
                                            "before": " ",
                                            "after": " ",
                                            "pos": "IN",
                                            "lemma": "if"
                                        },
                                        "children": []
                                    }, {
                                        "pos": "S",
                                        "word": "",
                                        "desc": "2nd matched S",
                                        "children": [
                                            {
                                                "pos": "NP",
                                                "word": "",
                                                "children": [
                                                    {
                                                        "pos": "PRP",
                                                        "word": "You",
                                                        "token": {
                                                            "index": 6,
                                                            "word": "You",
                                                            "originalText": "You",
                                                            "characterOffsetBegin": 19,
                                                            "characterOffsetEnd": 22,
                                                            "before": " ",
                                                            "after": " ",
                                                            "pos": "PRP",
                                                            "lemma": "you"
                                                        },
                                                        "children": []
                                                    }]
                                            }, {
                                                "pos": "VP",
                                                "word": "",
                                                "children": [
                                                    {
                                                        "pos": "VBP",
                                                        "word": "look",
                                                        "token": {
                                                            "index": 7,
                                                            "word": "look",
                                                            "originalText": "look",
                                                            "characterOffsetBegin": 23,
                                                            "characterOffsetEnd": 27,
                                                            "before": " ",
                                                            "after": " ",
                                                            "pos": "VBP",
                                                            "lemma": "look"
                                                        },
                                                        "children": []
                                                    }, {
                                                        "pos": "PP",
                                                        "word": "",
                                                        "children": [
                                                            {
                                                                "pos": "IN",
                                                                "word": "inside",
                                                                "token": {
                                                                    "index": 8,
                                                                    "word": "inside",
                                                                    "originalText": "inside",
                                                                    "characterOffsetBegin": 28,
                                                                    "characterOffsetEnd": 34,
                                                                    "before": " ",
                                                                    "after": " ",
                                                                    "pos": "IN",
                                                                    "lemma": "inside"
                                                                },
                                                                "children": []
                                                            }, {
                                                                "pos": "NP",
                                                                "word": "",
                                                                "children": [
                                                                    {
                                                                        "pos": "PRP$",
                                                                        "word": "your",
                                                                        "token": {
                                                                            "index": 9,
                                                                            "word": "your",
                                                                            "originalText": "your",
                                                                            "characterOffsetBegin": 35,
                                                                            "characterOffsetEnd": 39,
                                                                            "before": " ",
                                                                            "after": " ",
                                                                            "pos": "PRP$",
                                                                            "lemma": "you"
                                                                        },
                                                                        "children": []
                                                                    }, {
                                                                        "pos": "NN",
                                                                        "word": "heart",
                                                                        "token": {
                                                                            "index": 10, "word": "heart",
                                                                            "originalText": "heart",
                                                                            "characterOffsetBegin": 40,
                                                                            "characterOffsetEnd": 45,
                                                                            "before": " ",
                                                                            "after": "",
                                                                            "pos": "NN",
                                                                            "lemma": "heart"
                                                                        }, "children": []
                                                                    }]
                                                            }]
                                                    }]
                                            }]
                                    }]
                            }]
                    }]
            }]
    }
}

const rules: IRule[] = [
    {
        "name": "VP01", "match": "S(*+VP(*+NP|S|PP|SBAR|ADJP|ADVP+*)+*)",
        "commands": [{ "cmd": ECommand.MOVE, "args": ["S(*+VP(*+[NP|S|PP|SBAR|ADJP|ADVP+*]))", "[S]"] }],
        "relations": []
    }, {
        "name": "CAJ01", "match": "S(NP(NP(*+NN|DT|RB|JJ|JJS|NNS)+PP(IN=of+NP)))",
        "commands": [{ "cmd": ECommand.DELETE, "args": ["S(NP(NP(*+NN|DT|RB|JJ|JJS|NNS)+[PP]))"] }],
        "relations": []
    }, {
        "name": "VP02", "match": "S(*+VP(VBD|VBP|VBZ=have+*+VP(VBN+*))+*)",
        "commands": [{ "cmd": ECommand.DELETE, "args": ["S(VP(VBD|VBP|VBZ=have+*+[VP]))"] }],
        "relations": []
    }, {
        "name": "VP03", "match": "S(*+VP(MD+*+VP(VB+*))+*)",
        "commands": [{ "cmd": ECommand.DELETE, "args": ["S(VP(MD+*+[VP]))"] }],
        "relations": []
    }, {
        "name": "VP04", "match": "S(*+VP(MD+*+VP(VBN+*))+*)",
        "commands": [{ "cmd": ECommand.DELETE, "args": ["S(VP(MD+*+[VP]))"] }],
        "relations": []
    }, {
        "name": "VP05", "match": "S(*+VP(VBD|VBP|VBZ=do+*+VP(VB+*))+*)",
        "commands": [{ "cmd": ECommand.DELETE, "args": ["S(VP(VBD|VBP|VBZ=do+*+[VP]))"] }],
        "relations": []
    }, {
        "name": "VP06", "match": "S(*+VP(VBD|VBP|VBZ=be+*+VP(VBG+*))+*)",
        "commands": [{ "cmd": ECommand.DELETE, "args": ["S(*+VP(VBD|VBP|VBZ=be+*+[VP])"] }],
        "relations": []
    }, {
        "name": "VPMD01", "match": "S(*+PP(IN+PP)+*)",
        "commands": [{ "cmd": ECommand.MOVE, "args": ["S(PP(IN+[PP]))", "[S]"] }],
        "relations": []
    }, {
        "name": "VPMD02-1", "match": "S(*+VP(*)+ADVP+*)",
        "commands": [{ "cmd": ECommand.MOVE, "args": ["S(*+VP(*)+[ADVP]+*)", "S(*+[VP])"] }],
        "relations": []
    }, {
        "name": "VPMD02-2", "match": "S(*+ADVP+VP(*)+*)",
        "commands": [{ "cmd": ECommand.MOVE, "args": ["S(*+[ADVP]+VP(*)+*)", "S(*+ADVP+[VP])"] }],
        "relations": []
    }, {
        "name": "SS01", "match": "S(*+VP(TO+VP(VB+*))+*)",
        "commands": [{ "cmd": ECommand.DELETE, "args": ["S([VP])"] }],
        "relations": []
    }, {
        "name": "SS02", "match": "S(*+VP(*+VP(VBG+*))+*)",
        "commands": [{ "cmd": ECommand.MOVE, "args": ["S(*+VP(*+[VP])", "[S]"] }],
        "relations": []
    }, {
        "name": "SS03", "match": "S(*+VP(VBG+*)+*)",
        "commands": [{ "cmd": ECommand.DELETE, "args": ["S(*+[VP])"] }],
        "relations": []
    }, {
        "name": "SS04", "match": "S(*+VP(*+VP(VBN+*))+*)",
        "commands": [{ "cmd": ECommand.MOVE, "args": ["S(*+VP(*+[VP])", "[S]"] }],
        "relations": []
    }, {
        "name": "CAJ02", "match": "NP(NP(*+CD)+PP(IN=of+NP))",
        "commands": [],
        "relations": []
    }]


describe('Test about \"There is a hero if You look inside your heart.\"', () => {

    it('올바르게 트리가 빌드되어야 한다.', () => {
        const tree = Tree.fromJSON(sampleTree);
        expect(tree).toBeTruthy();
    });

    it('트리에서 자식 노드로 이동이 가능해야 한다.', () => {
        const tree = Tree.fromJSON(sampleTree);
        expect(tree.child()).toBeTruthy();
    });

    it('트리에서 다음 형제 노드로 이동이 가능해야 한다.', () => {
        const tree = Tree.fromJSON(sampleTree);
        tree.child();   // ROOT -> S
        tree.child();   // S -> NP
        expect(tree.nextSibiling()).toBeTruthy();
    });

    it(`성공적으로 전체 ${rules.length}개 룰을 반복해야한다`, () => {
        const tree = Tree.fromJSON(sampleTree);
        let i = 0;
        try {
            for (i = 0; tree && i < rules.length; i++) {
                tree.search(rules[i])
            }
            expect(i).toEqual(rules.length);
        } catch{
            throw new Error(`수행 결과 : ${i}/${rules.length}`)
        }
    })

    it(`성공적으로 검색이 된 노드가 있다`, () => {
        const tree = Tree.fromJSON(sampleTree);
        let results = [];
        for (let rule of rules) {
            const result = tree.search(rule)
            result && results.push(result);
        }
        expect(results.length).toBeGreaterThanOrEqual(1)
    })

    it(`최상단 S가 VP01 룰에 매칭이 된다`, () => {
        const tree = Tree.fromJSON(sampleTree);
        const rule = rules.find(_ => _.name === "VP01");
        const node = tree.search(rule);
        expect(node).toBeTruthy()
    })

    // it(`VP01에 매칭된 최상단 S의 하위 노드에서 다시 룰을 매칭이 가능해야한다`, () => {
    //     const tree = Tree.fromJSON(sampleTree);
    //     const rule = rules.find(_ => _.name === "VP01");
    //     tree.search(rule);
    //     const node = tree.search(rule);
    //     // console.log(JSON.stringify(node));
    //     // const node = tree.search(rule);
    //     console.log(node)
    // })
})