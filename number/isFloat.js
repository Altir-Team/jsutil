const type = require('../other/type');

function isFloat(n) {
    if (type(n)[1] != 'number') return;
    return !(n % 1 === 0)
}

module.exports = isFloat
