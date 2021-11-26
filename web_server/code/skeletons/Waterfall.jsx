const SquareGrid = require("./SquareGrid")

// 
// Waterfall
// 
module.exports = ({ children })=>{
    const hasReallyNarrowScreen = window.innerWidth / window.innerHeight < 0.9
    return <div name="waterfall-outermost" style="width: 100%; min-height: 100%; overflow-x: hidden; overflow-y: auto; display: flex; align-content: center; justify-content: center; justify-content: center; background: var(--soft-gray-gradient);">
        <SquareGrid numberOfSquares={hasReallyNarrowScreen ? 6 : 12} style="width: 80rem; max-width: 100%; height: 100%; min-height: fit-content; padding: 2rem; box-sizing: border-box;">
            {children}
        </SquareGrid>
    </div>
}