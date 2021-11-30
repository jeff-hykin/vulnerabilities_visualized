const fs = require("fs").promises
const path = require("path")
const nameConversion = require("../../../data/product_to_repo_names.json")
const cachedData = new Map()

module.exports = async ({product})=>{
    const repoName = nameConversion[product]
    if (!repoName) {
        return null
    }
    if (!cachedData.has(repoName)) {
        const location = path.join("data",'full_commit_logs',repoName+".json")
        const stringValue = await fs.readFile(location)
        const objectValue = JSON.parse(stringValue)
        cachedData.set(repoName, objectValue)
    }
    const returnValue = cachedData.get(repoName)
    // un-cache because the server has so little ram
    cachedData.delete(repoName)
    return returnValue
}