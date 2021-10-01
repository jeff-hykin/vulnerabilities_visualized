const { reactive } = require("@vue/reactivity")
const { watch } = require("@vue-reactivity/watch")
// const { when } = require("@vue-reactivity/when")

const elementSymbol = Symbol.for("element")
function reactiveElement(htmlElement) {
    const reactiveObjects = {}
    return new Proxy(htmlElement, {
        get(htmlElement, key) {
            if (key == elementSymbol) {
                return htmlElement
            }
            const item = htmlElement[key]
            if (item instanceof Object) {
                reactiveObjects[key] = reactive(item)
                // any time it changes, do a re-assignment
                watch(reactiveObjects[key], (newValue)=>{
                    this[key] = newValue
                })
                return reactiveObjects[key]
            }
            return item
        },
        set(htmlElement, key, newValue) {
            htmlElement[key] = newValue
            // detach old reactive connection
            if (reactiveObjects[key] instanceof Object) {
                delete reactiveObjects[key]
            }
            // attach new reactive connection
            if (newValue instanceof Object) {
                reactiveObjects[key] = reactive(item)
                // any time it changes, do a re-assignment
                watch(reactiveObjects[key], (newValue)=>{
                    this[key] = newValue
                })
                return reactiveObjects[key]
            }
            return newValue
        },
    })
}