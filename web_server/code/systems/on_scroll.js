const VirtualScroll = require('virtual-scroll').default
const scrollToggle = require("./scroll_toggle")
const scroller = new VirtualScroll()

const shouldBubbleSymbol = Symbol("scrollInfo")
let relatedScrollEventThreshold = 200
let updateActiveElement = null
let alreadyActiveElement = null
let mouseX, mouseY
window.addEventListener("mouseover", e=>(mouseX=e.clientX,mouseY=e.clientY))

// add a listener to keep the time up to date
scroller.on((scrollData)=>{
    clearTimeout(updateActiveElement)
    alreadyActiveElement = alreadyActiveElement || document.elementFromPoint(mouseX, mouseY)
    const event = scrollData.originalEvent
    // prevent other things from seeing the wheel event
    if (event.type == "wheel") {
        event.stopPropagation()
    }
    const customEvent = new CustomEvent("scroll", {
        ...event,
        ...scrollData,
    })
    Object.assign(customEvent, scrollData)
    Object.defineProperties(customEvent, {
        "target": {
            get(){
                return alreadyActiveElement
            },
        },
        // customEvent.srcElement = 
        // customEvent.target = alreadyActiveElement

    })
    const actualStopPropogation = event.stopPropagation.bind(event)
    customEvent.stopPropagation = ()=>{
        event[shouldBubbleSymbol] = true
        actualStopPropogation()
    }
    customEvent.preventDefault = ()=>{
        // TODO: even for built-in events prevent default doesn't 
        // work for scrolling (ex: its part of the spec for it to be non-cancelable)
        // https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

        // However there might be some clever workarounds, ex: always prevent and then add a window level listener that mannually scrolls (scrollTop, scrollLeft) whenever not prevented 
        console.error("Sadly calling .preventDefault() on a scroll event doesn't work\nsee: https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily")
    }
    if (alreadyActiveElement) {
        alreadyActiveElement.dispatchEvent(customEvent)
        let parentElement = alreadyActiveElement.parentElement
        // manually bubble the event
        while (parentElement && !event[shouldBubbleSymbol]) {
            parentElement.dispatchEvent(customEvent)
            parentElement = parentElement.parentElement
        }
    }
    // restore scroll encase preventDefault() was called
    updateActiveElement = setTimeout(()=>{
        alreadyActiveElement = document.elementFromPoint(mouseX, mouseY)
    }, relatedScrollEventThreshold)
})


// TODO: disable all scroll events
// manually scroll each element using 
// scrollLeft
// scrollTop
// if it doesn't update or is maxed out, then bubble up the event and repeat
// stop bubbling when executed 
// stop bubbling if preventDefault is ever called

// module.exports = {
//     relatedScrollEventThreshold: 200, // miliseconds
//     onScroll: (element, callback)=>{
//         const scrollInfo = {
//             isHovered: false,
//             lastScrollTime: NaN,
//         }
//         let wasSetup = false
//         const tryInit = ()=>{
//             if (!wasSetup && element instanceof Object) {
//                 element.addEventListener("mouseover" , ()=>scrollInfo.isHovered = true)
//                 element.addEventListener("mouseenter", ()=>scrollInfo.isHovered = true)
//                 element.addEventListener("mouseleave", ()=>scrollInfo.isHovered = false)
//                 wasSetup = true
//             }
//         }
//         tryInit() // sometimes have to wait for object to be created
//         scroller.on((...args)=>{
//             tryInit()
//             if (element instanceof Object) {
//                 const relatedScrollEvent = (timeOfPrevScrollEvent - scrollInfo.lastScrollTime) < relatedScrollEventThreshold
//                 // call the callback
//                 if (scrollInfo.isHovered || relatedScrollEvent) {
//                     // update the scroll time for next time
//                     scrollInfo.lastScrollTime = lastScrollTime
//                     callback(...args)
//                 }
//             }
//         })
//     },
// }