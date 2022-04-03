import React
, { useState }
    from "react";
import { nanoid } from "nanoid";
import EditButton from "./EditButton";
import { NoteBodySwitch } from "./SideBarSlices";
import { useFocusTextArea } from "../../utils/utils";
import { useReduxDispatch } from "../../redux/hooks";

const NoteBody = ({ edit, body }: { edit: boolean, body?: string }) => {
    const [note, setNote] = useState(body)
    const label_id: string = nanoid()
    const textAreaRef = useFocusTextArea()
    const dispatch = useReduxDispatch()
    const handleAddText = (
        event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && event.shiftKey) {
            dispatch(NoteBodySwitch())
        }
    }
    if (edit) {
        return (
            <>
                <label className='p-2 text-2xl' htmlFor={label_id}>
                    Notes
                </label>
                <textarea
                    ref={textAreaRef}
                    id={label_id}
                    name={label_id}
                    rows={7}
                    cols={25}
                    className='p-2 overflow-y-scroll rounded-lg'
                    placeholder='Instructional text and links for students'
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    onKeyDown={handleAddText}
                >
                </textarea>
                <EditButton key={nanoid()} editMethod={() => NoteBodySwitch()} />
            </>
        )
    }
    return (
        <>
            <label className='p-2 text-2xl' htmlFor={label_id}>
                Notes
            </label>
            <p className='p-2 overflow-y-scroll rounded-lg h-60'>
                {note}
            </p>
            <EditButton key={nanoid()} editMethod={() => NoteBodySwitch()} />
        </>
    )
}
export default NoteBody
