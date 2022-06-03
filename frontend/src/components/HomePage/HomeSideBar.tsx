import { useWindowSize } from "@react-hook/window-size"
import { useReduxSelector } from "../../redux/hooks"
import SideBarNote from "../SideBar/SideBarNote"
import SideBarItem, { SideBarItemPropsType } from "../SideBar/SideBarItem/SideBarItem"
import { ChangeNoteTitle } from "../SideBar/SideBarSlices"
import DefaultSideBarItemContainer from "../SideBar/SideBarItem/DefaultSideBarItemContainer"

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
    const SideBarItemTitleProps: SideBarItemPropsType = {
        componentType: 'Title',
        editable: false,
        title: hm.homeHexagonFocused.title,
        EditState: false,
        // changeTextMethod must be defined even if not used otherwise there will be an error
        changeTextMethod: ChangeNoteTitle
    }
    return (
        <section id='sidebar' className={sidebarClass}>
            <DefaultSideBarItemContainer>
                <SideBarItem props={SideBarItemTitleProps} />
            </DefaultSideBarItemContainer>
            <SideBarNote note={hm.homeHexagonFocused.note} />
        </section>
    )
}

export default HomeSideBar
