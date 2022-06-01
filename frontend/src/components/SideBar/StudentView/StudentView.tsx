// import { nanoid } from "nanoid"
import { useGetHexagonByIdQuery } from "../../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks"
import { PAN_MODE } from "../../../Variables/StaticVariables"
import SideBarItem, { SideBarItemPropsType } from "../SideBarItem/SideBarItem"
import SideBarItemContainer from "../SideBarItem/SideBarItemContainer"
import SideBarItemError from "../SideBarItem/SideBarItemError"
import SideBarItemLoading from "../SideBarItem/SideBarItemLoading"
import { ChangeNoteTitle, ViewerToStudent } from "../SideBarSlices"
import FunctionalButton from "../TeacherView/FunctionalButton"
import StudentNoteBody from "./StudentNoteBody"
import StudentTitle from "./StudentTitle"

const StudentView = () => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    const dispatch = useReduxDispatch()
    dispatch(ViewerToStudent())
    if (isLoading) { return (<SideBarItemLoading />) }
    if (error) { return (<SideBarItemError />) }
    const SideBarItemTitleProps: SideBarItemPropsType = {
        componentType: 'Title',
        editable: false,
        title: data.title,
        EditState: false,
        changeTitleMethod: ChangeNoteTitle
    }
    return (
        <SideBarItemContainer>
            <FunctionalButton props={PAN_MODE} />
            <SideBarItem props={SideBarItemTitleProps} />
            <SideBarItemContainer>
                <StudentNoteBody />
            </SideBarItemContainer>
        </SideBarItemContainer>
    )
}
export default StudentView
