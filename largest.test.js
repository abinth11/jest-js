const findLargestNumber = require('./largest')
test('Finding the largest number', () => {
    // Positive test cases
    expect(findLargestNumber([1, 5, 3, 9, 2])).toBe(9);
    expect(findLargestNumber([-1, -5, -3, -9, -2])).toBe(-1);
    expect(findLargestNumber([0, 0, 0, 0])).toBe(0);
  
    // Edge case: single element array
    expect(findLargestNumber([42])).toBe(42);
    
    // Negative test cases
    expect(() => findLargestNumber()).toThrow('Input must be an array');
    expect(() => findLargestNumber('not an array')).toThrow('Input must be an array');
    expect(() => findLargestNumber([])).toThrow('Input array cannot be empty');
  });