import { useWindowSize } from "@react-hook/window-size"
import { useReduxSelector } from "../../redux/hooks"

const SideBarContainer: React.FC = ({ children }) => {
    let sidebarClass = useReduxSelector(state => state.sideBar.sidebarBaseClass)
    // sidebar display on mobile devices
    const [width, height] = useWindowSize()
    if (width < 920 && height < 1400) {
        sidebarClass = sidebarClass.replace(/absolute/g, '')
    }
    return (
        <section id='sidebar' className={sidebarClass}>
            {children}
        </section>
    )
}

export default SideBarContainer
