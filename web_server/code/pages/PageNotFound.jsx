let Campsite = require("../atoms/Campsite")
let NightSky = require("../components/NightSky")

module.exports = ({ children, ...properties }) => {
    return <main class="column centered" style={{overflow: "hidden", position: 'fixed', width: '100vw', height: '100vh' }}>
        <NightSky />
        <h3 style={{color: "white"}}>
            404 Page Not Found 😢
        </h3>
        <div style={{transform: "scale(0.70) translateY(-15%)"}}>
            <Campsite />
        </div>
    </main>
}
