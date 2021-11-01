const BaseTree = require("../skeletons/BaseTree")
const { watch } = require("@vue-reactivity/watch")

module.exports = ({ org, selector, indexOfThisOrg })=>{
    // 
    // create elements
    // 
    const bubble = <div
        class="orgBubble"
        onclick={()=>{
            // update the data
            console.log(`setting indexOfThisOrg `, indexOfThisOrg)
            Object.assign(selector, {
                // this org is selected
                selectedOrgIndex: indexOfThisOrg,
                // no repo is selected
                selectedRepoIndex: null,
            })
        }}
        />
    const repoElements = org.map( (tree, index) =>{
        const repoElement = <div
            class="repo"
            onclick={(eventObject)=>{
                // don't let it activate the outer onclick
                eventObject.stopPropagation()
                // update the data
                Object.assign(selector, {selectedOrgIndex: indexOfThisOrg, selectedRepoIndex: index})
            }}
            >
            <BaseTree treeData={tree}/>
        </div>
        return repoElement
    })
    bubble.children = repoElements
    // 
    // make them reactive
    // 
    let updateCssClass
    watch(selector, updateCssClass=()=>{
        // if no org selected, show self
        if (selector.selectedOrgIndex == null) {
            bubble.class = "orgBubble overview"
        // if not-this-org selected
        } else if (selector.selectedOrgIndex != indexOfThisOrg) {
            // hides self
            bubble.class = "orgBubble"
        // if this-org IS selected
        } else {
            // check if its focused on a repo or not
            if (selector.selectedRepoIndex == null) {
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