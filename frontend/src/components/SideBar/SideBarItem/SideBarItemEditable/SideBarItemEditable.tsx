import EditButton from "../../TeacherView/EditButton"
import { SideBarItemPropsType } from "../SideBarItem"
import SideBarItemContainerTitle from "./SideBarItemContainerTitle"
import SideBarItemShortcutKey from "./SideBarItemShortcutKey"

const SideBarItemEditable = ({ props }: { props: SideBarItemPropsType }) => {
    return (
        <>
            <EditButton editMethod={props.toggleEditTrueMethod} />
            <SideBarItemContainerTitle title={props.componentType} />
            <SideBarItemShortcutKey shortcutKey={props.shortcutKey} />
        </>
    )
}
export default SideBarItemEditable