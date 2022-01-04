import { Queue } from '../Queue';

test('Queue', () => {

  let myQueue = new Queue<number>();
  myQueue.enqueue(5);
  myQueue.enqueue(15);
  myQueue.enqueue(10);
  myQueue.enqueue(1);
  // 5 -> 15 -> 10 -> 1

  // Test the order
  const tests = [5, 15, 10, 1];
  for(let i = 0; i < tests.length; i++){
    const currentTest = tests[i];
    expect(myQueue.dequeue()).toBe(currentTest);
  }

  // Refill
  myQueue.enqueue(5);
  myQueue.enqueue(15);
  myQueue.enqueue(10);
  myQueue.enqueue(1);

  myQueue.clear();
  expect(myQueue.isEmpty()).toBe(true);
  expect(myQueue.size()).toBe(0);
});