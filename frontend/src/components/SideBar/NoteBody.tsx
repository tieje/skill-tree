import React from "react";
import { nanoid } from "nanoid";
import EditButton from "./EditButton";

const NoteBody = ({ someText }: { someText: string }) => {
    const label_id: string = nanoid()
    return (
        <>
            <label className='p-2 text-lg' htmlFor={label_id}>Notes</label>
            <textarea id={label_id} name={label_id} rows={7} cols={25}
                className='p-2 overflow-y-scroll rounded-lg'
                placeholder='Instructional text and links for students'
            >
                {someText}
            </textarea>
            <EditButton />
        </>
    )
}

export default NoteBody
