interface IQueue<T> {
  enqueue(value: T): void;
  dequeue(): T | null;
  clear() : void;
  isEmpty(): boolean;
  size(): number;
}

interface INode<T> {
  value: T;
  next: INode<T> | null;
}

class Queue<T> implements IQueue<T> {
  private first: INode<T> | null = null;
  private last: INode<T> | null = null;
  public length: number = 0;
  
  public enqueue = (value: T): number => {
    const newNode = this.createNode(value);

    // If the Queue is empty then make the head and tail the same
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
      return this.length;
    }

    // Enqueue new value
    if(this.last) this.last.next = newNode;
    this.last = newNode;
    return ++this.length;
  };

  public dequeue = (): T | null => {
    if(!this.first) return null;
    const temp = this.first;

    // if we are removing the last item in the Queue
    if(this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.length--;
    return temp.value
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

export { Queue };
