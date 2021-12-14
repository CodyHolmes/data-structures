import { DoublyLinkedList } from '../';

test('Doubly Linked List', () => {
  let myLinkedList = new DoublyLinkedList<number>();
  myLinkedList.add(5);
  myLinkedList.add(15);
  myLinkedList.add(10, 1);
  myLinkedList.addFirst(1);
  // 1 -> 5 -> 10 -> 15

  const tests = [[0, 1], [1, 5], [2, 10], [3, 15]];
  for(let i = 0; i < tests.length; i++){
    const currentTest = tests[i];
    const currentIndex = currentTest[0];
    const currentValue = currentTest[1];

    let node = myLinkedList.get(currentIndex);
    expect( node ? node.value : null).toBe(currentValue);
  }

  const peekNode = myLinkedList.peek();
  expect(peekNode ? peekNode.value : null).toBe(1);

  const peekLast = myLinkedList.peekLast();
  expect(peekLast ? peekLast.value : null).toBe(15);

  const popOne = myLinkedList.pop();
  expect(popOne ? popOne.value : null).toBe(15);

  const popTwo = myLinkedList.pop();
  expect(popTwo ? popTwo.value : null).toBe(10);

  myLinkedList.add(10);
  myLinkedList.add(15);
  myLinkedList.remove(1);
  
  const getOne = myLinkedList.get(1);
  expect(getOne ? getOne.value : null).toBe(10);

  myLinkedList.setValue(1, 2);

  const getOneAgain = myLinkedList.get(1);
  expect(getOneAgain ? getOneAgain.value : null).toBe(2);

  expect(myLinkedList.isEmpty()).toBe(false);
  expect(myLinkedList.size()).toBe(3);
});
