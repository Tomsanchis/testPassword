const testPassword = require('./app');

test('test valid', () => {
  expect(testPassword("string")).toBe(true);
});