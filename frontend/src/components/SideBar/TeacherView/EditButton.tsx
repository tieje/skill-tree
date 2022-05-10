import { useReduxDispatch } from "../../../redux/hooks"
import { EditButtonPropsType } from "../../../types/Types"

const EditButton = ({ editMethod }: EditButtonPropsType) => {
    const dispatch = useReduxDispatch()
    return (
        <button
            className='absolute top-0 right-0 text-2xl font-bold hover:bg-paper-yellow-deep rounded-lg p-1 shadow-lg px-3'
            onClick={() => dispatch(editMethod())}
        >
            &#9998;
        </button >
    )
}
export default EditButton
