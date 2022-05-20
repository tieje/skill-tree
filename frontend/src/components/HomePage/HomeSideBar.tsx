import { useWindowSize } from "@react-hook/window-size"
import { useReduxSelector } from "../../redux/hooks"
import SidebarDisplayContainer from "../SideBar/SidebarDisplayContainer"
import SidebarDisplayNote from "../SideBar/SidebarDisplayNote"
import SidebarDisplayTitle from "../SideBar/SidebarDisplayTitle"

const HomeSideBar = () => {
    let sidebarClass = useReduxSelector(state => state.sideBar.sidebarBaseClass).replace(/lg:fixed/g, '')
    // sidebar display on mobile devices
    const [width, height] = useWindowSize()
    if (width < 920 && height < 1400) {
        sidebarClass = sidebarClass.replace(/absolute/g, '')
    }
    const hm = useReduxSelector(state => state.home)
    if (hm.homeHexagonFocused.hex_id === 9) {
        return (
            <section id='sidebar' className={sidebarClass}>
            </section>
        )
    }
    return (
        <section id='sidebar' className={sidebarClass}>
            <SidebarDisplayContainer>
                <SidebarDisplayTitle title={hm.homeHexagonFocused.title} />
            </SidebarDisplayContainer>
            <SidebarDisplayContainer>
                <SidebarDisplayNote note={hm.homeHexagonFocused.note} />
            </SidebarDisplayContainer>
        </section>
    )
}

export default HomeSideBar
