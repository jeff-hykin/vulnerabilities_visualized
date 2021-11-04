const BaseTree = require("../skeletons/BaseTree")
const { watch } = require("@vue-reactivity/watch")
const {backend} = require("quik-client")

backend.data.vulnerabilitiesFor({product: "Atom"}).then(atomData =>{
    console.log(`atomData.length is:`,atomData.length)
    // for (const eachVulnerability of atomData) {
    //     console.log(eachVulnerability)
    // }
})

module.exports = ({ org, selector, indexOfThisOrg })=>{
    // 
    // create elements
    // 
    const backButton = <div class="backButton" onclick={() => {
        if (selector.selectedRepoIndex != null) {
            Object.assign(selector, {
                selectedOrgIndex: selector.selectedOrgIndex,
                selectedRepoIndex: null,
            })
        } else {
            Object.assign(selector, {
                selectedOrgIndex: null,
                selectedRepoIndex: null,
            })
        }
    }}>BACK</div>
    const bubble = <div
        class="orgBubble"
        ></div>
    const repoContainer = <div class="repoContainer" onclick={()=>{
        // update the data
        Object.assign(selector, {
            // this org is selected
            selectedOrgIndex: indexOfThisOrg,
            // no repo is selected
            selectedRepoIndex: null,
        })
    }}/>
    const repoElements = org.map( (tree, index) =>{
        const repoElement = <div
            class="repo"
            onclick={(eventObject)=>{
                // don't let it activate the outer onclick
                eventObject.stopPropagation()
                
                if (selector.selectedOrgIndex != indexOfThisOrg) {
                    // select the org before the repo
                    Object.assign(selector, {
                        // this org is selected
                        selectedOrgIndex: indexOfThisOrg,
                        // no repo is selected
                        selectedRepoIndex: null,
                    })
                } else {
                    // select this specific repo
                    Object.assign(selector, {selectedOrgIndex: indexOfThisOrg, selectedRepoIndex: index})
                }
            }}
            >
            <BaseTree treeData={tree}/>
        </div>
        return repoElement
    })
    repoContainer.children = repoElements
    bubble.children = [backButton, repoContainer]
    // 
    // make them reactive
    // 
    let updateCssClass
    watch(selector, updateCssClass=()=>{
        // if no org selected, show self
        if (selector.selectedOrgIndex == null) {
            bubble.class = "orgBubble overview"
            backButton.class = "backButton hideItem"
        // if not-this-org selected
        } else if (selector.selectedOrgIndex != indexOfThisOrg) {
            // hides self
            bubble.class = "orgBubble"
        // if this-org IS selected
        } else {
            // check if its focused on a repo or not
            if (selector.selectedRepoIndex == null) {
                backButton.class = "backButton"
                // focus on the bubble itself
                setTimeout(() => {
                    bubble.class = "orgBubble focused"
                }, 500)
            } else {
                // fade away and focus on the repo
                bubble.class = "orgBubble focused repoFocus"
                setTimeout(() => {
                    repoElements[selector.selectedRepoIndex].class = "repo selected"
                }, 500)
            }
        }
    })
    updateCssClass()
    
    return bubble
}