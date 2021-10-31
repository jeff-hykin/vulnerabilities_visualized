const fs = require("fs")
const path = require("path")
const http = require("http")
const Gun = require('../web_server/code/tools/gun_case')
const { string } = require("good-js")
const vulnsByProduct = require("../data/vulnerabilities_by_product.json")
const doneRepos = require("./done_repos.do_not_sync.json")

// 
// database server
// 
const gun = Gun({ peers: ['http://localhost:8765/gun'], })

setTimeout(async () => {
    // for each repo
    for (const [repoName, vulnerabilities] of Object.entries(vulnsByProduct)) {
        const promises = []
        // skip done repos
        if (doneRepos.includes(repoName)) {
            continue
        }
        
        // 
        // make all the requests
        // 
        const repoObject = {}
        let index = -1
        for (const each of vulnerabilities) {
            index++
            repoObject[`${index}`] = each
            // remove trailing backslashes because they break Gun DB, and probably aren't supposed to be there anyways
            each.product && (each.product = each.product.replace(/\\/,""))
        }



        // 
        // wait for them to finish so the memory isn't overflowed
        // 
        const refinedRepoName = string.toCamelCase(repoName.replace(/[^a-zA-Z0-9._-]/g,"_"))
        if (refinedRepoName == "jenkins") {
            continue
        }
        console.log(`${repoName}: ${refinedRepoName}: ${Object.keys(repoObject).length}`)
        const savePromise = new Promise(
            (resolve, reject)=>gun.get("vulns").get(refinedRepoName).put(repoObject, resolve)
        )
        await savePromise
        doneRepos.push(repoName)
        // save encase process dies
        fs.writeFileSync("./data_processing/done_repos.do_not_sync.json", JSON.stringify(doneRepos))
    }
    console.log("\ndone!!")
    process.exit()
}, 1000)