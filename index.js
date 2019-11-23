let utils = {
    isEqual: require('./array/isEqual'),
    isFloat: require('./number/isFloat'),
    Parser: require('./string/parser'),
    chunk: require('./string/chunk'),
    capsTest: require('./string/capsTest'),
    protocol: require('./web/protocol'),
    argumentTypeError: require('./error/argumentTypeError'),
    sleep: require('./loop/sleep'),
    calculate: require('./other/calculate'),
    type: require('./other/type'),
    CLI: require('./other/CLI'),
    eval: require('./other/eval')
}

module.exports = utils;
