const getOrgData = require("../Waterfall/getOrgData")
const OrgBubble = require("../Waterfall/OrgBubble")


module.exports = async ()=>{
    const orgData = await getOrgData()
    return orgData.map(eachOrg=>OrgBubble({ eachOrg }))
}