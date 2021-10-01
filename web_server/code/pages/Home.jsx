let GraphDisplay = require("../skeletons/GraphDisplay")

module.exports = ({ children, ...properties }) => {
    return <body class="column centered">
        
        <div class="circle centered shadow" style="--size: 25rem; color: white; background-color: var(--blue)">
            <h2>
                Howdy!
            </h2>
        </div>
        
        <GraphDisplay sizeOfNodeInPixels={220}>
            <div>Howdy1</div>
            <div>Howdy2</div>
            <div>Howdy3</div>
            <div>Howdy4</div>
        </GraphDisplay>
        
    </body>
}