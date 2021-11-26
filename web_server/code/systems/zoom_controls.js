const panzoom = require('panzoom')
const { mountedToDom } = require('./utilities')

module.exports = {
    addControls(element, options={}) {
        const connect = ()=>{
            // by default all zoom operations will happen based on the center of the screen
            panzoom(element, Object.assign({
                transformOrigin: {x: 0, y: 0},
                // beforeWheel: function(e) {
                //     // TODO: detect when something else is being scrolled (with the virtual scroller)
                //     // allow wheel-zoom only if altKey is down. Otherwise - ignore
                //     var shouldIgnore = !e.altKey;
                //     return shouldIgnore;
                // },
            }, options))
        }
        // if its on the dom just attach it
        if (element.parentElement) {
            connect()
        // otherwise wait for it to get attached
        } else {
            mountedToDom(element).then(()=>connect())
        }
    }
}