// import { nanoid } from "nanoid"
import { useGetHexagonByIdQuery } from "../../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks"
import { PAN_MODE } from "../../../Variables/StaticVariables"
import SideBarItem, { SideBarItemPropsType } from "../SideBarItem/SideBarItem"
import SideBarItemContainer from "../SideBarItem/SideBarItemContainer"
import SideBarItemError from "../SideBarItem/EdgeCases/SideBarItemError"
import SideBarItemLoading from "../SideBarItem/EdgeCases/SideBarItemLoading"
import { ChangeNoteTitle, ViewerToStudent } from "../SideBarSlices"
import FunctionalButton from "../TeacherView/FunctionalButton"
import StudentNoteBody from "./StudentNoteBody"

const StudentView = () => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    const dispatch = useReduxDispatch()
    dispatch(ViewerToStudent())
    if (isLoading) { return (<SideBarItemLoading />) }
    if (error) { return (<SideBarItemError componentType={'Title'} />) }
    const SideBarItemTitleProps: SideBarItemPropsType = {
        componentType: 'Title',
        editable: false,
        title: data.title,
        EditState: false,
        changeTextMethod: ChangeNoteTitle
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
