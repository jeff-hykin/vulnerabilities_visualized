const fs = require("fs")
const DateTime = require("good-date")

const sum = (arg1, ...args) => {
    let total = arg1-0
    // NaN check
    if (total !== total) {
        total = 0
    }
    for (let each of args) {
        each = each-0
        // NaN check
        if (each != each) {
            each = 0
        }
        total += arg1
    }
    return total
}

const vulnByVendor = require("../data/vulnerabilities_by_vendor.json")
const vulnOrgTree = {}
for (const [org, repos] of Object.entries(vulnByVendor)) {
    if (org == "None") {
        continue
    }
    
    const allRepoSummaryStats = {} 
    for (const [repoName, vulnerabilities] of Object.entries(repos)) {
        allRepoSummaryStats[repoName] = {
            numberOfVulnerabilies: vulnerabilities.length,
            magnitudeOfVulnerabilites: sum(...vulnerabilities.map(each=>(each.score+1))), // add 1 because some are 0
            oldestVulnerabilityTime: Math.min(...vulnerabilities.map(each=>new DateTime(each.publishDate))),
            newestVulnerabilityTime: Math.max(...vulnerabilities.map(each=>new DateTime(each.publishDate))),
        }
        const oldestTime = new DateTime(allRepoSummaryStats[repoName].oldestVulnerabilityTime)
        const newestTime = new DateTime(allRepoSummaryStats[repoName].newestVulnerabilityTime)
        allRepoSummaryStats[repoName].oldestVulnerabilityTime = `${oldestTime.year}-${oldestTime.month}-${oldestTime.day}`
        allRepoSummaryStats[repoName].newestVulnerabilityTime = `${newestTime.year}-${newestTime.month}-${newestTime.day}`
    }
    
    // const oldestTime = new DateTime()
    // const newestTime = new DateTime()
    // oldestTime.unix = allRepoSummaryStats[repoName].oldestVulnerabilityTime
    // newestTime.unix = allRepoSummaryStats[repoName].newestVulnerabilityTime
    // allRepoSummaryStats[repoName].oldestVulnerabilityTime = `${oldestTime.year}-${oldestTime.month}-${oldestTime.day}`
    // allRepoSummaryStats[repoName].newestVulnerabilityTime = `${newestTime.year}-${newestTime.month}-${newestTime.day}`
    
    vulnOrgTree[org] = {
        orgSummary: {
            numberOfRepos: Object.keys(repos).length,
            numberOfVulnerabilies: sum(
                ...Object.entries(allRepoSummaryStats).map(([repoName, object])=>object.numberOfVulnerabilies)
            ),
            magnitudeOfVulnerabilites: sum(
                ...Object.entries(allRepoSummaryStats).map(([repoName, object])=>object.magnitudeOfVulnerabilites)
            ),
            oldestVulnerabilityTime: Math.min(
                ...Object.entries(allRepoSummaryStats).map(([repoName, object])=>new DateTime(object.oldestVulnerabilityTime))
            ),
            newestVulnerabilityTime: Math.max(
                ...Object.entries(allRepoSummaryStats).map(([repoName, object])=>new DateTime(object.newestVulnerabilityTime))
            ),
        },
        repoSummaries: allRepoSummaryStats,
    }
    const oldest = new DateTime(vulnOrgTree[org].orgSummary.oldestVulnerabilityTime)
    const newest = new DateTime(vulnOrgTree[org].orgSummary.newestVulnerabilityTime)
    vulnOrgTree[org].orgSummary.oldestVulnerabilityTime = `${oldest.year}-${oldest.month}-${oldest.day}`
    vulnOrgTree[org].orgSummary.newestVulnerabilityTime = `${newest.year}-${newest.month}-${newest.day}`
}

fs.writeFileSync("./data/vulnerabilities_org_tree.json", JSON.stringify(vulnOrgTree,0,4))