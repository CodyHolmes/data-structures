import { LinkedList } from '../LinkedList';

test('Linked List', () => {

  let myLinkedList = new LinkedList<number>();
  myLinkedList.insertLast(5);
  myLinkedList.insertLast(15);
  myLinkedList.insertAt(1, 10);
  myLinkedList.insertFirst(1);
  // 1 -> 5 -> 10 -> 15

  const tests = [[0, 1], [1, 5], [2, 10], [3, 15]];
  for(let i = 0; i < tests.length; i++){
    const currentTest = tests[i];
    const currentIndex = currentTest[0];
    const currentValue = currentTest[1];
    let node = myLinkedList.getAt(currentIndex);
    expect( node ? node.value : null).toBe(currentValue);
  }

  const peekNode = myLinkedList.getFirst();
  expect(peekNode ? peekNode.value : null).toBe(1);

  const peekLast = myLinkedList.getLast();
  expect(peekLast ? peekLast.value : null).toBe(15);

  const popOne = myLinkedList.removeLast();
  expect(popOne ? popOne.value : null).toBe(15);

  const popTwo = myLinkedList.removeFirst();
  expect(popTwo ? popTwo.value : null).toBe(1);

  myLinkedList.insertFirst(1);
  myLinkedList.insertLast(15);
  myLinkedList.removeAt(1);
  
  const getOne = myLinkedList.getAt(1);
  expect(getOne ? getOne.value : null).toBe(10);

  myLinkedList.setValue(1, 2);

  const getOneAgain = myLinkedList.getAt(1);
  expect(getOneAgain ? getOneAgain.value : null).toBe(2);

  expect(myLinkedList.isEmpty()).toBe(false);
  expect(myLinkedList.size()).toBe(3);
  
  myLinkedList.setValue(2, 34);

  let newSetNode = myLinkedList.getAt(2);
  expect( newSetNode ? newSetNode.value : null).toBe(34);

  myLinkedList.clear();
  expect(myLinkedList.isEmpty()).toBe(true);
  expect(myLinkedList.size()).toBe(0);
});