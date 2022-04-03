import React, { useState } from "react"
import { nanoid } from "nanoid"

const ImgAddress = ({ edit, imgAddress }: { edit: boolean, imgAddress?: string }) => {
    const [newImgAddress, setNewImgAddress] = useState(imgAddress)
    const img_tag_id: string = nanoid()
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
                    className='w-full rounded-md p-2'
                    type='text'
                    id={img_tag_id}
                    name='img_tag_id'
                    value={newImgAddress}
                    onChange={(e) => setNewImgAddress(e.target.value)}
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
