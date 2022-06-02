import { SideBarItemPropsType } from "../SideBarItem"
import SideBarItemInput from "./SideBarItemInput"
import SideBarItemLabel from "./SideBarItemLabel"
import SideBarItemShortcutSubmitKey from "./SideBarItemShortcutSubmitKey"

const SideBarItemEditStateTrue = ({ props }: { props: SideBarItemPropsType }) => {
    return (
        <>
            <SideBarItemLabel props={props} />
            <SideBarItemShortcutSubmitKey />
            <SideBarItemInput props={props} />
        </>
    )
}
export default SideBarItemEditStateTrue