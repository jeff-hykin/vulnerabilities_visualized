require("../systems/on_scroll")
const Overlay = require("../skeletons/Overlay")
const Nodes = require("../components/Nodes")
const Waterfall = require("../components/Waterfall")
const { backend } = require("quik-client")

window.backend = backend
// example of using backend data
// const names = await backend.data.productNames()
// const dataForFirst = await backend.data.vulnerabilitiesFor({product: names[0]})

module.exports = ({ children, ...properties }) => {
    return <div style="height: 100%; overflow: scroll; justify-content: flex-start;" class="column centered">
        <Waterfall />
    </div>
}
