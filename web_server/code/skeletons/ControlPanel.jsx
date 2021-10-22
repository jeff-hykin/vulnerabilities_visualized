
module.exports = ({ width=20, color="white", style="", children, ...properties }) => {
    return <div class={properties.class} style={`width: ${width}rem; max-width: 100vw; height: fit-content; background-color: ${color}; padding: 2rem 1rem; border-radius: 1.4rem; display: flex; flex-direction: column; ${style};`} >
        {children}
    </div>
}
