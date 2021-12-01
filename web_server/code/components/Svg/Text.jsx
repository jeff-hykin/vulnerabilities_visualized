/**
 * Create an SVG Text element
 *
 * @example
 *     <Text
 *         color="lightgreen"
 *         x={100}
 *         y={100}
 *         />
 */
module.exports = ({ x, y, color="#69b3a2", children, ...props }) => {
    return <text x={x} y={y} fill={color} {...props}>
        {children}
    </text>
}

