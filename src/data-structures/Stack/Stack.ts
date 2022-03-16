interface IStack<T> {
  push(value: T): void;
  pop(): T | null;
  peek(): T | null;
  clear(): void;
  isEmpty(): boolean;
  size(): number;
}

interface INode<T> {
  value: T;
  next: INode<T> | null;
}

class Stack<T> implements IStack<T> {
  private first: INode<T> | null = null;
  private last: INode<T> | null = null;
  public length: number = 0;

  public push = (value: T): number => {
    const newNode = this.createNode(value);

    // If the stack is empty make last node the same as the first
    if (!this.first) {
      this.last = newNode;
    }

    newNode.next = this.first;
    this.first = newNode;
    return ++this.length;
  };

  public pop = (): T | null => {
    if (!this.first) return null;
    const temp = this.first;

    // if we are removing the last item
    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.length--;
    return temp.value;
  };

  public peek = (): T | null => {
    if (!this.first) return null;
    return this.first.value;
  };

  public clear = (): void => {
    this.first = null;
    this.last = null;
    this.length = 0;
  };

  public isEmpty = () => !this.first;

  public size = () => this.length;

  private createNode = (value: T): INode<T> => {
    return { value, next: null };
  };
}

export { Stack };
