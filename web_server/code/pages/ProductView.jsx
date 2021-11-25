const { watch } = require("@vue-reactivity/watch")
const router = require("quik-router")
const smartBackend = require("../systems/smart_backend")
const Positioner = require("../skeletons/Positioner")
const BaseTree = require("../skeletons/BaseTree")

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

const SummaryTag = async ({ orgName, repoName })=>{
    // TODO: use this data for something
    const summaryData = await smartBackend.getRepoSummaryDataFor(orgName, repoName)
    console.debug(`summaryData is:`,summaryData)
    return <Positioner verticalAlignment="top" horizontalAlignment="left" positionSelf="relativeToParent" top="1rem" left="1rem">
        <Title main="Org" secondary={orgName} />
        <Title main="Repo" secondary={repoName} />
    </Positioner>
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

const ChartList = async ({ orgName, repoName }) => {
    // get data from the backend
    const commitData = await smartBackend.getCommitDataFor(repoName)
    const vulnData   = await smartBackend.getVulnDataFor(repoName)
    
    console.debug(`vulnData is:`,vulnData)
    console.debug(`commitData is:`,commitData)

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

const RepoGraph = async ({ repoName }) => {
    const vulnData = await smartBackend.getVulnDataFor(repoName)
    const maxNumberOfVulns = 72 // FIXME: showing all of them makes the graph unusable
    const modifiedVulnData = vulnData.map(each=>({...each, name: each.cveId.replace(/cve-/i, ""), level: 'red'})).slice(0,maxNumberOfVulns)
    
    const branches = {
        mild:    modifiedVulnData.filter(each=>each.score<=3.3333                     ).map(each=>({...each, parent:'mild'    })),
        notable: modifiedVulnData.filter(each=>each.score >3.3333 && each.score<6.6666).map(each=>({...each, parent:'notable' })),
        major:   modifiedVulnData.filter(each=>each.score>=6.6666                     ).map(each=>({...each, parent:'major'   })),
    }
    return <BaseTree
        treeData={{
            name: "topLevel",
            parent: "null",
            level: "black",
            children: Object.entries(branches).map(([name, children])=>({
                parent: "topLevel",
                level: "none",
                name,
                children,
            })),
        }}
    />
}

const LeftSideContainer = ({ children })=>{
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

const RightSideContainer = ({ children })=>{
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
    return <main name="main-ProductView" class="centered row" style={`width: 100%; height: 100%;`} >
            <LeftSideContainer>
                <SummaryTag orgName={orgName} repoName={repoName} />
                <RepoGraph repoName={repoName} />
            </LeftSideContainer>
            
            <RightSideContainer>
                <ChartList orgName={orgName} repoName={repoName} />
            </RightSideContainer>
    </main>
}
