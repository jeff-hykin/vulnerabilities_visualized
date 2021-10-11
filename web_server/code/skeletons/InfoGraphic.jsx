const { onScroll } = require("../systems/on_scroll")

module.exports = ({ children, ...properties }) => {
    let wrapper
    let isHovered = false
    onScroll((event)=>{
        if (wrapper.isHovered) {
            console.log(`event is:`,event)
        }
    })
    return wrapper = <div
        name="info-graphic"
        // class="animate"
        style="position: absolute; bottom: 0; transform: translateY(-100%); width: 100%; z-index: 999;"
        onscroll={(e=>console.log(e))}
        onmouseover={()=>wrapper.isHovered=true}
        onmouseenter={()=>wrapper.isHovered=true}
        onmouseleave={()=>wrapper.isHovered=false}
        >
        {/* Create the curved part */}
        <div name="tab" style="height: 6rem; width: 100%; overflow: hidden; position: absolute; top: 0; transform: translateY(-100%);">
            <div class="circle"  style="--size: 100vw; background-color: var(--green); transform: scaleX(200%)" />
        </div>
        {/* Create the content */}
        <div style="width: 100%; height: fit-content;">
            {children}
        </div>
    </div>
}
