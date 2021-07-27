const reverseStr = require('./reverse_str.js');

it("Returns string returned", () => {
  expect(reverseStr("Hello")).toBe("olleH");
});