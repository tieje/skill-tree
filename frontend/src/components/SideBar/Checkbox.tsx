import { useCreateHexMutation, useGetHexagonByIdQuery, useUpdateHexMutation } from '../../redux/api';
import { useReduxSelector } from '../../redux/hooks';
import { QUANTITATIVE, VERBAL } from '../../Variables/StaticVariables';
import { HexagonType } from '../../types/Types';

const Checkbox = ({ checkbox }: { checkbox: string }) => {
    // Query
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const { data, error, isLoading } = useGetHexagonByIdQuery(String(hexagonFocused.hex_id))
    // variables
    const [updateCheckbox] = useUpdateHexMutation()
    const [createHex] = useCreateHexMutation()
    const label_id: string = checkbox.replace(/ /g, '-').toLowerCase()
    // function
    const handleCreate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const initialObject: Partial<HexagonType> = {
            hex_q: hexagonFocused.hex_q,
            hex_r: hexagonFocused.hex_r,
            hex_s: hexagonFocused.hex_s,
            hex_string: hexagonFocused.hex_string,
            skill_tree: 3,
        }
        switch (checkbox) {
            case VERBAL:
                createHex({
                    ...initialObject,
                    allow_verbal_feedback: e.target.checked,
                })
                break
            case QUANTITATIVE:
                createHex({
                    ...initialObject,
                    allow_quantitative_feedback: e.target.checked,
                })
                break
        }
    }
    const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (checkbox) {
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
    // useEffects
    if (isLoading || error) {
        return (
            <div className='text-xl'>
                <label className='pr-2' htmlFor={label_id}>
                    {checkbox}
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
    switch(checkbox) {
        case VERBAL:
            checked = data.allow_verbal_feedback
            break
        case QUANTITATIVE:
            checked = data.allow_quantitative_feedback
            break
    }
    return (
        <div className='text-xl'>
            <label className='pr-2' htmlFor={label_id}>
                {checkbox}
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
