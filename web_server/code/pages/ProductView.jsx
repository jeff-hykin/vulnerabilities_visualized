const { watch } = require("@vue-reactivity/watch")
const router = require("quik-router")
const smartBackend = require("../systems/smart_backend")
const { numbers, sum, getFrequencies, arrayAsObjectKeys } = require("../systems/utilities")

// components
const Positioner = require("../skeletons/Positioner")
const ChartCard = require("../skeletons/ChartCard")
const FancyBubble = require("../skeletons/FancyBubble")
const Timeline = require("../components/Timeline")
const Title = require("../components/Title")
const FrequencyChart = require("../components/FrequencyChart")
const DateSeverityChart = require("../components/Charts/DateSeverityChart")
const AvailabilityIntegrityConfidentiality = require("../components/Charts/AvailabilityIntegrityConfidentiality")
const AttributeFrequency = require("../components/Charts/AttributeFrequency")


// 
// 
// helpers 
// 
// 

const SummaryTag = async ({ orgName, repoName, summaryData })=>{
    return <Positioner row verticalAlignment="top" horizontalAlignment="space-between" width="100%" padding="1rem 3rem">
        <Positioner horizontalAlignment="left">
            <Title main="Project" scale={1.2} secondary={repoName} />
            <Positioner paddingTop="0.5rem" />
            <Title main="Orgianization" scale={0.8} secondary={orgName} />
        </Positioner>
        
        <Positioner>
            <Title main="Vulnerability Metrics:" />
            <Positioner paddingLeft="2rem">
                <span>    <b>Total Quantity</b>: {`${summaryData.numberOfVulnerabilies}`}      </span>
                <span>    <b>Total Severity</b>: {`${summaryData.magnitudeOfVulnerabilites}`}  </span>
                <span>    <b>Most Recent</b>: {`${summaryData.newestVulnerabilityTime}`}       </span>
                <span>    <b>Oldest</b>: {`${summaryData.oldestVulnerabilityTime}`}            </span>
            </Positioner>
        </Positioner>
    </Positioner>
}

const ChartList = async ({ orgName, repoName, summaryData }) => {
    // get data from the backend
    const commitData = await smartBackend.getFullCommitDataFor(repoName)
    const vulnData   = await smartBackend.getVulnDataFor(repoName)
    console.debug(`vulnData is:`,vulnData.slice(0,50))
    console.debug(`commitData is:`,(commitData||[]).slice(0,50))
    
    return <div style="width: 100%; max-width: 50rem; padding: 2rem; box-sizing: border-box;">
        
        <ChartCard name="severity-bar-chart">
            <SummaryTag orgName={orgName} repoName={repoName} summaryData={summaryData} />
        </ChartCard>
        
        <ChartCard name="severity-bar-chart">
            <FrequencyChart
                label="Severity"
                height={100}
                width={200}
                data={{
                    "1":0,
                    "2":0,
                    "3":0,
                    "4":0,
                    "5":0,
                    "6":0,
                    "7":0,
                    "8":0,
                    "9":0,
                    ...getFrequencies(
                        vulnData.map(each=>Math.round(each.score))
                    )
                }}
                />
        </ChartCard>
        
        <ChartCard name="DateSeverityChart">
            <DateSeverityChart vulnData={vulnData} />
        </ChartCard>
        
        <ChartCard name="AvailabilityIntegrityConfidentiality">
            <AvailabilityIntegrityConfidentiality vulnData={vulnData} />
        </ChartCard>
        
        <ChartCard name="AttributeFrequency">
            <AttributeFrequency vulnData={vulnData} />
        </ChartCard>
        
    </div>
}

const LeftSideContainer = ({ children })=>{
    return <div
        name="left-side"
        class="our-shadow-2 centered"
        style={`
            width: 50%;
            height: 100%;
            position: relative;
            z-index: 2;
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
                <Positioner name="scroller" class="hide-scrollbar" verticalAlignment="top" horizontalAlignment="center" maxHeight="100%" width="100%" overflow="auto">
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
    const { orgName, repoName } = router.pageInfo
    const summaryData = await smartBackend.getRepoSummaryDataFor(orgName, repoName)
    return <main name="ProductView" style={`width: 100%; flex: 1 0 auto; overflow: hidden;`} class="hide-scrollbar" >
            <div style={{ height: "100%", maxHeight: "100%", width: "100%", minWidth: "100%", maxWidth: "100%", position: 'relative', display: 'flex' }}>
                <LeftSideContainer>
                    <Timeline orgName={orgName} repoName={repoName} summaryData={summaryData} />
                </LeftSideContainer>
                
                <RightSideContainer>
                    <ChartList orgName={orgName} repoName={repoName} summaryData={summaryData} />
                </RightSideContainer>
            </div>
    </main>
}
