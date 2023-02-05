import { defineConfig } from 'vitepress'
import markdownItKatex from '@larose/markdown-it-katex'
// TODO: Correctly integrate karnaugh-map LaTeX package.
// import karnaughMap from './karnaugh-map/KarnaughMap'

// TODO: Axios binding to Kemal, this should not be generated here. 
const collection = {
    name: "Nand-to-Tetris",
    id: "nand-to-tetris",
    chapters: [
        {
            name: "Hardware",
            id: "hardware",
            sequences: [
                {
                    name: "Boolean Logic and Arithmetic",
                    id: "boolean-logic-and-arithmetic",
                    sections: [
                        {
                            name: "Boolean Logic", id: "boolean-logic"
                        },
                        {
                            name: "Logic Gates", id: "logic-gates"
                        },
                        {
                            name: "Arithmetics", id: "arithmetics"
                        }
                    ]
                },
                {
                    name: "Sequential Logic and Memory",
                    id: "sequential-logic-and-memory",
                    sections: [
                        {
                            name: "Switching", id: "switching"
                        },
                        {
                            name: "Conditions", id: "conditions"
                        },
                        {
                            name: "Memory", id: "memory"
                        }
                    ]
                },
                {
                    name: "Machine Architecture",
                    id: "machine-architecture",
                    sections: [
                        {
                            name: "Arithmetic Logic Unit", id: "arithmetic-logic-unit"
                        },
                        {
                            name: "Processor", id: "processor"
                        }
                    ]
                },
                {
                    name: "Machine Code and Assembly",
                    id: "machine-code-and-assembly",
                    sections: [
                        {
                            name: "Machine Code", id: "machine-code"
                        },
                        {
                            name: "Low-Level Language", id: "low-level"
                        }
                    ]
                }
            ],
            
        },
        {
            name: "Software",
            id: "software",
            sequences: [
                { name: "Compilers", id: "compilers", sections: []},
                { name: "High-Level Language", id: "compilers", sections: []},
                { name: "Operating Systems", id: "operating-systems", sections: []},
                { name: "Applications", id: "applications", sections: []}
            ],
        }
    ]
};

function nav(collection) {
    return [
        {
            text: collection.name, 
            items: collection.chapters.map(chapter => ({
                text: chapter.name,
                link: `${collection.id}/${chapter.id}/`
            }))
        }
    ];
}

function sidebar(collection) {
    const chapters = collection.chapters.map(chapter => ({
        text: chapter.name,
        collapsible: true,
        items: chapter.sequences.map(sequence => ({
            text: sequence.name,
            link: `/${collection.id}/${chapter.id}/${sequence.id}/`,
            items: sequence.sections.map(section => ({
                text: section.name,
                link: `/${collection.id}/${chapter.id}/${sequence.id}/${section.id}` 
            }))
        }))
    }));
    const sidebar = {};
    for (let i = 0; i < collection.chapters.length; i++) {
        sidebar[`${collection.id}/${collection.chapters[i].id}/`] = [chapters[i]];
    }
    sidebar[collection.id] = [{
        text: collection.name,
        items: chapters
    }];
    return sidebar;
}

// Katex Custom Elements
const customElements = [
    'math',
    'maction',
    'maligngroup',
    'malignmark',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mi',
    'mlongdiv',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mscarries',
    'mscarry',
    'mscarries',
    'msgroup',
    'mstack',
    'mlongdiv',
    'msline',
    'mstack',
    'mspace',
    'msqrt',
    'msrow',
    'mstack',
    'mstack',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'semantics',
    'math',
    'mi',
    'mn',
    'mo',
    'ms',
    'mspace',
    'mtext',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'msqrt',
    'mstyle',
    'mmultiscripts',
    'mover',
    'mprescripts',
    'msub',
    'msubsup',
    'msup',
    'munder',
    'munderover',
    'none',
    'maligngroup',
    'malignmark',
    'mtable',
    'mtd',
    'mtr',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'msline',
    'msrow',
    'mstack',
    'maction',
    'semantics',
    'annotation',
    'annotation-xml'
    ]

export default defineConfig({
    title: "Explore",
    description: 'Writeup Exploration Mode',
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'Explore',
        nav: nav(collection),
        sidebar: sidebar(collection)
    },
    markdown: {
        config: (md) => {
          md.use(markdownItKatex/*, karnaughMap*/)
        }
      },
      vue: {
        template: {
          compilerOptions: {
            isCustomElement: (tag) => customElements.includes(tag)
          }
        }
      }
});