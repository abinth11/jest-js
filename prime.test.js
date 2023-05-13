const prime = require("./prime");
test("prime number or not ", () => {
  expect(prime(2)).toBe(true);
  expect(prime(5)).toBe(true);
  expect(prime(10)).toBe(false);
  expect(prime(15)).toBe(false);
});
