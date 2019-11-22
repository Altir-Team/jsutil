const { MathMethods } = require('../util/Constants');
const evil = require('./eval');
const type = require('./type');

function calculate(cond) {
    let res = [];
    cond = cond.split(' ');
    for (let symbol of cond) {
        if (MathMethods.includes(symbol.replace(/\(.+\)/, ''))) {
            let indexOfMethod = MathMethods.indexOf(symbol.replace(/\(.+\)/, ''));
            let method = Math[MathMethods[indexOfMethod]];
            let matched = symbol.match(/\((.+)\)/)

            type(method)[1] == 'function'? res.push(`Math.${method.name}(${matched[1]})`): res.push(method)
        } else {
            res.push(symbol)
        }
    }
    try {
        let calculated = evil.safe(res.join(' '))
        return Number(calculated)
    } catch (e) {
        return NaN
    }
}

module.exports = calculate
