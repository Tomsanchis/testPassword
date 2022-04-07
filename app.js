function testPassword(str) {
    if (typeof str !== 'string') {
        return null;
    }
    return str.length >= 12;
  }

module.exports = testPassword;