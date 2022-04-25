import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import EditButton from "./EditButton";
import { ChangeNoteBody, NoteBodySwitch } from "./SideBarSlices";
import { useFocusTextArea } from "../../utils/utils";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import { useCreateHexMutation, useGetHexagonByIdQuery, useUpdateHexMutation } from "../../redux/api";
import { HexagonType } from "../../types/Types";
import { changeHexagonFocus } from "../PanZoomHexGrid/PanModeSlices";
import { useParams } from "react-router-dom";

const NoteBody = () => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    const editNoteBody = useReduxSelector(state => state.sideBar.editNoteBody)
    const noteBody = useReduxSelector(state => state.sideBar.noteBody)
    const label_id: string = nanoid()
    const textAreaRef = useFocusTextArea()
    const dispatch = useReduxDispatch()
    const userId = useReduxSelector(state => state.auth.user_id)
    const { treeId } = useParams()
    const [updateHex] = useUpdateHexMutation()
    const [createHex] = useCreateHexMutation()
    const handleAddText = async (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && event.shiftKey) {
            dispatch(NoteBodySwitch())
            // Either update or create the hexagon
            if (hexagonFocused.hex_id) {
                updateHex({
                    hex_id: hexagonFocused.hex_id,
                    note: noteBody,
                    user: userId,
                })
            } else {
                try {
                    const payload: HexagonType = await createHex({
                        note: noteBody,
                        hex_q: hexagonFocused.hex_q,
                        hex_r: hexagonFocused.hex_r,
                        hex_s: hexagonFocused.hex_s,
                        skill_tree: parseInt(treeId),
                        user: userId,
                    }).unwrap()
                    dispatch(changeHexagonFocus(payload))
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
    useEffect(() => {
        if (data) {
            dispatch(ChangeNoteBody(data.note))
        }
    }, [data, dispatch])
    if (editNoteBody) {
        return (
            <>
                <label className='p-2 text-2xl' htmlFor={label_id}>
                    Notes
                </label>
                <span className='opacity-50 text-lg text-center pb-2'>
                    submit: shift + Enter key
                </span>
                <textarea
                    ref={textAreaRef}
                    id={label_id}
                    name={label_id}
                    rows={25}
                    cols={25}
                    className='p-2 overflow-y-auto rounded-lg'
                    placeholder='Instructional text and links for students'
                    value={noteBody}
                    onChange={(e) => dispatch(ChangeNoteBody(e.target.value))}
                    onKeyDown={handleAddText}
                    maxLength={10000}
                >
                </textarea>
                <EditButton key={nanoid()} editMethod={() => NoteBodySwitch()} />
            </>
        )
    }
    if (isLoading || error) {
        return (
            <>
                <label className='p-2 text-2xl' htmlFor={label_id}>
                    Notes
                </label>
                <span className='opacity-50 text-lg text-center'>
                    edit shortcut: f key
                </span>
                <EditButton key={nanoid()} editMethod={() => NoteBodySwitch()} />
            </>
        )
    }
    return (
        <>
            <label className='p-2 text-2xl' htmlFor={label_id}>
                Notes
            </label>
            <span className='opacity-50 text-lg text-center'>
                edit shortcut: f key
            </span>
            <p
                className='p-2 overflow-y-auto rounded-lg h-full whitespace-pre-wrap'
            >
                {noteBody === null || noteBody === '' ? 'notes' : noteBody}
            </p>
            <EditButton key={nanoid()} editMethod={() => NoteBodySwitch()} />
        </>
    )
}
export default NoteBody
