require("../systems/on_scroll")
const GraphDisplay = require("../skeletons/GraphDisplay")
const BaseTree = require("../skeletons/BaseTree")
const InfoGraphic = require("../skeletons/InfoGraphic")
const OrgBubble = require("../components/OrgBubble")

window.data = {}
window.data.repos = {}
// the content below would load the data... if it were big enough to fit in a javascript string
// window.data.vulerabilities = require("../../../data/vulnerabilities_array.json")
// window.data.repos.atom = require("../../../data/commit_logs/atom.json")

const repoData = {
    name: "topLevel",
    parent: "null",
    blurb: 10,
    type: "black",
    level: "black",
    children: [
        {
            name: "midLevel",
            parent: "topLevel",
            blurb: 5,
            type: "black",
            level: "none",
            children: [
                {
                    name: "lowA",
                    parent: "midLevel",
                    blurb: 5,
                    type: "Type of bug",
                    level: "red",
                },
                {
                    name: "lowB",
                    parent: "midLevel",
                    blurb: 18,
                    type: "Type of vulnerability",
                    level: "red",
                },
            ],
        },
        {
            name: "midLevelB",
            parent: "topLevel",
            blurb: 10,
            type: "grey",
            level: "none",
            children: [
                {
                    name: "lowC",
                    parent: "midLevelB",
                    blurb: 5,
                    type: "Type of vulnerability",
                    level: "red",
                },
                {
                    name: "lowD",
                    parent: "midLevelB",
                    blurb: 18,
                    type: "Type of vulnerability",
                    level: "red",
                },
            ],
        },
    ],
}

const org = [repoData, repoData]

module.exports = ({ children, ...properties }) => {
    return (
        <body class="column centered" style="height: 100vh; overflow: hidden;">
            <OrgBubble org={org} orgSelected={false} treeSelected={false} />

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
