import React, { useState } from "react"
import { useCreateHexMutation, useGetHexagonByIdQuery, useUpdateHexMutation } from "../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks"
import { EditButtonPropsType } from "../../types/Types"
import { useFocusInput, useFocusTextArea } from "../../utils/utils"
import { changeHexagonFocus } from "../PanZoomHexGrid/PanModeSlices"
import { ImgAddressSwitch } from "./SideBarSlices"

const EditButton = ({ editMethod }: EditButtonPropsType) => {
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const inputRef = useFocusInput()
    const textareaRef = useFocusTextArea()
    const dispatch = useReduxDispatch()
    const [createHex, data] = useCreateHexMutation()
    const [updateHex] = useUpdateHexMutation()
    // functions
    const handleOnClick = () => {
        dispatch(editMethod())
        if (hexagonFocused.hex_id === undefined) {
            console.log('creating')
            createHex({
                hex_q: hexagonFocused.hex_q,
                hex_r: hexagonFocused.hex_q,
                hex_s: hexagonFocused.hex_q,
                skill_tree: 3,
            })/*
            dispatch(changeHexagonFocus({
                hex_id: value.id,
                hex_q: value.q,
                hex_r: value.r,
                hex_s: value.s,
            }))*/
            console.log(data)
        } else {
            console.log('updating')
            switch (editMethod) {
                case ImgAddressSwitch:
                    updateHex({
                        hex_id: hexagonFocused.hex_id,
                        image_address: inputRef.current.value,
                    })
                    break
            }
            // use switch statement to get value of input element or text area element through Ref
            // 
        }
    }
    return (
        <button
            className='absolute top-0 right-0 text-2xl font-bold hover:bg-paper-yellow-deep rounded-lg p-1 shadow-lg px-3'
            onClick={handleOnClick}
        >
            &#9998;
        </button >
    )
}

export default EditButton
