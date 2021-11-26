// const parse = require("f/lib/sync")
const fs = require("fs")
const request = require('request')
const _ = require("lodash")
const parse = require("csv-parse/lib/sync")


// 
// CSV to JSON
//
// (failed because csv-parse cant handle strings with newlines) 
// const string = fs.readFileSync("./data/vulnerabilities.csv").toString()
// var fixedString = string.replace(/,[\n \t]*"[\w\W]*?[\w\W]*?"[\n \t]*(,|\n)/mg, each=>each.replace(/\n/g, "")).replace(/\r/,"")
// fs.writeFileSync("./data/vulnerabilities_fixed.csv", fixedString)
// var csvStringLines = fixedString.split("\n")
// var correctNumberOfCommas = csvStringLines[0].match(/,/g).length
// var index = 0
// var fixedCsvLines = csvStringLines.map(each=>{
//     console.log(`   (${(index/csvStringLines.length).toFixed(3)}) ${csvStringLines.length}:${index++}`)
//     if (each.match(/"/g)) {
//         const before = each
//         each = each.replace(/""/g,'').replace(/"[^"]+"/g, "") // .replace(/'([^\\].|[^'])+?'/g, "")
//         if (each.match(/"/g)) {
//             console.log("        there were still quotes leftover")
//             console.log(`            before: ${before}`)
//             console.log(`            after : ${each}`)
//             throw Error(``)
//         }
//     }
//     // const each = each.replace(/".+?"/g, "").replace(/'([^\\].|[^'])+'/g, "")
//     const commas = each.match(/,/g)
//     if (commas == null) {
//         return ""
//     }
//     const numberOfCommas = commas.length
//     let extension = ""
//     if (numberOfCommas < correctNumberOfCommas) {
//         extension = ",".repeat(correctNumberOfCommas-numberOfCommas)
//     }
//     return each+extension
// })
// console.log(fixedCsvLines.slice(0,90))
// fs.writeFileSync("./data/vulnerabilities.json", JSON.stringify(
//     parse(fixedCsvLines.join("\n"), {
//         columns: true,
//         skip_empty_lines: true,
//     })
// ))


const records = require("../data/vulnerabilities.json")

// 
// remove descriptions (otherwise file is > 100mb)
// 
fs.writeFileSync("./data/vulnerabilities.json", JSON.stringify(records.map(each=>{
    const copy = {...each}
    delete copy.Desc
    return copy
})))

// 
// create a seperate file for descriptions
// 
let descriptions = {}
for (const each of records) {
    descriptions[each["CVE ID"]] = each.Desc
}
fs.writeFileSync("./data/vulnerability_descriptions.json", JSON.stringify(descriptions,0,4))


// 
// JSON to pandas-dataframe-friendly JSON
// 
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
fs.writeFileSync("vulnerabilities_array.json", JSON.stringify(totals,0,4))