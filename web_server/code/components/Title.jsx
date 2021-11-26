module.exports = ({ main, secondary }) => {
    return <h4 style="font-size: 20pt; font-weight: 100;">
        <span style="text-decoration: underline;">{`${main}`}</span> {secondary?`: ${secondary}`:""}
    </h4>
}