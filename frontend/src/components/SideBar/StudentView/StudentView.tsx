// import { nanoid } from "nanoid"
import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks"
import { PAN_MODE } from "../../../Variables/StaticVariables"
import SideBarItemContainer from "../SideBarItemContainer"
import { ViewerToStudent } from "../SideBarSlices"
import FunctionalButton from "../TeacherView/FunctionalButton"
import StudentNoteBody from "./StudentNoteBody"
import StudentTitle from "./StudentTitle"

const StudentView = () => {
    const sidebarBaseClass = useReduxSelector(state => state.sideBar.sidebarBaseClass)
    const dispatch = useReduxDispatch()
    dispatch(ViewerToStudent())
    return (
        <section id='sidebar' className={sidebarBaseClass}>
            <FunctionalButton props={PAN_MODE} />
            <SideBarItemContainer>
                <StudentTitle />
            </SideBarItemContainer>
            <SideBarItemContainer>
                <StudentNoteBody />
            </SideBarItemContainer>
        </section >
    )
}
export default StudentView
