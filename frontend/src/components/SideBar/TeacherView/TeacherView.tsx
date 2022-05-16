import { nanoid } from "nanoid"
import { useDeleteHexMutation, useGetHexagonByIdQuery } from "../../../redux/api"
import { useReduxSelector } from "../../../redux/hooks"
import { //QUANTITATIVE, VERBAL,
    STUDENT_VIEW, TOP_SIDEBAR_BUTTONS
} from "../../../Variables/StaticVariables"
import SidebarDisplayContainer from "../../HomePage/SidebarDisplayContainer"
// import Checkbox from "./Checkbox"
import FunctionalButton from "./FunctionalButton"
import ImgAddress from "./ImgAddress"
import NoteBody from "./NoteBody"
import NoteTitle from "./NoteTitle"

const TeacherView = () => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, isLoading, error } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    const sidebarBaseClass = useReduxSelector(state => state.sideBar.sidebarBaseClass)
    const [deleteHex] = useDeleteHexMutation()
    return (
        <section id='sidebar' className={sidebarBaseClass}>
            <FunctionalButton props={STUDENT_VIEW} />
            {TOP_SIDEBAR_BUTTONS.map((button) => { return (<FunctionalButton key={nanoid()} props={button} />) })}
            {/*<div className='grid grid-cols-1 gap-3 p-5 m-3 justify-items-end rounded-lg bg-paper-yellow opacity-95'>
                <Checkbox props={{ label: VERBAL, data: data, isLoading: isLoading, error: error }} />
                <Checkbox props={{ label: QUANTITATIVE, data: data, isLoading: isLoading, error: error }} />
            </div>*/}
            <ImgAddress props={{ data: data, isLoading: isLoading, error: error }} />
            <SidebarDisplayContainer>
                <NoteTitle props={{ data: data, isLoading: isLoading, error: error }} />
            </SidebarDisplayContainer>
            <SidebarDisplayContainer>
                <NoteBody props={{ data: data, isLoading: isLoading, error: error }} />
            </SidebarDisplayContainer>
            {hexagonFocused.hex_id ? <div className='grid place-content-center'>
                <button
                    className='bg-red text-white px-2 py-1 border border-red-purple rounded-lg hover:border-russian-blue hover:bg-red-purple mb-5'
                    onClick={() => deleteHex(hexagonFocused)}
                >
                    Clear Node
                </button>
            </div> : null}
        </section>
    )
}

export default TeacherView
