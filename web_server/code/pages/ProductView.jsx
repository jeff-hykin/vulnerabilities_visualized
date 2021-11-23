const { watch } = require("@vue-reactivity/watch")
const router = require("quik-router")

// TODO:
    // retreive repo data from backend

module.exports = ({ ...properties }) => {
    const whichRepo = router.pageInfo.repoName
    return <main
        class="centered row"
        style={`
            width: 100%;
            height: 100%;
        `}
        >
        <div name="left" class="centered" style="width: 50%; height: 100%;">
            Left Side
        </div>
        <div name="right" class="centered" style="width: 50%; height: 100%; background: rgba(0, 0, 0, 0) radial-gradient(circle, rgb(243, 243, 243) 0%, rgba(236, 236, 236, 0.9) 100%) repeat scroll 0% 0%;">
            Right Side
        </div>
    </main>
}
