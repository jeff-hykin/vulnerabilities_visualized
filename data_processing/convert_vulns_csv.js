// const parse = require("f/lib/sync")
const fs = require("fs")
const request = require('request')
const _ = require("lodash")


const records = require("../data/vulnerabilities.json")

const totals = {
    cveId:[],
    cweId:[],
    numberOfExploits:[],
    vulnerabilityTypes:[],
    publishDate:[],
    updateDate:[],
    score:[],
    gainedAccessLevel:[],
    access:[],
    complexity:[],
    authentication:[],
    confidentiality:[],
    integrity:[],
    availability:[],
    vendor:[],
    product:[],
}
records.map((object)=>{
    totals.cveId.push(object["CVE ID"])
    totals.cweId.push(object["CWE ID"])
    totals.numberOfExploits.push(object["# of Exploits"])
    totals.vulnerabilityTypes.push(object["Vulnerability Type(s)"])
    totals.publishDate.push(object["Publish Date"])
    totals.updateDate.push(object["Update Date"])
    totals.score.push(object["Score"])
    totals.gainedAccessLevel.push(object["Gained Access Level"])
    totals.access.push(object["Access"])
    totals.complexity.push(object["Complexity"])
    totals.authentication.push(object["Authentication"])
    totals.confidentiality.push(object["Confidentiality"])
    totals.integrity.push(object["Integrity"])
    totals.availability.push(object["Availability"])
    totals.vendor.push(object["Vendor"])
    totals.product.push(object["Product"])
})
fs.writeFileSync("vulnerabilities_array.json", JSON.stringify(totals))