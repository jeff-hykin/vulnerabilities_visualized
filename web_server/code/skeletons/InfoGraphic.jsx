require("../systems/on_scroll")

module.exports = ({ children, ...properties }) => {
    let wrapper
    let isHovered = false
    return wrapper = <div
        name="info-graphic"
        class="animate"
        style="--scroll-top: 0; position: absolute; bottom: 0; transform: translateY(calc(-100% - calc(var(--scroll-top) * 1px))); width: 100%; z-index: 999; transition: all 0.1s ease-in-out 0s;"
        onscroll={event=>{
            const currentValue = wrapper.style.getPropertyValue("--scroll-top")-0
            const nextValue = currentValue - event.deltaY
            console.log(`ONSCROLL-start`)
            console.log(`event is:`,event)
            console.log(`event.target is:`,event.target)
            console.log(`event.explicitOriginalTarget is:`,event.explicitOriginalTarget)
            console.log(`ONSCROLL-end`)
            window.wrapper = wrapper
            // dont scroll past 0
            if (nextValue < 0) {
                wrapper.style.setProperty('--scroll-top', '0')
            // dont scroll over 100%
            } else if (nextValue > wrapper.clientHeight) {
                wrapper.style.setProperty('--scroll-top', `${wrapper.clientHeight}`)
            } else {
                wrapper.style.setProperty('--scroll-top', `${nextValue}`)
            }
        }}
        >
        {/* Create the curved part */}
        <div name="tab" style="height: 6rem; width: 100%; overflow: visible; position: absolute; top: 0; transform: translateY(-100%); z-index: -1;">
            <div class="circle"  style="--size: 100vw; background-color: var(--green); transform: scaleX(200%)" />
        </div>
        {/* Create the content */}
        <div style="width: 100%; height: fit-content;">
            {children}
        </div>
    </div>
}
