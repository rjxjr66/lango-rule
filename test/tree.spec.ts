import { Tree } from "../src/tree";
import { INode } from "../src/rule.interface";
import { withComma, sampleTreeWithLemma, sampleTreeWithRelation, rules, testSentence, _testSentence } from "./sample-data"

describe('Test Commands', () => {
    it('Commnands.CREATE', () => {
        const tree = {
            pos: "ROOT",
            children: [{
                pos: "VP",
                children: []
            }, {
                pos: "NP",
                children: []
            }]
        }
        Tree.create(<INode>tree, "SAMPLE1", "unshift");
        Tree.create(<INode>tree, "SAMPLE2");

        expect(tree.children.map(_ => _.pos)).toEqual(["SAMPLE1", "VP", "NP", "SAMPLE2"])
    })

    it('Commnands.DELETE:non-recursive', () => {
        const tree = {
            pos: "ROOT",
            children: [
                {
                    pos: "NP1",
                    children: []
                }, {
                    pos: "VP",
                    children: [{
                        pos: "NP2",
                        children: []
                    }, {
                        pos: "NP3",
                        children: []
                    }]
                }, {
                    pos: "NP4",
                    children: []
                }]
        }
        Tree.loopNode(<INode>tree, (node) => {
            for (let child of node.children) {
                child.parent = node
            }
        })
        Tree.delete(<INode>tree.children[1]);
        expect(tree.children.map(_ => _.pos)).toEqual(["NP1", "NP2", "NP3", "NP4"])
    })

    it('Commnands.DELETE:recursive', () => {
        const tree = {
            pos: "ROOT",
            children: [
                {
                    pos: "NP1",
                    children: []
                }, {
                    pos: "VP",
                    children: [{
                        pos: "NP2",
                        children: []
                    }, {
                        pos: "NP3",
                        children: []
                    }]
                }, {
                    pos: "NP4",
                    children: []
                }]
        }
        Tree.loopNode(<INode>tree, (node) => {
            for (let child of node.children) {
                child.parent = node
            }
        })
        Tree.delete(<INode>tree.children[1], true);
        expect(tree.children.map(_ => _.pos)).toEqual(["NP1", "NP4"])
    })

    it('Commnands.MOVE', () => {
        const tree = {
            pos: "ROOT",
            children: [
                {
                    pos: "VP1",
                    children: [{
                        pos: "NP1",
                        children: []
                    }, {
                        pos: "NP2",
                        children: []
                    }]
                }, {
                    pos: "VP2",
                    children: [{
                        pos: "NP3",
                        children: []
                    }, {
                        pos: "NP4",
                        children: []
                    }]
                }]
        }
        Tree.loopNode(<INode>tree, (node) => {
            for (let child of node.children) {
                child.parent = node
            }
        })
        Tree.move(<INode[]>tree.children[0].children, <INode>tree.children[1], "push");
        expect(tree.children[1].children.map(_ => _.pos)).toEqual(["NP3", "NP4", "NP1", "NP2"])
    })

    it('Commnands.SET', () => {
        const tree = {
            pos: "ROOT",
            children: [
                {
                    pos: "VP",
                    children: []
                }, {
                    pos: "NP",
                    children: []
                }]
        }
        Tree.set(<INode>tree.children[0], "role", "trg");
        expect((<INode>tree.children[0]).attr["role"]).toEqual("trg")
    })
    it('Commnands.REPLACE', () => {
        const tree = {
            pos: "ROOT",
            children: [
                {
                    pos: "VP",
                    children: []
                }, {
                    pos: "NP",
                    children: []
                }]
        }
        Tree.replace(<INode>tree.children[0], "VP1");
        expect((<INode>tree.children[0]).pos).toEqual("VP1")
    })
    it('Commnands.ELEMENT', () => {
        const tree = {
            pos: "ROOT",
            children: [
                {
                    pos: "VP",
                    children: []
                }, {
                    pos: "NP",
                    children: []
                }]
        }
        Tree.element(<INode>tree.children[0], "word");
        expect((<INode>tree.children[0]).element).toEqual("word")
    })
    it('Commnands.WORD', () => {
        const tree = {
            pos: "ROOT",
            children: [
                {
                    pos: "VP",
                    children: []
                }, {
                    pos: "NP",
                    children: []
                }]
        }
        Tree.word(<INode>tree.children[0], "test");
        expect((<INode>tree.children[0]).word).toEqual("test")
    })
})


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



// describe(`Test about \"${notWorking}\"`, () => {
//     it('변경된 VP01(S|SBAR)을 적용한다.', (done) => {
//         const tree = Tree.fromJSON({ rootNode: JSON.parse(JSON.stringify(notWorking)) });

//         for (let rule of rules) {
//             if (rule.name !== "VP01") continue;
//             const node = tree.search(rule)
//             if (node) Tree.apply(node, rule.commands)
//         }
//         tree.init();
//         done();
//     });
// })

// describe(`Test about \"${sampleTreeWithRelation.text}\"`, () => {
//     it('CREATE와 relation이 있는 패턴 NPMD04을 적용한다.', (done) => {
//         const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sampleTreeWithRelation.tree)));

//         for (let rule of rules[0]) {
//             // if (rule.name !== "NPMD04") continue;
//             while (1) {
//                 const node = tree.search(rule, sampleTreeWithRelation.basicDependencies)
//                 if (!node) break;
//                 Tree.apply(node, rule.commands)
//                 tree.init();
//             }
//         }
//         done();
//     });
// })

// describe(`Test about \"${withComma.text}\"`, () => {
//     it(', 가 들어있는 부분의 VP01 테스트를 적용한다.', (done) => {
//         const tree = Tree.fromJSON(JSON.parse(JSON.stringify(withComma.tree)));

//         for (let rule of rules) {
//             // if (rule.name !== "VP01") continue;
//             while (1) {
//                 const node = tree.search(rule, withComma.basicDependencies)
//                 if (!node) break;
//                 Tree.apply(node, rule.commands)
//                 tree.init();
//             }
//         }
//         done();
//     });
// })

// describe('Test about to parse JSON ver.2', () => {
//     it('JSON Tree객체를 파싱한다.', (done) => {
//         let sentence = testSentence;
//         const tree = Tree.fromJSON(JSON.parse(JSON.stringify(sentence.tree)));
//         for (let rule of rules[0]) {
//             while (1) {
//                 const node = tree.search(rule, testSentence.basicDependencies)
//                 if (!node) break;
//                 Tree.apply(node, rule.commands)
//             }
//         }
//         done()
//     })
// })

describe('Test about parse JSON to XML', () => {
    it('JSON Tree객체를 XML로 파싱한다.', (done) => {
        // const tree = Tree.fromJSON({ rootNode: JSON.parse(JSON.stringify(testJSON)) });
        const tree = Tree.fromJSON(JSON.parse(JSON.stringify(testSentence.tree)));
        for (let rule of rules[0]) {
            while (1) {
                const node = tree.search(rule, testSentence.basicDependencies)
                if (!node) break;
                Tree.apply(node, rule.commands)
            }
        }
        tree.init();
        for (let rule of rules[1]) {
            while (1) {
                if (rule.name === "NPROLE04-05")
                    rule.name;
                const node = tree.search(rule, testSentence.basicDependencies)
                if (!node) break;
                Tree.apply(node, rule.commands)
            }
        }
        tree.toXML();
        done();
    });
})

