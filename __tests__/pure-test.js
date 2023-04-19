const {removeLastNumber, raiseSalaries, updateTasks, cloneObject} = require('../pure.js');

describe('removeLastNumber', () => {
    test('returns a new array', () => {
    const input = [1, 2, 3];
    const returnValue = removeLastNumber(input);
    expect(input).not.toBe(returnValue);
  });
  test('does not mutate the input array', () => {
    const input = ['a', 'b', 'c'];
    removeLastNumber(input);
    expect(input).toEqual(['a', 'b', 'c']);
  });
  test('returns array with last number removed', () => {
    const result = removeLastNumber([1, 2, 3, 4]);
    expect(result).toEqual([1, 2, 3]);
  });
});

describe('raiseSalaries', () => {
  test('returns a new array', () => {
    const input = [{ name: "Alice", salary: 3000 }, 
                  { name: "Bob", salary: 2000 }, 
                  { name: "Vel", salary: 4500 }];
    const returnValue = raiseSalaries(input, 10);
    expect(input).not.toBe(returnValue);
  });
  test('does not mutate the input array', () => {
    const input = [{ name: "Alice", salary: 3000 }, 
                  { name: "Bob", salary: 2000 }, 
                  { name: "Vel", salary: 4500 }];
    raiseSalaries(input, 0);
    expect(input).toEqual([{ name: "Alice", salary: 3000 }, 
                          { name: "Bob", salary: 2000 }, 
                          { name: "Vel", salary: 4500 }]);
  });
  test('when passed an array and 0 for the increase returns a new array with same values', () => {
    const result = raiseSalaries([{ name: "Alice", salary: 3000 }, 
    { name: "Bob", salary: 2000 }, 
    { name: "Vel", salary: 4500 }], 0);
    expect(result).toEqual([{ name: "Alice", salary: 3000 }, 
    { name: "Bob", salary: 2000 }, 
    { name: "Vel", salary: 4500 }]);
  });
  test('when passed an array with one employee correctly increases the salary', () => {
    const result = raiseSalaries([{ name: "Alice", salary: 3000 }], 10);
    expect(result).toEqual([{ name: 'Alice', salary: 3300 }]);
  });
  test('when passed an array with multiple employees correctly increases all their salaries', () => {
    const result = raiseSalaries([{ name: "Alice", salary: 3000 }, 
    { name: "Bob", salary: 2000 }, 
    { name: "Vel", salary: 4500 }], 10);
    expect(result).toEqual([  { name: 'Alice', salary: 3300 }, 
    { name: 'Bob', salary: 2200 }, 
    { name: 'Vel', salary: 4950 } ]);
  });
});

describe('updateTasks', () => {
  test('returns a new object', () => {
    const input = { name: "Jessica", tasks: ["read book"]};
    const returnValue = updateTasks(input);
    expect(input).not.toBe(returnValue);
  });
  test('does not mutate the input object', () => {
    const input = { name: "Jessica", tasks: ["read book"]};
    updateTasks(input);
    expect(input).toEqual({ name: "Jessica", tasks: ["read book"]});
  });
  test('adds one task to person object correctly', () => {
    const result = updateTasks({name: "Jessica", tasks: ["read book"]}, "make dinner");
    expect(result).toEqual({name: "Jessica", tasks: ["read book", "make dinner"]})
  });
  test('adds one more task to person object that already has multiple tasks', () => {
    const result = updateTasks({name: "Jessica", tasks: ["read book", "make dinner", "hang laundry"]}, "eat chocolate");
    expect(result).toEqual({name: "Jessica", tasks: ["read book", "make dinner", "hang laundry", "eat chocolate"]})
  });
  test('adds multiple tasks to person object correctly', () => {
    const result = updateTasks({name: "Jessica", tasks: ["read book"]}, "make dinner", "hang laundry", "eat chocolate", "sleep");
    expect(result).toEqual({name: "Jessica", tasks: ["read book", "make dinner", "hang laundry", "eat chocolate", "sleep"]})
  });
});

describe('cloneObject', () => {
  test('object returned is the same as the target object', () => {
    const input = { a: 1, b: 2 };
    const returnValue = cloneObject(input);
    expect(input).toBe(returnValue);
  });
  test('target object has extra property added from single source object', () => {
    const target = { a: 1, b: 2 };
    const source = { c: 5 };
    const result = cloneObject(target, source);
    expect(result).toEqual({ a: 1, b: 2, c: 5 });
  });
  test('target object has existing property modified to match property in source object', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 5 };
    const result = cloneObject(target, source);
    expect(result).toEqual({ a: 1, b: 5 });
  });
  test('target object modifies existing properties when changed and adds on extra properties', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 5, c: 4 };
    const result = cloneObject(target, source);
    expect(result).toEqual({ a: 1, b: 5, c: 4 });
  })
});