class Parser {
    constructor(el = {start: '%', end: '%'}) {
        this.el = el
    }

    replace(ctx, variables = {}) {
	let code;
           for (let i = 0; i < ctx.length; i++) {
              try {
                  code = ctx.match(RegExp(this.el.start + '(\\w+)' + this.el.end, 'i'))
              }catch (e) {
                  break
              }
              if (code) {
                  let matched = `${this.el.start}${code[1]}${this.el.end}`
                  try {
                      let evalved = eval(variables[code[1]])
                      ctx = ctx.replace(`${this.el.start}${code[1]}${this.el.end}`, !evalved? matched: evalved)
                  }catch (e) {}
              }
          }
      return ctx
    }

    format(ctx, ...variables) {
	for (let i in ctx) {
	    if (variables[i]) {
		ctx = ctx.replace(`%${i}`, variables[i])
	    }
	}
	return ctx
    }
}

module.exports = Parser
