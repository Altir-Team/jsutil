const { Global_Objects_manual } = require('../util/Constants');
const type = require('../other/type');

function argumentTypeError(n, fn) {
  //  if (type(fn)[1] != 'function' || type(fn)[1] != 'array') return //argumentTypeError(2, [Function, Array])
    if (type(fn)[1] == 'array') {
        let err = `${n}st argument must be a `
        err += fn.filter(f => typeof f == 'function').map(x => x.name).join(', ')
        return TypeError(err)
    } else {
        return TypeError(`${n}st argument must be a ${fn.name} (${Global_Objects_manual + fn.name})`)
    }
}

module.exports = argumentTypeError
