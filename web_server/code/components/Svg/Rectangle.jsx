/**
 * Create an SVG Rectangle
 *
 * @example
 *     <Rectangle
 *         width={100}
 *         height={1000}
 *         x={100}
 *         y={100}
 *         />
 */
module.exports = ({ width, height, x, y, color="#69b3a2", borderThickness=0, borderColor, children, ...props }) => {
    return  <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={`fill:${color};stroke-width:${borderThickness};stroke:${borderColor||color}`}
        {...props}
        />
}

