const { onScroll } = require("../systems/on_scroll")

module.exports = ({ children, ...properties }) => {
    let wrapper
    let isHovered = false
    onScroll((event)=>{
        if (wrapper) {
            // check timing
            wrapper.lastScrollEventTime = wrapper.lastScrollEventTime || 0
            const relatedScrollEventThreshold = 200 // 200 miliseconds
            const now = new Date().getTime()
            const gap = (now - wrapper.lastScrollEventTime)
            const eventIsRelated = gap < relatedScrollEventThreshold
            if (wrapper.isHovered || eventIsRelated) {
                wrapper.lastScrollEventTime = now
                const newValue = -(event.deltaY) + (wrapper.style.bottom.replace(/px/,"")-0)
                if (newValue < 0) {
                    wrapper.style.bottom = 0
                } else {
                    wrapper.style.bottom = newValue
                }
            }
        }
    })
    return wrapper = <div
        name="info-graphic"
        // class="animate"
        style="position: absolute; bottom: 0; transform: translateY(-100%); width: 100%; z-index: 999; transition: all 0.01s ease-in-out 0s;"
        onscroll={(e=>console.log(e))}
        onmouseover={()=>wrapper.isHovered=true}
        onmouseenter={()=>wrapper.isHovered=true}
        onmouseleave={()=>wrapper.isHovered=false}
        >
        {/* Create the curved part */}
        <div name="tab" style="height: 6rem; width: 100%; overflow: visible; position: absolute; top: 0; transform: translateY(-100%);">
            <div class="circle"  style="--size: 100vw; background-color: var(--green); transform: scaleX(200%)" />
        </div>
        {/* Create the content */}
        <div style="width: 100%; height: fit-content;">
            {children}
        </div>
    </div>
}
