import { nanoid } from "nanoid"
import { useReduxSelector } from "../../../redux/hooks"
import { TEACHER_VIEW } from "../../../Variables/StaticVariables"
import FunctionalButton from "../TeacherView/FunctionalButton"
import StudentNoteBody from "./StudentNoteBody"
import StudentTitle from "./StudentTitle"

const StudentViewByTeacher = () => {
    const sidebarBaseClass = useReduxSelector(state => state.sideBar.sidebarBaseClass)
    return (
        <section id='sidebar' className={sidebarBaseClass}>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-97'>
                <StudentTitle key={nanoid()} />
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                <StudentNoteBody key={nanoid()} />
            </div>
            <FunctionalButton props={TEACHER_VIEW}/>
        </section >
    )
}
export default StudentViewByTeacher
