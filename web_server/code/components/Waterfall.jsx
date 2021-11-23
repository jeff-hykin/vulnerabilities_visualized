const { watch } = require("@vue-reactivity/watch")
const {backend} = require("quik-client")

module.exports = ({ orgData })=>{
    // DEBUGGING
    orgData = [
        {
            name: "Blah",
            size: 10,
        },
        {
            name: "Blah",
            size: 5,
        },
        {
            name: "Blah",
            size: 2,
        },
        {
            name: "Blah",
            size: 7,
        },
        {
            name: "Blah",
            size: 10,
        },
    ]
    
    const element = <div style="padding: 2rem; flex-shrink: 0; display: grid; width: 100%; aspect-ratio: 1; overflow: auto; grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;  grid-template-rows: repeat(auto-fit,minmax(10%,10.1%));">
        {orgData.map(eachOrg=>
            <div
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
                    `}
                    >
                    <div
                        name="bubble-outer-part"
                        class="animatedGradientBackground centered shadow"
                        style={`
                            width: 100%;
                            aspect-ratio: 1;
                            --color1: var(--blue);
                            --color2: var(--red);
                            border-radius: 200vw;
                        `}
                        >
                        <div
                            name="bubble-inner-part"
                            class="rotateCounterClockwise"
                            >
                            {eachOrg.name}
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
    
    return element
}