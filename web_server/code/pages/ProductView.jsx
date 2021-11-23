const { watch } = require("@vue-reactivity/watch")
const router = require("quik-router")

// TODO:
    // retreive repo data from backend

const Title = ({ main, secondary }) => {
    return <h4 style="font-size: 20pt; font-weight: 100;">
        <span style="text-decoration: underline;">{`${main}`}</span> {secondary?`: ${secondary}`:""}
    </h4>
}

const SummaryTag = ({ orgName, repoName })=>{
    return <div
        style={`
            position: absolute;
            top: 1rem;
            left: 1rem;
            text-align: left;
        `}
        >
            <Title main="Org" secondary={orgName} />
            <Title main="Repo" secondary={repoName} />
    </div>
}

module.exports = async ({ ...properties }) => {
    const { repoName, orgName } = router.pageInfo
    return <main
        class="centered row"
        style={`
            width: 100%;
            height: 100%;
        `}
        >
        <div
            name="left"
            class="centered"
            style={`
                width: 50%;
                height: 100%;
                position: relative;
            `}
            >
                Left Side
                <SummaryTag orgName={orgName} repoName={repoName} />
        </div>
        <div 
            name="right"
            class="centered"
            style={`
                width: 50%;
                height: 100%;
                position: relative;
                background: rgba(0, 0, 0, 0) radial-gradient(circle, rgb(243, 243, 243) 0%, rgba(236, 236, 236, 0.9) 100%) repeat scroll 0% 0%;
            `}
            >
                Right Side
        </div>
    </main>
}
