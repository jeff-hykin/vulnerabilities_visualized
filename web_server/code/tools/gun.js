const { silentConsole, realConsole } = require("./silent_require")

// just a workaround for keeping gun quiet
globalThis.console = silentConsole
const Gun = require('gun/gun')
globalThis.console = realConsole

module.exports = Gun