const testPassword = require('./app');

test('test string return true', () => {
  expect(testPassword("string")).toBe(false);
});

test('test string > 12', () => {
    expect(testPassword("stringqsdqsdqsdsd")).toBe(true);
});

test('test string f is not string return null', () => {
    expect(testPassword(1)).toBeNull();
  });