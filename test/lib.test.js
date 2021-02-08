const lib = require("../lib");

test("absolute - should return a positive number if input is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

test("absolute - should return a positive number is the input is negative", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});

test("absolute - should return 0 if the input is zero", () => {
  const result = lib.absolute(1);
  expect(result).toBe(0);
});
