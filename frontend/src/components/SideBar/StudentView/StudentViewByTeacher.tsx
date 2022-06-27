import { nanoid } from "nanoid"
import { useReduxSelector } from "../../../redux/hooks"
import { TEACHER_VIEW } from "../../../Variables/StaticVariables"
import SideBarContainer from "../SideBarContainer"
import DefaultSideBarItemContainer from "../SideBarItem/DefaultSideBarItemContainer"
import SideBarItem, { SideBarItemPropsType } from "../SideBarItem/SideBarItem"
import { ChangeNoteTitle } from "../SideBarSlices"
import FunctionalButton from "../TeacherView/FunctionalButton"
import StudentNoteBody from "./StudentNoteBody"

const StudentViewByTeacher = () => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const SideBarItemTitleProps: SideBarItemPropsType = {
        componentType: 'Title',
        editable: false,
        title: hexagonFocused.title,
        changeTextMethod: ChangeNoteTitle
    }
    return (
        <SideBarContainer>
            <DefaultSideBarItemContainer>
                <SideBarItem props={SideBarItemTitleProps} />
            </DefaultSideBarItemContainer>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                <StudentNoteBody key={nanoid()} />
            </div>
            <FunctionalButton props={TEACHER_VIEW} />
        </SideBarContainer>
    )
}
export default StudentViewByTeacher
