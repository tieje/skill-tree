import { nanoid } from "nanoid";
import { useReduxSelector } from "../../redux/hooks";
import { useGetHexagonByIdQuery } from "../../redux/api";

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
        <>
            <p
                className='p-2 overflow-y-auto rounded-lg h-full whitespace-pre-wrap'
            >
                {data.note === null || data.note === '' ? 'notes' : data.note}
            </p>
        </>
    )
}
export default StudentNoteBody
