/**
 * Create an SVG Group
 *
 * @example
 *     <Group>
 *         <Circle size={30} x={100} y={100} />
 *     </Group>
 */
module.exports = ({ children, ...props }) => {
    return <g  {...props}>
        {children}
    </g>
}

