import { SkillTreePickerTreeType } from "../../types/Types"
import ReactTimeago from "react-timeago"
import { useNavigate } from "react-router-dom"
import { ResetSidebarState } from "../SideBar/SideBarSlices"
import { useReduxDispatch } from "../../redux/hooks"
import { ResetPanModeState } from "../PanZoomHexGrid/PanModeSlices"
import { changeTreePickerTreeFocused } from "./TreePickerSlice"

const SkillTreeItem = ({ props }: { props: SkillTreePickerTreeType }) => {
    const navigate = useNavigate()
    const dispatch = useReduxDispatch()
    // functions
    const handleNavigation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        switch (e.detail) {
            case 1:
                dispatch(changeTreePickerTreeFocused(props))
                break;
            case 2:
                dispatch(ResetSidebarState())
                dispatch(ResetPanModeState())
                navigate(`/app/${props.skill_tree_id.toString()}`)
                break
        }
    }
    return (
        <button
            onClick={(e) => handleNavigation(e)}
            className='relative rounded-lg grid border-2 border-gray h-72 focus:border-russian-blue focus:bg-gray'
        >
            <div className='grid justify-center'>
                <img
                    src={props.image_address}
                    alt={props.name}
                    className='rounded-t-lg object-cover md:h-52'
                />
            </div>
            <div className='absolute bottom-5 left-5 grid gap-1 pr-2'>
                <h1 className='text-lg truncate'>
                    {props.name}
                </h1>
                <h2 className='text-xs opacity-50 truncate'>
                    Viewed <ReactTimeago date={props.last_edit_timestamp} />
                </h2>
            </div>
        </button >
    )
}
export default SkillTreeItem
