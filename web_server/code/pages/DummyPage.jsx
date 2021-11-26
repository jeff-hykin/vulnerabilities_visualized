// 
// 
// Main
// 
// 
module.exports = async ({ ...properties }) => {
    return <main style={`width: 100%; flex: 1 0 auto;`} >
        <div style={{width: '500px', minWidth: '500px', minHeight: '200px', background: 'lightcoral'}}>
            Box1
        </div>
        <div style={{width: '500px', minWidth: '500px', height: "10rem", maxHeight: '50%', background: 'lightgreen'}}>
            Box2
        </div>
    </main>
}
