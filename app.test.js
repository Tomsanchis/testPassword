const testPassword = require('./app');

test('test string return true', () => {
  expect(testPassword("string")).toBe(false);
});

test('test string > 12', () => {
    expect(testPassword("stringqsdqsdqsdsd")).toBe(true);
});