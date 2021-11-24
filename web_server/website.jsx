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


// 
// every time something tries to change pages
// 
let previousPage = NaN // NaN is just for init (makes comparision always not-equal)
function onRouteChange() {
    // if the page changes
    if (previousPage != router.pageInfo.page) {
        previousPage = router.pageInfo.page
        let currentPage = router.pageInfo.page
        
        // silently redirect to home page
        if (currentPage == null) {
            currentPage = "repo-waterfall"
            router.goSecretlyTo({ page: "repo-waterfall", ...router.pageInfo})
        }
        
        // 
        // load page
        // 
        if (currentPage == "repo-waterfall") {
            document.body = <body>
                <Header />
                <RepoWaterfall />
            </body>
        } else if (currentPage == "org-waterfall") {
            document.body = <body>
                <Header />
                <OrgWaterfall />
            </body>
        } else if (currentPage == "product-view") {
            document.body = <body>
                <Header />
                <ProductView />
            </body>
        } else {
            document.body = <PageNotFound />
        }
    }
}
router.addEventListener("go", onRouteChange)
onRouteChange() // first time the page loads
