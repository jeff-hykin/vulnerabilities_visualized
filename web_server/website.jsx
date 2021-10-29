// add CSS before everything else
require("css-baseline/css/3")
require("./global.scss")

// libraries
const router = require("quik-router")
const Gun = require("./code/tools/gun")

// globals
window.quik = require("quik-client")
window.gun = Gun({peers: [
    'http://localhost:8765/gun',
]})

// 
// pages
// 
const Home = require("./code/pages/Home")
const ProductView = require("./code/pages/ProductView")
const PageNotFound = require("./code/pages/PageNotFound")

// 
// every time something tries to change pages
// 
let previousPage = NaN // NaN is just for init (makes comparision always not-equal)
function onRouteChange() {
    // if the page changes
    if (previousPage != router.pageInfo.page) {
        previousPage = router.pageInfo.page
        
        // silently redirect to home page
        if (previousPage == null) {
            previousPage = "home"
        }
        
        // 
        // load page
        // 
        if (previousPage == "home") {
            document.body = <Home />
        } else if (previousPage == "product-view") {
            document.body = <ProductView />
        } else {
            document.body = <PageNotFound />
        }
    }
}
router.addEventListener("go", onRouteChange)
onRouteChange() // first time the page loads
