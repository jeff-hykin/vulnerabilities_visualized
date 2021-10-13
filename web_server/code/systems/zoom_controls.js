const panzoom = require('panzoom')


module.exports = {
    addControls(element, options={}) {
        const connect = ()=>{
            panzoom(element, Object.assign({
                // now all zoom operations will happen based on the center of the screen
                transformOrigin: {x: 0, y: 0}
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