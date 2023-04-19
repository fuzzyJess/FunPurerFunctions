const { removeLastNumber, raiseSalaries, updateTasks, cloneObject, 
        calculateConfectioneryCosts, map, multiplyByFive, filter, higherThanFive, slice } = require('../pure.js');

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
  });
  test('target object modified correctly when passed multiple source objects', () => {
    const target = { a: 1, b: 2 };
    const source1 = { b: 5, c: 4 };
    const source2 = { d: 3 };
    const result = cloneObject(target, source1, source2);
    expect(result).toEqual({ a: 1, b: 5, c: 4, d: 3 });
  });
});

describe('calculateConfectioneryCosts', () => {
  test('returns a new array', () => {
    const input = [{ name: "Beyonce Bowls", yearlyCumulativeSpend: "£44", purchaseToday: { item: "White mice", costPerItem: "£3", amountBought: 17 }}];
    const returnValue = calculateConfectioneryCosts(input);
    expect(input).not.toBe(returnValue);
  });
  test('does not mutate the input array', () => {
    const input = [{ name: "Beyonce Bowls", yearlyCumulativeSpend: "£44", purchaseToday: { item: "White mice", costPerItem: "£3", amountBought: 17 }}];
    calculateConfectioneryCosts(input);
    expect(input).toEqual([{ name: "Beyonce Bowls", yearlyCumulativeSpend: "£44", purchaseToday: { item: "White mice", costPerItem: "£3", amountBought: 17 }}]);
  });
  test('correctly updates yearlyCumulativeSpend when passed an array containing one celebrity', () => {
    const input = [{ name: "Beyonce Bowls", yearlyCumulativeSpend: "£44", purchaseToday: { item: "White mice", costPerItem: "£3", amountBought: 17 }}];
    result = calculateConfectioneryCosts(input);
    expect(result).toEqual([{ name: "Beyonce Bowls", yearlyCumulativeSpend: "£95"}]);
  });
  test('correctly updates all yearlyCumulativeSpends when passed an array with multiple celebrities', () => {
    const input = [ 
      { name: "Beyonce Bowls", yearlyCumulativeSpend: "£44", purchaseToday: { item: "White mice", costPerItem: "£3", amountBought: 17 } }, 
      { name: "Kray-Z", yearlyCumulativeSpend: "£28", purchaseToday: { item: "Flying saucers", costPerItem: "£2", amountBought: 28 } }, 
      { name: "Matey Terry", yearlyCumulativeSpend: "£36", purchaseToday: { item: "Cola bottles", costPerItem: "£4", amountBought: 81 } }, 
      { name: "Justine Klimberbake", yearlyCumulativeSpend: "£30", purchaseToday: { item: "Giant jelly snakes", costPerItem: "£103", amountBought: 2 } } ];
      result = calculateConfectioneryCosts(input);
    expect(result).toEqual([
      { name: 'Beyonce Bowls', yearlyCumulativeSpend: '£95' },
      { name: 'Kray-Z', yearlyCumulativeSpend: '£84' },
      { name: 'Matey Terry', yearlyCumulativeSpend: '£360' },
      { name: 'Justine Klimberbake', yearlyCumulativeSpend: '£236' }
    ]);
  });
});

describe('map', () => {
  test('returns a new array', () => {
    const input = [1, 2, 3];
    const returnValue = map(input, multiplyByFive);
    expect(input).not.toBe(returnValue);
  });
  test('does not mutate the input array', () => {
    const input = [1, 2, 3];
    map(input, multiplyByFive);
    expect(input).toEqual([1, 2, 3]);
  });
  test('returns new array with one number correctly changed', () => {
    const input = [1];
    result = map(input, multiplyByFive);
    expect(result).toEqual([5]);
  });
  test('returns new array containing multiple values correctly changed', () => {
    const input = [1, 2, 3];
    result = map(input, multiplyByFive);
    expect(result).toEqual([5, 10, 15]);
  });
});

describe('filter', () => {
  test('returns a new array', () => {
    const input = [4, 5, 6];
    const returnValue = filter(input, higherThanFive);
    expect(input).not.toBe(returnValue);
  });
  test('does not mutate the input array when containing primative data types', () => {
    const input = [4, 5, 6];
    filter(input, higherThanFive);
    expect(input).toEqual([4, 5, 6]);
  });
  test('correctly filters values in array', () => {
    const input = [4, 5, 6];
    result = filter(input, higherThanFive);
    expect(result).toEqual([6]);
    const input2 = [3, 29, 5, 12, 6];
    result2 = filter(input2, higherThanFive);
    expect(result2).toEqual([29, 12, 6]);
  });
});

describe('slice', () => {
  test('returns a new array', () => {
    const input = [4, 5, 6];
    const returnValue = slice(input, 1);
    expect(input).not.toBe(returnValue);
  });
  test('does not mutate the input array', () => {
    const input = [4, 5, 6];
    slice(input, 1);
    expect(input).toEqual([4, 5, 6]);
  });
  test('returns rest of array from start index', () => {
    const input = [4, 5, 6];
    result = slice(input, 1);
    expect(result).toEqual([5, 6]);
  });
  test('returns array from start index to (and not including) end index', () => {
    const input = [4, 5, 6];
    result = slice(input, 1, 3);
    expect(result).toEqual([5]);
  });
});