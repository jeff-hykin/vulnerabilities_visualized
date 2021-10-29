// 
// just like require but silences messages
// 
const realConsole = globalThis.console
const originalThing = console
const proxyObject = new Proxy(originalThing, {
    get(originalThing, key) {
        // basically prevent logging and debugging of stuff
        if (key == "log" || key == "debug") {
            return ()=>0
        }
        return originalThing[key]
    },
    set(originalThing, key, newValue) {
        if (key == "log" || key == "debug") {
            return
        }
        return originalThing[key] = newValue
    },
})

const silentRequire = (...args) => {
    globalThis.console = silentRequire.console
    const output = require(...args)
    globalThis.console = realConsole
    return output
}
silentRequire.silentConsole = proxyObject
silentRequire.realConsole = console

module.exports = silentRequire