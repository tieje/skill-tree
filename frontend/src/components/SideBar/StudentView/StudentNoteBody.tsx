import { nanoid } from "nanoid";
import { useReduxSelector } from "../../../redux/hooks";
import { useGetHexagonByIdQuery } from "../../../redux/api";
import SidebarDisplayNote from "../../HomePage/SidebarDisplayNote";

const StudentNoteBody = () => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    const label_id: string = nanoid()
    if (isLoading || error) {
        return (
            <>
                <label className='p-2 text-2xl' htmlFor={label_id}>
                    Notes
                </label>
            </>
        )
    }
    return (
        <SidebarDisplayNote note={data.note} />
    )
}
export default StudentNoteBody
