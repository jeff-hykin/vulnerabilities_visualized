const d3 = require("../../../static_files/d3_v7")
const curveFunc = d3.line().curve(d3.curveBasis).x(a=>a[0]).y(a=>a[1])

/**
 * Create an SVG Curve
 *
 * @example
 *     <Curve
 *         color="#69b3a2"
 *         points={[
 *             // x, y
 *             [0, 20],
 *             [0, 40],
 *             [0, 15],
 *         ]}
 *         />
 */
module.exports = ({ points, thickness=3, color="#69b3a2", ...props}) => {
    return <path d={curveFunc(points)} stroke={color} strokeWidth={thickness} fill="none" {...props} />
}
