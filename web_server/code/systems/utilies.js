//
//
// Mounted to DOM
//
//
const pollingRate = 350
const elementsBeingWatched = new Map()
// mounted checker (keep outside for efficiency reasons)
setInterval(() => {
    for (const [element, resolvers] of elementsBeingWatched.entries()) {
        // if connected, run callbacks, and remove listener
        if (element.isConnected) {
            for (let eachResolver of resolvers) {
                eachResolver()
            }
            elementsBeingWatched.delete(element)
        }
    }
}, pollingRate)
const mountedToDom = async (element) => {
    // if already on the dom
    if (element.isConnected) {
        return
    }
    // else wait on it getting added
    return new Promise((resolve, reject) => {
        if (elementsBeingWatched.has(element)) {
            elementsBeingWatched.get(element).push(resolve)
        } else {
            elementsBeingWatched.set(element, [resolve])
        }
    })
}

//
// hash
//
const hash = (object) => JSON.stringify(object).split("").reduce(
    (hashCode, currentVal) => (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
)

//
// wrapAroundGet
//
const wrapAroundGet = (number, list) => list[(number % list.length + list.length) % list.length]

//
//
// exports
//
//
module.exports = {
    mountedToDom,
    wrapAroundGet,
    hash,
}
