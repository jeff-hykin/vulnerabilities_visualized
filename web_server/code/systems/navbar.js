const { reactive } = require("@vue/reactivity")

const navbarState = reactive({})
const NavBar = <nav></nav>
watch(navbarState, ()=>{
    
    let orgElementList = []
    for (const iterator of navbarState.options) {
        orgElementList.push(<button>{iterator}</button>)
    }
    NavBar.children = orgElementList
    
})

module.exports = {
    NavBarComponent: NavBar,
    navbarState: navbarState,
}