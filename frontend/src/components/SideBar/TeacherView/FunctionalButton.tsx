import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks"
import { FunctionalButtonPropsType } from "../../../types/Types"
import { any } from "../../../utils/utils"
import { EDIT_PATHS_MODE, MOVE_NODES_MODE, PAN_MODE, POINTER_MODE, STUDENT_VIEW, TEACHER_VIEW } from "../../../Variables/StaticVariables"
import { changeHexMoveEditModeToOn, changePathEditModeToOn, changeToDragMode, changeToPointerMode } from "../../PanZoomHexGrid/PanModeSlices"
import { ViewerToStudent, ViewerToTeacher } from "../SideBarSlices"

const FunctionalButton = ({ props }: { props: FunctionalButtonPropsType }) => {
    const editImgAddress = useReduxSelector(state => state.sideBar.editImgAddress)
    const editNoteTitle = useReduxSelector(state => state.sideBar.editNoteTitle)
    const editNoteBody = useReduxSelector(state => state.sideBar.editNoteBody)
    const buttonDisabled = any([editImgAddress, editNoteBody, editNoteTitle])
    const dispatch = useReduxDispatch()
    const handleClick = () => {
        switch (props.label) {
            case POINTER_MODE.label:
                dispatch(changeToPointerMode())
                break
            case PAN_MODE.label:
                dispatch(changeToDragMode())
                break
            case MOVE_NODES_MODE.label:
                dispatch(changeHexMoveEditModeToOn())
                break
            case EDIT_PATHS_MODE.label:
                dispatch(changePathEditModeToOn())
                break
            case STUDENT_VIEW.label:
                dispatch(ViewerToStudent())
                break
            case TEACHER_VIEW.label:
                dispatch(ViewerToTeacher())
                break
        }
    }
    return (
        <div className='grid grid-cols-2 gap-3 p-5 m-3 place-content-center rounded-lg bg-paper-yellow opacity-95'>
            <span className='opacity-50 text-lg text-center'>
                {props.shortcut}
            </span>
            <button
                disabled={buttonDisabled}
                className='bg-orange opacity-95 rounded-lg shadow-lg hover:bg-dark-orange border border-black hover:border-white disabled:bg-dark-orange'
                onClick={handleClick}
            >
                {props.label}
            </button>
        </div>
    )
}
export default FunctionalButton
