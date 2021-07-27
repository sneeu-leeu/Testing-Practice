const subtract = require("./calculator");


describe("Calculator Functions,Add", () => {
  test("Add Numbers", () => {
    expect(subtract(1, 4)).toBe(-3);
  });

  test("Subtract Numbers", () => {
    expect(subtract(5, 4)).toBe(1);
  });

  test("multiply Numbers", () => {
    expect(subtract(5, 11)).toBe(-6);
  });
});

