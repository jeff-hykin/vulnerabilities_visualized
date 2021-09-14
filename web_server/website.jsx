// add some CSS
// require("css-baseline/css/2")
require("./static_files/materialize.css")
// require("materialize-css")

// get d3.js
const Card = require("./code/Card")
const d3Demo = require("./code/d3_demo")

// create the body
document.body = (
    <body style={{ display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "sans-serif", flexDirection: "column", background: "whitesmoke" }}>
        
        <h1 style={{fontSize: "30pt",}}>
            Hello World!
        </h1>
        
        <Card title="This is a D3 Demo" style={{width: "50rem"}}>
            {d3Demo}
        </Card>
        
    </body>
)
