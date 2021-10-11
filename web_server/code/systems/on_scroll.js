const VirtualScroll = require('virtual-scroll').default
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
    console.debug(`event is:`,event)
    const customEvent = new CustomEvent("scroll", {
        ...event,
        ...scrollData,
    })
    window.customEvent = customEvent
    // Object.assign(event, scrollData)
    const actualStopPropogation = event.stopPropagation.bind(event)
    customEvent.stopPropagation = ()=>{
        event[shouldBubbleSymbol] = true
        actualStopPropogation()
    }
    console.debug(`alreadyActiveElement is:`,alreadyActiveElement)
    if (alreadyActiveElement) {
        alreadyActiveElement.dispatchEvent(customEvent)
        let parentElement = alreadyActiveElement.parentElement
        // manually bubble the event
        while (parentElement && !event[shouldBubbleSymbol]) {
            parentElement.dispatchEvent(customEvent)
            parentElement = parentElement.parentElement
        }
    }
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