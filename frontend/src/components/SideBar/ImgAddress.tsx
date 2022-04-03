import React, { useState } from "react"
import { nanoid } from "nanoid"
import { useFocusInput } from "../../utils/utils"
import { useReduxDispatch } from "../../redux/hooks"
import { ImgAddressSwitch } from "./SideBarSlices"

const ImgAddress = ({ edit, imgAddress }: { edit: boolean, imgAddress?: string }) => {
    const [newImgAddress, setNewImgAddress] = useState(imgAddress)
    const inputRef = useFocusInput()
    const img_tag_id: string = nanoid()
    const dispatch = useReduxDispatch()
    const handleAddText = (
        event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'Enter':
                dispatch(ImgAddressSwitch())
                break
        }
    }
    if (edit) {
        return (
            <>
                <label className='text-left text-xl' htmlFor={img_tag_id}>
                    Image Address
                    <a href="https://www.wikihow.com/Get-the-URL-for-Pictures" className='pl-2 opacity-50'>
                        (what's this?)
                    </a>
                </label>
                <input
                    ref={inputRef}
                    className='w-full rounded-md p-2'
                    type='text'
                    id={img_tag_id}
                    name='img_tag_id'
                    value={newImgAddress}
                    onChange={(e) => setNewImgAddress(e.target.value)}
                    onKeyDown={handleAddText}
                />
            </>
        )
    }
    return (
        <>
            <label className='text-left text-xl' htmlFor={img_tag_id}>
                Image Address
                <a href="https://www.wikihow.com/Get-the-URL-for-Pictures" className='pl-2 opacity-50'>
                    (what's this?)
                </a>
            </label>
            <a href={newImgAddress} id={img_tag_id} className=''>{newImgAddress}</a>
        </>
    )
}
export default ImgAddress
