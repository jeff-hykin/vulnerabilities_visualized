const DateTime = require("good-date")
const { object } = require("good-js")
const smartBackend = require("../../systems/smart_backend")

// parameters for tweaking
const maxNumberOfRepos = 300
const magicNumberThatMakesTheUILookGood1 = 400  // importance of number of vulnerabilies when sorting
const magicNumberThatMakesTheUILookGood2 = 63 // inverse importance of most recent date when sorting

module.exports = () => smartBackend.getOrgTree().then((orgTree) => {
    
    // 
    // Flatten out into Repos (and add some data to them)
    // 
    const repos = []
    for (const [ eachOrgName, eachOrg ] of Object.entries(orgTree)) {
        for (const [ eachRepoName, eachRepoValue ] of Object.entries(eachOrg.repoSummaries)) {
            const bubbleSize = (eachRepoValue.numberOfVulnerabilies/magicNumberThatMakesTheUILookGood1).toFixed(3) - 0
            const lastTouched = (new DateTime(eachRepoValue.newestVulnerabilityTime)).unix
            repos.push({
                ...eachRepoValue,
                name: eachRepoName,
                size: bubbleSize,
                orgName: eachOrgName,
                lastTouched: lastTouched,
                orderMetric: bubbleSize + Math.sqrt(lastTouched)/magicNumberThatMakesTheUILookGood2,
            })
        }
    }

    // 
    // sorting method
    // 
    const output = repos.sort(
        object.compareProperty({
            keyList:['orderMetric'],
            largestFirst:true
        })
    )

    // 
    // convert structure method
    // 
    console.log(`output is:`,output.slice(0,5))
    return output.slice(0, maxNumberOfRepos)
})