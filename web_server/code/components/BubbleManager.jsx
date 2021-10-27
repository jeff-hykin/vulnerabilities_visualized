const OrgBubble = require("../components/OrgBubble")
const { reactive } = require("@vue/reactivity")
const { watch } = require("@vue-reactivity/watch")
const router = require("quik-router")

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
]

module.exports = ()=>{
    // create state for children
    const state = reactive({
        selectedOrgIndex: null,
        selectedRepoIndex: null,
    })
    
    // 
    // when the state changes update the route so that the back button works
    // 
    watch(state, ()=>{
        console.log(`JSON.stringify(router.pageInfo.bubbleInfo) is:`,JSON.stringify(router.pageInfo.bubbleInfo))
        console.log(`JSON.stringify(state) is:`,JSON.stringify(state))
        // if there was a real change
        if (JSON.stringify(router.pageInfo.bubbleInfo) != JSON.stringify(state)) {
            // add it to the page history
            router.goTo({
                ...router.pageInfo,
                bubbleInfo: state,
            })
        }
    })
    // 
    // route changes update the state
    // 
    router.addEventListener("go", ()=>{
        console.log(`GO: JSON.stringify(router.pageInfo.bubbleInfo) is:`,JSON.stringify(router.pageInfo.bubbleInfo))
        console.log(`GO: JSON.stringify(state) is:`,JSON.stringify(state))
        // update if something actually changed
        if (JSON.stringify(router.pageInfo.bubbleInfo) != JSON.stringify(state)) {
            Object.assign(state, router.pageInfo.bubbleInfo)
        }
    })
    
    window.router = router
    
    // give children the ability to 
    return orgs.map(
        (eachOrgData, index) => <OrgBubble org={eachOrgData} selector={state} orgIndex={index} />
    )
}