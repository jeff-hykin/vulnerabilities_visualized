require("../systems/on_scroll")
const GraphDisplay = require("../skeletons/GraphDisplay")
const BaseTree = require("../skeletons/BaseTree")
const InfoGraphic = require("../skeletons/InfoGraphic")
const BubbleManager = require("../components/BubbleManager")
const { backend } = require("quik-client")

// getting data example: gun.get("vulns").get("testRepo").once(value=>a=value)
// setting data example: gun.get("vulns").put({ "testRepo": { a: 1 }  })

// the content below would load the data... if it were big enough to fit in a javascript string
// window.data.vulerabilities = require("../../../data/vulnerabilities_array.json")
// window.data.repos.atom = require("../../../data/commit_logs/atom.json")

module.exports = ({ children, ...properties }) => {
    return (
        <body class="column centered" style="height: 100vh; overflow: hidden;">
            
            <BubbleManager />

            <InfoGraphic>
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
    )
}
