const { watch } = require("@vue-reactivity/watch")
const {backend} = require("quik-client")
const { nodeTheme } = require("../systems/theme")
const { hash, wrapAroundGet } = require("../systems/utilies")
const SquareGridSizer = require("../skeletons/SquareGridSizer")
const FancyBubble = require("../skeletons/FancyBubble")

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
        setTimeout(()=>(delete circle.style.zIndex), 100)
    }
    
    // create a whole bunch of wrappers
    return element = <SquareGridSizer numberOfCells={Math.log(eachOrg.size)} >
        {circle = <FancyBubble
            color1={color1}
            color2={color2}
            onmouseover={onHover}
            onmouseout={offHover}
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
    ]
    
    const element = <div style="padding: 2rem; flex-shrink: 0; display: grid; width: 100%; aspect-ratio: 1; overflow: auto; grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;  grid-template-rows: repeat(auto-fit,10%);">
        {orgData.map(eachOrg=>OrbBubble({ eachOrg }))}
    </div>
    
    return element
}