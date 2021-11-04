const OrgBubble = require("../components/OrgBubble")
const { reactive } = require("@vue/reactivity")
const { watch } = require("@vue-reactivity/watch")
const router = require("quik-router")
const stringify = require('fast-json-stable-stringify');

const repoData = {
    name: "topLevel",
    parent: "null",
    blurb: 10,
    type: "black",
    level: "black",
    children: [
        {
            name: "midLevel",
            parent: "topLevel",
            blurb: 5,
            type: "black",
            level: "none",
            children: [
                {
                    name: "lowA",
                    parent: "midLevel",
                    blurb: 5,
                    type: "Type of bug",
                    level: "red",
                },
                {
                    name: "lowB",
                    parent: "midLevel",
                    blurb: 18,
                    type: "Type of vulnerability",
                    level: "red",
                },
            ],
        },
        {
            name: "midLevelB",
            parent: "topLevel",
            blurb: 10,
            type: "grey",
            level: "none",
            children: [
                {
                    name: "lowC",
                    parent: "midLevelB",
                    blurb: 5,
                    type: "Type of vulnerability",
                    level: "red",
                },
                {
                    name: "lowD",
                    parent: "midLevelB",
                    blurb: 18,
                    type: "Type of vulnerability",
                    level: "red",
                },
            ],
        },
    ],
}

const orgs = [
    // org1
    [repoData, repoData],
    [repoData, repoData],
    [repoData, repoData],
    [repoData, repoData],
]

module.exports = ()=>{
    // init router info
    router.pageInfo.bubbleInfo = {
        selectedOrgIndex: null,
        selectedOrgIndex: null,
        ...router.pageInfo?.bubbleInfo
    }

    const dashboard = <div class="column centered mainDiv dashboardView" style={{width:"100%"}}>
    {orgs.map(
        // give children the ability to change state 
        (eachOrgData, index) => <OrgBubble org={eachOrgData} selector={router.pageInfo.bubbleInfo} indexOfThisOrg={index} />
    )}
</div>

    let updateCssClass
    watch(router.pageInfo.bubbleInfo, updateCssClass=()=>{
        // if no org selected, show self
        if (router.pageInfo.bubbleInfo.selectedOrgIndex == null) {
            dashboard.class = "column centered mainDiv dashboardView"
        // if not-this-org selected
        } else {
            dashboard.class = "column centered mainDiv"
        }
    })
    updateCssClass()
    
    // 
    // create elements
    // 
    return dashboard
}