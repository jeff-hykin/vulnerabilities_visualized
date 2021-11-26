const vulnData = require("../data/vulnerabilities.json")
const vulnByVendor = {}
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
    if (!(typeof eachVuln.vendor == 'string' && eachVuln.vendor.length)) {
        eachVuln.vendor = "None"
    }
    vulnByVendor[eachVuln.vendor] || (vulnByVendor[eachVuln.vendor] = [])
    vulnByVendor[eachVuln.vendor].push(eachVuln)
}
for (const [vendorName, vulnerabilities] of Object.entries(vulnByVendor)) {
    const vulnByProduct = {}

    for (const eachVuln of vulnerabilities) {
        
        if (typeof eachVuln.product == 'string' && eachVuln.product.length) {
            // if hasn't been created yet make it as an array
            if (!(vulnByProduct[eachVuln.product] instanceof Array)) {
                vulnByProduct[eachVuln.product] = []
            }
            vulnByProduct[eachVuln.product].push(eachVuln)
        }
    }
    // make each vendor be by-product
    vulnByVendor[vendorName] = vulnByProduct
}
const fs = require("fs")
fs.writeFileSync("./data/vulnerabilities_by_vendor.json", JSON.stringify(vulnByVendor))