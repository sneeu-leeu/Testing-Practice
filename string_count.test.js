const stringLength = require('./string_count');

test('should return length of string', () => {
  expect(stringLength('Three')).toBe(5);
});

test('should throw errors if smaller than 1 larger than 10', () => {
  expect(stringLength('')).toBe("One or More please");
  expect(stringLength('12345678910')).toBe("10 or Less Please");
});


