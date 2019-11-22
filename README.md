**JSUtil**
=======
![jsutil_logo](./JSUtil_logo.png)

Available features
========

**Examples**
```js
const jsutil = require('./')

jsutil.isEqual([1, 2, 3], [1, 2, 3])

/*
output: true
type: Boolean
*/

jsutil.isFloat(2)

/*
output: false
type: Boolean
*/

let Parser = new jsutil.Parser()

Parser.format('%0 %1, %2 %3', 'no', 'anime', 'no', 'k-pop');

/*
output: 'no anime, no k-pop'
type: String
*/

Parser.replace('loooooong %var%', {var: 'text'});

/*
output: 'loooooong text'
type: String
*/

jsutil.chunk('hello world', 3)

/*
output: ['hel', 'lo ', 'wor', 'ld']
type: Array
*/

jsutil.capsTest('LOOONG text', 5)

/*
output: true
type: Boolean
*/

jsutil.protocol('ftp://path/to/hell')

/*
output: 'ftp'
type: String
*/

;(async () => {
    for (let i = 0; i < 69; i++) {
         console.log(i)
         await jsutil.sleep(1)
    }
})()

/*
output: Promise
type: Promise
*/

jsutil.calculate('2 + 2 / sqrt(9) ** PI - E + 1')

/*
output: 0.3451211072112388
type: Number
*/

jsutil.type(new Map())

/*
output: [ [Function: Map], 'Map' ]
type: Array
*/

jsutil.eval('2 + 2')

/*
output: 4
type: any
*/

jsutil.eval.safe('process')

/*
output: undefined
type: any
*/

jsutil.eval.async('2 + 2')

/*
output: any
type: any

*/
```

**CLI**
```js
const { CLI, calculate } = require('./')
const interface = new CLI('easy math')

function math(args) {
    return !console.log(calculate(args))
}

interface.addCommand('math', math, 'description', true)
.setFooter('😮😮😮')

interface.spawn()
```

# **Docs**

[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
