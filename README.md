# Javascript Data Structures

A small library of data structures for javascript

## Installation

Using npm:

```shell
$ npm i @codyholmes/data-structures
```

Note: add --save if you are using npm < 5.0.0

In Node.js:

```ts
const { LinkedList } = require('@codyholmes/data-structures');

let myLinkedList = new LinkedList<number>();
myLinkedList.add(5);
```

## Data Structures Available

- [Binary Search Tree](src/data-structures/BinarySearchTree/)
- [Linked List - Doubly](src/data-structures/DoublyLinkedList/)
- [Linked List - Singly](src/data-structures/LinkedList/)
- [Max Binary Heap](src/data-structures/MaxBinaryHeaps/)
- [Stack](src/data-structures/Stack/)
- [Queue](src/data-structures/Queue/)
