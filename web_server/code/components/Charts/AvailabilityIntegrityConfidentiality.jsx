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
    
    const cardHeight = 32 // rem
    const minGuiSize = 8
    const maxGuiSize = cardHeight/2
    const linearMapper = createLinearMapper({min,max}, {min: minGuiSize, max: maxGuiSize})
    
    // 
    // Create chart
    // 
    return <Positioner row maxHeight={`${cardHeight}rem`} width="100%" verticalAlignment="center" horizontalAlignment="center">
        {/* Left Side */}
        <Positioner horizontalAlignment="right">
            <Positioner height="fit-content" maxHeight={`${maxGuiSize}rem`} verticalAlignment="bottom" horizontalAlignment="right">
                <Positioner aspectRatio={1} height={`${linearMapper(buckets.confidentiality.length)}rem`} verticalAlignment="bottom" horizontalAlignment="right">
                    <FancyBubble hoverShadow={false} color1={nodeTheme.lightColors[4]} color2={nodeTheme.darkColors[4]} padding={0}>
                        <div style="padding: 1rem; color: white;">
                            Confidentality
                            <br />
                            {`(${buckets.confidentiality.length})`}
                        </div>
                    </FancyBubble>
                </Positioner>
            </Positioner>
            <Positioner maxHeight={`${maxGuiSize}rem`} verticalAlignment="top" horizontalAlignment="right">
                <Positioner marginTop="1rem" aspectRatio={1} height={`${linearMapper(buckets.integrity.length)}rem`} verticalAlignment="top" horizontalAlignment="right">
                    <FancyBubble hoverShadow={false} color1={nodeTheme.lightColors[0]} color2={nodeTheme.darkColors[0]} padding={0}>
                        <div style="padding: 1rem; color: white;">
                            Integrity
                            <br />
                            {`(${buckets.integrity.length})`}
                        </div>
                    </FancyBubble>
                </Positioner>
            </Positioner>
        </Positioner>
        
        {/* Right Side */}
        <Positioner maxHeight={`${cardHeight}rem`} verticalAlignment="center" horizontalAlignment="left">
            <Positioner marginLeft="1rem" aspectRatio={1} height={`${linearMapper(buckets.availability.length)}rem`}>
                <FancyBubble hoverShadow={false} color1={nodeTheme.lightColors[6]} color2={nodeTheme.darkColors[6]} padding={0}>
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
