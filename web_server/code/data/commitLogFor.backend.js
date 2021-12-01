const fs = require("fs").promises
const path = require("path")

const cachedData = new Map()

module.exports = async ({product})=>{
    console.debug(`product is:`,product)
    if (cachedData.has(product)) {
        return cachedData.get(product)
    } else {
        const location = path.join("data",'commit_logs',product+".json")
        console.debug(`location is:`,location)
        const stringValue = await fs.readFile(location)
        console.debug(`stringValue is:`,stringValue)
        const objectValue = JSON.parse(stringValue)
        cachedData.set(product, objectValue)
        return objectValue
    }
}