---
features:
- title: Logic Gates
---

# Logic Gates
A logic gate is an electronic version of a **boolean logical operator**. Boolean Logic gates include `NOT`,`AND`,`OR`, and `XOR`, with each gate having an inverted form, or a **complement**: `BUFFER`,`NAND`,`NOR`,`XNOR`. Inverted gate symbols are denoted with a 'bubble' or 'wedge' depending on the representation.

::: tip `BUFFER` is unique in that rather than transforming the expressed boolean value, it acts like an electrical repeater.
<Piece type="BUFFER" shape="ANSI"/>
:::


## Associations
| Gate   | Boolean Operation     | Arithmetic | Logic | Bitwise |
| :-: | :-: | :-: | :-: | :-: |
|    not | Negation              | `1`        | `!` | `~` |
|    and | Conjunction           | `×`,`>1`   | `∧` | `&` |
|     or | Disjunction           | `+`,`≥1`   | `∨` | `\|`|
|    xor | Exclusive Disjunction | `=1`       | `⊕` | `^` |
|   xnor | Biconditional         | n/a        | `⊙` | n/a |
|   nand | Alternative Denial    | n/a        | n/a | n/a |
|    nor | Joint Denial          | n/a        | n/a | n/a |
| buffer | Digital Buffer        | n/a        | n/a | n/a |

## NOT

NOT is a unary operator. Unary operations involve just one input. The other operators do operations involving at least two inputs.

### Truth Table

| Input | Output |
| :---: | :----: |
| 0     | 1      |
| 1     | 0      |

### Representation
The symbol for NOT is an inverted BUFFER. Inverted gates are denoted with a dot behind its output line.
<Piece type="NOT" shape="ANSI" />

## AND/NAND
Arithmetically, `AND` is similar to `*`, `>1`. In Boolean algebra, it is **conjunction**.
### Truth Table
| & | 0 | 1 |
|:-: |:-:|:-:|
|  0 | 0 | 0 |
|  1 | 0 | 1 |

| & | 0 | 1 |
|:-: |:-:|:-:|
|  0 | 1 | 1 |
|  1 | 1 | 0 |

<Piece type="AND" shape="ANSI" />
<Piece type="NAND" shape="ANSI" />

## OR/NOR
Arithmetically, `OR` is similar to `+`, `≥1`. 
| OP | 0 | 1 |
|:-: |:-:|:-:|
|  0 | 0 | 1 |
|  1 | 1 | 1 |

<Piece type="OR" shape="ANSI" />
<Piece type="NOR" shape="ANSI" />

## Exclusive OR (XOR)
Arithmetically, `XOR` is similar to `=1`.  
| OP | 0 | 1 |
|:-: |:-:|:-:|
|  0 | 0 | 1 |
|  1 | 1 | 0 |

::: info Further Reading
[Logic Gate Representations (ANSI/IEEE Std 91/91a-1991)](https://www.ti.com/lit/ml/sdyz001a/sdyz001a.pdf)
:::

## Universal Logic Gates

`NAND` and `NOR` are referred to as universal logic operations because it is possible to reproduce all other logical operations .
- `NAND` is referred to as the **Sheffer stroke**, named after Henry M. Sheffer and his 1913 published proof.
- `NOR` is referred to as **Pierce's arrow**, named after Charles Sanders Peirce and his 1933 published work.


::: info Further Reading
[Wikipedia](https://en.wikipedia.org/wiki/Logic_gate#Universal_logic_gates)