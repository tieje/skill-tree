import SideBarContainer from "../SideBar/SideBarContainer"
import SideBarItem, { SideBarItemPropsType } from "../SideBar/SideBarItem"

const state: SideBarItemPropsType = {
    componentType: 'Title'
}
const TreePickerSideBar = () => {
    return (
        <SideBarContainer>
            <SideBarItem props={state} />
        </SideBarContainer>
    )
}

export default TreePickerSideBar
