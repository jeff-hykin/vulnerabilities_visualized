const DateTime = require("good-date")
const { object } = require("good-js")
const smartBackend = require("../../systems/smart_backend")

const magicNumberThatMakesUiLookGood1 = 2.3
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
            orderMetric: Math.pow(lastTouched, 1/magicNumberThatMakesUiLookGood1) - Math.sqrt(value.orgSummary.numberOfVulnerabilies),
        })
    }
    
    // 
    // 
    // Keep removing small repos until there's a nice balance
    // 
    // 
    while (true) {
        const numberOf1RepoOrgs = output.filter(each=>each.orgSummary.numberOfRepos==1).length
        const numberOfBiggerOrgs = output.filter(each=>each.orgSummary.numberOfRepos!=1).length
        if (numberOfBiggerOrgs > numberOf1RepoOrgs*5) {
            break
        }
        let amountToRemove = Math.ceil(numberOf1RepoOrgs * 0.1)
        output = output.filter(each=> {
            if (each.orgSummary.numberOfRepos == 1 && amountToRemove > 0) {
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

    console.log(`output is:`,output.slice(0,5))
    return output.slice(0, maxNumberOfOrgs)
})