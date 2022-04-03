import React
, { useState }
    from "react";
import { nanoid } from "nanoid";
import EditButton from "./EditButton";
import { NoteBodySwitch } from "./SideBarSlices";

const NoteBody = ({ edit, body }: { edit: boolean, body?: string }) => {

    const [note, setNote] = useState(body)
    const label_id: string = nanoid()
    if (edit) {
        return (
            <>
                <label className='p-2 text-2xl' htmlFor={label_id}>
                    Notes
                </label>
                <textarea
                    id={label_id}
                    name={label_id}
                    rows={7}
                    cols={25}
                    className='p-2 overflow-y-scroll rounded-lg'
                    placeholder='Instructional text and links for students'
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
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
