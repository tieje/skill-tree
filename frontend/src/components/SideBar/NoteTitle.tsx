import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useFocusInput } from "../../utils/utils";
import EditButton from "./EditButton";
import { NoteTitleSwitch } from "./SideBarSlices";
import { useReduxDispatch } from "../../redux/hooks";

const NoteTitle = ({ title, edit }: { title?: string, edit: boolean }) => {
    const [newTitle, setNewTitle] = useState(title)
    const noteEditId = nanoid()
    const inputRef = useFocusInput()
    const dispatch = useReduxDispatch()
    const handleAddText = (
        event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'Enter':
                dispatch(NoteTitleSwitch())
                break
        }
    }
    if (edit) {
        return (
            <>
                <label className='text-left text-2xl' htmlFor={noteEditId}>
                    Title
                </label>
                <input
                    ref={inputRef}
                    className='w-full rounded-md p-2 text-center'
                    type='text'
                    id={noteEditId}
                    name='noteTitle'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onKeyDown={handleAddText}
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
