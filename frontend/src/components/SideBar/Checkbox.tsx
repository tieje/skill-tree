import { useGetHexagonByIdQuery, useUpdateHexMutation } from '../../redux/api';
import {
    useReduxSelector
} from '../../redux/hooks';
import { QUANTITATIVE, VERBAL } from '../../StaticVariables';
import { CheckboxType } from '../../types/Types';

const Checkbox = ({ checkbox }: { checkbox: CheckboxType; }) => {
    // variables
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    const [updateCheckbox] = useUpdateHexMutation()

    const { label } = checkbox
    const label_id: string = label.replace(/ /g, '-').toLowerCase()
    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }
    if (error) {
        return (
            <div>Error</div>
        )
    }
    let defaultChecked: boolean;
    let updateObject;
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
                onChange={async () => await updateCheckbox(updateObject)}
            />
        </div>
    )
}

export default Checkbox
