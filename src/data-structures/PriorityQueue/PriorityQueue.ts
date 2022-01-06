interface IPriorityQueue<T> {
  enqueue(value: T, priority: number): void;
  dequeue(): T | null;
}

interface INode<T> {
  value: T;
  priority: number;
}

class PriorityQueue<T> implements IPriorityQueue<T> {
  public values: Array<INode<T>> = [];
  
  public enqueue = (value: T, priority: number): void => {
    const newNode = this.createNode(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  };
  
  public dequeue = (): T | null => {
    if(this.values.length === 0) return null;
    const min = this.values[0];
    const end = this.values.pop();

    if(end === undefined) return null;

    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }

    return min.value;
  }

  private bubbleUp = (): void => {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];

      // Change for max binary heap
      if(element.priority >= parent.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  };

  private sinkDown = (): void => {
    let idx = 0;
    let length = this.values.length;
    const element = this.values[0];
    while(true){
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];

        // Change for max binary heap
        if(leftChild.priority < element.priority){
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild.priority < element.priority) || // Change for max binary heap
          (swap !== null && leftChild && rightChild.priority < leftChild.priority) // Change for max binary heap
        ) {
          swap = rightChildIdx;
        }
      }

      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  };

  private createNode = (value: T, priority: number): INode<T> => {
    return { value, priority };
  };
}

export { PriorityQueue };
