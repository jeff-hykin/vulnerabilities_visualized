const { watch } = require("@vue-reactivity/watch")
const router = require("quik-router")

// TODO:
    // retreive repo data from backend


// 
// 
// helpers 
// 
// 

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

const ChartCard = ({ children, ...props }) => {
    return <div
        class="centered our-weak-shadow animate"
        style="width: 100%; height: fit-content; min-height: 8rem; margin-top: 1rem; background-color: white; border-radius: 1.5rem; padding: 1.5rem;"
        {...props}
        >
            {children}
    </div>
}

const ChartList = ({ allRepoData }) => {
    return <div style="height: 100%; width: 100%; max-width: 50rem; padding: 2rem; box-sizing: border-box;">
        
        <ChartCard name="card-1:dummy-card">
            {/* FIXME */}
            I'm a Dummy Card 1, Replace me with an actual chart
            {/* FIXME */}
        </ChartCard>
        
        <ChartCard name="card-1:dummy-card">
            {/* FIXME */}
            I'm a Dummy Card 2, Replace me with an actual chart
            {/* FIXME */}
        </ChartCard>
        
    </div>
}

const LeftSide = ({ children })=>{
    return <div
        name="left-side"
        class="centered"
        style={`
            width: 50%;
            height: 100%;
            position: relative;
        `}
        >
            {children}
    </div>
}

const RightSide = ({ children })=>{
    return <div 
        name="right-side"
        class="centered"
        style={`
            width: 50%;
            height: 100%;
            position: relative;
            background: rgba(0, 0, 0, 0) radial-gradient(circle, rgb(243, 243, 243) 0%, rgba(236, 236, 236, 0.9) 100%) repeat scroll 0% 0%;
        `}
        >
            {children}
    </div>
}

// 
// 
// Main
// 
// 
module.exports = async ({ ...properties }) => {
    const { repoName, orgName } = router.pageInfo
    return <main
        name="main-product-view"
        class="centered row"
        style={`
            width: 100%;
            height: 100%;
        `}
        >
            <LeftSide>
                Left Side
                <br />
                TODO: Put Anythony's Tree Component Here
                <SummaryTag orgName={orgName} repoName={repoName} />
            </LeftSide>
            
            <RightSide>
                <ChartList />
            </RightSide>
    </main>
}
