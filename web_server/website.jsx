// add CSS before everything else
require("css-baseline/css/3")
require("./global.scss")
require("./static_files/tailwind")

// libraries
const router = require("quik-router")
const Header = require("./code/skeletons/Header")

// 
// pages
// 
const OrgWaterfall = require("./code/pages/OrgWaterfall")
const RepoWaterfall = require("./code/pages/RepoWaterfall")
const ProductView = require("./code/pages/ProductView")
const PageNotFound = require("./code/pages/PageNotFound")
const homePage = "RepoWaterfall"
const pages = {
    OrgWaterfall,
    RepoWaterfall,
    ProductView,
}

// 
// every time something tries to change pages
// 
let previousPage = NaN // NaN is just for init (makes comparision always not-equal)
function onRouteChange() {
    // if the page changes
    if (previousPage != router.pageInfo.page) {
        previousPage = router.pageInfo.page
        let currentPage = router.pageInfo.page
        
        // silently redirect to homePage
        if (currentPage == null) {
            currentPage = homePage
            router.goSecretlyTo({ page: homePage, ...router.pageInfo})
        }

        // 
        // create the new main element
        // 
        const getNewMain = async ()=>{
            const Page =  pages[currentPage] || PageNotFound
            const newMain = await Page({},[])
            return newMain
        }
        
        // 
        // get the old main element
        // 
        const getMainElement = ()=> {
            let main = document.querySelector("main")
            const mainExisted = main != null
            // if somehow the page gets broken, reset it
            if (!mainExisted) {
                console.debug(`main was null:`)
                document.body = <body>
                    <Header />
                    {main = <main />}
                </body>
            }
            return [main, mainExisted]
        }

        // 
        // animate fade between pages
        // 
        const [ oldMain, mainExisted ] = getMainElement()
        const duration = 500 // miliseconds
        oldMain.style.transition = `all ${duration}ms ease-in-out 0s`
        oldMain.style.opacity = 0
        setTimeout(async ()=>{
            // 
            // replace old main with a dummy
            // 
            const [ oldMain, _ ] = getMainElement()
            const parent = oldMain.parentNode
            const dummy = <div></div>
            parent.insertBefore(dummy, oldMain)
            parent.removeChild(oldMain)

            // 
            // setup new main
            // 
            // (needs to be done after removing old main, cause two mains can't exist at the same time)
            const newMainElement = await getNewMain()
            const originalTransitionProperty = newMainElement.style.transition
            const originalOpacityProperty = (newMainElement.style.opacity == "") ? 1 : newMainElement.style.opacity
            newMainElement.style.opacity = 0
            newMainElement.style.transition = `all ${duration}ms ease-in-out 0s`

            // 
            // replace dummy with new main
            // 
            parent.insertBefore(newMainElement, dummy)
            parent.removeChild(dummy)
            
            // animate the new main
            setTimeout(() => {
                newMainElement.style.opacity = originalOpacityProperty
                // restore the new main's transition property
                setTimeout( ()=>newMainElement.style.transition=originalTransitionProperty,  duration*1.1 )
            }, 0)
        }, duration*1.1*mainExisted)
    }
}
router.addEventListener("go", onRouteChange)
onRouteChange() // first time the page loads
