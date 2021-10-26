const BaseTree = require("../skeletons/BaseTree")

module.exports = ({ org, orgSelected, treeSelected })=>{
    if (orgSelected && treeSelected) {
        return <BaseTree treeData={treeData}/>
    } else if (orgSelected) {
        return <div>
            {
                org.map( (tree, i) =>
                    <div
                        style={`position: absolute; transform: translate(${i * 100 / org.length}%,${i % 2 * -50}px)`}
                        >
                        <BaseTree treeData={tree}/>
                    </div>
                )
            }
        </div>
    } else {
        return <div class="orgBubble">
            {
                org.map((tree, i) => 
                    <div style={`position: absolute; transform: translate(${i * 100 / org.length}%,${i % 2 * -50}px); pointer-events: none;`}>
                        <BaseTree treeData={tree}/>
                    </div>
                )
            }
        </div>
    }
}