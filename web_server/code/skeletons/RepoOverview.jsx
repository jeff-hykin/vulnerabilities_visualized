const {backend} = require("quik-client")



module.exports = ({repoData}) => {
    const name = repoData.name
    let loading
    const container = <div>
        <LeftSide>
            <TreeData repo={repoData.TreeData} />
        </LeftSide>
        <RightSide>
            {loading = <span>Loading...</span>}
        </RightSide>
    </div>
    
    backend.data.vulnerabilitesFor({product: name}).then(()=>{
        loading = <div>
            akdlsjfalskdj
        </div>
    })
    
    return container
}