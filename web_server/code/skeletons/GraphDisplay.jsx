const numberOfSidesOfHexagon = 6
const numberOfRadiansInACircle = Math.PI * 2

function degreesToRadians(degrees){
  return degrees * (Math.PI/180)
}


// (google "hexagonal tessellation" to see what this function is doing)
//    this creates an array of x,y pairs
//    each pair is a point creating a spiraling-outwards pattern
//    pattern:
//        1 center node 
//        6 surrounding nodes
//        12 nodes on the outside of the 6
//        18 nodes on the outside of the 12
//        ... etc
//    the x,y pair is at the center of each hexagon
function getHexagonLocations(numberOfHexagonsNeeded, diameterOfHexagon) {
    let locations = [ [0,0] ]
    let ringIndex = 0
    let availableSlots = 1
    // the availableSlots will increase like this:
    //      1 (+6*1) -> 7 (+6*2) -> 19 (+6*3) -> 37 (+6*4) -> etc 
    while (true) {
        // if we fit all the hexagons in the last ring, then break
        if (numberOfHexagonsNeeded-1 < availableSlots) {
            break
        }
        // otherwise make another ring
        ringIndex += 1
        
        const numberOfHexagonsInRing = numberOfSidesOfHexagon * ringIndex
        const distanceFromCenter = diameterOfHexagon * ringIndex
        console.log(`diameterOfHexagon is:`,diameterOfHexagon)
        console.log(`distanceFromCenter is:`,distanceFromCenter)
        availableSlots += numberOfHexagonsInRing
        
        const radiansBetweenEachHexagon = numberOfRadiansInACircle / numberOfHexagonsInRing
        console.log(`numberOfHexagonsInRing is:`,numberOfHexagonsInRing)
        console.log(`radiansBetweenEachHexagon is:`,radiansBetweenEachHexagon)
        let radians = -radiansBetweenEachHexagon
        for (const each in [...Array(numberOfHexagonsInRing)]) {
            // increment by one angle
            radians += radiansBetweenEachHexagon
            console.log(`Math.cos(radians) is:`,Math.cos(radians))
            console.log(`Math.sin(radians) is:`,Math.sin(radians))
            const xPosition = distanceFromCenter * Math.cos(radians)
            const yPosition = distanceFromCenter * Math.sin(radians)
            locations.push([xPosition, yPosition])
            if (locations.length >= numberOfHexagonsNeeded) {
                break
            }
        }
    }
    return locations
}


module.exports = ({ children, sizeOfNodeInPixels, ...properties }) => {
    const xyCenterLocations = getHexagonLocations(children.length, sizeOfNodeInPixels)
    console.log(`xyCenterLocations is:`,xyCenterLocations)
    const max = Math.max(...xyCenterLocations.map(([x,y]) => x))
    
    // create some wrappers to get everything lined up correctly
    const container = <div class="centered" style={{position: 'relative', minWidth: `${2*max}px`, minHeight: `${2*max}px` }} >
        {/* a dot right in the center of everything */}
        <div style="position: relative; overflow: visible; max-width: 0; min-width: 0; max-height: 0; min-height: 0;">
            {/* NODES GO HERE */}
        </div>
    </div>
    
    // we want to show the container first, then slowly add each node
    function loadLater() {
        // load all the nodes in order
        let index = -1
        for (const eachChildElement of children) {
            index += 1
            const [ x, y ] = xyCenterLocations[index]
            // have them start off invisible, then fade in
            console.log(`\`${x}px\` is:`,`${x}px`)
            const graphNode = <div
                class="circle centered shadow animate"
                style={`
                    --size: ${sizeOfNodeInPixels}px ;
                    color: white;
                    background-color: var(--blue);
                    opacity: 0;
                    position: absolute;
                    left: ${x}px;
                    top: ${y}px;
                    transform: translate(50%, -50%) scale(0.7);`
                }
                >
                {eachChildElement}
            </div>
            container.children[0].appendChild(graphNode)
            // have them fade in one after another
            setTimeout( ()=>{graphNode.style.opacity = 1} , 500 * index) // half a second per index
        }
    }
    setTimeout(loadLater(), 0)
    
    return container
}
