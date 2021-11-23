module.exports = ({ numberOfCells, children })=> {
    return <div
        name="square-grid-cell-shaper"
        style={`
            grid-column: span ${Math.ceil(numberOfCells)};
            grid-row: span ${Math.ceil(numberOfCells)};
            justify-self: stretch;
            aspect-ratio: 1;
            position: relative;
            display: flex;
            flex-direction: column;
        `}
        >
            {children}
    </div>
}

