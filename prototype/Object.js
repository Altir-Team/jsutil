const vm = require('vm');

Object.prototype.safeEval = function(toEval, sb = {}) {
    vm.createContext(sb)
    return vm.runInContext(toEval, sb);
}

Object.prototype.asyncEval = function(toEval) {
    return new Function(`(async () => ${toEval})`)()
}

Object.prototype.evil = function(toEval) {
    'use strict';
    return eval(toEval)
}

module.exports = Object
