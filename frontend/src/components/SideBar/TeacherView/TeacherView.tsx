import { nanoid } from "nanoid"
import { useDeleteHexMutation, useGetHexagonByIdQuery } from "../../../redux/api"
import { useReduxSelector } from "../../../redux/hooks"
import { CHECKBOXES, STUDENT_VIEW, TOP_SIDEBAR_BUTTONS } from "../../../Variables/StaticVariables"
import Checkbox from "./Checkbox"
import FunctionalButton from "./FunctionalButton"
import ImgAddress from "./ImgAddress"
import NoteBody from "./NoteBody"
import NoteTitle from "./NoteTitle"

const TeacherView = () => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, isLoading, error } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    const sidebarBaseClass = useReduxSelector(state => state.sideBar.sidebarBaseClass)
    const [deleteHex] = useDeleteHexMutation()
    if (isLoading || error) { return (<div>Loading or Error</div>) }
    return (
        <section id='sidebar' className={sidebarBaseClass}>
            {TOP_SIDEBAR_BUTTONS.map((button) => { return (<FunctionalButton key={nanoid()} props={button} />) })}
            <div className='grid grid-cols-1 gap-3 p-5 m-3 justify-items-end rounded-lg bg-paper-yellow opacity-95'>
                {CHECKBOXES.map((checkbox) => { return (<Checkbox key={nanoid()} checkbox={checkbox} />) })}
            </div>
            <ImgAddress props={data} />
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-97'>
                <NoteTitle props={data} />
            </div>
            <div className='relative bg-paper-yellow p-5 pt-10 m-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                <NoteBody props={data} />
            </div>
            {hexagonFocused.hex_id ? <div className='grid place-content-center'>
                <button
                    className='bg-red text-white px-2 py-1 border border-red-purple rounded-lg hover:border-russian-blue hover:bg-red-purple mb-5'
                    onClick={() => deleteHex(hexagonFocused)}
                >
                    Clear Node
                </button>
            </div> : null}
            <div className='relative bg-paper-yellow p-5 mx-3 mb-3 rounded-lg grid grid-cols-1 place-content-start opacity-98'>
                <h1 className='text-2xl grid place-content-center'>
                    Global Skill Tree Settings
                </h1>
            </div>
            <FunctionalButton props={STUDENT_VIEW} />
        </section>
    )
}

export default TeacherView
