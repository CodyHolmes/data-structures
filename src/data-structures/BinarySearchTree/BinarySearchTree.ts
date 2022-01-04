interface IBinarySearchTree<T> {
  insert(value: T): BinarySearchTree<T>;
  contains(value: T): boolean;
}

interface INode<T> {
  value: T;
  left: INode<T> | null;
  right: INode<T> | null;
}

class BinarySearchTree<T> implements IBinarySearchTree<T> {
  private root: INode<T> | null = null;
  
  public insert = (value: T): BinarySearchTree<T> => {
    const newNode = this.createNode(value);

    // If the BST is empty then make the new node the root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while(true){
      // If there is a duplicate return the current BST and don't insert
      if(value === currentNode.value) return this;

      if(value < currentNode.value)
      {
        if(currentNode.left === null){
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
      else if(value > currentNode.value)
      {
        if(currentNode.right === null){
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  };

  public contains = (value: T): boolean => {
    if(this.root === null) return false;
    let current: INode<T> | null = this.root;

    while(current){
      if(value < current.value){
        current = current.left;
      } else if(value > current.value){
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  };

  private createNode = (value: T): INode<T> => {
    return { value, left: null, right: null };
  };
}

export { BinarySearchTree };
