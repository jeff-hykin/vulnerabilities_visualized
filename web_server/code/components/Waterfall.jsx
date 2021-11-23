const { watch } = require("@vue-reactivity/watch")
const { nodeTheme } = require("../systems/theme")
const { hash, wrapAroundGet } = require("../systems/utilies")

const SquareGrid = require("../skeletons/SquareGrid")
const SquareGridSizer = require("../skeletons/SquareGridSizer")
const FancyBubble = require("../skeletons/FancyBubble")

const smartBackend = require("../systems/smart_backend")
const router = require("quik-router")

// TODO:
    // decide Repo summary format
    // decide Org summary format


// Get the org data from backend
const orgTreeData = smartBackend.getOrgTree().then((orgTree) => {
    let maxNumberOfRepos = 100
    const keyToUseForSize = "numberOfRepos"
    // exampleKeys:
    //     magnitudeOfVulnerabilites: 3828
    //     numberOfRepos: 2
    //     numberOfVulnerabilies: 348
    let output = []
    for (const [key, value] of Object.entries(orgTree)) {
        if (--maxNumberOfRepos < 0) {
            break
        }
        output.push({
            name: key,
            size: value.orgSummary[keyToUseForSize],
            ...value,
        })
    }
    console.log(`output is:`,output.slice(0,5))
    return output
})

// 
// Repo
// 
const RepoSummaryElement = ({ repoData, orgData }) => {
    return <div
        class="our-weak-shadow"
        style={`
            border-radius: 1rem;
            transition: all 0.2s ease-in-out 0s;
            margin-top: 0.8rem;
            padding: 0.25rem;
            background: lightgray;
            color: black;
            cursor: pointer;
        `}
        onclick={()=>{
            // TODO: record the scroll position, then do a goto, also add scrolling logic to main waterfall element
            router.goTo({ page: "product-view", orgName: orgData.name, repoName: repoData.name })
        }}
        >
            {repoData.name}
    </div>
}

const RepoList = ({ repos={}, orgData, ...props }) =>{
    return <div
        class="our-weak-shadow"
        style={`
            z-index: 999999;
            height: fit-content;
            max-height: 17vh;
            width: 18rem;
            align-self: center;
            flex-shrink: 0;
            background: white;
            border-radius: 1rem;
            overflow: auto;
            padding: 0.5rem;
            margin-top: -25px;
            transition: all ${RepoList.animationTime/1000}s ease-in-out 0s;
        `}
        {...props}
        >
        {Object.entries(repos).map(([name, info])=>RepoSummaryElement({ repoData: {name, ...info}, orgData }))}
    </div>
}
RepoList.animationTime = 300 // miliseconds

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
        onmouseover={(eventObject)=>{ console.log("repoListMouseOver") ;onHover(eventObject)}}
        onmouseout={offHover}
        />
    repoListElement.style.opacity = 0
    repoListElement.style.pointerEvents = "none"
    
    // create a whole bunch of wrappers
    return <SquareGridSizer numberOfCells={Math.log(eachOrg.size+1)} >
        {circle = <FancyBubble
            color1={color1}
            color2={color2}
            rotationOffset={`${Math.random()*360}deg`}
            onmouseover={onHover}
            onmouseout={offHover}
            padding={`${Math.random() * (12 - 1) + 1}%`}
            >
                <div class="centered column" style="color: white; height: 100%; max-width: 100%; overflow:visible;">
                    {/* Name */}
                    <span
                        name="repo-name"
                        style={`
                            border-radius: 0.6rem;
                            padding: 0.3rem 0.5rem;
                            background: var(--translucent-charcoal);
                            color: white;
                            width: max-content;
                            display: inline-block;
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


// 
// Waterfall
// 
module.exports = async ({ orgData })=>{
    // DEBUGGING
    orgData = [
        {
            name: "Blah1",
            size: 10,
        },
        {
            name: "Blah2",
            size: 5,
        },
        {
            name: "Blah3",
            size: 2,
        },
        {
            name: "Blah4",
            size: 7,
        },
        {
            name: "Blah5",
            size: 10,
        },
        {
            name: "Blah6",
            size: 2,
        },
    ]
    orgData = await orgTreeData
    const element = <div name="waterfall-outermost" style="width: 100%; min-height: 100%; overflow-x: hidden; overflow-y: auto; display: flex; align-content: center; justify-content: center; justify-content: center; background: var(--soft-gray-gradient);">
        <SquareGrid numberOfSquares="6" style="width: 80rem; max-width: 100%; height: 100%; min-height: fit-content; padding: 2rem; box-sizing: border-box;">
            {orgData.map(eachOrg=>OrgBubble({ eachOrg }))}
        </SquareGrid>
    </div>
    
    return element
}