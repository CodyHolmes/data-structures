import { PriorityQueue } from '../PriorityQueue';

test('PriorityQueue', () => {
  let hospital = new PriorityQueue<string>();
  hospital.enqueue("Lowest Priority", 5);
  hospital.enqueue("High Priority", 2);
  hospital.enqueue("Low Priority", 4);
  hospital.enqueue("Highest Priority", 1);

  expect(hospital.values).toEqual([
    { value: 'Highest Priority', priority: 1 },
    { value: 'High Priority', priority: 2 },
    { value: 'Low Priority', priority: 4 },
    { value: 'Lowest Priority', priority: 5 }
  ]);
  const max = hospital.dequeue();  
  expect(max).toBe("Highest Priority");

  hospital.enqueue("Highest Priority Again", 1);

  expect(hospital.values).toEqual([
    { value: 'Highest Priority Again', priority: 1 },
    { value: 'High Priority', priority: 2 },
    { value: 'Low Priority', priority: 4 },
    { value: 'Lowest Priority', priority: 5 }
  ]);

  hospital.enqueue("Middle Priority", 3);

  expect(hospital.values).toEqual([
    { value: 'Highest Priority Again', priority: 1 },
    { value: 'High Priority', priority: 2 },
    { value: 'Low Priority', priority: 4 },
    { value: 'Lowest Priority', priority: 5 },
    { value: 'Middle Priority', priority: 3 }
  ]);
  hospital.dequeue();  
  hospital.dequeue();  
  const three = hospital.dequeue();  
  expect(three).toBe("Middle Priority");

});