const Positioner = require("../../skeletons/Positioner")
const FrequencyChart = require("../FrequencyChart")

const { numbers, stats, createLinearMapper, getFrequencies, arrayAsObjectKeys } = require("../../systems/utilities")

const nameConversion = {
    "DoS": "Denial of Service",
    "Exec": "Execute Code",
    "Overflow": "Overflow",
    "+Info": "Gain Information",
    "+Priv": "Gain Privilege",
    "Corr.": "Memory Corruption",
    "Trav.": "Directory Traversal",
    // Bypass Something
    // XSS
    // Sql Injection
}

module.exports = ({ vulnData })=> {
    const allAttributes = vulnData.map(each=>each.vulnerabilityTypes.split(" ")).flat()
    const cleanedAttributes = allAttributes.map(
            // give attribute-less vulns a name
            each=>(each.length == 0 ? "[None]" : each)
        ).filter(
            // code is a duplicate for "Code Execution"
            each=>(
                each!="Code"
                && each!="Mem."
                && each!="Dir."
            )
        ).map(
            // give them more human names
            each=>nameConversion[each] || each
        )
        
    return <FrequencyChart label="Vulnerability Attributes" elements={cleanedAttributes} />
}
