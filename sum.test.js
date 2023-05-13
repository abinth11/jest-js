const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 5)).toBe(4);
//   expect(addNumbers(0, 0)).toBe(10); // Intentional failure
});