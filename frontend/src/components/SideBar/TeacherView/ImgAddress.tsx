import React, { useEffect } from "react"
import { nanoid } from "nanoid"
import { useFocusInput } from "../../../utils/utils"
import { useReduxDispatch, useReduxSelector } from "../../../redux/hooks"
import { ChangeImgAddress, ImgAddressSwitch } from "../SideBarSlices"
import { useCreateHexMutation, useUpdateHexMutation } from "../../../redux/api"
import EditButton from "./EditButton"
import { HexagonType } from "../../../types/Types"
import { changeHexagonFocus } from "../../PanZoomHexGrid/PanModeSlices"
import { useParams } from "react-router-dom"
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

type ImgAddressPropsType = {
    data?: HexagonType
    isLoading: boolean
    error: FetchBaseQueryError | SerializedError
}

const ImgAddress = ({ props }: { props: ImgAddressPropsType }) => {
    // Query
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const imgAddress = useReduxSelector(state => state.sideBar.imgAddress)
    const editImgAddress = useReduxSelector(state => state.sideBar.editImgAddress)
    const inputRef = useFocusInput()
    const img_tag_id: string = nanoid()
    const userId = useReduxSelector(state => state.auth.user_id)
    const dispatch = useReduxDispatch()
    const { treeId } = useParams()
    const [updateHex] = useUpdateHexMutation()
    const [createHex] = useCreateHexMutation()
    // functions
    const handleAddText = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'Enter':
                dispatch(ImgAddressSwitch())
                // Either update or create the hexagon
                if (hexagonFocused.hex_id) {
                    updateHex({
                        hex_id: hexagonFocused.hex_id,
                        image_address: imgAddress,
                        user: userId,
                    })
                } else {
                    try {
                        const payload: HexagonType = await createHex({
                            image_address: imgAddress,
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
                break
        }
    }
    useEffect(() => {
        if (props.data) dispatch(ChangeImgAddress(props.data.image_address))
    }, [dispatch, props.data])
    if (editImgAddress) {
        return (
            <div
                className='relative grid grid-cols-1 gap-1 bg-paper-yellow p-5 m-3 rounded-lg opacity-95'
            >
                <label className='text-left text-xl' htmlFor={img_tag_id}>
                    Image Address
                    <a href="https://dev.to/tieje/how-to-get-the-url-for-pictures-30o6" className='pl-2 opacity-50'>
                        (what's this?)
                    </a>
                </label>
                <span className='opacity-50 text-lg text-center pb-2'>
                    submit: Enter key
                </span>
                <input
                    ref={inputRef}
                    className='w-full rounded-md p-2'
                    type='text'
                    id={img_tag_id}
                    name='img_tag_id'
                    value={imgAddress}
                    onChange={(e) => dispatch(ChangeImgAddress(e.target.value))}
                    onKeyDown={handleAddText}
                />
            </div>
        )
    }
    if (props.isLoading || props.error) {
        if (props.error) dispatch(ChangeImgAddress(''))
        return (
            <div
                className='relative grid grid-cols-1 gap-1 bg-paper-yellow p-5 m-3 rounded-lg opacity-95'
            >
                <label className='text-left text-xl' htmlFor={img_tag_id}>
                    Image Address
                    <a href="https://dev.to/tieje/how-to-get-the-url-for-pictures-30o6" className='pl-2 opacity-50'>
                        (what's this?)
                    </a>
                </label>
                <span className='opacity-50 text-lg text-center'>
                    edit shortcut: s key
                </span>
                <EditButton
                    editMethod={() => ImgAddressSwitch()}
                />
            </div>
        )
    }
    return (
        <div
            className='relative grid grid-cols-1 gap-1 bg-paper-yellow p-5 m-3 rounded-lg opacity-95'
        >
            <label className='text-left text-xl' htmlFor={img_tag_id}>
                Image Address
                <a href="https://dev.to/tieje/how-to-get-the-url-for-pictures-30o6" className='pl-2 opacity-50'>
                    (what's this?)
                </a>
            </label>
            <span className='opacity-50 text-lg text-center'>
                edit shortcut: s key
            </span>
            <a
                href={imgAddress}
                id={img_tag_id}
                className='truncate'
            >
                {props.data.image_address === null || props.data.image_address === '' ? 'no image provided' : props.data.image_address}
            </a>
            <EditButton
                editMethod={() => ImgAddressSwitch()}
            />
        </div>
    )
}
export default ImgAddress
