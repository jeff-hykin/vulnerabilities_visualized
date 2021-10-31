// 
// just like require but silences messages
// 
const realConsole = globalThis.console
const silentConsole = new Proxy(realConsole, {
    get(realConsole, key) {
        // basically prevent logging and debugging of stuff
        if (key == "log" || key == "debug") {
            return ()=>0
        }
        return realConsole[key]
    },
    set(realConsole, key, newValue) {
        if (key == "log" || key == "debug") {
            return
        }
        return realConsole[key] = newValue
    },
})

// 
// a workaround for keeping gun quiet on startup
// 
globalThis.console = silentConsole
const insideOfBrowser = typeof window != "undefined"
if (insideOfBrowser) {
    var Gun = require('gun/gun')
} else {
    var Gun = require('gun')
}
globalThis.console = realConsole

// it uses global vars :(
require('gun/lib/load.js')

// 
// helpers
// 
const nodeFromKeylist = (db, keyList)=>{
    let endNode = db
    for (const each of keyList) {
        endNode = endNode.get(each)
    }
    return endNode
}

const wrapper = (...args)=>{
    const gun = Gun(...args)
    const db = gun.get("@")
    const gunCase = {
        gun,
        get(keyList,ref={}) {
            const {shallow}={shallow: false, ...ref}
            const node = nodeFromKeylist(db, keyList)
            if (shallow) {
                return new Promise((resolve, reject)=>node.once(resolve))
            } else {
                const valueObject = new Map()
                // recursive method that bottoms-out based on the valueObject
                const getSubgraph = (node)=>new Promise((resolve, reject)=>node.once(async (value)=>{
                        const id = Gun.node.soul(node)
                        // make it known that this id is already set
                        valueObject.set(id, value)
                        if (value instanceof Object) {
                            const promises = []
                            for (const [key, subValue] of Object.entries(value)) {
                                // if node, be recursive
                                if (Gun.node.is(subValue)) {
                                    const subValueId = Gun.node.is(subValue)
                                    // if the value has already been explored
                                    if (valueObject.has(subValueId)) {
                                        value[key] = valueObject.get(subValueId)
                                    } else {
                                        promises.push(
                                            getSubgraph(subValue).then(
                                                // connect the sub value once its finished
                                                refinedSubValue=>(value[key]=refinedSubValue)
                                            )
                                        )
                                    }
                                }
                            }
                            for (const each of promises) {
                                await each
                            }
                        }
                        resolve(value)
                    }))
                
                return getSubgraph(node).then(
                    // once the subgraph is done filling up valueObject, just return the original node value
                    value=>valueObject.get(Gun.node.soul(node))
                )
            }
        },
        keys(keyList) {
            const node = nodeFromKeylist(db, keyList)
            return new Promise((resolve, reject)=>node.once(object=>resolve(Object.keys(object))))
        },
        set(keyList, value) {
            const last = keyList.pop()
            const node = nodeFromKeylist(db, keyList)
            return new Promise(
                (resolve, reject)=>node.put(
                    { [last]: value },
                    (acknowledgement)=>{
                        acknowledgement.err&&reject(acknowledgement.err)
                        resolve(true)
                    },
                )
            )
        },
        merge(keyList, value) {
            const node = nodeFromKeylist(db, keyList)
            return new Promise(
                (resolve, reject)=>node.put(
                    value,
                    (acknowledgement)=>{
                        acknowledgement.err&&reject(acknowledgement.err)
                        resolve(true)
                    },
                )
            )
        },
        delete(keyList, value) {
            const last = keyList.pop()
            const node = nodeFromKeylist(db, keyList)
            return new Promise(
                // get the current value
                (resolve, reject)=>node.once(value=>{
                    // delete only the one key, keep everything else
                    delete value[last]
                    // set the value to be everything except the new key
                    node.put(
                        value,
                        (acknowledgement)=>{
                            acknowledgement.err&&reject(acknowledgement.err)
                            resolve(true)
                        },
                    )
                })
            )
        },
        connect(keyList1, keyList2) {
            const last = keyList1.pop()
            const parentNode = nodeFromKeylist(db, keyList1)
            const node = nodeFromKeylist(db, keyList2)
            return new Promise(
                (resolve, reject)=>node.put(
                    { [last]: node },
                    (acknowledgement)=>{
                        acknowledgement.err&&reject(acknowledgement.err)
                        resolve(true)
                    },
                )
            )
        },
    }
    // 
    // interface
    // 
    return gunCase
}

// make the export behave like the original Gun object
const proxySymbol = Symbol.for('Proxy')
const thisProxySymbol = Symbol('thisProxy')
module.exports = new Proxy(wrapper, {
    defineProperty(original, ...args) { return Reflect.defineProperty(Gun, ...args) },
    getPrototypeOf(original, ...args) { return Reflect.getPrototypeOf(Gun, ...args) },
    // Object.keys
    ownKeys(original, ...args) { return Reflect.ownKeys(Gun, ...args) },
    get(original, key, ...args) {
        if (key == proxySymbol||key == thisProxySymbol) {return true}
        return Reflect.get(Gun, key, ...args)
    },
    set(original, key, ...args) {
        if (key == proxySymbol||key == thisProxySymbol) {return}
        return Reflect.set(Gun, key, ...args)
    },
})