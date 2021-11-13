require("../systems/on_scroll")
const GraphDisplay = require("../skeletons/GraphDisplay")
const BaseTree = require("../skeletons/BaseTree")
const InfoGraphic = require("../skeletons/InfoGraphic")
const BubbleManager = require("../components/BubbleManager")
const Nodes = require("../components/Nodes")
const { backend } = require("quik-client")

window.backend = backend
// example of using backend data
// const names = await backend.data.productNames()
// const dataForFirst = await backend.data.vulnerabilitiesFor({product: names[0]})

module.exports = ({ children, ...properties }) => {
    return (
        <body class="column centered" style="height: 100vh; overflow: hidden;">
            <Nodes />
        </body>
    )
}
