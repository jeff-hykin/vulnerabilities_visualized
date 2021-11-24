const router = require("quik-router")

module.exports = ({ repoData, orgData }) => {
    return <div
        class="our-weak-shadow"
        style={`
            border-radius: 1rem;
            transition: all 0.2s ease-in-out 0s;
            margin-top: 0.8rem;
            padding: 0.25rem;
            background: lightgray;
            color: black;
            cursor: pointer;
        `}
        onclick={()=>{
            // TODO: record the scroll position, then do a goto, also add scrolling logic to main waterfall element
            router.goTo({ page: "product-view", orgName: orgData.name, repoName: repoData.name })
        }}
        >
            {repoData.name}
    </div>
}