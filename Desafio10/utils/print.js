const util = require('util')

const print = obj => console.log(util.inspect(obj, false, 12, true))

module.exports = print