const fs = require("fs").promises
const path = require("path")

const cachedData = new Map()

module.exports = async ({product})=>{
    if (cachedData.has(product)) {
        return cachedData.get(product)
    } else {
        const location = path.join("data",'commit_logs',product+".json")
        const stringValue = await fs.readFile(location)
        const objectValue = JSON.parse(stringValue)
        cachedData.set(product, objectValue)
        return objectValue
    }
}