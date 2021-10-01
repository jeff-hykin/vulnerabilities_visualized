// add CSS before everything else
require("css-baseline/css/3")
require("./global.scss")
// libraries
const router = require("quik-router")

// pages
const Home = require("./code/pages/Home")
const ProductView = require("./code/pages/ProductView")
const PageNotFound = require("./code/pages/PageNotFound")

// every time something tries to change pages
router.addEventListener("navigate", onRouteChange)
// first time the page loads
onRouteChange()

function onRouteChange() {
    const pageInfo = router.pageInfo

    // silently redirect to home page
    if (pageInfo.name == null) {
        pageInfo.name = "home"
    }
    
    // 
    // load page
    // 
    if (pageInfo.name == "home") {
        document.body = <Home />
    } else if (pageInfo.name == "product-view") {
        document.body = <ProductView />
    } else {
        document.body = <PageNotFound />
    }
}
