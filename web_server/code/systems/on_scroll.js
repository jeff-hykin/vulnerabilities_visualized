const VirtualScroll = require('virtual-scroll').default
const scrollToggle = require("./scroll_toggle")
const scroller = new VirtualScroll()

const shouldBubbleSymbol = Symbol("scrollInfo")
let relatedScrollEventThreshold = 50
let updateActiveElement = null
let alreadyActiveElement = null
let mouseX, mouseY
window.addEventListener("mouseover", e=>(mouseX=e.clientX,mouseY=e.clientY))

// add a listener to keep the time up to date
scroller.on((scrollData)=>{
    clearTimeout(updateActiveElement)
    alreadyActiveElement = alreadyActiveElement || document.elementFromPoint(mouseX, mouseY)
    const event = scrollData.originalEvent
    event.stopPropagation()
    const customEvent = new CustomEvent("scroll", {...event, bubbles: false, cancelable: false, })
    Object.assign(customEvent, scrollData)
    const actualStopPropogation = event.stopPropagation.bind(event)
    customEvent.stopPropagation = ()=>event[shouldBubbleSymbol] = true
    customEvent.preventDefault = ()=>{
        // TODO: even for built-in events prevent default doesn't 
        // work for scrolling (ex: its part of the spec for it to be non-cancelable)
        // https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

        // However there might be some clever workarounds, ex: always prevent and then add a window level listener that mannually scrolls (scrollTop, scrollLeft) whenever not prevented 
        console.error("Sadly calling .preventDefault() on a scroll event doesn't work\nsee: https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily")
    }
    let runningElement = alreadyActiveElement
    while (runningElement && !event[shouldBubbleSymbol]) {
        runningElement.dispatchEvent(customEvent)
        let style = {}
        try {
            style = getComputedStyle(runningElement)
        } catch (error) {}
        const elementHasScrollProperties = ["auto", "scroll"].includes(style.overflowX) || ["auto", "scroll"].includes(style.overflowY)
        // console.debug(`elementHasScrollProperties is:`,  elementHasScrollProperties, "overflowX", style.overflowX, "overflowY", style.overflowY,  `runningElement is:`,runningElement)
        // check if child should capture scroll event
        if (elementHasScrollProperties) {
            const { deltaX, deltaY } = customEvent
            const { scrollTop, scrollTopMax, scrollLeft, scrollLeftMax } = runningElement
            const biggerDirectionIsY = Math.abs(deltaY) >= Math.abs(deltaX)
            // TODO: confirm that deltaX is behaving correctly
            // console.debug(`customEvent.deltaX is:`,customEvent.deltaX)
            // console.debug(`customEvent.deltaY is:`,customEvent.deltaY)
            // console.debug(`runningElement.scrollTop is:`,runningElement.scrollTop)
            // console.debug(`runningElement.scrollLeft is:`,runningElement.scrollLeft)
            // console.debug(`runningElement.scrollTopMax is:`,runningElement.scrollTopMax)
            // console.debug(`runningElement.scrollLeftMax is:`,runningElement.scrollLeftMax)
            let hasScrolledAsFarAsPossible = false // FIXME check if already scrolled to bottom/top leftMost/rightMost
            if (biggerDirectionIsY) {
                // if scrolling down
                if (deltaY < 0) {
                    // has scrolled to the bottom
                    hasScrolledAsFarAsPossible = scrollTop >= scrollTopMax
                // if scrolling up
                } else {
                    // has scrolled to the top
                    hasScrolledAsFarAsPossible = scrollTop <= 0
                }
            } else {
                // if scrolling left
                if (customEvent.delta < 0) {
                    // has scrolled all the way left
                    hasScrolledAsFarAsPossible = scrollLeft >= scrollLeftMax
                // if scrolling right
                } else {
                    // has scrolled all the way right
                    hasScrolledAsFarAsPossible = scrollLeft <= 0
                }
            }
            if (!hasScrolledAsFarAsPossible) {
                // let this element capture it (don't bubble)
                break
            }
        }
        runningElement = runningElement.parentElement
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