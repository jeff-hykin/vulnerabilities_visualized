const BaseTree = require("../skeletons/BaseTree")
const smartBackend = require("../systems/smart_backend")

module.exports = async ({ repoName }) => {
    const maxNumberOfVulns = 72 // FIXME: showing all of them makes the graph unusable
    const vulnData = await smartBackend.getVulnDataFor(repoName)
    const modifiedVulnData = vulnData.map(each=>({...each, name: each.cveId.replace(/cve-/i, ""), level: 'red'})).slice(0,maxNumberOfVulns)
    
    const branches = {
        mild:    modifiedVulnData.filter(each=>each.score<=3.3333                     ).map(each=>({...each, parent:'mild'    })),
        notable: modifiedVulnData.filter(each=>each.score >3.3333 && each.score<6.6666).map(each=>({...each, parent:'notable' })),
        major:   modifiedVulnData.filter(each=>each.score>=6.6666                     ).map(each=>({...each, parent:'major'   })),
    }
    return <BaseTree
        treeData={{
            name: "topLevel",
            parent: "null",
            level: "black",
            children: Object.entries(branches).map(([name, children])=>({
                parent: "topLevel",
                level: "none",
                name,
                children,
            })),
        }}
    />
}