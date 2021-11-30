module.exports = ({ main, secondary, scale=1, }) => {
    return <h4 style={`font-size: ${20*scale}pt;`}>
        <span style="text-decoration: underline; font-weight: 100; font-family: Roboto; color: gray;">
            {`${main}`}
        </span>
        {secondary?`: ${secondary}`:""}
    </h4>
}