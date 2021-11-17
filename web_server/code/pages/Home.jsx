require("../systems/on_scroll")
const Overlay = require("../skeletons/Overlay")
const Header = require("../skeletons/Header")
const Nodes = require("../components/Nodes")
const { backend } = require("quik-client")

window.backend = backend
// example of using backend data
// const names = await backend.data.productNames()
// const dataForFirst = await backend.data.vulnerabilitiesFor({product: names[0]})

module.exports = ({ children, ...properties }) => {
    return (
        <body>
            <Overlay />
            <Header />
            <div class="column centered" style="height: 100%; overflow: hidden;">
                <Nodes />
            </div>
        </body>
    )
}
