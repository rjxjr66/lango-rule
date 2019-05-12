import { Tree } from "./tree";
import { IRule, ECommand } from "./rule.interface";

const sampleTree = { "rootNode": { "pos": "ROOT", "word": "", "children": [{ "pos": "S", "posInfo": { "description": "simple declarative clause, i.e. one that is not introduced by a (possible empty) subordinating conjunction or a wh-word and that does not exhibit subject-verb inversion.", "examples": [] }, "word": "", "children": [{ "pos": "NP", "posInfo": { "description": "Noun Phrase. ", "examples": [] }, "word": "", "children": [{ "pos": "EX", "posInfo": { "group": "Existential there", "tag": "Existential there", "examples": [] }, "word": "There", "token": { "index": 1, "word": "There", "originalText": "There", "characterOffsetBegin": 0, "characterOffsetEnd": 5, "before": "", "after": " ", "pos": "EX", "lemma": "there" }, "children": [] }] }, { "pos": "VP", "posInfo": { "description": "Vereb Phrase. ", "examples": [] }, "word": "", "children": [{ "pos": "VBZ", "posInfo": { "group": "Verb, 3rd person singular present", "tag": "Verb, 3rd person singular present", "examples": [] }, "word": "is", "token": { "index": 2, "word": "is", "originalText": "is", "characterOffsetBegin": 6, "characterOffsetEnd": 8, "before": " ", "after": " ", "pos": "VBZ", "lemma": "be" }, "children": [] }, { "pos": "NP", "posInfo": { "description": "Noun Phrase. ", "examples": [] }, "word": "", "children": [{ "pos": "DT", "posInfo": { "group": "Determiner", "tag": "Determiner", "examples": [] }, "word": "a", "token": { "index": 3, "word": "a", "originalText": "a", "characterOffsetBegin": 9, "characterOffsetEnd": 10, "before": " ", "after": " ", "pos": "DT", "lemma": "a" }, "children": [] }, { "pos": "NN", "posInfo": { "group": "Noun, singular or mass", "tag": "Noun, singular or mass", "examples": [] }, "word": "hero", "token": { "index": 4, "word": "hero", "originalText": "hero", "characterOffsetBegin": 11, "characterOffsetEnd": 15, "before": " ", "after": " ", "pos": "NN", "lemma": "hero" }, "children": [] }] }, { "pos": "SBAR", "posInfo": { "description": "Clause introduced by a (possibly empty) subordinating conjunction.", "examples": [] }, "word": "", "children": [{ "pos": "IN", "posInfo": { "group": "Preposition or subordinating conjunction", "tag": "Preposition or subordinating conjunction", "examples": [] }, "word": "if", "token": { "index": 5, "word": "if", "originalText": "if", "characterOffsetBegin": 16, "characterOffsetEnd": 18, "before": " ", "after": " ", "pos": "IN", "lemma": "if" }, "children": [] }, { "pos": "S", "posInfo": { "description": "simple declarative clause, i.e. one that is not introduced by a (possible empty) subordinating conjunction or a wh-word and that does not exhibit subject-verb inversion.", "examples": [] }, "word": "", "children": [{ "pos": "NP", "posInfo": { "description": "Noun Phrase. ", "examples": [] }, "word": "", "children": [{ "pos": "PRP", "posInfo": { "group": "Personal pronoun", "tag": "Personal pronoun", "examples": [] }, "word": "You", "token": { "index": 6, "word": "You", "originalText": "You", "characterOffsetBegin": 19, "characterOffsetEnd": 22, "before": " ", "after": " ", "pos": "PRP", "lemma": "you" }, "children": [] }] }, { "pos": "VP", "posInfo": { "description": "Vereb Phrase. ", "examples": [] }, "word": "", "children": [{ "pos": "VBP", "posInfo": { "group": "Verb, non-3rd person singular present", "tag": "Verb, non-3rd person singular present", "examples": [] }, "word": "look", "token": { "index": 7, "word": "look", "originalText": "look", "characterOffsetBegin": 23, "characterOffsetEnd": 27, "before": " ", "after": " ", "pos": "VBP", "lemma": "look" }, "children": [] }, { "pos": "PP", "posInfo": { "description": "Prepositional Phrase.", "examples": [] }, "word": "", "children": [{ "pos": "IN", "posInfo": { "group": "Preposition or subordinating conjunction", "tag": "Preposition or subordinating conjunction", "examples": [] }, "word": "inside", "token": { "index": 8, "word": "inside", "originalText": "inside", "characterOffsetBegin": 28, "characterOffsetEnd": 34, "before": " ", "after": " ", "pos": "IN", "lemma": "inside" }, "children": [] }, { "pos": "NP", "posInfo": { "description": "Noun Phrase. ", "examples": [] }, "word": "", "children": [{ "pos": "PRP$", "posInfo": { "group": "Possessive pronoun (prolog version PRP-S)", "tag": "Possessive pronoun (prolog version PRP-S)", "examples": [] }, "word": "your", "token": { "index": 9, "word": "your", "originalText": "your", "characterOffsetBegin": 35, "characterOffsetEnd": 39, "before": " ", "after": " ", "pos": "PRP$", "lemma": "you" }, "children": [] }, { "pos": "NN", "posInfo": { "group": "Noun, singular or mass", "tag": "Noun, singular or mass", "examples": [] }, "word": "heart", "token": { "index": 10, "word": "heart", "originalText": "heart", "characterOffsetBegin": 40, "characterOffsetEnd": 45, "before": " ", "after": "", "pos": "NN", "lemma": "heart" }, "children": [] }] }] }] }] }] }] }] }] } }

const rules: IRule[] = [
    {
        "name": "VP01", "match": "S(*+VP(*+NP|S|PP|SBAR|ADJP|ADVP+*)+*)",
        "commands": [
            {
                "cmd": ECommand.MOVE,
                "args": ["S(*+VP(*+[NP|S|PP|SBAR|ADJP|ADVP+*]))", "[S]"]
            }]
    }, {
        "name": "CAJ01", "match": "S(NP(NP(*+NN|DT|RB|JJ|JJS|NNS)+PP(IN=of+NP)))",
        "commands": [
            {
                "cmd": ECommand.DELETE,
                "args": ["S(NP(NP(*+NN|DT|RB|JJ|JJS|NNS)+[PP]))"]
            }]
    }, {
        "name": "VP02", "match": "S(*+VP(VBD|VBP|VBZ=have+*+VP(VBN+*))+*)",
        "commands": [{ "cmd": ECommand.DELETE, "args": ["S(VP(VBD|VBP|VBZ=have+*+[VP]))"] }]
    }, { "name": "VP03", "match": "S(*+VP(MD+*+VP(VB+*))+*)", "commands": [{ "cmd": ECommand.DELETE, "args": ["S(VP(MD+*+[VP]))"] }] }, { "name": "VP04", "match": "S(*+VP(MD+*+VP(VBN+*))+*)", "commands": [{ "cmd": ECommand.DELETE, "args": ["S(VP(MD+*+[VP]))"] }] }, { "name": "VP05", "match": "S(*+VP(VBD|VBP|VBZ=do+*+VP(VB+*))+*)", "commands": [{ "cmd": ECommand.DELETE, "args": ["S(VP(VBD|VBP|VBZ=do+*+[VP]))"] }] }, { "name": "VP06", "match": "S(*+VP(VBD|VBP|VBZ=be+*+VP(VBG+*))+*)", "commands": [{ "cmd": ECommand.DELETE, "args": ["S(*+VP(VBD|VBP|VBZ=be+*+[VP])"] }] }, { "name": "VPMD01", "match": "S(*+PP(IN+PP)+*)", "commands": [{ "cmd": ECommand.MOVE, "args": ["S(PP(IN+[PP]))", "[S]"] }] }, { "name": "VPMD02-1", "match": "S(*+VP(*)+ADVP+*)", "commands": [{ "cmd": ECommand.MOVE, "args": ["S(*+VP(*)+[ADVP]+*)", "S(*+[VP])"] }] }, { "name": "VPMD02-2", "match": "S(*+ADVP+VP(*)+*)", "commands": [{ "cmd": ECommand.MOVE, "args": ["S(*+[ADVP]+VP(*)+*)", "S(*+ADVP+[VP])"] }] }, { "name": "SS01", "match": "S(*+VP(TO+VP(VB+*))+*)", "commands": [{ "cmd": ECommand.DELETE, "args": ["S([VP])"] }] }, { "name": "SS02", "match": "S(*+VP(*+VP(VBG+*))+*)", "commands": [{ "cmd": ECommand.MOVE, "args": ["S(*+VP(*+[VP])", "[S]"] }] }, { "name": "SS03", "match": "S(*+VP(VBG+*)+*)", "commands": [{ "cmd": ECommand.DELETE, "args": ["S(*+[VP])"] }] }, { "name": "SS04", "match": "S(*+VP(*+VP(VBN+*))+*)", "commands": [{ "cmd": ECommand.MOVE, "args": ["S(*+VP(*+[VP])", "[S]"] }] }, { "name": "CAJ02", "match": "NP(NP(*+CD)+PP(IN=of+NP))", "commands": [] }]


describe('Test about \"There is a hero if You look inside your heart.\"', () => {

    it('올바르게 트리가 빌드되어야 한다.', (done) => {
        const tree = Tree.fromJSON(sampleTree);
        if (tree) return done();
    });

    it(`성공적으로 전체 ${rules.length}개 룰을 반복해야한다`, (done) => {
        const tree = Tree.fromJSON(sampleTree);
        let i = 0;
        for (i = 0; tree && i < rules.length; i++) {
            tree.search(rules[i])
        }
        if (i === rules.length) return done();
        throw new Error(`수행 결과 : ${i}/${rules.length}`)
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
})