import { nanoid } from 'nanoid'
import { useReduxDispatch, useReduxSelector } from '../../redux/hooks'
import { TOOL_PAN } from 'react-svg-pan-zoom'
import { ImgAddressSwitch, NoteBodySwitch, NoteTitleSwitch, ToggleEditShortcutsOff, ToggleEditShortcutsOn,
    //ToggleSidebarVisibilityOff,
    //ToggleSidebarVisibilityOn,
    ViewerToStudent, ViewerToTeacher } from './SideBarSlices'
import useEventListener from '@use-it/event-listener'
import { any } from '../../utils/utils'
import { INVISIBLE, EDIT_ON, EDIT_CHOSEN, POINTER_MODE, TEACHER, STUDENT, EDIT_OFF } from '../../Variables/StaticVariables'
import PathEdit from './TeacherView/PathEdit'
import { useGetTreeByIdQuery } from '../../redux/api'
import HexMoveEdit from './TeacherView/HexMoveEdit'
import { useParams } from 'react-router-dom'
import FunctionalButton from './TeacherView/FunctionalButton'
import TeacherView from './TeacherView/TeacherView'
import StudentView from './StudentView/StudentView'
import StudentViewByTeacher from './StudentView/StudentViewByTeacher'
import { changeToDragMode, changeToPointerMode } from '../PanZoomHexGrid/PanModeSlices'

const SideBar = () => {
    // queries
    const { treeId } = useParams()
    const { data, isLoading, error } = useGetTreeByIdQuery(treeId)
    // useReduxSelector
    const user_id = useReduxSelector(state => state.auth.user_id)
    const pathEditMode = useReduxSelector(state => state.panMode.pathEditMode)
    const hexMoveEditMode = useReduxSelector(state => state.panMode.hexMoveEditMode)
    const tool: string = useReduxSelector(state => state.panMode.tool)
    const sb = useReduxSelector(state => state.sideBar)
    const dispatch = useReduxDispatch()
    // functions
    const handleShortcuts = (event: KeyboardEvent) => {
        if (sb.sidebarBaseClass !== INVISIBLE &&
            !any([sb.editImgAddress, sb.editNoteBody, sb.editNoteTitle]) &&
            sb.editShortcuts === EDIT_ON) {
            switch (event.key) {
                case 's':
                    dispatch(ImgAddressSwitch())
                    break
                case 'd':
                    dispatch(NoteTitleSwitch())
                    break
                case 'f':
                    dispatch(NoteBodySwitch())
                    break
                case 'r':
                    dispatch(ViewerToStudent())
                    break
            }
        }
        // student viewer shortcuts
        if (sb.editShortcuts === EDIT_OFF) {
            switch (event.key) {
                case 't':
                    if (data.user.toString() === user_id) dispatch(ViewerToTeacher())
                    break
                case 'v':
                    dispatch(changeToPointerMode())
                    //dispatch(ToggleSidebarVisibilityOn())
                    break
                case 'h':
                    dispatch(changeToDragMode())
                    //dispatch(ToggleSidebarVisibilityOff())
                    break
            }
        }
    }
    useEventListener('keypress', handleShortcuts)
    if (pathEditMode === EDIT_ON || pathEditMode === EDIT_CHOSEN) return (<PathEdit key={nanoid()} />)
    if (hexMoveEditMode === EDIT_ON || hexMoveEditMode === EDIT_CHOSEN) return (<HexMoveEdit key={nanoid()} />)
    if (tool === TOOL_PAN) return (<section id='sidebar' className={sb.sidebarBaseClass}><FunctionalButton props={POINTER_MODE} /></section>)
    if (isLoading || error) return (<section id='sidebar' className={sb.sidebarBaseClass}></section>)
    if (data.user.toString() === user_id && sb.viewer === TEACHER) {
        if (sb.editShortcuts === EDIT_OFF) dispatch(ToggleEditShortcutsOn())
        return (<TeacherView />)
    }
    if (sb.editShortcuts === EDIT_ON) dispatch(ToggleEditShortcutsOff())
    if (data.user.toString() === user_id && sb.viewer === STUDENT) return (<StudentViewByTeacher />)
    return (<StudentView />)
}

export default SideBar
