require("../systems/on_scroll")
const GraphDisplay = require("../skeletons/GraphDisplay")
const BaseTree = require("../skeletons/BaseTree")
const InfoGraphic = require("../skeletons/InfoGraphic")
const BubbleManager = require("../components/BubbleManager")
const { backend } = require("quik-client")


window.db = require("../systems/db")
window.quik = require("quik-client")

// db.get(["vulns", "ios"])
// get all products: gun.get("vulns").map((v,key)=>console.log("v:",key)).once(_=>console.log("DONE!"))

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
