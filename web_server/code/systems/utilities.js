const { frequencies: getFrequencies } = require("lodash-contrib")

/**
 *
 * mountedToDom
 *
 *
 * @param {HTMLElement} element - which should be a
 * @return {Promise} 
 *
 * @example
 *     mountedToDom(element).then(() => console.log("mounted"))
 */
const mountedToDom = async (element) => {
    // if already on the dom
    if (element.isConnected) {
        return
    }
    // else wait on it getting added
    return new Promise((resolve, reject) => {
        if (mountedToDom.elementsBeingWatched.has(element)) {
            mountedToDom.elementsBeingWatched.get(element).push(resolve)
        } else {
            mountedToDom.elementsBeingWatched.set(element, [resolve])
        }
    })
}
mountedToDom.elementsBeingWatched = new Map()
mountedToDom.pollingRate = 350 // miliseconds
// mounted checker (keep outside of function for efficiency reasons)
setInterval(() => {
    for (const [element, resolvers] of mountedToDom.elementsBeingWatched.entries()) {
        // if connected, run callbacks, and remove listener
        if (element.isConnected) {
            for (let eachResolver of resolvers) {
                eachResolver()
            }
            mountedToDom.elementsBeingWatched.delete(element)
        }
    }
}, mountedToDom.pollingRate)

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
// sum
// 
const sum = (list) => list.reduce((a, b) => a + b, 0)

// 
// numbers
// 
const numbers = ({count, min, max, decimals=5}) => {
    const range = max-min
    const increment = range / count
    const values = [ min.toFixed(decimals)-0 ]
    let index = 0
    const valueAt = (index) => min + (increment * index)
    while (valueAt(index) < max) {
        values.push(valueAt(index++).toFixed(decimals)-0)
    }
    values.push(max.toFixed(decimals)-0)
    return values
}

// 
// Array to object keys
// 
const arrayAsObjectKeys = (array, defaultValue)=>array.reduce((acc,curr)=> (acc[curr]=defaultValue,acc),{})

//
//
// exports
//
//
module.exports = {
    mountedToDom,
    wrapAroundGet,
    hash,
    getFrequencies,
    numbers,
    sum,
    arrayAsObjectKeys,
}
