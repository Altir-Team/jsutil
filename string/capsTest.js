function capsTest(str, max) {
      for (let i = 0; i < str.length; i++) {
          if (str[i] == str[i].toUpperCase() && i == max) return true
      }
      return false
}

module.exports = capsTest
