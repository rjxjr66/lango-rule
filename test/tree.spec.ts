import { Tree } from "../src/tree";
import { readBook2, sampleTreeWithLemma, sampleTreeWithRelation, testNode, rules } from "./sample-data"

// describe(`Test about \"${readBook2.text}\"`, () => {

// it('올바르게 트리가 빌드되어야 한다.', () => {
//     const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTree.tree)));
//     expect(tree).toBeTruthy();
// });

// it('트리에서 자식 노드로 이동이 가능해야 한다.', () => {
//     const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTree.tree)));
//     expect(tree.child()).toBeTruthy();
// });

// it('트리에서 다음 형제 노드로 이동이 가능해야 한다.', () => {
//     const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTree.tree)));
//     tree.child();   // ROOT -> S
//     tree.child();   // S -> NP
//     expect(tree.nextSibiling()).toBeTruthy();
// });

// it(`성공적으로 전체 ${rules.length}개 룰을 반복해야한다`, () => {
//     const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTree.tree)));
//     let i = 0;
//     try {
//         for (i = 0; tree && i < rules.length; i++) {
//             tree.search(rules[i])
//         }
//         expect(i).toEqual(rules.length);
//     } catch{
//         throw new Error(`수행 결과 : ${i}/${rules.length}`)
//     }
// })

// it(`성공적으로 검색이 된 노드가 있다`, () => {
//     const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTree.tree)));
//     let results = [];
//     for (let rule of rules) {
//         const result = tree.search(rule)
//         result && results.push(result);
//     }
//     expect(results.length).toBeGreaterThanOrEqual(1)
// })

// it(`최상단 S가 VP01 패턴 룰에 매칭되어야한다F`, () => {
//     const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTree.tree)));
//     const rule = rules.find(_ => _.name === "VP01");
//     const node = tree.search(rule);
//     expect(node).toBeTruthy()
// })

// it(`VP01 패턴 룰을 적용 가능해야한다.`, () => {
//     const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTree.tree)));
//     const rule = rules.find(_ => _.name === "VP01");
//     let node = tree.search(rule);
//     Tree.apply(node, rule.commands);
//     // expect(node).toBeTruthy()
// })

// it(`VP01 패턴 룰을 적용후에 다시 VP01 패턴 룰이 매칭되어야한다`, () => {
//     let tree = Tree.fromJSON(JSON.parse(JSON.stringify(readBook2.tree)));
//     const rule = rules.find(_ => _.name === "VP01");
//     let node = tree.search(rule);
//     Tree.apply(node, rule.commands);

//     tree = Tree.fromJSON({ rootNode: JSON.parse(JSON.stringify(tree)) })
//     node = tree.search(rule);
//     Tree.apply(node, rule.commands);
// })
// })

// describe(`Test about \"${sampleTreeWithLemma.text}\"`, () => {
//     it('Lemma가 있는 트리가 빌드되어야한다.', () => {
//         const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTreeWithLemma.tree)));
//         expect(tree).toBeTruthy();
//     });

//     it('Lemma가 있는 트리에 패턴 룰들을 적용한다.', (done) => {
//         const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTreeWithLemma.tree)));

//         for (let rule of rules) {
//             let node;
//             while (node = tree.search(rule)) {
//                 Tree.apply(node, rule.commands)
//             }
//         }
//         done();
//     });
// })

describe(`Test about \"${sampleTreeWithRelation.text}\"`, () => {
    it('CREATE와 relation이 있는 패턴 NPMD04을 적용한다.', (done) => {
        const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTreeWithRelation.tree)));

        for (let rule of rules) {
            if (rule.name !== "NPMD04") continue;
            const node = tree.search(rule, sampleTreeWithRelation.basicDependencies)
            if (node) Tree.apply(node, rule.commands)
        }
        done();
    });
})
// describe(`Test about sampleNode"`, () => {
//     it('CREATE와 relation이 있는 패턴 NPMD04을 적용한다.', (done) => {
//         const tree = Tree.fromJSON({
//             rootNode: {
//                 pos: "ROOT",
//                 children: [testNode]
//             }
//         });

//         for (let rule of rules) {
//             if (rule.name !== "NPMD04") continue;
//             const node = tree.search(rule)
//             if (node)
//                 Tree.apply(node, rule.commands)
//         }
//         done();
//     });
// })