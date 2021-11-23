module.exports = ({ children, numberOfSquares=10, ...props })=>{
    const percentage = `${100/numberOfSquares}% `
    const columnTemplate = percentage.repeat(numberOfSquares)
    return <div
            {...props}
        >
            <div 
                style={`
                    display: grid;
                    width: 100%;
                    aspect-ratio: 1;
                    flex-shrink: 0;
                    overflow: visible;
                    grid-template-columns: ${columnTemplate};
                    grid-template-rows: repeat(auto-fit,${percentage});
                `}
                >
                    {children}
            </div>
    </div>
}
