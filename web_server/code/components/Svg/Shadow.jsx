/**
 * Create an SVG Shadow
 *
 * @example
 *     <Shadow>
 *         <Circle size={30} x={100} y={100} />
 *     </Shadow>
 */
module.exports = ({ children, ...props }) => {
    return <g filter="drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" {...props}>
        {children}
    </g>
}

