import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import EditButton from "./EditButton";
import { ChangeNoteBody, NoteBodySwitch } from "../SideBarSlices";
import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks";
import { useCreateHexMutation, useUpdateHexMutation } from "../../../redux/api";
import { HexagonType } from "../../../types/Types";
import { changeHexagonFocus } from "../../PanZoomHexGrid/PanModeSlices";
import { useParams } from "react-router-dom";
import { useFocusTextArea } from "../../../utils/utils";
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';


type NoteBodyPropsType = {
    data: HexagonType
    isLoading: boolean
    error: FetchBaseQueryError | SerializedError
}

const NoteBody = ({ props }: { props: NoteBodyPropsType }) => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const editNoteBody = useReduxSelector(state => state.sideBar.editNoteBody)
    const noteBody = useReduxSelector(state => state.sideBar.noteBody)
    const label_id: string = nanoid()
    const textareaRef = useFocusTextArea()
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
        if (props.data) dispatch(ChangeNoteBody(props.data.note))
    }, [dispatch, props.data])
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
                    ref={textareaRef}
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
                ></textarea>
                <EditButton key={nanoid()} editMethod={() => NoteBodySwitch()} />
            </>
        )
    }
    if (props.isLoading || props.error) {
        if (props.error) dispatch(ChangeNoteBody(''))
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
                {props.data.note === null || props.data.note === '' ? 'notes' : props.data.note}
            </p>
            <EditButton key={nanoid()} editMethod={() => NoteBodySwitch()} />
        </>
    )
}
export default NoteBody
