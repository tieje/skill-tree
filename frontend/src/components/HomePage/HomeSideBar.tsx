import { useReduxSelector } from "../../redux/hooks"
import SidebarDisplayContainer from "./SidebarDisplayContainer"
import SidebarDisplayNote from "./SidebarDisplayNote"
import SidebarDisplayTitle from "./SidebarDisplayTitle"

const HomeSideBar = () => {
    const sidebarBaseClass = useReduxSelector(state => state.sideBar.sidebarBaseClass)
    const hm = useReduxSelector(state => state.home)
    return (
        <section id='sidebar' className={sidebarBaseClass}>
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
