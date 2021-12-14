# Doubly Linked List

Similar to Singly Linked List but stores a prev value for each node as well. Trades more memory for more flexibility

| Operation              | Description                          | Big O | Return Type           |
| ---------------------- | ------------------------------------ | ----- | --------------------- |
| add(value)             | Append value to end of list          | O(1)  | DoublyLinkedList< T > |
| add(value, index)      | Insert value at specified index      | O(n)  | DoublyLinkedList< T > |
| addFirst(value)        | Insert value at beginning of list    | O(1)  | DoublyLinkedList< T > |
| get(index)             | Return Node at specified index       | O(n)  | Node< T >             |
| peek()                 | Return Node at head                  | O(1)  | Node< T >             |
| peekFirst()            | Same as peek                         | O(1)  | Node< T >             |
| peekLast()             | Return Node at tail                  | O(1)  | Node< T >             |
| pop()                  | Pops element off the end of the list | O(1)  | Node< T >             |
| remove()               | Remove Node at head                  | O(1)  | DoublyLinkedList< T > |
| remove(index)          | Removed Node at index                | O(n)  | DoublyLinkedList< T > |
| setValue(index, value) | Change Nodes value at index          | O(n)  | DoublyLinkedList< T > |
| toArray()              | Return array from current list       | O(n)  | T[]                   |
| fromArray()            | Return a list from an array          | O(n)  | DoublyLinkedList< T > |
