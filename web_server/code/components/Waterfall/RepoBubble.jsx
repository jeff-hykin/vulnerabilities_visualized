const router = require("quik-router")

const { nodeTheme } = require("../../systems/theme")
const { hash, wrapAroundGet } = require("../../systems/utilities")
const SquareGridSizer = require("../../skeletons/SquareGridSizer")
const FancyBubble = require("../../skeletons/FancyBubble")

const magicNumberThatMakesTheUILookGood1 = 1.5  // scales down the size of the bubbles
const minPadding = 1.5
const maxPadding = 12

// 
// helpers
// 
const computeColors = (index) => {
    const color1 = wrapAroundGet(index, nodeTheme.darkColors)
    const color2 = wrapAroundGet(index, nodeTheme.lightColors)
    // randomly swap light and dark to add visual variation
    if (Math.random() > 0.5) {
        return [ color1, color2 ]
    } else {
        return [ color2, color1 ]
    }
}
const computePaddingAndCellCount = (size) => {
    const numberOfCells = (size/magicNumberThatMakesTheUILookGood1)+1
    let paddingAmount = 0
    // randomize for small repos
    if (size == 1) {
        paddingAmount = Math.random()*(minPadding - maxPadding) + maxPadding
    // make it depend on size for big repos
    } else {
        const relativeSmallness = Math.ceil(numberOfCells) - numberOfCells
        paddingAmount = (1-relativeSmallness)*(minPadding - maxPadding) + maxPadding
    }
    return [ paddingAmount, Math.ceil(numberOfCells) ]
}

// 
// Repo
// 
const RepoBubble = ({ eachRepo })=> {
    const [ color1, color2 ] = computeColors(++RepoBubble.index)
    const [ paddingAmount, numberOfCells ] = computePaddingAndCellCount(eachRepo.size)
    
    // create a whole bunch of wrappers
    return <SquareGridSizer numberOfCells={numberOfCells} >
        <FancyBubble
            color1={color1}
            color2={color2}
            rotationOffset={`${Math.random()*360}deg`}
            // padding basically adjusts the size of bubble
            onclick={(eventObject)=>router.goTo({
                page: "ProductView",
                orgName: eachRepo.orgName,
                repoName: eachRepo.name,
            })}
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
                            {eachRepo.name}
                    </span>
                    {/* Repo count */}
                    <br />
                    {`(${eachRepo.size})` }
                </div>
        </FancyBubble>
    </SquareGridSizer>
}
RepoBubble.index = 0
router.addEventListener("go", ()=>RepoBubble.index=0) // reset index when page changes

module.exports = RepoBubble