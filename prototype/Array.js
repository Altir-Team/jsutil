const isEqual = require('../array/isEqual');

Array.prototype.isEqual = function(arr = []) {
    if (arr instanceof Array) {
        if (this.length != arr.length) return false
        for (let i = 0; i < this.length; i++) {
            if (!isEqual(this[i], arr[i])) return false
        }
        return true
    } else {
        return this == arr
    }
}

module.exports = Array
