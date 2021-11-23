const { watch } = require("@vue-reactivity/watch")
const {backend} = require("quik-client")
const { nodeTheme } = require("../systems/theme")
const { hash, wrapAroundGet } = require("../systems/utilies")
const SquareGrid = require("../skeletons/SquareGrid")
const SquareGridSizer = require("../skeletons/SquareGridSizer")
const FancyBubble = require("../skeletons/FancyBubble")

const ChildBubble = ({ repoData, startPosition, endPosition }) => {
    
}

const OrbBubble = ({ eachOrg })=> {
    let element, circle
    // grab an id
    const hashNumber = hash(eachOrg.name)
    // set the colors 
    const color1 = wrapAroundGet(hashNumber, nodeTheme.darkColors)
    const color2 = wrapAroundGet(hashNumber, nodeTheme.lightColors)
    // hover
    const onHover = ()=>{
        setTimeout(()=>(circle.style.zIndex=9999), 100)
    }
    const offHover = ()=>{
        setTimeout(()=>(circle.style.zIndex=0), 100)
    }
    
    // create a whole bunch of wrappers
    return element = <SquareGridSizer numberOfCells={Math.log(eachOrg.size)} >
        {circle = <FancyBubble
            color1={color1}
            color2={color2}
            onmouseover={onHover}
            onmouseout={offHover}
            padding="5%"
            >
                {eachOrg.name}
                {/* TODO: put other summary info here */}
        </FancyBubble>}
    </SquareGridSizer>
}

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
    const element = <div style="width: 100%; display: flex; align-items: center; align-content: center; justify-content: center; justify-content: center;">
        <SquareGrid style="width: 80rem; max-width: 100%; padding: 2rem; box-sizing: border-box; overflow: auto; position: relative; padding-right: 8rem; right: -6rem; ">
            {orgData.map(eachOrg=>OrbBubble({ eachOrg }))}
        </SquareGrid>
    </div>
    
    return element
}