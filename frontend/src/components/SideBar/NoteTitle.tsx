import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useFocusInput } from "../../utils/utils";
import EditButton from "./EditButton";
import { ChangeNoteTitle, NoteTitleSwitch } from "./SideBarSlices";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { useCreateHexMutation, useGetHexagonByIdQuery, useUpdateHexMutation } from "../../redux/api";

const NoteTitle = () => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    const noteTitle = useReduxSelector(state => state.sideBar.noteTitle)
    const editNoteTitle = useReduxSelector(state => state.sideBar.editNoteTitle)
    const noteEditId = nanoid()
    const inputRef = useFocusInput()
    const dispatch = useReduxDispatch()
    // mutations
    const [updateHex] = useUpdateHexMutation()
    const [createHex] = useCreateHexMutation()
    // functions
    const handleAddText = (
        event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'Enter':
                dispatch(NoteTitleSwitch())
                // Either update or create the hexagon
                if (hexagonFocused.hex_id) {
                    updateHex({
                        hex_id: hexagonFocused.hex_id,
                        title: noteTitle
                    })
                } else {
                    createHex({
                        title: noteTitle,
                        hex_q: hexagonFocused.hex_q,
                        hex_r: hexagonFocused.hex_r,
                        hex_s: hexagonFocused.hex_s,
                        skill_tree: 3,
                    })
                }
                break
        }
    }
    useEffect(() => {
        if (data) {
            dispatch(ChangeNoteTitle(data.title))
        }
    }, [data, dispatch])
    if (editNoteTitle) {
        return (
            <>
                <label className='text-left text-2xl' htmlFor={noteEditId}>
                    Title
                </label>
                <span className='pb-2 opacity-50 text-lg text-center'>
                    submit: Enter key
                </span>
                <input
                    ref={inputRef}
                    className='w-full rounded-md p-2 text-center'
                    type='text'
                    id={noteEditId}
                    name='noteTitle'
                    value={noteTitle}
                    onChange={(e) => dispatch(ChangeNoteTitle(e.target.value))}
                    onKeyDown={handleAddText}
                />
            </>
        )
    }
    if (isLoading || error) {
        return (
            <>
                <h1 className='text-2xl text-left'>
                    Title
                </h1>
                <span className='opacity-50 text-lg text-center'>
                    edit shortcut: d key
                </span>
                <EditButton key={nanoid()} editMethod={() => NoteTitleSwitch()} />
            </>
        )
    }
    return (
        <>
            <h1 className='text-2xl text-left'>
                Title
            </h1>
            <span className='opacity-50 text-lg text-center'>
                edit shortcut: d key
            </span>
            <h1 className='text-2xl text-center'>
                {noteTitle === null || noteTitle === '' ? 'Title' : noteTitle}
            </h1>
            <EditButton key={nanoid()} editMethod={() => NoteTitleSwitch()} />
        </>
    )
}

export default NoteTitle
