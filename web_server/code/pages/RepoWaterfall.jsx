const Waterfall = require("../skeletons/Waterfall")
const RepoStream = require("../components/Waterfall/RepoStream")

module.exports = async ({ children, ...properties }) => {
    const repoStreamElements = await RepoStream()
    return <main style="height: 100%; overflow: scroll; justify-content: flex-start;" class="column centered">
        <Waterfall>
            {repoStreamElements}
        </Waterfall>
    </main>
}
