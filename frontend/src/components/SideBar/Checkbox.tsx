import React, { useEffect, useState } from 'react';
import { useCreateHexMutation, useGetHexagonByIdQuery, useUpdateHexMutation } from '../../redux/api';
import {
    useReduxDispatch,
    useReduxSelector
} from '../../redux/hooks';
import { QUANTITATIVE, VERBAL } from '../../StaticVariables';
import { CheckboxType, HexagonType } from '../../types/Types';
import { changeHexagonFocus } from '../PanZoomHexGrid/PanModeSlices';

const Checkbox = ({ checkbox }: { checkbox: CheckboxType; }) => {
    // variables
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    const [updateCheckbox] = useUpdateHexMutation()
    const [createHex] = useCreateHexMutation()
    const dispatch = useReduxDispatch()

    const { label } = checkbox
    const label_id: string = label.replace(/ /g, '-').toLowerCase()
    useEffect(() => {
        if (label === VERBAL) {
            // console.log(hexagonFocused.hex_id)
        }
    }, [hexagonFocused, label])
    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }
    // console.log(hexagonFocused.hex_id)
    // console.log(error)
    if (error) {
        // console.log('re-rendered sidebar to error')
        const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            let createHexObject;
            switch (label) {
                case VERBAL:
                    createHexObject = {
                        hex_q: hexagonFocused.hex_q,
                        hex_r: hexagonFocused.hex_r,
                        hex_s: hexagonFocused.hex_s,
                        skill_tree: 3,
                        allow_verbal_feedback: e.target.value,
                    }
                    break
                case QUANTITATIVE:
                    createHexObject = {
                        hex_q: hexagonFocused.hex_q,
                        hex_r: hexagonFocused.hex_r,
                        hex_s: hexagonFocused.hex_s,
                        skill_tree: 3,
                        allow_quantitative_feedback: e.target.value,
                    }
                    break
                default:
                    createHexObject = {
                        hex_q: hexagonFocused.hex_q,
                        hex_r: hexagonFocused.hex_r,
                        hex_s: hexagonFocused.hex_s,
                        skill_tree: 3,
                    }
            }
            dispatch(changeHexagonFocus({ hex_created: true }))
            createHex(createHexObject)
            console.log('Object created')
        }
        return (
            <div className='text-xl'>
                <label className='pr-2' htmlFor={label_id}>
                    {label}
                </label>
                <input
                    type="checkbox"
                    id={label_id}
                    name={label_id}
                    defaultChecked={true}
                    onChange={handleOnChange}
                />
            </div>
        )
    }
    let defaultChecked: boolean;
    let updateObject: Partial<HexagonType>;
    switch (label) {
        case VERBAL:
            defaultChecked = data.allow_verbal_feedback
            updateObject = {
                hex_id: hexagonFocused.hex_id,
                allow_verbal_feedback: !data.allow_verbal_feedback,
            }
            break;
        case QUANTITATIVE:
            defaultChecked = data.allow_quantitative_feedback
            updateObject = {
                hex_id: hexagonFocused.hex_id,
                allow_quantitative_feedback: !data.allow_quantitative_feedback,
            }
            break
    }
    return (
        <div className='text-xl'>
            <label className='pr-2' htmlFor={label_id}>
                {label}
            </label>
            <input
                type="checkbox"
                id={label_id}
                name={label_id}
                defaultChecked={defaultChecked}
                onChange={async () => {
                    await updateCheckbox(updateObject)
                }}
            />
        </div>
    )
}

export default Checkbox
