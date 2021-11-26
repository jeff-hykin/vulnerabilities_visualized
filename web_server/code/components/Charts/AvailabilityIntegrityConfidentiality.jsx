const Positioner = require("../../skeletons/Positioner")
const FancyBubble = require("../../skeletons/FancyBubble")

const { nodeTheme } = require("../../systems/theme")
const { numbers, stats, createLinearMapper, getFrequencies, arrayAsObjectKeys } = require("../../systems/utilities")

module.exports = ({ vulnData })=> {
    // 
    // convert data
    // 
    const buckets = {
        confidentiality: vulnData.filter(each=>(each.confidentiality && each.confidentiality!='None')),
        integrity:       vulnData.filter(each=>(each.integrity       && each.integrity      !='None')),
        availability:    vulnData.filter(each=>(each.availability    && each.availability   !='None')),
    }
    
    const [min,max,range,average,median,sum] = stats(
        Object.values(buckets).map(each=>each.length)
    )
    
    const cardHeight = 23 // rem
    const minGuiSize = 6
    const maxGuiSize = cardHeight/2
    const linearMapper = createLinearMapper({min,max}, {min: minGuiSize, max: maxGuiSize})
    
    // 
    // Create chart
    // 
    return <Positioner row maxHeight={`${cardHeight}rem`} width="100%" verticalAlignment="center" horizontalAlignment="center">
        <Positioner width="50%" horizontalAlignment="right">
            <Positioner height="fit-content" maxHeight={`${maxGuiSize}rem`} verticalAlignment="bottom" horizontalAlignment="right">
                <Positioner aspectRatio={1} height={`${linearMapper(buckets.confidentiality.length)}rem`} verticalAlignment="bottom" horizontalAlignment="right">
                    <FancyBubble color1={nodeTheme.lightColors[0]} color2={nodeTheme.lightColors[0]} padding={0}>
                        <div style="padding: 1rem; color: white;">
                            Confidentality
                            <br />
                            {`(${buckets.confidentiality.length})`}
                        </div>
                    </FancyBubble>
                </Positioner>
            </Positioner>
            <Positioner height={`${maxGuiSize}rem`} width="50%" verticalAlignment="top" horizontalAlignment="right">
                <Positioner marginTop="1rem" aspectRatio={1} height={`${linearMapper(buckets.integrity.length)}rem`} verticalAlignment="top" horizontalAlignment="right">
                    <FancyBubble color1={nodeTheme.lightColors[1]} color2={nodeTheme.lightColors[1]} padding={0}>
                        <div style="padding: 1rem; color: white;">
                            Integrity
                            <br />
                            {`(${buckets.integrity.length})`}
                        </div>
                    </FancyBubble>
                </Positioner>
            </Positioner>
        </Positioner>
        <Positioner maxHeight={`${cardHeight}rem`} width="50%" verticalAlignment="center" horizontalAlignment="left">
            <Positioner aspectRatio={1} height={`${linearMapper(buckets.availability.length)}rem`}>
                <FancyBubble color1={nodeTheme.lightColors[2]} color2={nodeTheme.lightColors[2]} padding={0}>
                    <div style="padding: 1rem; color: white;">
                        Availability
                        <br />
                        {`(${buckets.availability.length})`}
                    </div>
                </FancyBubble>
            </Positioner>
        </Positioner>
    </Positioner>
}
