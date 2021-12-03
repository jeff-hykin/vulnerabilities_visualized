const Positioner = require("../skeletons/Positioner")
const Circle = require("./Svg/Circle")
const Rectangle = require("./Svg/Rectangle")
const smartBackend = require("../systems/smart_backend")
const DateTime = require("good-date")
const { stats, numbers } = require("../systems/utilities")
const { vulnColors } = require("../systems/theme")
const router = require("quik-router")
const { watch } = require("@vue-reactivity/watch")

const severityCategory = (each)=>{
    if (each.score<=3.3333) {
        return "mild"
    } else if (each.score<6.6666) {
        return "notable"
    } else {
        return "major"
    }
}

const Title = ({text})=>{
    return <h4
        style={{
            padding: "3rem",
            fontSize: "1.8rem",
            textDecoration: "underline",
            marginLeft: "30px",
            width: "100%",
            display: "block",
            fontFamily: "Roboto",
            fontWeight: "100",
            color: "gray",
            textAlign: "left",
        }}
        >
            {text}
    </h4>
}
    
// 
// Hover Tag (probably should be in systems/)
// 
const hoverTag = <div
    class="our-weak-shadow"
    style={{
        opacity: 0,
        position: "fixed",
        background: "white",
        borderRadius: "3px",
        padding: "4px 5px 2px",
        transition: "all 0.5s ease-in-out 0s",
        zIndex:999999,
    }}
    />
const updateHoverTag = (eventObject) => {
    if (hoverTag.parentElement != document.body) {
        document.body.append(hoverTag)
    }
    // if the element has a title
    if (eventObject.target && eventObject.target.onHoverElement) {
        // give it the right content
        hoverTag.innerHTML = ""
        hoverTag.appendChild(eventObject.target.onHoverElement)
        // put it in the right position
        hoverTag.style.left = `${eventObject.clientX}px`
        hoverTag.style.top  = `${eventObject.clientY}px`
        // show it
        hoverTag.style.opacity = 1
    } else {
        // hide it
        hoverTag.style.opacity = 0
    }
}
watch(router.pageInfo, updateHoverTag) // fixes a small bug

const YearMarkers = ({vulnStats, timeCompressor})=> {
    const [min,max,range,average,median,sum] = vulnStats
    const newestDate = new DateTime(max*1000)
    const oldestDate = new DateTime(min*1000)
    let runningYear = oldestDate.year
    const yearIncrementor = new DateTime([oldestDate.year+1])
    const dates = []
    while (true) {
        runningYear++
        dates.push(new DateTime([runningYear]))
        if (newestDate.unix <= dates.slice(-1)[0]) {
            break
        }
    }
    dates.pop()
    
    return <Positioner positionSelf="relativeToParent" left={0} top={0} fontFamily="Roboto">
        <Title text="Year" />
        <Positioner>
            {dates.map(
                each=><Positioner positionSelf="relativeToParent" left={85} top={timeCompressor(each.unix/1000)} font-size="16pt" transform="translateY(-130%)" min-width="max-content">
                    {`Jan ${each.year}`}
                </Positioner>
            )}
        </Positioner>
    </Positioner>
}

const VulnerabilityDots = ({vulnStats, modifiedVulnData, timeCompressor, yAxisScale, yAxisPadding}) => {
    const [min,max,range,average,median,sum] = vulnStats
    // create some timeline dots
    const xAxisScale = 10
    const xAxisPadding = 100
    const sizeScale = 7
    // create a circle for each dot
    const vulnDots = modifiedVulnData.map(each=>
        <Circle
            size={`${(each.score+1)*sizeScale}px`}
            y={timeCompressor(each.unixSeconds)}
            x={(((each.score/2) * xAxisScale) + xAxisPadding)+ (Math.random()*120)}
            color={vulnColors.severity[severityCategory(each)]}
            borderColor="white"
            onHoverElement={
                <Positioner padding="1rem" maxHeight="30vh" overflow="auto" lineHeight="1.3rem">
                    <span>    <b>Id</b>: {each.cveId}                                                           </span>
                    <span>    <b>Difficulty to perform</b>: {each.complexity}                                   </span>
                    <span>    <b>Severity</b>: {`${each.score}`}                                                </span>
                    <span>    <b>Date</b>: {`${each.date.date}`}                                                </span>
                    <span>    <b>Attibutes</b>: {`${each.vulnerabilityTypes}`.replace(/^[ \t\n]*$/g,"[None]")}  </span>
                    <Positioner width="100%" minHeight="1rem" />
                    <span>    <b>Breakdown of destruction potential</b>: <br/>                                  </span>
                    <span style={{paddingLeft: "1.2rem"}}>
                        <b>Availability</b>: {each.availability} <br/>
                        <b>Confidentiality</b>: {each.confidentiality} <br/>
                        <b>Integrity</b>: {each.integrity} <br/>
                    </span>
                    <Positioner width="100%" minHeight="1rem" />
                    <span>    <b>Description</b>    </span>
                    <span style={{
                        display: "flex",
                        minWidth:"130px",
                        width: "350px",
                        maxWidth: "80vw",
                        padding: "7px",
                        color: "gray",
                        paddingBottom: "3.5rem",
                    }} >
                        {each.description}
                    </span>
                </Positioner>
            }
            />
    )
    const minHeight = ((max-min)*yAxisScale) + yAxisPadding + yAxisPadding
    return <Positioner>
        <Title text="Vulnerabilites" />
        <svg style={`min-height: ${minHeight}px;border-left: solid lightgray 1px;`} width="20rem" height={minHeight}>
            {vulnDots}
        </svg>
    </Positioner>
}

const CommitBars = ({commitData, timeCompressor, yAxisScale, yAxisPadding, minHeight}) => {
    if (!commitData) {
        commitData = []
    }
    const byMonth = {}
    for (const eachCommit of commitData) {
        const date = new DateTime(eachCommit.commitDate)
        const monthKey = JSON.stringify([date.year, date.month])
        if (!(monthKey in byMonth)) {
            byMonth[monthKey] = 0
        }
        byMonth[monthKey] += eachCommit.linesChanged
    }
    const scaledMonthPairs = Object.entries(byMonth).map(
        ([monthKey, linesChanged])=>({
            y: timeCompressor((new DateTime(JSON.parse(monthKey))).unix/1000),
            width: Math.pow(Math.log(linesChanged), 2),
            date: (new DateTime(JSON.parse(monthKey))).date,
            linesChanged,
        })
    )
    const adjustmentBecauseSomethingIsSlightlyOff = 30 // corrisponds with the 
    return <Positioner>
        <Title text="Lines Changed" />
        <svg style={`min-height: ${minHeight}px; transform: scaleX(-1); border-right: solid lightgray 1px;`} width="20rem" height={minHeight} onmouseover={updateHoverTag}>
            {scaledMonthPairs.map(
                ({ y, width, date, linesChanged})=><Rectangle x={0} y={y-30} width={width} height={25} onHoverElement={<span>{`${date} (${linesChanged})`}</span>} />
            )}
        </svg>
        {/* {scaledMonthPairs.length==0 ? <span style=>[No Data]</span> : ""} */}
    </Positioner>
}

module.exports = async ({ orgName, repoName, summaryData }) => {
    const commitData = await smartBackend.getFullCommitDataFor(repoName)
    // FIXME: add timeline markers
    const maxNumberOfVulns = Infinity
    const vulnData = await smartBackend.getVulnDataFor(repoName)
    const modifiedVulnData = vulnData.map(each=>({
        ...each,
        name: each.cveId.replace(/cve-/i, ""),
        level: 'red',
        date: new DateTime(each.publishDate),
        unixSeconds: (new DateTime(each.publishDate)).unix / 1000
    })).slice(0,maxNumberOfVulns)
    
    // 
    // time compression
    // 
    const vulnStats = stats(modifiedVulnData.map(each=>each.unixSeconds))
    const [min,max,range,average,median,sum] = vulnStats
    const yAxisScale = 0.000015
    const yAxisPadding = 100
    const minHeight = ((max-min)*yAxisScale) + yAxisPadding + yAxisPadding
    const timeCompressor = (eachTimeInUnixSeconds)=> {
        return ((max - eachTimeInUnixSeconds)*yAxisScale) + yAxisPadding
    }
    
    return <Positioner verticalAlignment="top" horizontalAlignment="center" height="100%" width="100%" position="absolute" onmouseover={updateHoverTag}>
        <Positioner row horizontalAlignment="right" maxHeight="100%" overflowY="auto" overflowX="hidden" width="100%">
            <YearMarkers
                vulnStats={vulnStats}
                timeCompressor={timeCompressor}
                />
            <VulnerabilityDots
                modifiedVulnData={modifiedVulnData}
                vulnStats={vulnStats}
                yAxisScale={yAxisScale}
                yAxisPadding={yAxisPadding}
                timeCompressor={timeCompressor}
                />
            <CommitBars
                commitData={commitData}
                yAxisScale={yAxisScale}
                yAxisPadding={yAxisPadding}
                timeCompressor={timeCompressor}
                minHeight={minHeight}
                />
        </Positioner>
    </Positioner>
}