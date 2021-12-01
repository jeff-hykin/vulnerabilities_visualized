const { backend } = require("quik-client")
// 
// 
// Backend caching since our data is static
// 
// 


// 
// getOrgTree
// 
let orgData
const getOrgTree = async ()=> {
    if (orgData) {
        return orgData
    } else {
        return orgData = await backend.data.getOrgTree()
    }
}

// 
// getOrgSummaryDataFor
// 
const getOrgSummaryDataFor = async (orgName)=> {
    const orgTree = await getOrgTree()
    return orgTree[orgName].orgSummary
}

// 
// getRepoSummaryDataFor
// 
const getRepoSummaryDataFor = async (orgName, repoName)=> {
    const orgTree = await getOrgTree()
    return orgTree[orgName].repoSummaries[repoName]
}

// 
// getVulnDataFor
// 
const vulnData = {}
const getVulnDataFor = async (repoName)=> {
    if (vulnData[repoName]) {
        return vulnData[repoName]
    } else {
        return vulnData[repoName] = await backend.data.vulnerabilitiesFor({ product: repoName })
    }
}

// 
// getCommitDataFor
// 
const fullCommitData = {}
const getCommitDataFor = async (repoName)=> {
    if (fullCommitData[repoName] != undefined) {
        return fullCommitData[repoName]
    } else {
        try {
            fullCommitData[repoName] = await backend.data.commitLogFor({ product: repoName })
        } catch (error) {
            console.log(`Error getting commit data for: ${repoName}`)
            fullCommitData[repoName] = null
        }
        return fullCommitData[repoName]
    }
}

// 
// getFullCommitDataFor
// 
const commitData = {}
const getFullCommitDataFor = async (repoName)=> {
    if (commitData[repoName] != undefined) {
        return commitData[repoName]
    } else {
        try {
            commitData[repoName] = await backend.data.fullCommitLogFor({ product: repoName })
        } catch (error) {
            console.log(`Error getting commit data for: ${repoName}`)
            console.debug(error)
            commitData[repoName] = null
        }
        return commitData[repoName]
    }
}

module.exports = {
    getOrgTree,
    getOrgSummaryDataFor,
    getRepoSummaryDataFor,
    getVulnDataFor,
    getCommitDataFor,
    getFullCommitDataFor,
}