

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
    return new Promise((resolve, reject)=>{
        if (elementsBeingWatched.has(element)) {
            elementsBeingWatched.get(element).push(resolve)
        } else {
            elementsBeingWatched.set(element, [ resolve ])
        }
    })
}


// 
// 
// exports
// 
// 
module.exports = {
    mountedToDom,
}