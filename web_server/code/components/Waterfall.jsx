const { watch } = require("@vue-reactivity/watch")
const {backend} = require("quik-client")
const { nodeTheme } = require("../systems/theme")
const { hash, wrapAroundGet } = require("../systems/utilies")

const OrbBubble = ({ eachOrg })=> {
    // grab an id
    const hashNumber = hash(eachOrg.name)
    // set the colors 
    const color1 = wrapAroundGet(hashNumber, nodeTheme.darkColors)
    const color2 = wrapAroundGet(hashNumber, nodeTheme.lightColors)
    // create a whole bunch of wrappers
    return <div
        name="square-grid-cell-shaper"
        class=""
        style={`
            grid-column: span ${Math.ceil(Math.log(eachOrg.size))};
            grid-row: span ${Math.ceil(Math.log(eachOrg.size))};
            justify-self: stretch;
            aspect-ratio: 1;
            position: relative;
        `}
        >
        <div
            name="bubble-outer-part"
            class="rotateClockwise"
            style={`
                width: 100%;
                aspect-ratio: 1;
                --rotation-offset: ${hashNumber % 360}deg;
            `}
            >
            <div
                name="bubble-animated-background-part"
                class="animatedGradientBackground centered shadow"
                style={`
                    width: 100%;
                    aspect-ratio: 1;
                    --color1: ${color1};
                    --color2: ${color2};
                    border-radius: 200vw;
                `}
                >
                <div
                    name="bubble-inner-part"
                    class="rotateCounterClockwise"
                    >
                    {eachOrg.name}
                    {/* TODO: put other summary info here */}
                </div>
            </div>
        </div>
    </div>
    
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
    
    const element = <div style="padding: 2rem; flex-shrink: 0; display: grid; width: 100%; aspect-ratio: 1; overflow: auto; grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;  grid-template-rows: repeat(auto-fit,minmax(10%,10.1%));">
        {orgData.map(eachOrg=>OrbBubble({ eachOrg }))}
    </div>
    
    return element
}