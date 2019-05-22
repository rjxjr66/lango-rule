import { IRule, INode, POS, ECommand } from "../src/rule.interface";
export const sampleTree = {
    "text": "There is a hero if You look inside your heart.",
    "parse": "(ROOT\n  (S\n    (NP (EX There))\n    (VP (VBZ is)\n      (NP (DT a) (NN hero))\n      (SBAR (IN if)\n        (S\n          (NP (PRP You))\n          (VP (VBP look)\n            (PP (IN inside)\n              (NP (PRP$ your) (NN heart)))))))\n    (. .)))",
    "tree": {
        "rootNode": {
            "pos": "ROOT",
            "word": "",
            "children": [{
                "pos": "S",
                "word": "",
                "children": [{
                    "pos": "NP",
                    "word": "",
                    "children": [{
                        "pos": "EX",
                        "word": "There",
                        "token": {
                            "index": 1,
                            "word": "There",
                            "originalText": "There",
                            "characterOffsetBegin": 0,
                            "characterOffsetEnd": 5,
                            "before": "",
                            "after": " ",
                            "pos": "EX",
                            "lemma": "there"
                        },
                        "children": []
                    }]
                }, {
                    "pos": "VP",
                    "word": "",
                    "children": [{
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
                        "word": "",
                        "children": [{
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
                            },
                            "children": []
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
                            },
                            "children": []
                        }]
                    }, {
                        "pos": "SBAR",
                        "word": "",
                        "children": [{
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
                            "children": [{
                                "pos": "NP",
                                "word": "",
                                "children": [{
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
                                "children": [{
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
                                    "children": [{
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
                                        "children": [{
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
                                                "index": 10,
                                                "word": "heart",
                                                "originalText": "heart",
                                                "characterOffsetBegin": 40,
                                                "characterOffsetEnd": 45,
                                                "before": " ",
                                                "after": "",
                                                "pos": "NN",
                                                "lemma": "heart"
                                            },
                                            "children": []
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        }
    },
    "tokens": [{
        "index": 1,
        "word": "There",
        "originalText": "There",
        "characterOffsetBegin": 0,
        "characterOffsetEnd": 5,
        "before": "",
        "after": " ",
        "pos": "EX",
        "lemma": "there"
    }, {
        "index": 2,
        "word": "is",
        "originalText": "is",
        "characterOffsetBegin": 6,
        "characterOffsetEnd": 8,
        "before": " ",
        "after": " ",
        "pos": "VBZ",
        "lemma": "be"
    }, {
        "index": 3,
        "word": "a",
        "originalText": "a",
        "characterOffsetBegin": 9,
        "characterOffsetEnd": 10,
        "before": " ",
        "after": " ",
        "pos": "DT",
        "lemma": "a"
    }, {
        "index": 4,
        "word": "hero",
        "originalText": "hero",
        "characterOffsetBegin": 11,
        "characterOffsetEnd": 15,
        "before": " ",
        "after": " ",
        "pos": "NN",
        "lemma": "hero"
    }, {
        "index": 5,
        "word": "if",
        "originalText": "if",
        "characterOffsetBegin": 16,
        "characterOffsetEnd": 18,
        "before": " ",
        "after": " ",
        "pos": "IN",
        "lemma": "if"
    }, {
        "index": 6,
        "word": "You",
        "originalText": "You",
        "characterOffsetBegin": 19,
        "characterOffsetEnd": 22,
        "before": " ",
        "after": " ",
        "pos": "PRP",
        "lemma": "you"
    }, {
        "index": 7,
        "word": "look",
        "originalText": "look",
        "characterOffsetBegin": 23,
        "characterOffsetEnd": 27,
        "before": " ",
        "after": " ",
        "pos": "VBP",
        "lemma": "look"
    }, {
        "index": 8,
        "word": "inside",
        "originalText": "inside",
        "characterOffsetBegin": 28,
        "characterOffsetEnd": 34,
        "before": " ",
        "after": " ",
        "pos": "IN",
        "lemma": "inside"
    }, {
        "index": 9,
        "word": "your",
        "originalText": "your",
        "characterOffsetBegin": 35,
        "characterOffsetEnd": 39,
        "before": " ",
        "after": " ",
        "pos": "PRP$",
        "lemma": "you"
    }, {
        "index": 10,
        "word": "heart",
        "originalText": "heart",
        "characterOffsetBegin": 40,
        "characterOffsetEnd": 45,
        "before": " ",
        "after": "",
        "pos": "NN",
        "lemma": "heart"
    }, {
        "index": 11,
        "word": ".",
        "originalText": ".",
        "characterOffsetBegin": 45,
        "characterOffsetEnd": 46,
        "before": "",
        "after": "",
        "pos": ".",
        "lemma": "."
    }],
    "basicDependencies": [{
        "dep": "ROOT",
        "governor": 0,
        "governorGloss": "ROOT",
        "dependent": 2,
        "dependentGloss": "is"
    }, {
        "dep": "expl",
        "governor": 2,
        "governorGloss": "is",
        "dependent": 1,
        "dependentGloss": "There"
    }, {
        "dep": "det",
        "governor": 4,
        "governorGloss": "hero",
        "dependent": 3,
        "dependentGloss": "a"
    }, {
        "dep": "nsubj",
        "governor": 2,
        "governorGloss": "is",
        "dependent": 4,
        "dependentGloss": "hero"
    }, {
        "dep": "mark",
        "governor": 7,
        "governorGloss": "look",
        "dependent": 5,
        "dependentGloss": "if"
    }, {
        "dep": "nsubj",
        "governor": 7,
        "governorGloss": "look",
        "dependent": 6,
        "dependentGloss": "You"
    }, {
        "dep": "advcl",
        "governor": 2,
        "governorGloss": "is",
        "dependent": 7,
        "dependentGloss": "look"
    }, {
        "dep": "case",
        "governor": 10,
        "governorGloss": "heart",
        "dependent": 8,
        "dependentGloss": "inside"
    }, {
        "dep": "nmod:poss",
        "governor": 10,
        "governorGloss": "heart",
        "dependent": 9,
        "dependentGloss": "your"
    }, {
        "dep": "nmod",
        "governor": 7,
        "governorGloss": "look",
        "dependent": 10,
        "dependentGloss": "heart"
    }, {
        "dep": "punct",
        "governor": 2,
        "governorGloss": "is",
        "dependent": 11,
        "dependentGloss": "."
    }]
}

export const sampleTreeWithLemma = {
    "text": "I have been exhausted by this matter.",
    "parse": "(ROOT\n  (S\n    (NP (PRP I))\n    (VP (VBP have)\n      (VP (VBN been)\n        (VP (VBN exhausted)\n          (PP (IN by)\n            (NP (DT this) (NN matter))))))\n    (. .)))",
    "tree": {
        "rootNode": {
            "pos": "ROOT",
            "word": "",
            "children": [{
                "pos": "S",
                "word": "",
                "children": [{
                    "pos": "NP",
                    "word": "",
                    "children": [{
                        "pos": "PRP",
                        "word": "I",
                        "token": {
                            "index": 1,
                            "word": "I",
                            "originalText": "I",
                            "characterOffsetBegin": 0,
                            "characterOffsetEnd": 1,
                            "before": "",
                            "after": " ",
                            "pos": "PRP",
                            "lemma": "I"
                        },
                        "children": []
                    }]
                }, {
                    "pos": "VP",
                    "word": "",
                    "children": [{
                        "pos": "VBP",
                        "word": "have",
                        "token": {
                            "index": 2,
                            "word": "have",
                            "originalText": "have",
                            "characterOffsetBegin": 2,
                            "characterOffsetEnd": 6,
                            "before": " ",
                            "after": " ",
                            "pos": "VBP",
                            "lemma": "have"
                        },
                        "children": []
                    }, {
                        "pos": "VP",
                        "word": "",
                        "children": [{
                            "pos": "VBN",
                            "word": "been",
                            "token": {
                                "index": 3,
                                "word": "been",
                                "originalText": "been",
                                "characterOffsetBegin": 7,
                                "characterOffsetEnd": 11,
                                "before": " ",
                                "after": " ",
                                "pos": "VBN",
                                "lemma": "be"
                            },
                            "children": []
                        }, {
                            "pos": "VP",
                            "word": "",
                            "children": [{
                                "pos": "VBN",
                                "word": "exhausted",
                                "token": {
                                    "index": 4,
                                    "word": "exhausted",
                                    "originalText": "exhausted",
                                    "characterOffsetBegin": 12,
                                    "characterOffsetEnd": 21,
                                    "before": " ",
                                    "after": " ",
                                    "pos": "VBN",
                                    "lemma": "exhaust"
                                },
                                "children": []
                            }, {
                                "pos": "PP",
                                "word": "",
                                "children": [{
                                    "pos": "IN",
                                    "word": "by",
                                    "token": {
                                        "index": 5,
                                        "word": "by",
                                        "originalText": "by",
                                        "characterOffsetBegin": 22,
                                        "characterOffsetEnd": 24,
                                        "before": " ",
                                        "after": " ",
                                        "pos": "IN",
                                        "lemma": "by"
                                    },
                                    "children": []
                                }, {
                                    "pos": "NP",
                                    "word": "",
                                    "children": [{
                                        "pos": "DT",
                                        "word": "this",
                                        "token": {
                                            "index": 6,
                                            "word": "this",
                                            "originalText": "this",
                                            "characterOffsetBegin": 25,
                                            "characterOffsetEnd": 29,
                                            "before": " ",
                                            "after": " ",
                                            "pos": "DT",
                                            "lemma": "this"
                                        },
                                        "children": []
                                    }, {
                                        "pos": "NN",
                                        "word": "matter",
                                        "token": {
                                            "index": 7,
                                            "word": "matter",
                                            "originalText": "matter",
                                            "characterOffsetBegin": 30,
                                            "characterOffsetEnd": 36,
                                            "before": " ",
                                            "after": "",
                                            "pos": "NN",
                                            "lemma": "matter"
                                        },
                                        "children": []
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        }
    },
    "tokens": [{
        "index": 1,
        "word": "I",
        "originalText": "I",
        "characterOffsetBegin": 0,
        "characterOffsetEnd": 1,
        "before": "",
        "after": " ",
        "pos": "PRP",
        "lemma": "I"
    }, {
        "index": 2,
        "word": "have",
        "originalText": "have",
        "characterOffsetBegin": 2,
        "characterOffsetEnd": 6,
        "before": " ",
        "after": " ",
        "pos": "VBP",
        "lemma": "have"
    }, {
        "index": 3,
        "word": "been",
        "originalText": "been",
        "characterOffsetBegin": 7,
        "characterOffsetEnd": 11,
        "before": " ",
        "after": " ",
        "pos": "VBN",
        "lemma": "be"
    }, {
        "index": 4,
        "word": "exhausted",
        "originalText": "exhausted",
        "characterOffsetBegin": 12,
        "characterOffsetEnd": 21,
        "before": " ",
        "after": " ",
        "pos": "VBN",
        "lemma": "exhaust"
    }, {
        "index": 5,
        "word": "by",
        "originalText": "by",
        "characterOffsetBegin": 22,
        "characterOffsetEnd": 24,
        "before": " ",
        "after": " ",
        "pos": "IN",
        "lemma": "by"
    }, {
        "index": 6,
        "word": "this",
        "originalText": "this",
        "characterOffsetBegin": 25,
        "characterOffsetEnd": 29,
        "before": " ",
        "after": " ",
        "pos": "DT",
        "lemma": "this"
    }, {
        "index": 7,
        "word": "matter",
        "originalText": "matter",
        "characterOffsetBegin": 30,
        "characterOffsetEnd": 36,
        "before": " ",
        "after": "",
        "pos": "NN",
        "lemma": "matter"
    }, {
        "index": 8,
        "word": ".",
        "originalText": ".",
        "characterOffsetBegin": 36,
        "characterOffsetEnd": 37,
        "before": "",
        "after": "",
        "pos": ".",
        "lemma": "."
    }],
    "basicDependencies": [{
        "dep": "ROOT",
        "governor": 0,
        "governorGloss": "ROOT",
        "dependent": 4,
        "dependentGloss": "exhausted"
    }, {
        "dep": "nsubjpass",
        "governor": 4,
        "governorGloss": "exhausted",
        "dependent": 1,
        "dependentGloss": "I"
    }, {
        "dep": "aux",
        "governor": 4,
        "governorGloss": "exhausted",
        "dependent": 2,
        "dependentGloss": "have"
    }, {
        "dep": "auxpass",
        "governor": 4,
        "governorGloss": "exhausted",
        "dependent": 3,
        "dependentGloss": "been"
    }, {
        "dep": "case",
        "governor": 7,
        "governorGloss": "matter",
        "dependent": 5,
        "dependentGloss": "by"
    }, {
        "dep": "det",
        "governor": 7,
        "governorGloss": "matter",
        "dependent": 6,
        "dependentGloss": "this"
    }, {
        "dep": "nmod",
        "governor": 4,
        "governorGloss": "exhausted",
        "dependent": 7,
        "dependentGloss": "matter"
    }, {
        "dep": "punct",
        "governor": 4,
        "governorGloss": "exhausted",
        "dependent": 8,
        "dependentGloss": "."
    }]
}

export const sampleTreeWithRelation = {
    "text": "I have a house to live in.",
    "parse": "(ROOT\n  (S\n    (NP (PRP I))\n    (VP (VBP have)\n      (NP (DT a) (NN house)\n        (S\n          (VP (TO to)\n            (VP (VB live)\n              (PP (IN in)))))))\n    (. .)))",
    "tree": {
        "rootNode": {
            "pos": "ROOT",
            "word": "",
            "children": [{
                "pos": "S",
                "word": "",
                "children": [{
                    "pos": "NP",
                    "word": "",
                    "children": [{
                        "pos": "PRP",
                        "word": "I",
                        "token": {
                            "index": 1,
                            "word": "I",
                            "originalText": "I",
                            "characterOffsetBegin": 0,
                            "characterOffsetEnd": 1,
                            "before": "",
                            "after": " ",
                            "pos": "PRP",
                            "lemma": "I"
                        },
                        "children": []
                    }]
                }, {
                    "pos": "VP",
                    "word": "",
                    "children": [{
                        "pos": "VBP",
                        "word": "have",
                        "token": {
                            "index": 2,
                            "word": "have",
                            "originalText": "have",
                            "characterOffsetBegin": 2,
                            "characterOffsetEnd": 6,
                            "before": " ",
                            "after": " ",
                            "pos": "VBP",
                            "lemma": "have"
                        },
                        "children": []
                    }, {
                        "pos": "NP",
                        "word": "",
                        "children": [{
                            "pos": "DT",
                            "word": "a",
                            "token": {
                                "index": 3,
                                "word": "a",
                                "originalText": "a",
                                "characterOffsetBegin": 7,
                                "characterOffsetEnd": 8,
                                "before": " ",
                                "after": " ",
                                "pos": "DT",
                                "lemma": "a"
                            },
                            "children": []
                        }, {
                            "pos": "NN",
                            "word": "house",
                            "token": {
                                "index": 4,
                                "word": "house",
                                "originalText": "house",
                                "characterOffsetBegin": 9,
                                "characterOffsetEnd": 14,
                                "before": " ",
                                "after": " ",
                                "pos": "NN",
                                "lemma": "house"
                            },
                            "children": []
                        }, {
                            "pos": "S",
                            "word": "",
                            "children": [{
                                "pos": "VP",
                                "word": "",
                                "children": [{
                                    "pos": "TO",
                                    "word": "to",
                                    "token": {
                                        "index": 5,
                                        "word": "to",
                                        "originalText": "to",
                                        "characterOffsetBegin": 15,
                                        "characterOffsetEnd": 17,
                                        "before": " ",
                                        "after": " ",
                                        "pos": "TO",
                                        "lemma": "to"
                                    },
                                    "children": []
                                }, {
                                    "pos": "VP",
                                    "word": "",
                                    "children": [{
                                        "pos": "VB",
                                        "word": "live",
                                        "token": {
                                            "index": 6,
                                            "word": "live",
                                            "originalText": "live",
                                            "characterOffsetBegin": 18,
                                            "characterOffsetEnd": 22,
                                            "before": " ",
                                            "after": " ",
                                            "pos": "VB",
                                            "lemma": "live"
                                        },
                                        "children": []
                                    }, {
                                        "pos": "PP",
                                        "word": "",
                                        "children": [{
                                            "pos": "IN",
                                            "word": "in",
                                            "token": {
                                                "index": 7,
                                                "word": "in",
                                                "originalText": "in",
                                                "characterOffsetBegin": 23,
                                                "characterOffsetEnd": 25,
                                                "before": " ",
                                                "after": "",
                                                "pos": "IN",
                                                "lemma": "in"
                                            },
                                            "children": []
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        }
    },
    "tokens": [{
        "index": 1,
        "word": "I",
        "originalText": "I",
        "characterOffsetBegin": 0,
        "characterOffsetEnd": 1,
        "before": "",
        "after": " ",
        "pos": "PRP",
        "lemma": "I"
    }, {
        "index": 2,
        "word": "have",
        "originalText": "have",
        "characterOffsetBegin": 2,
        "characterOffsetEnd": 6,
        "before": " ",
        "after": " ",
        "pos": "VBP",
        "lemma": "have"
    }, {
        "index": 3,
        "word": "a",
        "originalText": "a",
        "characterOffsetBegin": 7,
        "characterOffsetEnd": 8,
        "before": " ",
        "after": " ",
        "pos": "DT",
        "lemma": "a"
    }, {
        "index": 4,
        "word": "house",
        "originalText": "house",
        "characterOffsetBegin": 9,
        "characterOffsetEnd": 14,
        "before": " ",
        "after": " ",
        "pos": "NN",
        "lemma": "house"
    }, {
        "index": 5,
        "word": "to",
        "originalText": "to",
        "characterOffsetBegin": 15,
        "characterOffsetEnd": 17,
        "before": " ",
        "after": " ",
        "pos": "TO",
        "lemma": "to"
    }, {
        "index": 6,
        "word": "live",
        "originalText": "live",
        "characterOffsetBegin": 18,
        "characterOffsetEnd": 22,
        "before": " ",
        "after": " ",
        "pos": "VB",
        "lemma": "live"
    }, {
        "index": 7,
        "word": "in",
        "originalText": "in",
        "characterOffsetBegin": 23,
        "characterOffsetEnd": 25,
        "before": " ",
        "after": "",
        "pos": "IN",
        "lemma": "in"
    }, {
        "index": 8,
        "word": ".",
        "originalText": ".",
        "characterOffsetBegin": 25,
        "characterOffsetEnd": 26,
        "before": "",
        "after": "",
        "pos": ".",
        "lemma": "."
    }],
    "basicDependencies": [{
        "dep": "ROOT",
        "governor": 0,
        "governorGloss": "ROOT",
        "dependent": 2,
        "dependentGloss": "have"
    }, {
        "dep": "nsubj",
        "governor": 2,
        "governorGloss": "have",
        "dependent": 1,
        "dependentGloss": "I"
    }, {
        "dep": "det",
        "governor": 4,
        "governorGloss": "house",
        "dependent": 3,
        "dependentGloss": "a"
    }, {
        "dep": "dobj",
        "governor": 2,
        "governorGloss": "have",
        "dependent": 4,
        "dependentGloss": "house"
    }, {
        "dep": "mark",
        "governor": 6,
        "governorGloss": "live",
        "dependent": 5,
        "dependentGloss": "to"
    }, {
        "dep": "acl",
        "governor": 4,
        "governorGloss": "house",
        "dependent": 6,
        "dependentGloss": "live"
    }, {
        "dep": "nmod",
        "governor": 6,
        "governorGloss": "live",
        "dependent": 7,
        "dependentGloss": "in"
    }, {
        "dep": "punct",
        "governor": 2,
        "governorGloss": "have",
        "dependent": 8,
        "dependentGloss": "."
    }]
}

export const readBook = {
    "text": "This book is written by him.",
    "parse": "(ROOT\n  (S\n    (NP (DT This) (NN book))\n    (VP (VBZ is)\n      (VP (VBN written)\n        (PP (IN by)\n          (NP (PRP him)))))\n    (. .)))",
    "tree": {
        "rootNode": {
            "pos": "ROOT",
            "word": "",
            "children": [{
                "pos": "S",
                "word": "",
                "children": [{
                    "pos": "NP",
                    "word": "",
                    "children": [{
                        "pos": "DT",
                        "word": "This",
                        "token": {
                            "index": 1,
                            "word": "This",
                            "originalText": "This",
                            "characterOffsetBegin": 0,
                            "characterOffsetEnd": 4,
                            "before": "",
                            "after": " ",
                            "pos": "DT",
                            "lemma": "this"
                        },
                        "children": []
                    }, {
                        "pos": "NN",
                        "word": "book",
                        "token": {
                            "index": 2,
                            "word": "book",
                            "originalText": "book",
                            "characterOffsetBegin": 5,
                            "characterOffsetEnd": 9,
                            "before": " ",
                            "after": " ",
                            "pos": "NN",
                            "lemma": "book"
                        },
                        "children": []
                    }]
                }, {
                    "pos": "VP",
                    "word": "",
                    "children": [{
                        "pos": "VBZ",
                        "word": "is",
                        "token": {
                            "index": 3,
                            "word": "is",
                            "originalText": "is",
                            "characterOffsetBegin": 10,
                            "characterOffsetEnd": 12,
                            "before": " ",
                            "after": " ",
                            "pos": "VBZ",
                            "lemma": "be"
                        },
                        "children": []
                    }, {
                        "pos": "VP",
                        "word": "",
                        "children": [{
                            "pos": "VBN",
                            "word": "written",
                            "token": {
                                "index": 4,
                                "word": "written",
                                "originalText": "written",
                                "characterOffsetBegin": 13,
                                "characterOffsetEnd": 20,
                                "before": " ",
                                "after": " ",
                                "pos": "VBN",
                                "lemma": "write"
                            },
                            "children": []
                        }, {
                            "pos": "PP",
                            "word": "",
                            "children": [{
                                "pos": "IN",
                                "word": "by",
                                "token": {
                                    "index": 5,
                                    "word": "by",
                                    "originalText": "by",
                                    "characterOffsetBegin": 21,
                                    "characterOffsetEnd": 23,
                                    "before": " ",
                                    "after": " ",
                                    "pos": "IN",
                                    "lemma": "by"
                                },
                                "children": []
                            }, {
                                "pos": "NP",
                                "word": "",
                                "children": [{
                                    "pos": "PRP",
                                    "word": "him",
                                    "token": {
                                        "index": 6,
                                        "word": "him",
                                        "originalText": "him",
                                        "characterOffsetBegin": 24,
                                        "characterOffsetEnd": 27,
                                        "before": " ",
                                        "after": "",
                                        "pos": "PRP",
                                        "lemma": "he"
                                    },
                                    "children": []
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        }
    },
    "tokens": [{
        "index": 1,
        "word": "This",
        "originalText": "This",
        "characterOffsetBegin": 0,
        "characterOffsetEnd": 4,
        "before": "",
        "after": " ",
        "pos": "DT",
        "lemma": "this"
    }, {
        "index": 2,
        "word": "book",
        "originalText": "book",
        "characterOffsetBegin": 5,
        "characterOffsetEnd": 9,
        "before": " ",
        "after": " ",
        "pos": "NN",
        "lemma": "book"
    }, {
        "index": 3,
        "word": "is",
        "originalText": "is",
        "characterOffsetBegin": 10,
        "characterOffsetEnd": 12,
        "before": " ",
        "after": " ",
        "pos": "VBZ",
        "lemma": "be"
    }, {
        "index": 4,
        "word": "written",
        "originalText": "written",
        "characterOffsetBegin": 13,
        "characterOffsetEnd": 20,
        "before": " ",
        "after": " ",
        "pos": "VBN",
        "lemma": "write"
    }, {
        "index": 5,
        "word": "by",
        "originalText": "by",
        "characterOffsetBegin": 21,
        "characterOffsetEnd": 23,
        "before": " ",
        "after": " ",
        "pos": "IN",
        "lemma": "by"
    }, {
        "index": 6,
        "word": "him",
        "originalText": "him",
        "characterOffsetBegin": 24,
        "characterOffsetEnd": 27,
        "before": " ",
        "after": "",
        "pos": "PRP",
        "lemma": "he"
    }, {
        "index": 7,
        "word": ".",
        "originalText": ".",
        "characterOffsetBegin": 27,
        "characterOffsetEnd": 28,
        "before": "",
        "after": "",
        "pos": ".",
        "lemma": "."
    }],
    "basicDependencies": [{
        "dep": "ROOT",
        "governor": 0,
        "governorGloss": "ROOT",
        "dependent": 4,
        "dependentGloss": "written"
    }, {
        "dep": "det",
        "governor": 2,
        "governorGloss": "book",
        "dependent": 1,
        "dependentGloss": "This"
    }, {
        "dep": "nsubjpass",
        "governor": 4,
        "governorGloss": "written",
        "dependent": 2,
        "dependentGloss": "book"
    }, {
        "dep": "auxpass",
        "governor": 4,
        "governorGloss": "written",
        "dependent": 3,
        "dependentGloss": "is"
    }, {
        "dep": "case",
        "governor": 6,
        "governorGloss": "him",
        "dependent": 5,
        "dependentGloss": "by"
    }, {
        "dep": "nmod",
        "governor": 4,
        "governorGloss": "written",
        "dependent": 6,
        "dependentGloss": "him"
    }, {
        "dep": "punct",
        "governor": 4,
        "governorGloss": "written",
        "dependent": 7,
        "dependentGloss": "."
    }]
}

export const readBook2 = {
    "text": "There book is written by him.",
    "parse": "(ROOT\n  (S\n    (NP (EX There))\n    (NP (NN book))\n    (VP (VBZ is)\n      (VP (VBN written)\n        (PP (IN by)\n          (NP (PRP him)))))\n    (. .)))",
    "tree": {
        "rootNode": {
            "pos": "ROOT",
            "word": "",
            "children": [{
                "pos": "S",
                "word": "",
                "children": [{
                    "pos": "NP",
                    "word": "",
                    "children": [{
                        "pos": "EX",
                        "word": "There",
                        "token": {
                            "index": 1,
                            "word": "There",
                            "originalText": "There",
                            "characterOffsetBegin": 0,
                            "characterOffsetEnd": 5,
                            "before": "",
                            "after": " ",
                            "pos": "EX",
                            "lemma": "there"
                        },
                        "children": []
                    }]
                }, {
                    "pos": "NP",
                    "word": "",
                    "children": [{
                        "pos": "NN",
                        "word": "book",
                        "token": {
                            "index": 2,
                            "word": "book",
                            "originalText": "book",
                            "characterOffsetBegin": 6,
                            "characterOffsetEnd": 10,
                            "before": " ",
                            "after": " ",
                            "pos": "NN",
                            "lemma": "book"
                        },
                        "children": []
                    }]
                }, {
                    "pos": "VP",
                    "word": "",
                    "children": [{
                        "pos": "VBZ",
                        "word": "is",
                        "token": {
                            "index": 3,
                            "word": "is",
                            "originalText": "is",
                            "characterOffsetBegin": 11,
                            "characterOffsetEnd": 13,
                            "before": " ",
                            "after": " ",
                            "pos": "VBZ",
                            "lemma": "be"
                        },
                        "children": []
                    }, {
                        "pos": "VBN",
                        "word": "written",
                        "token": {
                            "index": 4,
                            "word": "written",
                            "originalText": "written",
                            "characterOffsetBegin": 14,
                            "characterOffsetEnd": 21,
                            "before": " ",
                            "after": " ",
                            "pos": "VBN",
                            "lemma": "write"
                        },
                        "children": []
                    }, {
                        "pos": "PP",
                        "word": "",
                        "children": [{
                            "pos": "IN",
                            "word": "by",
                            "token": {
                                "index": 5,
                                "word": "by",
                                "originalText": "by",
                                "characterOffsetBegin": 22,
                                "characterOffsetEnd": 24,
                                "before": " ",
                                "after": " ",
                                "pos": "IN",
                                "lemma": "by"
                            },
                            "children": []
                        }, {
                            "pos": "NP",
                            "word": "",
                            "children": [{
                                "pos": "PRP",
                                "word": "him",
                                "token": {
                                    "index": 6,
                                    "word": "him",
                                    "originalText": "him",
                                    "characterOffsetBegin": 25,
                                    "characterOffsetEnd": 28,
                                    "before": " ",
                                    "after": "",
                                    "pos": "PRP",
                                    "lemma": "he"
                                },
                                "children": []
                            }]
                        }]
                    }]
                }]
            }]
        }
    },
    "tokens": [{
        "index": 1,
        "word": "There",
        "originalText": "There",
        "characterOffsetBegin": 0,
        "characterOffsetEnd": 5,
        "before": "",
        "after": " ",
        "pos": "EX",
        "lemma": "there"
    }, {
        "index": 2,
        "word": "book",
        "originalText": "book",
        "characterOffsetBegin": 6,
        "characterOffsetEnd": 10,
        "before": " ",
        "after": " ",
        "pos": "NN",
        "lemma": "book"
    }, {
        "index": 3,
        "word": "is",
        "originalText": "is",
        "characterOffsetBegin": 11,
        "characterOffsetEnd": 13,
        "before": " ",
        "after": " ",
        "pos": "VBZ",
        "lemma": "be"
    }, {
        "index": 4,
        "word": "written",
        "originalText": "written",
        "characterOffsetBegin": 14,
        "characterOffsetEnd": 21,
        "before": " ",
        "after": " ",
        "pos": "VBN",
        "lemma": "write"
    }, {
        "index": 5,
        "word": "by",
        "originalText": "by",
        "characterOffsetBegin": 22,
        "characterOffsetEnd": 24,
        "before": " ",
        "after": " ",
        "pos": "IN",
        "lemma": "by"
    }, {
        "index": 6,
        "word": "him",
        "originalText": "him",
        "characterOffsetBegin": 25,
        "characterOffsetEnd": 28,
        "before": " ",
        "after": "",
        "pos": "PRP",
        "lemma": "he"
    }, {
        "index": 7,
        "word": ".",
        "originalText": ".",
        "characterOffsetBegin": 28,
        "characterOffsetEnd": 29,
        "before": "",
        "after": "",
        "pos": ".",
        "lemma": "."
    }],
    "basicDependencies": [{
        "dep": "ROOT",
        "governor": 0,
        "governorGloss": "ROOT",
        "dependent": 4,
        "dependentGloss": "written"
    }, {
        "dep": "expl",
        "governor": 4,
        "governorGloss": "written",
        "dependent": 1,
        "dependentGloss": "There"
    }, {
        "dep": "nsubjpass",
        "governor": 4,
        "governorGloss": "written",
        "dependent": 2,
        "dependentGloss": "book"
    }, {
        "dep": "auxpass",
        "governor": 4,
        "governorGloss": "written",
        "dependent": 3,
        "dependentGloss": "is"
    }, {
        "dep": "case",
        "governor": 6,
        "governorGloss": "him",
        "dependent": 5,
        "dependentGloss": "by"
    }, {
        "dep": "nmod",
        "governor": 4,
        "governorGloss": "written",
        "dependent": 6,
        "dependentGloss": "him"
    }, {
        "dep": "punct",
        "governor": 4,
        "governorGloss": "written",
        "dependent": 7,
        "dependentGloss": "."
    }]
}

export const testNode = {
    "pos": "NP",
    "word": "",
    "children": [{
        "pos": "DT",
        "word": "a",
        "token": {
            "index": 3,
            "word": "a",
            "originalText": "a",
            "characterOffsetBegin": 7,
            "characterOffsetEnd": 8,
            "before": " ",
            "after": " ",
            "pos": "DT",
            "lemma": "a"
        },
        "children": []
    }, {
        "pos": "NN",
        "word": "house",
        "token": {
            "index": 4,
            "word": "house",
            "originalText": "house",
            "characterOffsetBegin": 9,
            "characterOffsetEnd": 14,
            "before": " ",
            "after": " ",
            "pos": "NN",
            "lemma": "house"
        },
        "children": []
    }, {
        "pos": "S",
        "word": "",
        "children": [{
            "pos": "VP",
            "word": "",
            "children": [{
                "pos": "TO",
                "word": "to",
                "token": {
                    "index": 5,
                    "word": "to",
                    "originalText": "to",
                    "characterOffsetBegin": 15,
                    "characterOffsetEnd": 17,
                    "before": " ",
                    "after": " ",
                    "pos": "TO",
                    "lemma": "to"
                },
                "children": []
            }, {
                "pos": "VP",
                "word": "",
                "children": [{
                    "pos": "VB",
                    "word": "live",
                    "token": {
                        "index": 6,
                        "word": "live",
                        "originalText": "live",
                        "characterOffsetBegin": 18,
                        "characterOffsetEnd": 22,
                        "before": " ",
                        "after": " ",
                        "pos": "VB",
                        "lemma": "live"
                    },
                    "children": []
                }, {
                    "pos": "PP",
                    "word": "",
                    "children": [{
                        "pos": "IN",
                        "word": "in",
                        "token": {
                            "index": 7,
                            "word": "in",
                            "originalText": "in",
                            "characterOffsetBegin": 23,
                            "characterOffsetEnd": 25,
                            "before": " ",
                            "after": "",
                            "pos": "IN",
                            "lemma": "in"
                        },
                        "children": []
                    }]
                }]
            }]
        }]
    }]
}

export const advcl = {
    "text": "I am aware of what is important.",
    "parse": "(ROOT\n  (S\n    (NP (PRP I))\n    (VP (VBP am)\n      (ADJP (JJ aware)\n        (PP (IN of)\n          (SBAR\n            (WHNP (WP what))\n            (S\n              (VP (VBZ is)\n                (ADJP (JJ important))))))))\n    (. .)))",
    "tree": {
        "rootNode": {
            "pos": "ROOT",
            "word": "",
            "children": [{
                "pos": "S",
                "word": "",
                "children": [{
                    "pos": "NP",
                    "word": "",
                    "children": [{
                        "pos": "PRP",
                        "word": "I",
                        "token": {
                            "index": 1,
                            "word": "I",
                            "originalText": "I",
                            "characterOffsetBegin": 0,
                            "characterOffsetEnd": 1,
                            "before": "",
                            "after": " ",
                            "pos": "PRP",
                            "lemma": "I"
                        },
                        "children": []
                    }]
                }, {
                    "pos": "VP",
                    "word": "",
                    "children": [{
                        "pos": "VBP",
                        "word": "am",
                        "token": {
                            "index": 2,
                            "word": "am",
                            "originalText": "am",
                            "characterOffsetBegin": 2,
                            "characterOffsetEnd": 4,
                            "before": " ",
                            "after": " ",
                            "pos": "VBP",
                            "lemma": "be"
                        },
                        "children": []
                    }, {
                        "pos": "ADJP",
                        "word": "",
                        "children": [{
                            "pos": "JJ",
                            "word": "aware",
                            "token": {
                                "index": 3,
                                "word": "aware",
                                "originalText": "aware",
                                "characterOffsetBegin": 5,
                                "characterOffsetEnd": 10,
                                "before": " ",
                                "after": " ",
                                "pos": "JJ",
                                "lemma": "aware"
                            },
                            "children": []
                        }, {
                            "pos": "PP",
                            "word": "",
                            "children": [{
                                "pos": "IN",
                                "word": "of",
                                "token": {
                                    "index": 4,
                                    "word": "of",
                                    "originalText": "of",
                                    "characterOffsetBegin": 11,
                                    "characterOffsetEnd": 13,
                                    "before": " ",
                                    "after": " ",
                                    "pos": "IN",
                                    "lemma": "of"
                                },
                                "children": []
                            }, {
                                "pos": "SBAR",
                                "word": "",
                                "children": [{
                                    "pos": "WHNP",
                                    "word": "",
                                    "children": [{
                                        "pos": "WP",
                                        "word": "what",
                                        "token": {
                                            "index": 5,
                                            "word": "what",
                                            "originalText": "what",
                                            "characterOffsetBegin": 14,
                                            "characterOffsetEnd": 18,
                                            "before": " ",
                                            "after": " ",
                                            "pos": "WP",
                                            "lemma": "what"
                                        },
                                        "children": []
                                    }]
                                }, {
                                    "pos": "S",
                                    "word": "",
                                    "children": [{
                                        "pos": "VP",
                                        "word": "",
                                        "children": [{
                                            "pos": "VBZ",
                                            "word": "is",
                                            "token": {
                                                "index": 6,
                                                "word": "is",
                                                "originalText": "is",
                                                "characterOffsetBegin": 19,
                                                "characterOffsetEnd": 21,
                                                "before": " ",
                                                "after": " ",
                                                "pos": "VBZ",
                                                "lemma": "be"
                                            },
                                            "children": []
                                        }, {
                                            "pos": "ADJP",
                                            "word": "",
                                            "children": [{
                                                "pos": "JJ",
                                                "word": "important",
                                                "token": {
                                                    "index": 7,
                                                    "word": "important",
                                                    "originalText": "important",
                                                    "characterOffsetBegin": 22,
                                                    "characterOffsetEnd": 31,
                                                    "before": " ",
                                                    "after": "",
                                                    "pos": "JJ",
                                                    "lemma": "important"
                                                },
                                                "children": []
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        }
    },
    "tokens": [{
        "index": 1,
        "word": "I",
        "originalText": "I",
        "characterOffsetBegin": 0,
        "characterOffsetEnd": 1,
        "before": "",
        "after": " ",
        "pos": "PRP",
        "lemma": "I"
    }, {
        "index": 2,
        "word": "am",
        "originalText": "am",
        "characterOffsetBegin": 2,
        "characterOffsetEnd": 4,
        "before": " ",
        "after": " ",
        "pos": "VBP",
        "lemma": "be"
    }, {
        "index": 3,
        "word": "aware",
        "originalText": "aware",
        "characterOffsetBegin": 5,
        "characterOffsetEnd": 10,
        "before": " ",
        "after": " ",
        "pos": "JJ",
        "lemma": "aware"
    }, {
        "index": 4,
        "word": "of",
        "originalText": "of",
        "characterOffsetBegin": 11,
        "characterOffsetEnd": 13,
        "before": " ",
        "after": " ",
        "pos": "IN",
        "lemma": "of"
    }, {
        "index": 5,
        "word": "what",
        "originalText": "what",
        "characterOffsetBegin": 14,
        "characterOffsetEnd": 18,
        "before": " ",
        "after": " ",
        "pos": "WP",
        "lemma": "what"
    }, {
        "index": 6,
        "word": "is",
        "originalText": "is",
        "characterOffsetBegin": 19,
        "characterOffsetEnd": 21,
        "before": " ",
        "after": " ",
        "pos": "VBZ",
        "lemma": "be"
    }, {
        "index": 7,
        "word": "important",
        "originalText": "important",
        "characterOffsetBegin": 22,
        "characterOffsetEnd": 31,
        "before": " ",
        "after": "",
        "pos": "JJ",
        "lemma": "important"
    }, {
        "index": 8,
        "word": ".",
        "originalText": ".",
        "characterOffsetBegin": 31,
        "characterOffsetEnd": 32,
        "before": "",
        "after": "",
        "pos": ".",
        "lemma": "."
    }],
    "basicDependencies": [{
        "dep": "ROOT",
        "governor": 0,
        "governorGloss": "ROOT",
        "dependent": 3,
        "dependentGloss": "aware"
    }, {
        "dep": "nsubj",
        "governor": 3,
        "governorGloss": "aware",
        "dependent": 1,
        "dependentGloss": "I"
    }, {
        "dep": "cop",
        "governor": 3,
        "governorGloss": "aware",
        "dependent": 2,
        "dependentGloss": "am"
    }, {
        "dep": "mark",
        "governor": 7,
        "governorGloss": "important",
        "dependent": 4,
        "dependentGloss": "of"
    }, {
        "dep": "nsubj",
        "governor": 7,
        "governorGloss": "important",
        "dependent": 5,
        "dependentGloss": "what"
    }, {
        "dep": "cop",
        "governor": 7,
        "governorGloss": "important",
        "dependent": 6,
        "dependentGloss": "is"
    }, {
        "dep": "advcl",
        "governor": 3,
        "governorGloss": "aware",
        "dependent": 7,
        "dependentGloss": "important"
    }, {
        "dep": "punct",
        "governor": 3,
        "governorGloss": "aware",
        "dependent": 8,
        "dependentGloss": "."
    }]
}

export const notWorking = {
    "pos": "ROOT",
    "word": "",
    "children": [{
        "pos": "S",
        "posInfo": {
            "description": "simple declarative clause, i.e. one that is not introduced by a (possible empty) subordinating conjunction or a wh-word and that does not exhibit subject-verb inversion.",
            "examples": []
        },
        "word": "",
        "children": [{
            "pos": "NP",
            "posInfo": {
                "description": "Noun Phrase. ",
                "examples": []
            },
            "word": "",
            "children": [{
                "pos": "PRP",
                "posInfo": {
                    "group": "Personal pronoun",
                    "tag": "Personal pronoun",
                    "examples": []
                },
                "word": "I",
                "token": {
                    "index": 1,
                    "word": "I",
                    "originalText": "I",
                    "characterOffsetBegin": 0,
                    "characterOffsetEnd": 1,
                    "before": "",
                    "after": " ",
                    "pos": "PRP",
                    "lemma": "I"
                },
                "children": [],
                "parent": null
            }],
            "parent": null
        }, {
            "pos": "VP",
            "posInfo": {
                "description": "Vereb Phrase. ",
                "examples": []
            },
            "word": "",
            "children": [{
                "pos": "VBP",
                "posInfo": {
                    "group": "Verb, non-3rd person singular present",
                    "tag": "Verb, non-3rd person singular present",
                    "examples": []
                },
                "word": "know",
                "token": {
                    "index": 2,
                    "word": "know",
                    "originalText": "know",
                    "characterOffsetBegin": 2,
                    "characterOffsetEnd": 6,
                    "before": " ",
                    "after": " ",
                    "pos": "VBP",
                    "lemma": "know"
                },
                "children": [],
                "parent": null
            }],
            "parent": null
        }, {
            "pos": "SBAR",
            "posInfo": {
                "description": "Clause introduced by a (possibly empty) subordinating conjunction.",
                "examples": []
            },
            "word": "",
            "children": [{
                "pos": "IN",
                "posInfo": {
                    "group": "Preposition or subordinating conjunction",
                    "tag": "Preposition or subordinating conjunction",
                    "examples": []
                },
                "word": "that",
                "token": {
                    "index": 3,
                    "word": "that",
                    "originalText": "that",
                    "characterOffsetBegin": 7,
                    "characterOffsetEnd": 11,
                    "before": " ",
                    "after": " ",
                    "pos": "IN",
                    "lemma": "that"
                },
                "children": [],
                "parent": null
            }, {
                "pos": "NP",
                "posInfo": {
                    "description": "Noun Phrase. ",
                    "examples": []
                },
                "word": "",
                "children": [{
                    "pos": "PRP",
                    "posInfo": {
                        "group": "Personal pronoun",
                        "tag": "Personal pronoun",
                        "examples": []
                    },
                    "word": "you",
                    "token": {
                        "index": 4,
                        "word": "you",
                        "originalText": "you",
                        "characterOffsetBegin": 12,
                        "characterOffsetEnd": 15,
                        "before": " ",
                        "after": " ",
                        "pos": "PRP",
                        "lemma": "you"
                    },
                    "children": [],
                    "parent": null
                }],
                "parent": null
            }, {
                "pos": "VP",
                "posInfo": {
                    "description": "Vereb Phrase. ",
                    "examples": []
                },
                "word": "",
                "children": [{
                    "pos": "VBP",
                    "posInfo": {
                        "group": "Verb, non-3rd person singular present",
                        "tag": "Verb, non-3rd person singular present",
                        "examples": []
                    },
                    "word": "are",
                    "token": {
                        "index": 5,
                        "word": "are",
                        "originalText": "are",
                        "characterOffsetBegin": 16,
                        "characterOffsetEnd": 19,
                        "before": " ",
                        "after": " ",
                        "pos": "VBP",
                        "lemma": "be"
                    },
                    "children": [],
                    "parent": null
                }, {
                    "pos": "ADJP",
                    "posInfo": {
                        "description": "Adjective Phrase.",
                        "examples": []
                    },
                    "word": "",
                    "children": [{
                        "pos": "JJ",
                        "posInfo": {
                            "group": "Adjective",
                            "tag": "Adjective",
                            "examples": []
                        },
                        "word": "smart",
                        "token": {
                            "index": 6,
                            "word": "smart",
                            "originalText": "smart",
                            "characterOffsetBegin": 20,
                            "characterOffsetEnd": 25,
                            "before": " ",
                            "after": "",
                            "pos": "JJ",
                            "lemma": "smart"
                        },
                        "children": [],
                        "parent": null
                    }],
                    "parent": null
                }],
                "parent": null
            }],
            "parent": null,
            "matchRules": [{
                "name": "SB01",
                "match": "SBAR(IN|WHNP|WHPP|WHADVP|WHADJP+S(*))",
                "commands": [{
                    "cmd": ECommand.DELETE,
                    "args": ["SBAR(IN|WHNP|WHPP|WHADVP|WHADJP+[S])"]
                }]
            }]
        }],
        "parent": null,
        "matchRules": [{
            "name": "VP01",
            "match": "S|SBAR(*+VP(*+NP|S|PP|SBAR|ADJP|ADVP+*)+*)",
            "commands": [{
                "cmd": ECommand.MOVE,
                "args": ["S|SBAR(*+VP(*+[NP|S|PP|SBAR|ADJP|ADVP+*]))",
                    "[S|SBAR]"]
            }]
        }]
    }],
    "parent": null
}

export const rules: IRule[] = [{
    "name": "VP02(have+VBN)",
    "match": "S|SBAR(*+VP(VBD|VBP|VBZ=have+*+VP(VBN+*))+*)",
    "commands": [{
        "cmd": ECommand.DELETE,
        "args": ["S|SBAR(*+VP(VBD|VBP|VBZ=have+*+[VP]))"]
    }]
}, {
    "name": "VP03(MD+VB)",
    "match": "S|SBAR(*+VP(MD+*+VP(VB+*))+*)",
    "commands": [{
        "cmd": ECommand.DELETE,
        "args": ["S|SBAR(*+VP(MD+*+[VP]))"]
    }]
}, {
    "name": "VP04(MD+VBN)",
    "match": "S|SBAR(*+VP(MD+*+VP(VBN+*))+*)",
    "commands": [{
        "cmd": ECommand.DELETE,
        "args": ["S|SBAR(*+VP(MD+*+[VP]))"]
    }]
}, {
    "name": "VP05(do+RB+VB)",
    "match": "S|SBAR(*+VP(VBD|VBP|VBZ=do+RB+VP(VB+*))+*)",
    "commands": [{
        "cmd": ECommand.DELETE,
        "args": ["S|SBAR(*+VP(VBD|VBP|VBZ=do+RB+[VP]))"]
    }]
}, {
    "name": "VPMD01",
    "match": "S(*+PP(IN+PP)+*)",
    "commands": [{
        "cmd": ECommand.MOVE,
        "args": ["S(*+PP(IN+[PP]))", "[S]"]
    }]
}, {
    "name": "VPMD02",
    "match": "S(*+VP(*)+PP(IN)+*)",
    "commands": [{
        "cmd": ECommand.DELETE,
        "args": ["S(*+VP(*)+[PP])"]
    }]
}, {
    "name": "VPMD03-1",
    "match": "S|SBAR(*+VP(*)+ADVP+*)",
    "commands": [{
        "cmd": ECommand.MOVE,
        "args": ["S|SBAR(*+VP(*)+[ADVP])", "[VP]"]
    }]
}, {
    "name": "VPMD03-2",
    "match": "S|SBAR(*+ADVP+VP(*)+*)",
    "commands": [{
        "cmd": ECommand.MOVE,
        "args": ["S|SBAR(*+[ADVP])", "[VP]"]
    }]
}, {
    "name": "SB01",
    "match": "SBAR(IN|WHNP|WHPP|WHADVP|WHADJP+S(*))",
    "commands": [{
        "cmd": ECommand.DELETE,
        "args": ["SBAR(IN|WHNP|WHPP|WHADVP|WHADJP+[S])"]
    }]
}, {
    "name": "SS01-TO",
    "match": "S(*+VP(TO+VP(VB+*))+*)",
    "commands": [{
        "cmd": ECommand.DELETE,
        "args": ["S(*+[VP])"]
    }]
}, {
    "name": "SS01-VBG/VBN",
    "match": "S(*+VP(VBG|VBN+VP(VB+*))+*)",
    "commands": [{
        "cmd": ECommand.DELETE,
        "args": ["S(*+[VP])"]
    }]
}, {
    "name": "SS02",
    "match": "NP(*+VP(VBG|VBN+*))",
    "commands": [{
        "cmd": ECommand.REPLACE,
        "args": ["NP(*+[VP])", "S"]
    }]
}, {
    "name": "SS03",
    "match": "VP(*+VP(VBG+*))",
    "commands": [{
        "cmd": ECommand.REPLACE,
        "args": ["VP(*+[VP])", "S"]
    }]
}, {
    "name": "SS04",
    "match": "VP(*+VP(VBN+*))",
    "commands": [{
        "cmd": ECommand.REPLACE,
        "args": ["NP(*+[VP])", "S"]
    }]
}, {
    "name": "VP01",
    "match": "S|SBAR(*+VP(*+NP|S|PP|SBAR|ADJP|ADVP+*)+*)",
    "commands": [{
        "cmd": ECommand.MOVE,
        "args": ["S|SBAR(*+VP(*+[NP|S|PP|SBAR|ADJP|ADVP+*]))", "[S]"]
    }]
}, {
    "name": "CAJ01",
    "match": "NP(NP(*+NN|DT|RB|JJ|JJS|NNS)+PP(IN=of+NP))",
    "commands": [{
        "cmd": ECommand.REPLACE,
        "args": ["NP([NP])", "ADJP"]
    }, {
        "cmd": ECommand.MOVE,
        "args": ["NP(NP(*+NN|DT|RB|JJ|JJS|NNS)+PP([IN])", "NP([NP])"]
    }, {
        "cmd": ECommand.DELETE,
        "args": ["NP(NP(*+NN|DT|RB|JJ|JJS|NNS)+[PP])"]
    }]
}, {
    "name": "CAJ02",
    "match": "NP(NP(*+NN|RB|JJ|JJS|NNS=acre|total|glass)+PP(IN=of+NP))",
    "commands": [{
        "cmd": ECommand.REPLACE,
        "args": ["NP([NP])", "ADJP"]
    }, {
        "cmd": ECommand.MOVE,
        "args": ["NP(NP(*+NN|RB|JJ|JJS|NNS=acre|total|glass)+PP([IN])", "NP([NP])"]
    }, {
        "cmd": ECommand.DELETE,
        "args": ["NP(NP(*+NN|RB|JJ|JJS|NNS=acre|total|glass)+[PP])"]
    }]
}, {
    "name": "CAJ03",
    "match": "NP(NP(*+CD)+PP(IN=of+NP))",
    "commands": [{
        "cmd": ECommand.REPLACE,
        "args": ["NP([NP])", "ADJP"]
    }, {
        "cmd": ECommand.MOVE,
        "args": ["NP(NP(*+CD)+PP([IN])", "NP([NP])"]
    }, {
        "cmd": ECommand.DELETE,
        "args": ["NP(NP(*+CD)+[PP])"]
    }]
}, {
    "name": "AJMD03",
    "match": "S(*+ADJP(*+JJ|VBN+SBAR)+*)",
    "commands": [{
        "cmd": ECommand.MOVE,
        "args": ["S(*+ADJP(*+JJ|VBN+[SBAR]))", "[S]"]
    }]
}, {
    "name": "AJMD05",
    "match": "VP(*+ADVP(RB)+S(VBG|VBN+*)+*)",
    "commands": [{
        "cmd": ECommand.MOVE,
        "args": ["S(*+ADVP([RB]))", "S(*+ADVP(RB)+S([VBG|VBN]))"]
    }]
}, {
    "name": "S|SBAR(*+S(*))",
    "match": "S|SBAR(*+S(*))",
    "commands": [{
        "cmd": ECommand.DELETE,
        "args": ["S|SBAR(*+[S])"]
    }]
}, {
    "name": "NP(NP+SBAR)",
    "match": "NP(NP+SBAR)",
    "commands": [{
        "cmd": ECommand.DELETE,
        "args": ["[NP]"]
    }]
}, {
    "name": "NPMD04",
    // "match": "NP(*+NN|NNS|NNP|NNPS|PRP={gov}+S={dep})",
    "match": "NP(*+NN|NNS|NNP|NNPS|PRP=house&{gov}+S={dep})",
    "relations": [
        {
            "relation": "acl",
            "governor": "gov",
            "dependent": "dep"
        }
    ],
    "commands": [{
        "cmd": ECommand.CREATE,
        "args": ["[NP]", "NP", "unshift"]
    }, {
        "cmd": ECommand.MOVE,
        "args": ["NP(NP+[*+NN|NNS|NNP|NNPS|PRP]+S)", "NP([NP])"]
    }],
}
]


// I am aware of what is important (advcl AJMD01)