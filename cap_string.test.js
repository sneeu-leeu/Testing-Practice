const capitalString = require('./cap_string');

test('Capatilise the first letter of a string', () => {
  expect(capitalString('start')).toBe("Start");
});