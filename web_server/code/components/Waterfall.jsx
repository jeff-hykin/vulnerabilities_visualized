const { watch } = require("@vue-reactivity/watch")
const { nodeTheme } = require("../systems/theme")
const { hash, wrapAroundGet } = require("../systems/utilies")

const SquareGrid = require("../skeletons/SquareGrid")
const SquareGridSizer = require("../skeletons/SquareGridSizer")
const FancyBubble = require("../skeletons/FancyBubble")

const {backend} = require("quik-client")
const router = require("quik-router")

// TODO:
    // decide Repo summary format
    // decide Org summary format
    // get org data from backend (add loading page)

// 
// Repo
// 
const RepoSummaryElement = ({ repoData }) => {
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
            router.goTo({ page: "product-view", repoName: repoData.name })
        }}
        >
            {repoData.name}
    </div>
}

const RepoList = ({ repos=[], ...props }) =>{
    return <div
        class="our-weak-shadow"
        style={`
            z-index: 999999;
            height: 16vh;
            width: 18rem;
            align-self: center;
            flex-shrink: 0;
            background: white;
            border-radius: 1rem;
            overflow: auto;
            padding: 0.5rem;
            transition: all ${RepoList.animationTime/1000}s ease-in-out 0s;
        `}
        {...props}
        >
        {repos.map(each=>RepoSummaryElement({ repoData: each }))}
    </div>
}
RepoList.animationTime = 300 // miliseconds

// 
// Org
// 
const OrbBubble = ({ eachOrg })=> {
    let circle, repoListElement
    // grab an id
    const hashNumber = hash(eachOrg.name)
    // set the colors 
    let color1 = wrapAroundGet(hashNumber, nodeTheme.darkColors)
    let color2 = wrapAroundGet(hashNumber, nodeTheme.lightColors)
    // randomly swap light and dark
    if (Math.random() > 0.5) {
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
        // FIXME: add real repos
        repos={[
            {name: "repo1"},
            {name: "repo2"},
            {name: "repo3"},
        ]}
        onmouseover={(eventObject)=>{ console.log("repoListMouseOver") ;onHover(eventObject)}}
        onmouseout={offHover}
        />
    repoListElement.style.opacity = 0
    repoListElement.style.pointerEvents = "none"
    
    // create a whole bunch of wrappers
    return <SquareGridSizer numberOfCells={Math.log(eachOrg.size)} >
        {circle = <FancyBubble
            color1={color1}
            color2={color2}
            onmouseover={onHover}
            onmouseout={offHover}
            padding="5%"
            >
                <span
                    name="repo-name"
                    style={`
                        border-radius: 0.6rem;
                        padding: 0.3rem 0.5rem;
                        background: var(--translucent-charcoal);
                        color: white;
                    `}
                    >
                        {eachOrg.name}
                </span>
                {/* TODO: put other summary info here */}
        </FancyBubble>}
        {repoListElement}
    </SquareGridSizer>
}


// 
// Waterfall
// 
module.exports = ({ orgData })=>{
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
    // TODO: scale bubble text based on font-size / width%
    const element = <div name="waterfall-outermost" style="width: 100%; height: 100%; display: flex; align-content: center; justify-content: center; justify-content: center; background: var(--soft-gray-gradient);">
        <SquareGrid style="width: 80rem; max-width: 100%; padding: 2rem; box-sizing: border-box; overflow: auto; position: relative; padding-right: 8rem; right: -6rem; ">
            {orgData.map(eachOrg=>OrbBubble({ eachOrg }))}
        </SquareGrid>
    </div>
    
    return element
}