function protocol(url) {
    return url.match(/(\w+:)/)[0].split(':')[0]
}

module.exports = protocol
