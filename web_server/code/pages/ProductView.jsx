const { watch } = require("@vue-reactivity/watch")
const router = require("quik-router")
const smartBackend = require("../systems/smart_backend")
const { numbers, sum, getFrequencies, arrayAsObjectKeys } = require("../systems/utilities")

// components
const Positioner = require("../skeletons/Positioner")
const ChartCard = require("../skeletons/ChartCard")
const FancyBubble = require("../skeletons/FancyBubble")
const RepoGraph = require("../components/RepoGraph")
const Title = require("../components/Title")
const FrequencyChart = require("../components/FrequencyChart")
const DateSeverityChart = require("../components/Charts/DateSeverityChart")
const AvailabilityIntegrityConfidentiality = require("../components/Charts/AvailabilityIntegrityConfidentiality")


// 
// 
// helpers 
// 
// 

const SummaryTag = async ({ orgName, repoName })=>{
    // TODO: use this data for something
    const summaryData = await smartBackend.getRepoSummaryDataFor(orgName, repoName)
    console.debug(`summaryData is:`,summaryData)
    return <Positioner verticalAlignment="top" horizontalAlignment="left" positionSelf="relativeToParent" top="1rem" left="1rem">
        <Title main="Org" secondary={orgName} />
        <Title main="Repo" secondary={repoName} />
    </Positioner>
}

const ChartList = async ({ orgName, repoName }) => {
    // get data from the backend
    const commitData = await smartBackend.getCommitDataFor(repoName)
    const vulnData   = await smartBackend.getVulnDataFor(repoName)
    console.debug(`vulnData is:`,vulnData.slice(0,50))
    console.debug(`commitData is:`,(commitData||[]).slice(0,50))
    
    return <div style="width: 100%; max-width: 50rem; padding: 2rem; box-sizing: border-box;">
        
        <ChartCard name="severity-bar-chart">
            <FrequencyChart
                label="Severity"
                height={100}
                width={200}
                data={{
                    ...[...Array(11)], // "0":0, "1":0, .... "10":0,
                    ...getFrequencies(
                        vulnData.map(each=>Math.round(each.score))
                    )
                }}
                />
        </ChartCard>
        
        <ChartCard name="by-year">
            <DateSeverityChart vulnData={vulnData} />
        </ChartCard>
        
        <ChartCard name="AvailabilityIntegrityConfidentiality">
            <AvailabilityIntegrityConfidentiality vulnData={vulnData} />
        </ChartCard>
        
        <ChartCard name="card-1:dummy-card">
            
            {/* FIXME */}
            I'm a Dummy Card 2, Replace me with an actual chart
            {/* FIXME */}
        </ChartCard>
        
    </div>
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
    console.log(`bout to make right side`)
    return <Positioner
        name="right-side"
        positionSelf="relativeToSelf"
        width="50%"
        maxHeight="100%"
        overflow="hidden"
        background="rgba(0, 0, 0, 0) radial-gradient(circle, rgb(243, 243, 243) 0%, rgba(236, 236, 236, 0.9) 100%) repeat scroll 0% 0%"
        >
            {/* Wrappers needed because CSS is dumb (outer one needs to be relative, middle needs absolute, inner is for scrolling and alignment) */}
            <div style="position: absolute; width: 100%; height: 100%;" >
                <Positioner verticalAlignment="top" horizontalAlignment="center" maxHeight="100%" width="100%" overflow="auto">
                    {children}
                </Positioner>
            </div>
    </Positioner>
}

// 
// 
// Main
// 
// 
module.exports = async ({ ...properties }) => {
    const { repoName, orgName } = router.pageInfo
    return <main name="ProductView" style={`width: 100%; flex: 1 0 auto;`} >
            <div style={{ height: "100%", maxHeight: "100%", width: "100%", minWidth: "100%", maxWidth: "100%", position: 'relative', display: 'flex' }}>
                <LeftSideContainer>
                    <SummaryTag orgName={orgName} repoName={repoName} />
                    <RepoGraph repoName={repoName} />
                </LeftSideContainer>
                
                <RightSideContainer>
                    <ChartList orgName={orgName} repoName={repoName} />
                </RightSideContainer>
            </div>
    </main>
}
