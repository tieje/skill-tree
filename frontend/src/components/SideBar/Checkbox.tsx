import { useCreateHexMutation, useUpdateHexMutation } from '../../redux/api';
import {
    useReduxDispatch,
    useReduxSelector
} from '../../redux/hooks';
import { CheckboxType, HexagonType } from '../../types/Types';

const Checkbox = ({ checkbox }: { checkbox: CheckboxType; }) => {
    // variables
    const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
    const [updateCheckbox] = useUpdateHexMutation()
    const [createHex] = useCreateHexMutation()
    const dispatch = useReduxDispatch()
    const { label, initial } = checkbox
    const label_id: string = label.replace(/ /g, '-').toLowerCase()
    let defaultChecked: boolean;
    let updateObject: Partial<HexagonType>;
    // function
    const handleUpdateOrCreate = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(hexagonFocused.hex_id) {
            case undefined:
                createHex
                break
        }
        e.target.value
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
                defaultChecked={initial}
                onChange={(e) => handleUpdateOrCreate(e)}
            />
        </div>
    )
}

export default Checkbox
