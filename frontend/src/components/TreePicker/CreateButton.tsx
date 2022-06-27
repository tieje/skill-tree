import { useCreateTreeMutation } from "../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks"
import { CreateMethodType, SkillTreeType } from "../../types/Types"
import { TEACH, UNTITLED } from "../../Variables/StaticVariables"
import { changeTreePickerTreeFocused } from "./TreePickerSlice"

export type CreateButtonPropsType = {
    symbolLeft: string
    buttonText: string
    symbolRight: string
    createMethod: CreateMethodType
}

const CreateButton = ({ props }: { props: CreateButtonPropsType }) => {
    const userId = useReduxSelector(state => state.auth.user_id)
    const treeFilter = useReduxSelector(state => state.treePicker.treeFilter)
    const dispatch = useReduxDispatch()
    const [createTree] = useCreateTreeMutation()
    let disabled: boolean = true;
    if (treeFilter === TEACH) {
        disabled = false
    }
    // function
    const handleClick = async () => {
        switch (props.createMethod) {
            case 'createTree':
                try {
                    const payload: SkillTreeType = await createTree({
                        user: parseInt(userId),
                        name: UNTITLED,
                        image_address: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-fkevZg8yqg4%2FVH8sMDAeYeI%2FAAAAAAAAOxg%2FUeX9WM8wPNo%2Fs1600%2Fstar.jpg&f=1&nofb=1'
                    }).unwrap()
                    dispatch(changeTreePickerTreeFocused(payload))
                } catch (error) {
                    console.log(error)
                }
                break
        }
    }
    return (
        <button
            className='border my-5 p-2 rounded-lg shadow-lg hover:border-russian-blue hover:bg-gray disabled:bg-dark-gray disabled:opacity-30'
            onClick={handleClick}
            disabled={disabled}
        >
            <span className='text-2xl' dangerouslySetInnerHTML={{ __html: props.symbolLeft }}></span>
            {props.buttonText}
            <span className='text-2xl'>{props.symbolRight}</span>
        </button >
    )
}
export default CreateButton
