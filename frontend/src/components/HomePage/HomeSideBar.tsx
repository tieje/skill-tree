import { useWindowSize } from "@react-hook/window-size"
import { useReduxSelector } from "../../redux/hooks"
import SideBarNote from "../SideBar/SideBarNote"
import SideBarTitleContainer from "../SideBar/SideBarItem/SideBarTitle/SideBarTitleContainer"

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
    /*
    const TitleProps: SideBarTitleContainerPropsType = {
        title: hm.homeHexagonFocused.title
    }
    return (
        <section id='sidebar' className={sidebarClass}>
            <SideBarTitleContainer props={TitleProps} />
            <SideBarNote note={hm.homeHexagonFocused.note} />
        </section>
    )*/
    return (
        <div></div>
    )
}

export default HomeSideBar
