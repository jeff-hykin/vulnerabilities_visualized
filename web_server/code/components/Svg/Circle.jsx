/**
 * Create an SVG Circle
 *
 * @example
 *     <Circle
 *         color="#69b3a2"
 *         size={30}
 *         x={100}
 *         y={100}
 *         />
 */
module.exports = ({ size, x, y, color="#69b3a2", borderColor, children, ...props }) => {
    return <circle r={size} fill={color} stroke={borderColor||color} {...props}>
        {children}
    </circle>
}

