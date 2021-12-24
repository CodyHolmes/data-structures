interface INode<T> {
  value: T;
  next: INode<T> | null;
}
interface ILinkedList<T> {
  insertFirst(value: T): LinkedList<T>;
  removeFirst(): INode<T> | null;
  getFirst(): INode<T> | null;
  insertLast(value: T): LinkedList<T>;
  removeLast(): INode<T> | null;
  getLast(): INode<T> | null;
  insertAt(index: number, value: T): LinkedList<T>;
  getAt(index: number): INode<T> | null;
  removeAt(index: number): INode<T> | null;
  clear() : void;
  isEmpty(): boolean;
  size(): number;
  setValue(index: number, value: T): LinkedList<T>;
  toArray(): T[];
  fromArray(values: T[]): LinkedList<T>;
  forEach(fn: Function): void;
}

class LinkedList<T> implements ILinkedList<T> {
  private head: INode<T> | null = null;
  private tail: INode<T> | null  = null;
  public length: number = 0;

  public insertFirst = (value: T): LinkedList<T> => {
    const newNode = this.createNode(value);

    // Set the new nodes next to the current head (will be null if empty)
    newNode.next = this.head;
    
    // Set the head to the new node;
    this.head = newNode;

    // If this is the first node then set the tail
    if(this.length === 0) this.tail = this.head;

    // Increase the length
    this.length++;

    // Return the LL
    return this;
  };

  public removeFirst = (): INode<T> | null  => {
    // If ths LL is empty return null
    if(!this.head) return null;

    // Store the current head to return it
    const tempHead = this.head;

    // Set the head to the current heads next node
    this.head = this.head ? this.head.next : null;

    // Decrease the length
    this.length--;

    // If the LL is now empty
    if(this.length === 0) this.tail = null;

    // Return the removed Node
    return tempHead;
  }

  public getFirst = (): INode<T> | null  => {
    return this.head;
  };

  public insertLast = (value: T): LinkedList<T> => {
    // Create a new node for the value
    const newNode = this.createNode(value);

    // If the LL is empty then make the head and tail the same
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    if(this.tail) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  };

  public removeLast = (): INode<T> | null  => {
    // If ths LL is empty return null
    if(!this.tail) return null;

    // Store the current head to return it
    const tempNode = this.tail;

    // If there is only one Node
    if(this.length === 1){
      this.clear();
      return tempNode;
    }

    // Find the node before the last node
    let leader = this.getAt(this.length - 2);

    // If we dont find the previous return null
    if(!leader) return null;

    leader.next = null;

    // Decrease the length
    this.length--;

    // If the LL is now empty
    if(this.length === 0) this.tail = null;
    else this.tail = leader;

    // Return the removed Node
    return tempNode;
  }

  public getLast = (): INode<T> | null  => {
    return this.tail;
  };

  public insertAt(index: number, value: T): LinkedList<T> {
    // If we are adding to the end
    if (index >= this.length) {
      return this.insertLast(value);
    } else if (!index || index === 0){
      return this.insertFirst(value);
    }

    // Create the new Node
    const newNode = this.createNode(value);

    // Get the Node before the insertion spot
    const leader = this.getAt(index - 1);
    
    // If we dont have a leader then insert at the start
    if(!leader) return this.insertFirst(value);

    // Get the Node that is supposed to be after the new Node
    const holdingPointer = leader.next;

    // Insert the new Node
    leader.next = newNode;

    // Link the new Node to the holding pointer
    newNode.next = holdingPointer;

    // Increase the length
    this.length++;

    // Return the LL
    return this;
  }

  public getAt = (index: number): INode<T> | null => {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode? currentNode.next : null;
      counter++;
    }
    return currentNode;
  };

  public removeAt = (index?: number): INode<T> | null  => {
    if(!index || index === 0)  // if we are removing the first item
    {
      return this.removeFirst();
    }
    else if (index >= this.length - 1) // if we are removing the last item
    {
      return this.removeLast();
    }

    // Find the node before the removed node
    let leader = this.getAt(index - 1);

    // If we dont have a leader then return null
    if(!leader) return null;
    
    // Get the node to remove
    let removedNode = leader.next;

    // Remove the Node
    leader.next = leader.next ? leader.next.next : null;

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

  public setValue = (index: number, value: T): LinkedList<T> => {
    const node = this.getAt(index);

    // If we dont find the node return the original LL
    if(!node) return this;

    // Set the value
    node.value = value;

    // Return the LL
    return this;
  };

  public toArray = (): T[] => {
    let array: T[] = [];
    let node = this.head;
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  };

  public fromArray = (values: T[]): LinkedList<T> => {
    values.forEach(val => this.insertFirst(val));
    return this;
  };

  public forEach = (fn: Function): void => {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  private createNode = (value: T): INode<T> => {
    return { value, next: null };
  };
}

export { LinkedList };
