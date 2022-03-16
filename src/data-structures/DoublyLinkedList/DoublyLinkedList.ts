interface INode<T> {
  value: T;
  next: INode<T> | null;
  prev: INode<T> | null;
}

interface IDoublyLinkedList<T> {
  insertFirst(value: T): DoublyLinkedList<T>;
  removeFirst(): INode<T> | null;
  getFirst(): INode<T> | null;
  insertLast(value: T): DoublyLinkedList<T>;
  removeLast(): INode<T> | null;
  getLast(): INode<T> | null;
  insertAt(index: number, value: T): DoublyLinkedList<T>;
  getAt(index: number): INode<T> | null;
  removeAt(index: number): INode<T> | null;
  clear(): void;
  isEmpty(): boolean;
  size(): number;
  setValue(index: number, value: T): DoublyLinkedList<T>;
  toArray(): T[];
  fromArray(values: T[]): DoublyLinkedList<T>;
  forEach(fn: () => void): void;
}

class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  private head: INode<T> | null = null;
  private tail: INode<T> | null = null;
  public length: number = 0;

  public insertFirst = (value: T): DoublyLinkedList<T> => {
    const newNode = this.createNode(value);

    // If we have a current head then set its prev to the new node
    if (this.head) this.head.prev = newNode;

    // Set the new nodes next to the current head (will be null if empty)
    newNode.next = this.head;

    // Set the head to the new node;
    this.head = newNode;

    // If this is the first node then set the tail
    if (this.length === 0) this.tail = this.head;

    // Increase the length
    this.length++;

    // Return the DLL
    return this;
  };

  public removeFirst = (): INode<T> | null => {
    // If ths LL is empty return null
    if (!this.head) return null;

    // Store the current head to return it
    const tempHead = this.head;

    // Set the head to the current heads next node
    this.head = this.head ? this.head.next : null;

    // If we still have a head then remove the heads prev
    if (this.head) this.head.prev = null;

    // Decrease the length
    this.length--;

    // If the LL is now empty
    if (this.length === 0) this.tail = null;

    // Return the removed Node
    return tempHead;
  };

  public getFirst = (): INode<T> | null => {
    return this.head;
  };

  public insertLast = (value: T): DoublyLinkedList<T> => {
    // Create a new node for the value
    const newNode = this.createNode(value);

    // If the DLL is empty then make the head and tail the same
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    if (this.tail) this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  };

  public removeLast = (): INode<T> | null => {
    if (!this.tail) return null;

    // Store the current head to return it
    const tempNode = this.tail;

    // If there is only one Node
    if (this.length === 1) {
      this.clear();
      return tempNode;
    }

    const poppedNode = this.tail;
    const leader = poppedNode.prev;

    // If we dont find the previous return null
    if (!leader) return null;

    leader.next = null;

    // Decrease the length
    this.length--;

    // If the DLL is now empty
    if (this.length === 0) this.tail = null;
    else this.tail = leader;

    // Return the removed Node
    return tempNode;
  };

  public getLast = (): INode<T> | null => {
    return this.tail;
  };

  public insertAt(index: number, value: T): DoublyLinkedList<T> {
    // If we are adding to the end
    if (index >= this.length) {
      return this.insertLast(value);
    } else if (!index || index === 0) {
      return this.insertFirst(value);
    }

    // Create the new Node
    const newNode = this.createNode(value);

    // Get the Node before the insertion spot
    const leader = this.getAt(index - 1);

    // If we dont have a leader then insert at the start
    if (!leader) return this.insertFirst(value);

    // Get the Node that is supposed to be after the new Node
    const holdingPointer = leader.next;
    if (holdingPointer) holdingPointer.prev = newNode;

    // Insert the new Node
    leader.next = newNode;

    // Link the new Node to the holding pointer and the leader
    newNode.next = holdingPointer;
    newNode.prev = leader;

    // Increase the length
    this.length++;

    // Return the LL
    return this;
  }

  public getAt = (index: number): INode<T> | null => {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode ? currentNode.next : null;
      counter++;
    }
    return currentNode;
  };

  public removeAt = (index?: number): INode<T> | null => {
    if (!index || index === 0) {
      // if we are removing the first item
      return this.removeFirst();
    } else if (index >= this.length - 1) {
      // if we are removing the last item
      return this.removeLast();
    }

    // Find the node before the removed node
    const leader = this.getAt(index - 1);

    // If we dont have a leader then return null
    if (!leader) return null;

    // Get the node to remove
    const removedNode = leader.next;

    // Remove the Node
    leader.next = leader.next ? leader.next.next : null;

    // Set the new next nodes previous node
    const nextNode = leader.next;
    if (nextNode) nextNode.prev = leader;

    // Decrease the length
    this.length--;

    // Return the deleted node
    return removedNode;
  };

  public clear = (): void => {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };

  public isEmpty = () => !this.head;

  public size = () => this.length;

  public setValue = (index: number, value: T): DoublyLinkedList<T> => {
    const node = this.getAt(index);

    // If we dont find the node return the original LL
    if (!node) return this;

    // Set the value
    node.value = value;

    // Return the LL
    return this;
  };

  public toArray = (): T[] => {
    const array: T[] = [];
    let node = this.head;
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  };

  public fromArray = (values: T[]): DoublyLinkedList<T> => {
    values.forEach((val) => this.insertFirst(val));
    return this;
  };

  public forEach = (fn: (node: INode<T>, counter: number) => void): void => {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  };

  private createNode = (value: T): INode<T> => {
    return { value, next: null, prev: null };
  };
}

export { DoublyLinkedList };
