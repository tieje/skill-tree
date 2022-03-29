import React from "react"
import { nanoid } from "nanoid"

const ImgAddress = () => {
    const img_tag_id: string = nanoid()
    return (
        <>
            <label className='text-left text-xl' htmlFor={img_tag_id}>
                Image Address
                <a href="https://www.wikihow.com/Get-the-URL-for-Pictures" className='pl-2 opacity-50'>
                    (what's this?)
                </a>
            </label>
            <input className='w-full rounded-md p-2' type='text' id={img_tag_id} name='img_tag_id' />
        </>
    )
}
export default ImgAddress
