const BaseTree = require("../skeletons/BaseTree")

module.exports = ({ org, orgSelected, treeSelected })=>{
    if (orgSelected && treeSelected) {
        return <BaseTree treeData={treeData}/>
    } else {
        let maybeDisablePointer
        let maybeAddBubbleClass 
        
        if (orgSelected) {
            maybeDisablePointer = ``
            maybeAddBubbleClass = {}
        } else {
            maybeDisablePointer = `pointer-events: none;`
            maybeAddBubbleClass = { "class": "orgBubble" }
        }
        
        return <div {...maybeAddBubbleClass}>
            {
                org.map( (tree, i) =>
                    <div
                        style={`
                            position: absolute;
                            transform: translate(${i * 100 / org.length}%,${i % 2 * -50}px);
                            ${maybeDisablePointer}
                        `}
                        >
                        <BaseTree treeData={tree}/>
                    </div>
                )
            }
        </div>
    }
}