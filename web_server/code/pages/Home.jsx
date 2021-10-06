let GraphDisplay = require("../skeletons/GraphDisplay")
let FrequencyChart = require("../components/FrequencyChart")

module.exports = ({ children, ...properties }) => {
    return <body class="column centered" style="height: 100vh">
        
        <GraphDisplay sizeOfNodeInPixels={320} padding={220}>
            <h4>Howdy1</h4>
            <h4>Howdy2</h4>
            <h4>Howdy3</h4>
            <h4>Howdy4</h4>
            <h4>Howdy5</h4>
            <h4>Howdy6</h4>
            <h4>Howdy7</h4>
            <h4>Howdy8</h4>
        </GraphDisplay>
        {/* 
            <FrequencyChart elements={["F", "F", "F", "F", "F", "F", "F", "D", "D", "D", "D", "D", "C", "C", "B", "B", "B", "B", "B", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A",]} />
        */}
    </body>
}