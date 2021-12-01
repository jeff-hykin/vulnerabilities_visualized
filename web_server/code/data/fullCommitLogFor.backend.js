const fs = require("fs").promises
const path = require("path")
const nameConversion = require("../../../data/product_to_repo_names.json")
const cachedData = new Map()

module.exports = async ({product})=>{
    try {
        const repoName = nameConversion[product]
        if (!repoName) {
            return null
        }
        if (!cachedData.has(repoName)) {
            const location = path.join("data",'full_commit_logs',repoName+".json")
            const stringValue = await fs.readFile(location)
            const objectValue = JSON.parse(stringValue).map(each=>{
                // convert from compressed list form
                const [ filesChanged, linesChanged, commitDate,] = each
                // to decompressed object form (depends on the format of data_processing/format_commit_data.js)
                return {
                    filesChanged, linesChanged, commitDate,
                }
            })
            cachedData.set(repoName, objectValue)
        }
        const returnValue = cachedData.get(repoName)
        // un-cache because the server has so little ram
        cachedData.delete(repoName)
        return returnValue
    } catch (error) {
        console.debug(`error is:`,error)
        throw error
    }
}