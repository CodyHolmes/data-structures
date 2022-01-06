interface IMaxBinaryHeap<T> {
  insert(value: T): void;
  extractMax(): T | null;
}

class MaxBinaryHeap<T> implements IMaxBinaryHeap<T> {
  public values: Array<T> = [];
  
  public insert = (value: T): void => {
    this.values.push(value);
    this.bubbleUp();
  };
  
  public extractMax = (): T | null => {
    if(this.values.length === 0) return null;
    const max = this.values[0];
    const end = this.values.pop();

    if(end === undefined) return null;

    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  private bubbleUp = (): void => {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];

      if(element <= parent) break;

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
        if(leftChild > element){
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild > element) || 
          (swap !== null && leftChild && rightChild > leftChild)
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
}

export { MaxBinaryHeap };
