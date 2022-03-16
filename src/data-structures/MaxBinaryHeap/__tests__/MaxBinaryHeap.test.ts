import { MaxBinaryHeap } from '../MaxBinaryHeap';

test('MaxBinaryHeap', () => {
  let myMBH = new MaxBinaryHeap<number>();
  myMBH.insert(41);
  myMBH.insert(39);
  myMBH.insert(33);
  myMBH.insert(18);
  myMBH.insert(27);
  myMBH.insert(12);
  myMBH.insert(55);

  expect(myMBH.values).toEqual([55, 39, 41, 18, 27, 12, 33]);
  const max = myMBH.extractMax();
  expect(max).toBe(55);
  expect(myMBH.values).toEqual([41, 39, 33, 18, 27, 12]);
});
