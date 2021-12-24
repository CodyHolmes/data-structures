# Doubly Linked List

Similar to Singly Linked List but stores a prev value for each node as well. Trades more memory for more flexibility

| Operation                 | Description                                                                 | Big O | Return Type           |
| ------------------------- | --------------------------------------------------------------------------- | ----- | --------------------- |
| insertFirst(value)        | Insert Node at the head                                                     | O(1)  | DoublyLinkedList< T > |
| removeFirst()             | Remove the head Node                                                        | O(1)  | Node< T >             |
| getFirst()                | Return the head Node                                                        | O(1)  | Node< T >             |
| insertLast(value)         | Insert Node at the tail                                                     | O(1)  | DoublyLinkedList< T > |
| removeLast()              | Remove the tail Node                                                        | O(1)  | Node< T >             |
| getLast()                 | Return the tail Node                                                        | O(1)  | Node< T >             |
| insertAt(index, value)    | Insert Node at the specified index                                          | O(n)  | DoublyLinkedList< T > |
| getAt(index)              | Return the Node at the specified index                                      | O(n)  | Node< T >             |
| removeAt(index)           | Removed the Node at index                                                   | O(n)  | Node< T >             |
| clear()                   | Clear the list                                                              | O(1)  | void                  |
| isEmpty()                 | Returns true or false                                                       | O(1)  | boolean               |
| size()                    | Returns the length of the list                                              | O(1)  | number                |
| setValue(index, value)    | Change Nodes value at index                                                 | O(n)  | DoublyLinkedList< T > |
| toArray()                 | Return array from current list                                              | O(n)  | T[]                   |
| fromArray()               | Return a list from an array                                                 | O(n)  | DoublyLinkedList< T > |
| forEach(callbackFunction) | Calls the callbackFunction for every node with the parameters (node, index) | O(n)  | void                  |
