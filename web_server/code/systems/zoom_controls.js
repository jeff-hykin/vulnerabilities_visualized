const panzoom = require('panzoom')


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
            const observer = new MutationObserver((mutationList, observer)=>{
                mutationList.forEach( (mutation) => {
                    switch(mutation.type) {
                    case 'childList':
                        if (element.parentElement) {
                            connect()
                        }
                        break
                    }
                })
            })
            observer.observe(element, {
                childList: true,
                attributes: true,
                subtree: true,
            })
        }
    }
}