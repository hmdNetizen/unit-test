const lib = require("../lib");

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number is the input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if the input is zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("Should return Welcome Hamed", () => {
    const result = lib.greet("Hamed");
    expect(result).toMatch(/Hamed/);
  });
});

describe("getCurrencies", () => {
  it("Should return an array of currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["AUD", "USD", "EUR"]));
  });
});

describe("getProductDetails", () => {
  it("should return the product with the specified id and price", () => {
    const result = lib.getProductDetails(1);

    expect(result).toMatchObject({ id: 1, price: 10 });

    expect(result).toHaveProperty("id", 1);
  });
});

describe("registerUser", () => {
  it("should throw an error is username is false", () => {
    expect(() => {
      lib.registerUser(null).toThrow();
    });
  });

  it("should return an object if the username is true", () => {
    const result = lib.registerUser("Hamed");
    expect(result).toMatchObject({ username: "Hamed" });
    expect(result.id).toBeGreaterThan(0);
  });
});
