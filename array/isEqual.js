function isEqual(arr1 = [], arr2 = []) {
    if (arr1 instanceof Array && arr2 instanceof Array) {
        if (arr1.length != arr2.length) return false
        for (let i = 0; i < arr1.length; i++) {
            if (!isEqual(arr1[i], arr2[i])) return false
        }
        return true
    } else {
        return arr1 == arr2
    }
}

module.exports = isEqual
