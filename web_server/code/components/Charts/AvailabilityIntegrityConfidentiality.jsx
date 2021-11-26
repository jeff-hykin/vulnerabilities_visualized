const Positioner = require("../../skeletons/Positioner")
const FancyBubble = require("../../skeletons/FancyBubble")

const { nodeTheme } = require("../../systems/theme")
const { numbers, stats, createLinearMapper, getFrequencies, arrayAsObjectKeys } = require("../../systems/utilities")

const computeColorPairs = (number, score)=> {
    return {
        color1:  score > 0 ? nodeTheme.lightColors[number] : "lightgray",
        color2:  score > 0 ? nodeTheme.darkColors[number] : "lightgray",
    }
}

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
                    <FancyBubble hoverShadow={false} {...computeColorPairs(4,buckets.confidentiality.length)}>
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
                    <FancyBubble hoverShadow={false} {...computeColorPairs(0,buckets.integrity.length)} padding={0} {...computeColorPairs(0,buckets.integrity.length)}>
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
                <FancyBubble hoverShadow={false} {...computeColorPairs(6,buckets.availability.length)}>
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
