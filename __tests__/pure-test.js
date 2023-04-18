const {removeLastNumber, raiseSalaries} = require('../pure.js');

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