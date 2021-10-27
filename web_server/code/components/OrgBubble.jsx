const BaseTree = require("../skeletons/BaseTree")
const { watch } = require("@vue-reactivity/watch")

module.exports = ({ org, selector, orgIndex })=>{
    // 
    // create elements
    // 
    const thisComponent = <div
        class="orgBubble"
        onclick={
            ()=>(selector.selectedOrgIndex=orgIndex, selector.selectedRepoIndex=null)
        }
        />
    const repoElements = org.map( (tree, index) =>
        <div
            onclick={
                (eventObject)=>{
                    // don't let it activate the outer onclick
                    eventObject.stopPropagation()
                    // update the data
                    Object.assign(selector, {selectedOrgIndex: orgIndex, selectedRepoIndex: index})
                }
            }
            style={{
                position: "absolute",
                transform: `translate(${index * 100 / org.length}%,${index % 2 * -50}px)`,
            }}
            >
            <BaseTree treeData={tree}/>
        </div>
    )
    thisComponent.children = repoElements
    // 
    // make them reactive
    // 
    watch(selector, ()=>{
        // 
        // when unselected do:
        // 
        if (selector.selectedOrgIndex != orgIndex) {
            thisComponent.class = "orgBubble"
            thisComponent.children = repoElements
            // reset/enable the pointer events
            delete thisComponent.style.pointerEvents
        // 
        // when selected do:
        // 
        } else {
            // if repo selected
            if (selector.selectedRepoIndex) {
                // remove all of them except the selected repo
                thisComponent.children = [ repoElements[selector.selectedRepoIndex] ]
                // remove the bubble's class to focus on the repo
                thisComponent.class = "orgBubbleRepoFocus"
            // if whole bubble selected
            } else {
                // (not sure what the desired behavor is)
                thisComponent.class = "orgBubbleFocused"
                thisComponent.children = repoElements
            }
        }
    })
    return thisComponent
}