const removeLastNumber = require('../pure.js')

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