// import { nanoid } from "nanoid"
import { useGetHexagonByIdQuery } from "../../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks"
import { PAN_MODE } from "../../../Variables/StaticVariables"
import SideBarItem, { SideBarItemPropsType } from "../SideBarItem/SideBarItem"
import DefaultSideBarItemContainer from "../SideBarItem/DefaultSideBarItemContainer"
import SideBarItemError from "../SideBarItem/EdgeCases/SideBarItemError"
import SideBarItemLoading from "../SideBarItem/EdgeCases/SideBarItemLoading"
import { ChangeNoteTitle, ViewerToStudent } from "../SideBarSlices"
import FunctionalButton from "../TeacherView/FunctionalButton"
import StudentNoteBody from "./StudentNoteBody"
import SideBarContainer from "../SideBarContainer"

const StudentView = () => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, isLoading, error } = useGetHexagonByIdQuery(String(hexagonFocused))
    const dispatch = useReduxDispatch()
    dispatch(ViewerToStudent())
    if (isLoading) {
        return (
            <SideBarContainer>
                <SideBarItemLoading />
                <SideBarItemLoading />
            </SideBarContainer>
        )
    }
    if (error) {
        return (
            <SideBarContainer>
                <SideBarItemError componentType={'Title'} />
                <DefaultSideBarItemContainer>
                    <StudentNoteBody />
                </DefaultSideBarItemContainer>
            </SideBarContainer>
        )
    }
    const SideBarItemTitleProps: SideBarItemPropsType = {
        componentType: 'Title',
        editable: false,
        title: data.title,
        EditState: false,
        changeTextMethod: ChangeNoteTitle
    }
    return (
        <SideBarContainer>
            <FunctionalButton props={PAN_MODE} />
            <DefaultSideBarItemContainer>
                <SideBarItem props={SideBarItemTitleProps} />
            </DefaultSideBarItemContainer>
            <DefaultSideBarItemContainer>
                <StudentNoteBody />
            </DefaultSideBarItemContainer>
        </SideBarContainer>
    )
}
export default StudentView
