import { useCreateHexMutation, useUpdateHexMutation } from '../../../redux/api';
import { useReduxDispatch, useReduxSelector } from '../../../redux/hooks';
import { QUANTITATIVE, VERBAL } from '../../../Variables/StaticVariables';
import { HexagonType } from '../../../types/Types';
import { changeHexagonFocus } from '../../PanZoomHexGrid/PanModeSlices';
import { useParams } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

type CheckboxPropsType = {
    label: string
    data?: HexagonType
    isLoading: boolean
    error: FetchBaseQueryError | SerializedError
}

const Checkbox = ({ props }: { props: CheckboxPropsType }) => {
    // variables
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const userId = useReduxSelector(state => state.auth.user_id)
    const dispatch = useReduxDispatch()
    const [updateCheckbox] = useUpdateHexMutation()
    const [createHex] = useCreateHexMutation()
    const label_id: string = props.label.replace(/ /g, '-').toLowerCase()
    const { treeId } = useParams()
    // function
    const handleCreate = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const initialObject: Partial<HexagonType> = {
            hex_q: hexagonFocused.hex_q,
            hex_r: hexagonFocused.hex_r,
            hex_s: hexagonFocused.hex_s,
            hex_string: hexagonFocused.hex_string,
            skill_tree: parseInt(treeId),
            user: userId,
        }
        switch (props.label) {
            case VERBAL:
                try {
                    const payload: HexagonType = await createHex({
                        ...initialObject,
                        allow_verbal_feedback: e.target.checked,
                    }).unwrap()
                    dispatch(changeHexagonFocus(payload))
                } catch (error) {
                    console.log(error)
                }
                break
            case QUANTITATIVE:
                try {
                    const payload: HexagonType = await createHex({
                        ...initialObject,
                        allow_quantitative_feedback: e.target.checked,
                    }).unwrap()
                    dispatch(changeHexagonFocus(payload))
                } catch (error) {
                    console.log(error)
                }
                break
        }
    }
    const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (props.label) {
            case VERBAL:
                updateCheckbox({
                    hex_id: hexagonFocused.hex_id,
                    allow_verbal_feedback: e.target.checked
                })
                break
            case QUANTITATIVE:
                updateCheckbox({
                    hex_id: hexagonFocused.hex_id,
                    allow_quantitative_feedback: e.target.checked
                })
                break
        }
    }
    if (props.isLoading || props.error) {
        return (
            <div className='text-xl'>
                <label className='pr-2' htmlFor={label_id}>
                    {props.label}
                </label>
                <input
                    type="checkbox"
                    id={label_id}
                    name={label_id}
                    checked={true}
                    onChange={(e) => handleCreate(e)}
                />
            </div>
        )
    }
    let checked: boolean;
    switch (props.label) {
        case VERBAL:
            checked = props.data.allow_verbal_feedback
            break
        case QUANTITATIVE:
            checked = props.data.allow_quantitative_feedback
            break
    }
    return (
        <div className='text-xl'>
            <label className='pr-2' htmlFor={label_id}>
                {props.label}
            </label>
            <input
                type="checkbox"
                id={label_id}
                name={label_id}
                checked={checked}
                onChange={(e) => handleUpdate(e)}
            />
        </div>
    )
}

export default Checkbox
