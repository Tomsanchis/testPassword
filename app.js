function testPassword(str) {
    return str.length >= 12 && typeof(str) === "string";
  }

module.exports = testPassword;