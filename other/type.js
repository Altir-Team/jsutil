const { types } = require('../util/Constants');
const util = require('util');

function type(obj) {
      if (Array.isArray(obj)) return [Array, 'array']
      for (let type of types) {
          if (util.types[`is${type}`] && util.types[`is${type}`](obj)) {
              try {
                  return [eval(type), type]
              } catch (err) {
                  return [type, type]
              }
          }
          // if (typeof obj == 'function' && typeof obj() == type) return [obj, type]
          if (typeof obj == type) return [eval(type.replace(type[0], type[0].toUpperCase())), type]
          if (!obj && !type) return [obj, obj]
      }
}

module.exports = type
