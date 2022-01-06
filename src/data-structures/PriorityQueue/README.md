# Priority Queue

Based on a Min Binary Heap but uses a priority value to prioritize item.

| Operation                | Description                                     | Big O    | Return Type         |
| ------------------------ | ----------------------------------------------- | -------- | ------------------- |
| enqueue(value, priority) | Adds a value to the queue based on its priority | O(log n) | BinarySearchTree<T> |
| dequeue()                | Pops off the highest priority (root) value      | O(log n) | T or null           |
