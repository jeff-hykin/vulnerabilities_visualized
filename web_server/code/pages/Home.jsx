const GraphDisplay = require("../skeletons/GraphDisplay")
const InfoGraphic = require("../skeletons/InfoGraphic")

module.exports = ({ children, ...properties }) => {
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
            {/* <div style="min-height: 10rem">
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
            </div> */}
        </InfoGraphic>
    </body>
}