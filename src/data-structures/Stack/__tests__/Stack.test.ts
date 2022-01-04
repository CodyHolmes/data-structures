import { Stack } from '../Stack';

test('Stack', () => {

  let myStack = new Stack<number>();
  myStack.push(5);
  myStack.push(15);
  myStack.push(10);
  myStack.push(1);
  // 1 -> 10 -> 15 -> 5

  expect(myStack.peek()).toBe(1);

  const tests = [[0, 1], [1, 10], [2, 15], [3, 5]];
  for(let i = 0; i < tests.length; i++){
    const currentTest = tests[i];
    const currentIndex = currentTest[0];
    const currentValue = currentTest[1];
    expect(myStack.pop()).toBe(currentValue);
  }

  expect(myStack.peek()).toBe(null);

  myStack.clear();
  expect(myStack.isEmpty()).toBe(true);
  expect(myStack.size()).toBe(0);
});