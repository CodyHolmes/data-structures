interface INode<T> {
  value: T;
  next?: INode<T> | null;
}

class LinkedList<T> {
  // @ts-ignore
  private head: INode<T> = null;
  // @ts-ignore
  private tail: INode<T> = null;
  public length: number = 0;

  public add = (value: T, index?: number): LinkedList<T> => {
    if (index) {
      return this.insert(index, value);
    }

    const newNode = this.createNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    // @ts-ignore
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  };

  public addFirst = (value: T): LinkedList<T> => {
    const newNode = this.createNode(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  };

  public get = (index: number): INode<T> => {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      // @ts-ignore
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  };

  public peek = (): INode<T> => {
    return this.head;
  };

  public peekFirst = (): INode<T> => {
    return this.peek();
  };

  public peekLast = (): INode<T> => {
    return this.tail;
  };

  public pop = (): INode<T> => {
    let leader = this.get(this.length - 2);
    let popped = leader.next;
    this.tail = leader;
    this.tail.next = null;
    this.length--;
    // @ts-ignore
    return popped;
  };

  public remove = (index: number): LinkedList<T> => {
    if (index >= this.length) {
      this.pop();
      return this;
    }

    let leader = this.get(index - 1);
    leader.next = leader.next ? leader.next.next : null;
    this.length--;
    return this;
  };

  public setValue = (index: number, value: T): LinkedList<T> => {
    const node = this.get(index);
    node.value = value;
    return this;
  };

  public toArray = (): T[] => {
    let array: T[] = [];
    let node = this.head;
    while (node) {
      array.push(node.value);
      // @ts-ignore
      node = node.next;
    }
    return array;
  };

  public fromArray = (values: T[]): LinkedList<T> => {
    values.forEach(val => this.add(val));
    return this;
  };

  public isEmpty = () => !this.head;

  public size = () => this.length;

  private insert(index: number, value: T): LinkedList<T> {
    if (index >= this.length) {
      return this.add(value);
    }

    const newNode = this.createNode(value);
    const leader = this.get(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  private createNode = (value: T): INode<T> => {
    return { value, next: null };
  };
}

export { LinkedList };
