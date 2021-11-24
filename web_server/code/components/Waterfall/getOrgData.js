const DateTime = require("good-date")
const { object } = require("good-js")
const smartBackend = require("../../systems/smart_backend")

const maxNumberOfOrgs = 300

module.exports = () => smartBackend.getOrgTree().then((orgTree) => {
    // 
    // convert structure method
    // 
    let output = []
    for (const [key, value] of Object.entries(orgTree)) {
        const lastTouched = (new DateTime(value.orgSummary.newestVulnerabilityTime)).unix
        output.push({
            ...value,
            name: key,
            size: value.orgSummary.numberOfRepos,
            orderMetric: Math.log(lastTouched) + Math.log(value.orgSummary.numberOfVulnerabilies),
        })
    }
    
    // 
    // sorting method
    // 
    output = output.sort(
        object.compareProperty({
            keyList:['orderMetric'],
            largestFirst:true
        })
    )
    console.log(`output is:`,output.slice(0,5))
    return output.slice(0, maxNumberOfOrgs)
})