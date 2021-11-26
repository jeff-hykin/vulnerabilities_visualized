const Waterfall = require("../skeletons/Waterfall")
const OrgStream = require("../components/Waterfall/OrgStream")

module.exports = async ({ children, ...properties }) => {
    // since OrgStream is a fragment, it needs to be waited on directly
    const repoStreamElements = await OrgStream()
    return <main style="height: 100%; overflow: scroll; justify-content: flex-start;" class="column centered">
        <Waterfall>
            {repoStreamElements}
        </Waterfall>
    </main>
}
