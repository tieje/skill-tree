import { SideBarItemPropsType } from "../SideBarItem"

const SideBarItemLabel = ({ props }: { props: SideBarItemPropsType }) => {
    return (
        <label className='text-left text-2xl' htmlFor={String(props.skill_tree_id)}>
            {props.componentType}
        </label>
    )
}
export default SideBarItemLabel