require("../systems/on_scroll")
const GraphDisplay = require("../skeletons/GraphDisplay")
const InfoGraphic = require("../skeletons/InfoGraphic")

module.exports = ({ children, ...properties }) => {
    let thing
    // setTimeout(() => {
    //     let listener = e=>(e.preventDefault(),console.log(e))
    //     console.log(`thing is:`,thing)
    //     thing.addEventListener("scroll", listener)
    //     // thing.addEventListener("wheel", listener)
    //     // thing.addEventListener("onscroll", listener)
    //     // thing.addEventListener("onScroll", listener)
    //     // thing.addEventListener("onsscroll", listener)
    //     // thing.addEventListener("sscroll", listener)
    // }, 2000)
    return <body class="column centered" style="height: 100vh; overflow: hidden;">
        
        <GraphDisplay sizeOfNodeInPixels={300} padding={200}>
            <h4>Howdy1</h4>
            <h4>Howdy2</h4>
            <h4>Howdy3</h4>
            <h4>Howdy4</h4>
            <h4>Howdy5</h4>
            <h4>Howdy6</h4>
            <h4>Howdy7</h4>
            <h4>Howdy8</h4>
        </GraphDisplay>
        
        
        <InfoGraphic>
            <div class="centered" style="width: 100%; transform: scale(4)" >
                {thing = <div style="height: 1rem; width: 2rem; overflow: scroll; background-color: red;">
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                    hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii<br></br>
                </div>}
            </div>
            
            <div style="min-height: 10rem">
                <h3>Test Data</h3>
            </div>
            <div style="min-height: 10rem">
                <h3>Test Data</h3>
            </div>
            <div style="min-height: 10rem">
                <h3>Test Data</h3>
            </div>
            <div style="min-height: 10rem">
                <h3>Test Data</h3>
            </div>
        </InfoGraphic>
    </body>
}