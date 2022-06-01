import { useEffect } from "react"
import { useUpdateTreeByIdMutation } from "../../../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../../../redux/hooks"
import { useFocusInput } from "../../../../utils/utils"
import { SideBarItemPropsType } from "../SideBarItem"
import SideBarTitle, { SideBarTitlePropsType } from "./SideBarTitle"
import EditButton from "../../TeacherView/EditButton"

const SideBarTitleContainer = ({ props }: { props: SideBarItemPropsType }) => {
    const tp = useReduxSelector(state => state.treePicker)
    if (props.title === undefined) { props.title = '' }
    const SideBarTitleProps: SideBarTitlePropsType = {
        title: props.title,
    }
    const inputRef = useFocusInput()
    const userId = useReduxSelector(state => state.auth.user_id)
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
                        updateTreeById({
                            skill_tree_id: props.skill_tree_id,
                            name: tp.treeTitle,
                            user: parseInt(userId),
                        })
                        break
                }
                break
        }
    }
    useEffect(() => {
        dispatch(props.changeTitleMethod(props.title))
    }, [])
    if (props.EditState) {
        return (
            <>
                <label className='text-left text-2xl' htmlFor={String(props.skill_tree_id)}>
                    Title
                </label>
                <span className='pb-2 opacity-50 text-lg text-center'>
                    submit: Enter key
                </span>
                <input
                    ref={inputRef}
                    className='w-full rounded-md p-2 text-center'
                    type='text'
                    id={String(props.skill_tree_id)}
                    name='treeTitle'
                    value={tp.treeTitle}
                    onChange={e => dispatch(props.changeTitleMethod(e.target.value))}
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
                <h1 className='text-2xl text-left'>
                    Title
                </h1>
                <span className='opacity-50 text-lg text-center'>
                    edit shortcut: {props.shortcutKey} key
                </span>
                <SideBarTitle props={SideBarTitleProps} />
            </>
        )
    }
    return (
        <SideBarTitle props={SideBarTitleProps} />
    )
}
export default SideBarTitleContainer

