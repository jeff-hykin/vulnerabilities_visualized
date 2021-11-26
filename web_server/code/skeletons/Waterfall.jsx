const SquareGrid = require("./SquareGrid")

// 
// Waterfall
// 
module.exports = ({ children })=>{
    const hasReallyNarrowScreen = window.innerWidth / window.innerHeight < 0.9
    return <div name="waterfall-outermost" style={`width: 100%; min-height: 100%; overflow-x: hidden; overflow-y: auto; display: flex; align-content: center; justify-content: center; justify-content: center; background: var(--soft-gray-gradient); ${hasReallyNarrowScreen&&'font-size: max(1em, 20pt)'}`}>
        <SquareGrid numberOfSquares={hasReallyNarrowScreen ? 7 : 12} style="width: 80rem; max-width: 100%; max-width: 80vw; height: 100%; min-height: fit-content; padding: 2rem; box-sizing: border-box;">
            {children}
        </SquareGrid>
    </div>
}