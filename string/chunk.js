const type = require('../other/type');
const argumentTypeError =  require('../error/argumentTypeError');

function chunk(str, n) {
    if (type(str)[1] != 'string') return argumentTypeError('1 and 2', [String, Number])
    return str.match(RegExp(`.{0,${n}}`, 'g')).slice(0, -1)
}

module.exports = chunk
