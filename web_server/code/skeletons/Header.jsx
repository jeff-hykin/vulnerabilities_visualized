const Positioner = require("../skeletons/Positioner")
const router = require("quik-router")
const { watch } = require("@vue-reactivity/watch")


const FlipSwich = ()=>{
    const sizeOfSwitch = 1.5 //rem
    let flipSwitchContainer, repoText, orgText, flippyPart
    flipSwitchContainer = <Positioner row class="animate" width="25rem" verticalAlignment="center" horizontalAlignment="center" >
        {repoText = <span style="color: black; margin-right: 1.2rem; ">Show Repos</span>}
        <Positioner width="3.8rem" padding="1rem" borderRadius="5rem" height={`${sizeOfSwitch*1.2}rem`} background="whitesmoke" cursor="pointer" onclick={()=>{
                if (router.pageInfo.page == "RepoWaterfall") {
                    router.goTo({...router.pageInfo, page: "OrgWaterfall" })
                } else {
                    router.goTo({...router.pageInfo, page: "RepoWaterfall" })
                }
            }}>
            {flippyPart = <Positioner positionSelf="relativeToParent" class="animate our-shadow-1" background="var(--blue)" borderRadius="10rem" width={`${sizeOfSwitch}rem`} aspectRatio="1" left="10%" top={`${sizeOfSwitch*0.1}rem`} />}
        </Positioner>
        {orgText = <span style="color: black; margin-left: 1.2rem; ">Show Organizations</span>}
    </Positioner>
    
    const decideSwitchPosition = () => {
        // on RepoWaterfall
        if (router.pageInfo.page == "RepoWaterfall") {
            flipSwitchContainer.style.opacity = 1
            repoText.style.color = "black"
            flippyPart.style.left = "10%"
            flippyPart.style.right = ""
            orgText.style.color = "gray"
        // on OrgWaterfall
        } else if (router.pageInfo.page == "OrgWaterfall") {
            flipSwitchContainer.style.opacity = 1
            repoText.style.color = "gray"
            flippyPart.style.right = "10%"
            flippyPart.style.left = ""
            orgText.style.color = "black"
        // on any other page
        } else {
            flipSwitchContainer.style.opacity = 0
        }
    }
    watch(router.pageInfo, decideSwitchPosition)
    decideSwitchPosition() // decide right now
    return flipSwitchContainer
}


module.exports = ({ children, ...properties }) => {
    return <div
        style="min-width: 100%; height: fit-content; padding: 1.2rem; margin: 0; z-index: 9999999;"
        class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 shadow"
        >
        <div class="relative flex items-center justify-between">
            <a
                href="/"
                aria-label="GitBug"
                title="GitBug"
                class="inline-flex items-center"
            >

                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                    GitBug
                </span>
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
                <FlipSwich />
            </ul>
        </div>
    </div>
}
