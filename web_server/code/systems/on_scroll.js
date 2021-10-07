const VirtualScroll = require('virtual-scroll').default
const scroller = new VirtualScroll()

module.exports = {
    onScroll: (...args)=>scroller.on(...args),
}