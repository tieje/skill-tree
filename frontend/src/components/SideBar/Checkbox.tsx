import {
    useReduxDispatch,
    //useReduxSelector
} from '../../redux/hooks';
import { changeQuantitativeBool, changeVerbalBool } from './SideBarSlices';
import { VERBAL, QUANTITATIVE } from './StaticVariables'
import { CheckboxType } from './Types';

const Checkbox = ({ checkbox }: { checkbox: CheckboxType; }) => {
    // variables
    const { label } = checkbox
    const label_id: string = label.replace(/ /g, '-').toLowerCase()
    const dispatch = useReduxDispatch()
    //const testing_verbal = useReduxSelector(state => state.sideBar.checkboxes.verbal)
    // functions
    const handleChange = () => {
        switch (label) {
            case VERBAL.label:
                dispatch(changeVerbalBool())
                break
            case QUANTITATIVE.label:
                dispatch(changeQuantitativeBool())
                break
        }
    }
    //console.log(testing_verbal)
    return (
        <div className='text-xl'>
            <label className='pr-2' htmlFor={label_id}>
                {label}
            </label>
            <input type="checkbox" id={label_id} name={label_id} defaultChecked={true} onChange={handleChange} />
        </div>
    )
}

export default Checkbox
