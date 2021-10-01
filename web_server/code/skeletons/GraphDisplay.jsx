module.exports = ({ children, ...properties }) => {
    
    const main = <div class="graph-display" />
    
    for (const each of children) {
        const graphNode = <div style={{borderRadius: "100rem"}}>
            I'm supposed to be a node
        </div>
        main.appendChild(graphNode)
    }
    
    return main
}
