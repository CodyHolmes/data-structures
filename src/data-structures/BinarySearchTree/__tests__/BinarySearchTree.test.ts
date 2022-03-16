import { BinarySearchTree } from '../BinarySearchTree';

test('BinarySearchTree', () => {
  let myBST = new BinarySearchTree<number>();
  myBST.insert(10);
  myBST.insert(15);
  myBST.insert(5);
  myBST.insert(1);
  myBST.insert(6);
  myBST.insert(14);
  myBST.insert(20);
  //---------10---------
  //-----5-------15-----
  //---1---6---14--20---

  myBST.contains(20);
});
