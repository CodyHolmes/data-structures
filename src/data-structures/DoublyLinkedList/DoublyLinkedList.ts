interface INode<T> {
  value: T;
  next?: INode<T> | null | undefined;
  prev?: INode<T> | null | undefined;
}

class DoublyLinkedList<T> {
  private head: INode<T> | null | undefined = null;
  private tail: INode<T> | null | undefined = null;
  public length: number = 0;

  public add = (value: T, index?: number): DoublyLinkedList<T> => {
    // If we want to add a value not at the end of the DLL
    if (index) {
      return this.insert(index, value);
    }

    // Create a new node for the value
    const newNode = this.createNode(value);

    // If the DLL is empty then make the head and tail the same
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    if(this.tail) this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  };

  public addFirst = (value: T): DoublyLinkedList<T> => {
    const newNode = this.createNode(value);

    // If we have a current head then set its prev to the new node
    if(this.head) this.head.prev = newNode;

    // Set the new nodes next to the current head
    newNode.next = this.head;

    // Make the current head the new node
    this.head = newNode;

    // Increase the length
    this.length++;

    // Return the DLL
    return this;
  };

  public get = (index: number): INode<T> | null | undefined => {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode? currentNode.next : null;
      counter++;
    }
    return currentNode;
  };

  public peek = (): INode<T> | null | undefined => {
    return this.head;
  };

  public peekFirst = (): INode<T> | null | undefined => {
    return this.peek();
  };

  public peekLast = (): INode<T> | null | undefined => {
    return this.tail;
  };

  public pop = (): INode<T> | null | undefined => {
    if(!this.head) return undefined;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
      this.length = 0;
      return undefined;
    }

    let poppedNode = this.tail;
    this.tail = poppedNode ? poppedNode.prev : null;
    if(this.tail) this.tail.next = null;
    this.length--;
    return poppedNode;
  };

  public remove = (index?: number): DoublyLinkedList<T> => {
    if(!index || index === 0)  // if we are removing the first item
    {
      this.head = this.head ? this.head.next : null;
      if(this.head) this.head.prev = null;
      return this;
    }
    else if (index >= this.length) // if we are removing the last item
    {
      this.pop();
      return this;
    }

    let leader = this.get(index - 1);

    if(!leader) return this;
    
    let removedNode = leader.next;
    if(removedNode)
      if(removedNode.next) removedNode.next.prev = leader;
    
    leader.next = leader.next ? leader.next.next : null;

    this.length--;
    return this;
  };

  public setValue = (index: number, value: T): DoublyLinkedList<T> => {
    const node = this.get(index);
    if(node) node.value = value;
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

  public fromArray = (values: T[]): DoublyLinkedList<T> => {
    values.forEach(val => this.add(val));
    return this;
  };

  public isEmpty = () => !this.head;

  public size = () => this.length;

  private insert(index: number, value: T): DoublyLinkedList<T> {
    if (index >= this.length) {
      return this.add(value);
    }

    const newNode = this.createNode(value);
    const leader = this.get(index - 1);

    if(!leader) return this.addFirst(value);

    const holdingPointer = leader.next;
    if(holdingPointer) holdingPointer.prev = newNode;

    leader.next = newNode;
    newNode.next = holdingPointer;
    newNode.prev = leader;
    this.length++;
    return this;
  }

  private createNode = (value: T): INode<T> => {
    return { value, next: null, prev: null };
  };
}

export { DoublyLinkedList };
