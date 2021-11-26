const vulnData = require("../../../data/vulnerabilities_by_product.json")
const byCve = new Map()
module.exports = ({product})=>{
    // dynamically get rid of duplicate counts of the same CVE
    if (!byCve.has(product)) {
        const vulns = vulnData[product]  
        const thisRepoByCve = {}
        for (const each of vulns) {
            thisRepoByCve[each.cveId] = each
        }
        byCve.set(product, Object.values(thisRepoByCve))
    }
    return byCve.get(product)
}