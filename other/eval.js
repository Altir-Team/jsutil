const vm = require('vm');

function safeEval(toEval, sb = {}) {
    vm.createContext(sb)
    return vm.runInContext(toEval, sb);
}

function asyncEval(toEval) {
    return new Function(`(async () => ${toEval})`)()
}

function evil(toEval) {
    'use strict';
    return eval(toEval)
}

module.exports = Object.assign(evil, {
    safe: safeEval,
    async: asyncEval
})
