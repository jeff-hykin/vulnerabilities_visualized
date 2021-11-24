const RepoSummaryElement = require("./RepoSummaryElement")

const RepoList = ({ repos={}, orgData, ...props }) =>{
    return <div
        class="our-weak-shadow"
        style={`
            z-index: 999999;
            height: fit-content;
            max-height: 17vh;
            width: 18rem;
            align-self: center;
            flex-shrink: 0;
            background: white;
            border-radius: 1rem;
            overflow: auto;
            padding: 0.5rem;
            margin-top: -25px;
            transition: all ${RepoList.animationTime/1000}s ease-in-out 0s;
        `}
        {...props}
        >
            {Object.entries(repos).map(
                ([name, info]) => RepoSummaryElement({ repoData: {name, ...info}, orgData })
            )}
    </div>
}
RepoList.animationTime = 300 // miliseconds

module.exports = RepoList