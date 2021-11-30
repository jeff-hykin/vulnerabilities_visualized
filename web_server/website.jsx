// add CSS before everything else
require("css-baseline/css/3")
require("./global.scss")

// libraries
const router = require("quik-router")
const Header = require("./code/skeletons/Header")

// 
// pages
// 
const OrgWaterfall = require("./code/pages/OrgWaterfall")
const RepoWaterfall = require("./code/pages/RepoWaterfall")
const ProductView = require("./code/pages/ProductView")
const DummyPage = require("./code/pages/DummyPage")
const PageNotFound = require("./code/pages/PageNotFound")
const homePage = "RepoWaterfall"
const pages = {
    OrgWaterfall,
    RepoWaterfall,
    ProductView,
    DummyPage,
}

// 
// every time something tries to change pages
// 
let previousPage = NaN // NaN is just for init (makes comparision always not-equal)
const transitionHandlers = []
async function onRouteChange() {
    // if the page changes
    if (previousPage != router.pageInfo.page) {
        // keep track of (what will be) the previous 
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
                document.body = <body>
                    <Header />
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
                    </style>
                    {main = <main />}
                </body>
            }
            return [main, mainExisted]
        }

        // 
        // animate fade between pages
        // 
        const [ oldMain, mainExisted ] = getMainElement()
        const mainElementPromise = getNewMain()
        const duration = 300 // miliseconds
        oldMain.style.transition = `all ${duration}ms ease-in-out 0s`
        oldMain.style.opacity = 0
        transitionHandlers.push(setTimeout(async ()=>{
            // remove other pending page actions (from user spamming the back/forwards button)
            transitionHandlers.map(each=>clearTimeout(each))
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
            const newMainElement = await mainElementPromise
            newMainElement.setAttribute("id", Math.random())
            // (needs to be done after removing old main, cause two mains shouldn't exist at the same time)
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
            transitionHandlers.push(setTimeout(async () => {
                newMainElement.style.opacity = originalOpacityProperty
                // restore the new main's transition property
                transitionHandlers.push(setTimeout(()=>{
                    newMainElement.style.transition=originalTransitionProperty
                },  duration*1.1 ))
            }, 100)) // needs to be non-zero so that the browser doesn't optimize it out (the opacity=0 needs to "sink in" before the opacity=1)
        }, duration*1.1*mainExisted)) // the mainExisted is saves time on initial page load
    }
}
router.addEventListener("go", onRouteChange)
onRouteChange() // first time the page loads
