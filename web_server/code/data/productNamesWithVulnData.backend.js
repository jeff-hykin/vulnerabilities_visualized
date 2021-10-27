const vulnData = require("../../../data/vulnerabilities_by_product.json")
const productKeys = Object.keys(vulnData)
module.exports = ()=>{
    return productKeys
}
