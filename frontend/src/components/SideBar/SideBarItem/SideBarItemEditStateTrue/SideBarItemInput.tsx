import { useEffect } from "react"
import { useUpdateTreeByIdMutation } from "../../../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../../../redux/hooks"
import { useFocusInput } from "../../../../utils/utils"
import { SideBarItemPropsType } from "../SideBarItem"

const SideBarItemInput = ({ props }: { props: SideBarItemPropsType }) => {
    const tp = useReduxSelector(state => state.treePicker)
    const userId = useReduxSelector(state => state.auth.user_id)
    const inputRef = useFocusInput()
    const [updateTreeById] = useUpdateTreeByIdMutation()
    const dispatch = useReduxDispatch()
    // functions
    const handleAddText = async (
        event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'Enter':
                dispatch(props.toggleEditFalseMethod())
                // Update method
                switch (props.updateMethod) {
                    case 'updateTreeById':
                        switch (props.componentType) {
                            case 'Image Address':
                                updateTreeById({
                                    skill_tree_id: props.skill_tree_id,
                                    image_address: tp.treeImageAddress,
                                    user: parseInt(userId),
                                })
                                break
                            case 'Title':
                                updateTreeById({
                                    skill_tree_id: props.skill_tree_id,
                                    name: tp.treeTitle,
                                    user: parseInt(userId),
                                })
                                break
                        }
                        break
                }
                break
        }
    }
    // Manage value for value in input
    let value: string;
    switch (props.componentType) {
        case 'Title':
            value = tp.treeTitle
            break
        case 'Image Address':
            value = tp.treeImageAddress
            break
    }
    if (value === undefined) {
        value = ''
    }
    // Make it so that the original 
    useEffect(() => {
        switch (props.componentType) {
            case 'Title':
                dispatch(props.changeTextMethod(props.title))
                break
            case 'Image Address':
                dispatch(props.changeTextMethod(props.imageAddress))
                break
        }
    }, [])
    return (
        <input
            ref={inputRef}
            className='w-full rounded-md p-2 text-center'
            type='text'
            id={String(props.skill_tree_id)}
            name='treeImageAddress'
            value={value}
            onChange={e => dispatch(props.changeTextMethod(e.target.value))}
            onKeyDown={handleAddText}
            maxLength={70}
        />
    )
}
export default SideBarItemInput