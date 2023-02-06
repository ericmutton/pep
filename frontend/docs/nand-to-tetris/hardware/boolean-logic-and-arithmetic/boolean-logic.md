---
features:
- title: Boolean Logic
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css
---

# Boolean Logic

Boolean logic is comprised of logical operators instead of arithmetic operators.

## Logical Operators
Logical operators are used in **Boolean algebra**, a branch of algebra that only uses truth values (`true`, `false`) denoted as `1` and `0` respectively. This branch of algebra was most formalized by George Boole's publishing of [The Laws of Thought](https://openlibrary.org/books/OL28677971M/An_Investigation_of_the_Laws_of_Thought) in 1854. The term 'Boolean' generally refers to anything based off of Boole's body of work.

Appearing in order of common precedence: 
| Operator | Operation | Representation |
| :-: | :-: |  :-: |
| not | Negation | `¬` , N (prefix), `~` |
| and | Conjunction | `∧` , K (prefix), `&` , `∙` |
| or | Disjunction | `∨`, A (prefix) |
| xnor | Biconditional | `↔` , E (prefix), `≡` , `=`. \**AKA iff, xnor, and bi-implication.* |
| *(if...then) | Material implication | `→` , C (prefix), `⇒` , `⊃` |

::: tip 
Material implication is $\overline{x}+y$, or `or(not(x),y)`, uniquely requiring compound operations.
:::

::: info Further Reading
[The Laws of Thought](https://openlibrary.org/books/OL28677971M/)
:::

## De Morgan's Laws
De Morgan's equivalency laws demonstrate the complimentary nature of conjunction and disjunction. 



## Truth Table

[Truth tables](https://en.wikipedia.org/wiki/Truth_table) show all truths for a given logical operation. Below is a 2-bit truth table showing the four possible truths from two inputs. Notice that the input columns are counting upward in binary. If an output is marked with an `X`, it is a [dont-care](https://en.wikipedia.org/wiki/Don%27t-care_term) where the output is not considered important.

| A | B | Output |
|:-:|:-:| :----: |
| 0 | 0 | X |
| 0 | 1 | X |
| 1 | 0 | X |
| 1 | 1 | X |

### Condensed Form

For truth tables beyond 2-bit logic, a condensed form can be used. To demonstrate the pattern, the input's corresponding decimal representation is indicated instead of its 1-bit output.

| OP | 0 | 1 |
|:-: |:-:|:-:|
|  0 | 0 | 2 |
|  1 | 1 | 3 |

| OP | 00 | 01 | 11 | 10 |
| :-: |:-: |:-: |:-: |:-: |
| 00  | 0  | 4  | 12  | 8  |
| 01  | 1  | 5  | 13  | 9  |
| 10  | 3  | 7  | 15  | 11  |
| 11  | 2  | 6  | 14  | 10  |

## Karnaugh Map
[Karnaugh Maps (K-Maps)](https://en.wikipedia.org/wiki/Karnaugh_map) are used to aid in simplifying logic. While similar in appearance to condensed truth tables, a K-Map represents both minimum terms (minterms) and maximum terms (maxterms) in a grouped form. 


$\sum{(1,2,3)}$

$\prod{(1,2,3)}$

### 2x2 (4-bit)
|A/B| 0 | 1 |
|:-:|:-:|:-:|
| 0 | X | X |
| 1 | X | X |

### 4x4 (16-bit)
| AB/CD | 00 | 01 | 11 | 10 |
| :-: |:-: |:-: |:-: |:-: |
| 00  | X  | 0  | 0  | 0  |
| 01  | 0  | 0  | 0  | 0  |
| 10  | 0  | 0  | 0  | 0  |
| 11  | 0  | 0  | 0  | 0  |

### Process
1. For minterms group 1s, for maxterms group 0s.
```
$$
\begin{karnaugh-map}[4][4][4][$a$][$b$][$c$][$d$][$e$][$f$]
\minterms{0,1,2,3,8,13,17,20,22,28,
33,32,30,19,40,35,49,42,34,10,60,
54,62,51,52}
\indeterminants{15,45,47}
\autoterms[0]
\implicantcorner[0,2]
\implicant{1}{3}[0,1,2,3]
\implicantedge{4}{12}{6}{14}[1,3]
\implicant{13}{15}[0,2]
\end{karnaugh-map}
$$
```