const Curve = require("../components/Svg/Curve")
const Area = require("../components/Svg/Area")
const Circle = require("../components/Svg/Circle")
const Shadow = require("../components/Svg/Shadow")
const d3 = require("../../static_files/d3_v7")
window.d3 = d3
//
//
// Main
//
//

module.exports = async ({ ...properties }) => {
    return (
        <main style={`width: 100%; flex: 1 0 auto;`}>
            <div style={{ width: "500px", minWidth: "500px", minHeight: "200px", background: "lightcoral" }}>Box1</div>
            <svg width={800} height={400}>
                <Shadow>
                    <Circle x={100} y={100} size={100} onmousemove={(event)=>console.log(event)} onmouseover={(event)=>console.log(event)}/>
                </Shadow>
                <Curve
                    points={[
                        [ 0, 20 ],
                        [ 150, 150 ],
                        [ 300, 100 ],
                        [ 450, 20 ],
                        [ 600, 130 ],
                    ]}
                    />
                <Area
                    bottom={400}
                    points={[
                        [ 0, 100 + 20 ],
                        [ 150, 100 + 150 ],
                        [ 300, 100 + 100 ],
                        [ 450, 100 + 20 ],
                        [ 600, 100 + 130 ],
                    ]}
                    />
            </svg>
            <div style={{ width: "500px", minWidth: "500px", height: "10rem", maxHeight: "50%", background: "lightgreen" }}>Box2</div>
        </main>
    )
}
