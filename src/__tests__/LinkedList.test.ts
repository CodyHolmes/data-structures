import { LinkedList } from '../';

test('Linked List', () => {
  let myLinkedList = new LinkedList<number>();
  myLinkedList.add(5);
  myLinkedList.add(15);
  myLinkedList.add(10, 1);
  myLinkedList.addFirst(1);

  expect(myLinkedList.get(0).value).toBe(1);
  expect(myLinkedList.get(1).value).toBe(5);
  expect(myLinkedList.get(2).value).toBe(10);
  expect(myLinkedList.get(3).value).toBe(15);
  expect(myLinkedList.peek().value).toBe(1);
  expect(myLinkedList.peekLast().value).toBe(15);
  expect(myLinkedList.pop().value).toBe(15);
  expect(myLinkedList.pop().value).toBe(10);
  myLinkedList.add(10);
  myLinkedList.add(15);
  myLinkedList.remove(1);
  expect(myLinkedList.get(1).value).toBe(10);
  myLinkedList.setValue(1, 2);
  expect(myLinkedList.get(1).value).toBe(2);
  expect(myLinkedList.isEmpty()).toBe(false);
  expect(myLinkedList.size()).toBe(3);
});
