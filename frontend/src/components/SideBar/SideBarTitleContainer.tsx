import { useEffect } from "react"
import { useUpdateTreeByIdMutation } from "../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks"
import { ReduxMethod, UpdateMethodType } from "../../types/Types"
import { useFocusInput } from "../../utils/utils"
import SideBarTitle, { SideBarTitlePropsType } from "./SideBarTitle"
import EditButton from "./TeacherView/EditButton"

type SideBarTitleContainerPropsType = {
    skill_tree_id: number
    title: string
    editable?: boolean
    EditState: boolean
    updateMethod: UpdateMethodType
    shortcutKey: string
    toggleEditFalseMethod(): ReduxMethod
    toggleEditTrueMethod(): ReduxMethod
    changeTitleMethod(payload: any): ReduxMethod
}
const SideBarTitleContainer = ({ props }: { props: SideBarTitleContainerPropsType }) => {
    const SideBarTitleProps: SideBarTitlePropsType = {
        title: props.title,
        shortcutKey: props.shortcutKey,
    }
    const inputRef = useFocusInput()
    const userId = useReduxSelector(state => state.auth.user_id)
    const [updateTreeById] = useUpdateTreeByIdMutation()
    const dispatch = useReduxDispatch()
    const handleAddText = async (
        event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'Enter':
                dispatch(props.toggleEditFalseMethod())
                // Update method
                switch (props.updateMethod) {
                    case 'updateTreeById':
                        updateTreeById({
                            skill_tree_id: props.skill_tree_id,
                            name: props.title,
                            user: parseInt(userId),
                        })
                        break
                }
                break
        }
    }
    useEffect(() => {
        if (props.title) dispatch(props.changeTitleMethod(props.title))
    }, [dispatch, props])
    if (props.EditState) {
        return (
            <>
                <label className='text-left text-2xl' htmlFor={props.title}>
                    Title
                </label>
                <span className='pb-2 opacity-50 text-lg text-center'>
                    submit: Enter key
                </span>
                <input
                    ref={inputRef}
                    className='w-full rounded-md p-2 text-center'
                    type='text'
                    id={props.title}
                    name='treeTitle'
                    value={props.title}
                    onChange={(e) => dispatch(props.changeTitleMethod(e.target.value))}
                    onKeyDown={handleAddText}
                    maxLength={70}
                />
            </>
        )
    }
    if (props.editable) {
        return (
            <>
                <EditButton editMethod={props.toggleEditTrueMethod} />
                <SideBarTitle props={SideBarTitleProps} />
            </>
        )
    }
    return (
        <SideBarTitle props={SideBarTitleProps} />
    )
}
export type { SideBarTitleContainerPropsType }
export default SideBarTitleContainer
