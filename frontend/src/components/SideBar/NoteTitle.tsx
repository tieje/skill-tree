import { nanoid } from "nanoid";
import React, { useState } from "react";
import EditButton from "./EditButton";
import { NoteTitleSwitch } from "./SideBarSlices";

const NoteTitle = ({ title, edit }: { title: string, edit: boolean }) => {
    const [newTitle, setNewTitle] = useState(title)
    const noteEditId = nanoid()
    if (edit) {
        return (
            <>
                <label className='text-left text-2xl' htmlFor={noteEditId}>
                    Title
                </label>
                <input
                    className='w-full rounded-md p-2 text-center'
                    type='text'
                    id={noteEditId}
                    name='noteTitle'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <EditButton key={nanoid()} editMethod={() => NoteTitleSwitch()} />
            </>
        )
    }
    return (
        <>
            <h1 className='text-2xl text-center'>
                {title}
            </h1>
            <EditButton key={nanoid()} editMethod={() => NoteTitleSwitch()} />
        </>
    )
}

export default NoteTitle
