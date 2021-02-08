const lib = require("../lib");

// describe("absolute", () => {
//   it("should return a positive number if input is positive", () => {
//     const result = lib.absolute(1);
//     expect(result).toBe(1);
//   });

//   it("should return a positive number is the input is negative", () => {
//     const result = lib.absolute(-1);
//     expect(result).toBe(1);
//   });

//   it("should return 0 if the input is zero", () => {
//     const result = lib.absolute(0);
//     expect(result).toBe(0);
//   });
// });

describe("greet", () => {
  it("Should return Welcome Hamed", () => {
    const result = lib.greet("Hamed");
    expect(result).toMatch(/Hamed/);
  });
});
