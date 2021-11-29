const ForceGraph = require("../skeletons/ForceGraph")
const Circle = require("../components/Svg/Circle")
const smartBackend = require("../systems/smart_backend")
const DateTime = require("good-date")
const { stats } = require("../systems/utilities")
const { vulnColors } = require("../systems/theme")


const testdata = {
    "nodes":[
          {"name":"bug1","color": "red"},
          {"name":"bug2","color": "red"},
          {"name":"bug3","color": "yellow"},
          {"name":"bug4","color": "orange"}
      ],
      "links":[
          {"source":2,"target":1},
          {"source":0,"target":2}
      ]
  }
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
    console.log(`eventObject is:`,eventObject)
    if (hoverTag.parentElement != document.body) {
        document.body.append(hoverTag)
    }
    // if the element has a title
    if (typeof eventObject.target.title == 'string') {
        // give it the right content
        hoverTag.innerHTML = eventObject.target.title
        // put it in the right position
        hoverTag.style.left = `${eventObject.clientX}px`
        hoverTag.style.top  = `${eventObject.clientY}px`
        console.log(`eventObject.clientY is:`,eventObject.clientY)
        // show it
        hoverTag.style.opacity = 1
    } else {
        // hide it
        hoverTag.style.opacity = 0
    }
}

module.exports = async ({ orgName, repoName }) => {
    const maxNumberOfVulns = 10 // FIXME: showing all of them makes the graph unusable
    const vulnData = await smartBackend.getVulnDataFor(repoName)
    const summaryData = await smartBackend.getRepoSummaryDataFor(orgName, repoName)
    const modifiedVulnData = vulnData.map(each=>({
        ...each,
        name: each.cveId.replace(/cve-/i, ""),
        level: 'red',
        unixSeconds: (new DateTime(each.publishDate)).unix / 1000
    })).slice(0,maxNumberOfVulns)
    const [min,max,range,average,median,sum] = stats(modifiedVulnData.map(each=>each.unixSeconds))
    console.log(`max is:`,max)
    console.log(`min is:`,min)
    console.log(`range is:`,range)
    
    // create some timeline dots
    const yAxisScale = 0.00001
    const xAxisScale = 10
    const sizeScale = 3
    // create a circle for each dot
    const vulnDots = modifiedVulnData.map(each=>
        <Circle
            size={`${(each.score+1)*sizeScale}px`}
            y={((max - each.unixSeconds)*yAxisScale) - 100}
            x={((each.score/2) * xAxisScale) + 100}
            color={vulnColors.severity[severityCategory(each)]}
            borderColor="white"
            title="Circle #1"
            />
    )
    
    return <svg width="20rem" height={(max-min)*yAxisScale} onmouseover={updateHoverTag}>
        {vulnDots}
    </svg>
    // <ForceGraph json={testdata} onNodeClick={(d) => console.log(d)}/>
}