const Positioner = require("../skeletons/Positioner")
const Circle = require("../components/Svg/Circle")
const smartBackend = require("../systems/smart_backend")
const DateTime = require("good-date")
const { stats } = require("../systems/utilities")
const { vulnColors } = require("../systems/theme")


const severityCategory = (each)=>{
    if (each.score<=3.3333) {
        return "mild"
    } else if (each.score<6.6666) {
        return "notable"
    } else {
        return "major"
    }
}
const hoverTag = <div
    class="our-weak-shadow"
    style={{
        opacity: 0,
        position: "fixed",
        background: "white",
        borderRadius: "3px",
        padding: "4px 5px 2px",
        transition: "all 0.5s ease-in-out 0s",
    }}
    />
const updateHoverTag = (eventObject) => {
    if (hoverTag.parentElement != document.body) {
        document.body.append(hoverTag)
    }
    // if the element has a title
    if (eventObject.target.onHoverElement) {
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

module.exports = async ({ orgName, repoName }) => {
    // FIXME: add timeline markers
    const maxNumberOfVulns = Infinity
    const vulnData = await smartBackend.getVulnDataFor(repoName)
    const summaryData = await smartBackend.getRepoSummaryDataFor(orgName, repoName)
    const modifiedVulnData = vulnData.map(each=>({
        ...each,
        name: each.cveId.replace(/cve-/i, ""),
        level: 'red',
        date: new DateTime(each.publishDate),
        unixSeconds: (new DateTime(each.publishDate)).unix / 1000
    })).slice(0,maxNumberOfVulns)
    const [min,max,range,average,median,sum] = stats(modifiedVulnData.map(each=>each.unixSeconds))
    console.log(`max is:`,max)
    console.log(`min is:`,min)
    console.log(`range is:`,range)
    
    // create some timeline dots
    const yAxisScale = 0.000015
    const yAxisPadding = 100
    const xAxisScale = 10
    const xAxisPadding = 100
    const sizeScale = 7
    // create a circle for each dot
    const vulnDots = modifiedVulnData.map(each=>
        <Circle
            size={`${(each.score+1)*sizeScale}px`}
            y={((max - each.unixSeconds)*yAxisScale) + yAxisPadding}
            x={((each.score/2) * xAxisScale) + xAxisPadding}
            color={vulnColors.severity[severityCategory(each)]}
            borderColor="white"
            onHoverElement={<Positioner padding="1rem" maxHeight="30vh" overflow="auto" lineHeight="1.3rem">
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
                    }} >
                        {each.description}
                    </span>
                </Positioner>
            }
            />
    )
    const minHeight = ((max-min)*yAxisScale) + yAxisPadding + yAxisPadding
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
    return <Positioner verticalAlignment="top" horizontalAlignment="center" height="100%" width="100%" position="absolute">
        <Positioner horizontalAlignment="center" maxHeight="100%" overflowY="auto" width="100%">
            <Title text="Most Recent Vulnerabilites" />
            <svg style={`min-height: ${minHeight}px`} width="20rem" height={minHeight} onmouseover={updateHoverTag}>
                {vulnDots}
            </svg>
            <Title text="Oldest Vulnerabilites" />
        </Positioner>
    </Positioner>
}