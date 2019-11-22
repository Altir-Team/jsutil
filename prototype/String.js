String.prototype.chunk = function(n) {
    return this.match(RegExp(`.{0,${n}}`, 'g')).slice(0, -1)
}

module.exports = String
