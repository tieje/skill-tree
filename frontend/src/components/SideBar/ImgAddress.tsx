import React, { useEffect } from "react"
import { nanoid } from "nanoid"
import { useFocusInput } from "../../utils/utils"
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks"
import { ChangeImgAddress, ImgAddressSwitch } from "./SideBarSlices"
import { useCreateHexMutation, useGetHexagonByIdQuery, useUpdateHexMutation } from "../../redux/api"
import EditButton from "./EditButton"
import { HexagonType } from "../../types/Types"
import { changeHexagonFocus } from "../PanZoomHexGrid/PanModeSlices"
import { useParams } from "react-router-dom"

const ImgAddress = () => {
    // Query
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
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
        if (data) {
            dispatch(ChangeImgAddress(data.image_address))
        }
    }, [data, dispatch])
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
    if (isLoading || error) {
        return (
            <div
                className='relative grid grid-cols-1 gap-1 bg-paper-yellow p-5 m-3 rounded-lg opacity-95'
            >
                <label className='text-left text-xl' htmlFor={img_tag_id}>
                    Image Address
                    <a href="https://www.wikihow.com/Get-the-URL-for-Pictures" className='pl-2 opacity-50'>
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
                <a href="https://www.wikihow.com/Get-the-URL-for-Pictures" className='pl-2 opacity-50'>
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
                {imgAddress === null || imgAddress === '' ? 'no image provided' : imgAddress}
            </a>
            <EditButton
                editMethod={() => ImgAddressSwitch()}
            />
        </div>
    )
}
export default ImgAddress
