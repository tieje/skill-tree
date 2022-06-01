import { ReduxMethod, UpdateMethodType } from "../../../types/Types"
import SideBarItemContainer from "./SideBarItemContainer"
import SideBarTitleContainer from "./SideBarTitle/SideBarTitleContainer"

type ComponentTypes = 'Title' | 'Note' | 'Image Address'
type SideBarItemPropsType = {
    componentType: ComponentTypes
    editable?: boolean
    skill_tree_id?: number
    hex_id?: number
    EditState?: boolean
    updateMethod?: UpdateMethodType
    shortcutKey?: string
    toggleEditFalseMethod?(): ReduxMethod
    toggleEditTrueMethod?(): ReduxMethod
    changeTitleMethod?(payload: any): ReduxMethod
    title?: string
}
const SideBarItem = ({ props }: { props: SideBarItemPropsType }) => {
    if (props.componentType === 'Title') {
        return (
            <SideBarItemContainer>
                <SideBarTitleContainer props={props} />
            </SideBarItemContainer>
        )
    }
}
export type {
    SideBarItemPropsType
}
export default SideBarItem