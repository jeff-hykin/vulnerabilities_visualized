const vulnData = require("../../../data/vulnerabilities_by_product.json")
const descriptions = require("../../../data/vulnerability_descriptions.json")
const byCve = new Map()
module.exports = ({product})=>{
    // dynamically get rid of duplicate counts of the same CVE
    if (!byCve.has(product)) {
        const vulns = vulnData[product]  
        const thisRepoByCve = {}
        for (const each of vulns) {
            thisRepoByCve[each.cveId] = each
            // attach the descriptions
            each.description = descriptions[each.cveId]
        }
        byCve.set(product, Object.values(thisRepoByCve))
    }
    const returnValue = byCve.get(product)
    // un-cache because the server has so little ram
    byCve.delete(product)
    return returnValue
}