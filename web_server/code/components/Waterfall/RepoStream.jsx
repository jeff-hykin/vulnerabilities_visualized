const getRepoData = require("../Waterfall/getRepoData")
const RepoBubble = require("../Waterfall/RepoBubble")

// just get the data, and create an element for each
module.exports = async ()=>{
    const RepoData = await getRepoData()
    return RepoData.map(eachRepo=>{
        const eachThing = RepoBubble({ eachRepo })
        console.log(`eachThing is:`,eachThing)
        return eachThing
    })
}