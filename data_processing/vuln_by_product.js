const vulnData = require("../data/vulnerabilities.json")
const vulnByProduct = {}
for (const [key, value] of Object.entries(vulnData)) {
    const eachVuln = {}
    // convert names
    eachVuln.cveId              = value["CVE ID"]
    eachVuln.cweId              = value["CWE ID"]
    eachVuln.numberOfExploits   = value["# of Exploits"]
    eachVuln.vulnerabilityTypes = value["Vulnerability Type(s)"]
    eachVuln.publishDate        = value["Publish Date"]
    eachVuln.updateDate         = value["Update Date"]
    eachVuln.score              = value["Score"]
    eachVuln.gainedAccessLevel  = value["Gained Access Level"]
    eachVuln.access             = value["Access"]
    eachVuln.complexity         = value["Complexity"]
    eachVuln.authentication     = value["Authentication"]
    eachVuln.confidentiality    = value["Confidentiality"]
    eachVuln.integrity          = value["Integrity"]
    eachVuln.availability       = value["Availability"]
    eachVuln.vendor             = value["Vendor"]
    eachVuln.product            = value["Product"]
    if (typeof eachVuln.product == 'string' && eachVuln.product.length) {
        vulnByProduct[eachVuln.product] || (vulnByProduct[eachVuln.product] = [])
        vulnByProduct[eachVuln.product].push(eachVuln)
    }
}
const fs = require("fs")
fs.writeFileSync("./data/vulnerabilities_by_product.json", JSON.stringify(vulnByProduct,0,4))