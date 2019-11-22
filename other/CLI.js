const readline = require('readline');

const type = require('../other/type');

class CLI {
    constructor(name, defaultHelp) {
        this.name = name
        this.data = {}
	this.data.aliases = {}
        this.data.commands = []
    }

    env() {
        return process.argv.slice(1)
    }

    addCommand(name = 'unnamed', fn = () => {}, description = 'description...', args = false) {
        this.data.commands[name] = {}
        this.data.commands[name].name = name
        this.data.commands[name].fn = fn
        this.data.commands[name].description = description
        this.data.commands[name].args = args
        return this
    }

    addAlias(command, alias) {
	if (!this.data.commands[command]) return
	this.data.aliases[alias] = command
	return this
    }

    setFooter(str) {
        this.data.footer = str;
        return this
    }

    help() {
        this.help = '';
        this.help += `${this.name} [options]\n\n`;
        for (let i in this.data.commands) {
            let command = this.data.commands[i]
	    let alias = this.data.aliases[command.name]
            if (type(command)[1] == 'object') {
                this.help += `${command.name}\t--${command.name},-${alias? alias: command.name[0]}\t${command.args? ' [...args]': ''}\t${command.description? command.description + '\n': '\n'}`
            }
        }
        if (this.data.footer) {
            this.help += `\n\n${this.data.footer}`
        }
        console.log(this.help)
    }

    matchCommand(args, _args = false) {
	let res = []
        let a_prefixReg = /^--[\w'?=].+'?/
        let a_shortcutReg = /^-[\w'?=].+'?/

        for (let i in args) {
            if (type(args[i])[1] == 'string') {
                if (_args) {
                    let prefixMatched = args[i].match(a_prefixReg)
                    if (prefixMatched) res.push(prefixMatched[0].split('='))
                    else {
                        let shortcutMatched = args[i].match(a_shortcutReg)
                        if (shortcutMatched) res.push(shortcutMatched[0].split('='))
                    }
                }
            }
        }
        if (res.length > 0) return res
        return false
    }

    run(name, args = '') {
        this.data.commands[name].fn(args)
    }

    question(q) {
	let readLine = readline.createInterface({
                            input: process.stdin,
                            output: process.stdout
                        });
	return new Promise((resolve) => {
	    readLine.question(q, function(answer) {
	        resolve(answer)
	    })
	})
    }

    spawn() {
        let envargs = this.env();
        if (envargs[1] == '--help' || envargs[1] == '-h') return this.help();
        let args = this.matchCommand(envargs, true);
        if (args) {
            for (let i in args) {
                if (type(args[i])[1] == 'array') {
                    let command = args[i][0].split('-'); 
		    command = command[command.length - 1];
		    if (this.data.commands[command]) !this.run(command, args[i][1])
		    else if (this.data.aliases[command]) !this.run(this.data.aliases[command], args[i][1])
                }
            }
        } else !this.help()
    }
}

module.exports = CLI
