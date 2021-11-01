const vulnData = require("../../../data/vulnerabilities_by_product.json")
module.exports = ({product})=>{
    return vulnData[product]
}