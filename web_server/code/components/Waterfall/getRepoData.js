const DateTime = require("good-date")
const { object } = require("good-js")
const smartBackend = require("../../systems/smart_backend")
// const orgTree = require("../../../../data/vulnerabilities_org_tree.json")

// parameters for tweaking
const maxNumberOfRepos = 300
const magicNumberThatMakesTheUILookGood1 = 400  // importance of number of vulnerabilies when sorting
const magicNumberThatMakesTheUILookGood2 = 7 // inverse importance of most recent date when sorting
const minNumberOfVulns = 20

const vulnData = require("../../../../data/vulnerabilities_org_tree.json")

module.exports = async () => {
    const orgTree = vulnData
    
    // 
    // Flatten out into Repos (and add some data to them)
    // 
    let output = []
    for (const [ eachOrgName, eachOrg ] of Object.entries(orgTree)) {
        for (const [ eachRepoName, eachRepoValue ] of Object.entries(eachOrg.repoSummaries)) {
            const bubbleSize = (eachRepoValue.numberOfVulnerabilies/magicNumberThatMakesTheUILookGood1).toFixed(3) - 0
            const lastTouched = (new DateTime(eachRepoValue.newestVulnerabilityTime)).unix
            if (eachRepoValue.numberOfVulnerabilies < minNumberOfVulns) {
                continue
            }
            output.push({
                ...eachRepoValue,
                name: eachRepoName,
                size: Math.pow(bubbleSize, 1/2.3)*3.8,
                orgName: eachOrgName,
                lastTouched: lastTouched,
                orderMetric: bubbleSize + Math.sqrt(lastTouched)/magicNumberThatMakesTheUILookGood2,
            })
        }
    }
    
    // 
    // 
    // Keep removing small repos until there's a nice balance
    // 
    // 
    while (true) {
        const numberOf1RepoOrgs = output.filter(each=>Math.ceil(each.bubbleSize/2)==1).length
        const numberOfBiggerOrgs = output.filter(each=>Math.ceil(each.bubbleSize/2)!=1).length
        if (numberOfBiggerOrgs > numberOf1RepoOrgs*5.5) {
            break
        }
        let amountToRemove = Math.ceil(numberOf1RepoOrgs * 0.1)
        output = output.filter(each=> {
            if (each.bubbleSize == 1 && amountToRemove > 0) {
                --amountToRemove
                return false
            } else {
                return true
            }
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

    // 
    // convert structure method
    // 
    console.log(`output is:`,output.slice(0,5))
    return output.slice(0, maxNumberOfRepos)
}