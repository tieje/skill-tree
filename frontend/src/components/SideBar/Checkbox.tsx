import React from 'react'

const Checkbox = ({label}: {label: string}) => {
    const label_id: string = label.replace(/ /g, '-').toLowerCase()
    return (
        <div className='text-xl'>
            <label className='pr-2' htmlFor={label_id}>
                {label}
            </label>
            <input type="checkbox" id={label_id} name={label_id} />
        </div>
    )
}

export default Checkbox
