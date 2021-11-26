const d3 = require("../../../static_files/d3_v7")
const partialAreaFunc = d3.area().curve(d3.curveBasis).x(a=>a[0]).y1(a=>a[1])
// d3.curveCardinal is an alternative curve

/**
 * Create an SVG Curve
 *
 * @example
 *     <Area
 *         color="#69b3a2"
 *         bottom={0}
 *         points={[
 *             // x, y
 *             [0, 20],
 *             [0, 40],
 *             [0, 15],
 *         ]}
 *         />
 */
module.exports = ({ points, color="#69b3a2", borderColor, borderThickness=3, bottom, ...props}) => {
    const areaFunction = partialAreaFunc.y0(bottom)
    return <path d={areaFunction(points)} stroke={borderColor||color} strokeWidth={borderThickness} fill={color} {...props} />
}