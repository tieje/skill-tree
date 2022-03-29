import React from 'react'
import { useRef } from 'react';
import { useReduxSelector, useReduxDispatch } from '../../redux/hooks';
import { changeVerbalToTrue, changeVerbalToFalse, changeQuantitativeToFalse, changeQuantitativeToTrue } from './SideBarSlices';
import { VERBAL, QUANTITATIVE } from './staticVariables';

const Checkbox = ({ label }: { label: string },) => {
    // variables
    const label_id: string = label.replace(/ /g, '-').toLowerCase()
    const check = useReduxSelector(state => state.sideBar.checkboxes.verbal)
    const dispatch = useReduxDispatch()
    // functions
    const handleOnChange = () => {
        // pass functions as props to function react component
    }
    return (
        <div className='text-xl'>
            <label className='pr-2' htmlFor={label_id}>
                {label}
            </label>
            <input type="checkbox" id={label_id} name={label_id} defaultChecked={check} onChange={handleOnChange} />
        </div>
    )
}

export default Checkbox
