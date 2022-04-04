import {
    useReduxDispatch,
    //useReduxSelector
} from '../../redux/hooks';
import { CheckboxType } from '../../types/Types';

const Checkbox = ({ checkbox }: { checkbox: CheckboxType; }) => {
    // variables
    const { label, initial } = checkbox
    const label_id: string = label.replace(/ /g, '-').toLowerCase()
    const dispatch = useReduxDispatch()
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
                onChange={() => dispatch(checkbox.editMethod)}
            />
        </div>
    )
}

export default Checkbox
