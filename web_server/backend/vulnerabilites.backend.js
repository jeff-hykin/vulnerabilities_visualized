const vulnData = require("../../data/vulnerabilities.json")
const vulnByProduct = {}
for (const [key, value] of Object.entries(vulnData)) {
    console.debug(`value is:`,value)
    break
    const {product, ...otherData} = value
    if (typeof product == 'string' && product.length) {
        vulnByProduct[product] = [...vulnByProduct[product]]
        vulnByProduct[product].push(otherData)
    }
}
const fs = require("fs")
fs.writeFileSync("./data/vulnerabilities_by_product.json", JSON.stringify(vulnByProduct))
// module.exports = ({product})=>{
    
// }