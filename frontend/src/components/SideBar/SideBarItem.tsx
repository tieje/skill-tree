import SideBarItemContainer from "./SideBarItemContainer"
import SideBarTitleContainer, { SideBarTitleContainerPropsType } from "./SideBarTitleContainer"

type ComponentTypes = 'Title' | 'Note' | 'Image Address'
type SideBarItemPropsType = {
    componentType: ComponentTypes
    skill_tree_id?: number
    hex_id?: number
    title?: string
}
const SideBarItem = ({ props }: { props: SideBarItemPropsType }) => {
    if (props.title === undefined) { props.title = '' }
    if (props.componentType === 'Title') {
        const TitleProps: SideBarTitleContainerPropsType = {
            skill_tree_id: props.skill_tree_id,
            title: props.title,
            
        }
        return (
            <SideBarItemContainer>
                <SideBarTitleContainer props={TitleProps} />
            </SideBarItemContainer>
        )
    }
}
export type {
    SideBarItemPropsType
}
export default SideBarItem