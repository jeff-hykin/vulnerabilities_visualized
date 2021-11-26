const router = require("quik-router")

const { nodeTheme } = require("../../systems/theme")
const { hash, wrapAroundGet } = require("../../systems/utilities")
const SquareGridSizer = require("../../skeletons/SquareGridSizer")
const FancyBubble = require("../../skeletons/FancyBubble")
const RepoList = require("../../components/Waterfall/RepoList")


// 
// Org
// 
const OrgBubble = ({ eachOrg })=> {
    let circle, repoListElement
    // grab an id
    const hashNumber = hash(eachOrg.name)
    // set the colors 
    OrgBubble.index++
    let color1 = wrapAroundGet(OrgBubble.index, nodeTheme.darkColors)
    let color2 = wrapAroundGet(OrgBubble.index, nodeTheme.lightColors)
    // randomly swap light and dark to add visual variation
    if (Math.random() > 0.7) {
        let swap = color1
        color1 = color2
        color2 = swap
    }
    
    // 
    // hover
    // 
    const pendingHoverCallbacks = []
    pendingHoverCallbacks.clearAll = ()=> {
        for (const id of pendingHoverCallbacks) {
            clearTimeout(id)
        }
        pendingHoverCallbacks.length = 0 // removes all elements strangely enough
    }
    const onHover = (event)=>{
        pendingHoverCallbacks.clearAll()
        pendingHoverCallbacks.push(
            setTimeout(()=>(circle.style.zIndex=9999), 100)
        )
        // 
        // attach the repo list
        // 
        
        // first move into position
        const bottomCenterOfBubble = {
            x: circle.x - circle.scrollWidth,
            y: circle.y - circle.scrollHeight,
        }
        repoListElement.style.left = bottomCenterOfBubble.x
        repoListElement.style.top = bottomCenterOfBubble.y
        // make it react to pointer events
        repoListElement.style.pointerEvents = "auto"
        // then make it fade in
        repoListElement.style.opacity = 1
    }
    const offHover = ()=>{
        pendingHoverCallbacks.clearAll()
        pendingHoverCallbacks.push(
            setTimeout(()=>(circle.style.zIndex=0), 100)
        )
        // start making the repo list fade out
        repoListElement.style.opacity = 0
        // disable RepoList interactivity after 85% dissapeared
        pendingHoverCallbacks.push(
            setTimeout(()=>(repoListElement.style.pointerEvents = "none"), RepoList.animationTime*0.85)
        )
    }
    
    // 
    // setup repo list
    // 
    repoListElement = <RepoList
        repos={eachOrg.repoSummaries}
        orgData={eachOrg}
        onmouseover={onHover}
        onmouseout={offHover}
        />
    repoListElement.style.opacity = 0
    repoListElement.style.pointerEvents = "none"
    
    // have it non-linearly increase with size
    const numberOfCells = Math.ceil(Math.sqrt(eachOrg.size)+1)
    const minPadding = 1.5
    const maxPadding = 12
    let paddingAmount = 0
    // randomize for small repos
    if (eachOrg.size == 1) {
        paddingAmount = Math.random()*(minPadding - maxPadding) + maxPadding
    // make it depend on size for big repos
    } else {
        const unroundedNumberOfCells = Math.sqrt(eachOrg.size)+1
        const relativeSmallness = numberOfCells - unroundedNumberOfCells
        paddingAmount = (1-relativeSmallness)*(minPadding - maxPadding) + maxPadding
    }
    
    // create a whole bunch of wrappers
    return <SquareGridSizer numberOfCells={Math.sqrt(eachOrg.size)+1} >
        {circle = <FancyBubble
            color1={color1}
            color2={color2}
            rotationOffset={`${Math.random()*360}deg`}
            onmouseover={onHover}
            onmouseout={offHover}
            // padding basically adjusts the size of bubble
            padding={`${paddingAmount}%`}
            >
                <div class="centered column" style="color: white; height: 100%; max-width: 100%; overflow:visible;">
                    {/* Name */}
                    <span
                        name="repo-name"
                        class="centered"
                        style={`
                            border-radius: 0.6rem;
                            padding: 0.3rem 0.5rem;
                            background: var(--translucent-charcoal);
                            color: white;
                            max-width: 110%;
                        `}
                        >
                            {eachOrg.name}
                    </span>
                    {/* Repo count */}
                    <br />
                    {`(${eachOrg.size})` }
                </div>
        </FancyBubble>}
        {repoListElement}
    </SquareGridSizer>
}
OrgBubble.index = 0
router.addEventListener("go", ()=>OrgBubble.index=0) // reset index when page changes

module.exports = OrgBubble