const DateTime = require("good-date")
const { object } = require("good-js")
const smartBackend = require("../../systems/smart_backend")


module.exports = ({ maxNumberOfOrgs=300 }) => smartBackend.getOrgTree().then((orgTree) => {
    const keyToUseForSize = "numberOfRepos"
    
    // 
    // sorting method
    // 
    const repos = Object.entries(orgTree).map(
            ([key,value]) => {
                // add a unix time value
                const lastTouched = (new DateTime(value.orgSummary.newestVulnerabilityTime)).unix
                // create the score
                value.orderMetric = Math.log(lastTouched) + Math.log(value.orgSummary.numberOfVulnerabilies)
                // example inputs:
                //     magnitudeOfVulnerabilites: 1627.0999999999913
                //     newestVulnerabilityTime: "2021-10-4"
                //     numberOfRepos: 1
                //     numberOfVulnerabilies: 307
                //     oldestVulnerabilityTime: "2021-10-4"
                return [key, value]
            }
        ).sort(
            object.compareProperty({
                keyList:['1','orderMetric'],
                largestFirst:true
            })
        )
    // 
    // convert structure method
    // 
    let output = []
    for (const [key, value] of repos) {
        if (--maxNumberOfOrgs < 0) {
            break
        }
        output.push({
            name: key,
            size: value.orgSummary[keyToUseForSize],
            ...value,
        })
    }
    console.log(`output is:`,output.slice(0,5))
    return output
})