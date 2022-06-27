import { useDeleteTreeMutation, useGetTreeByIdQuery } from "../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks"
import SideBarContainer from "../SideBar/SideBarContainer"
import SideBarItem, { SideBarItemPropsType } from "../SideBar/SideBarItem/SideBarItem"
import SideBarItemError from "../SideBar/SideBarItem/EdgeCases/SideBarItemError"
import SideBarItemLoading from "../SideBar/SideBarItem/EdgeCases/SideBarItemLoading"
import { ChangeTreeImageAddress, changeTreePickerTreeFocused, ChangeTreeTitle, ToggleEditTreeImageAddressFalse, ToggleEditTreeImageAddressTrue, ToggleEditTreeTitleFalse, ToggleEditTreeTitleTrue } from "./TreePickerSlice"
import useEventListener from '@use-it/event-listener'
import DefaultSideBarItemContainer from "../SideBar/SideBarItem/DefaultSideBarItemContainer"
import { any } from "../../utils/utils"
import { INITIAL_TREEPICKER_TREE_FOCUSED } from "../../Variables/StaticVariables"
import { useRef } from "react"

const TreePickerSideBar = () => {
    const tp = useReduxSelector(state => state.treePicker)
    const userId = useReduxSelector(state => state.auth.user_id)
    const { data, isLoading, error } = useGetTreeByIdQuery(String(tp.treeFocused.skill_tree_id))
    const titleShortcut = 'd'
    const imageAddressShortcut = 's'
    const dispatch = useReduxDispatch()
    const [deleteTree] = useDeleteTreeMutation()
    // edit privilege
    let editPermission = false
    if (userId === String(tp.treeFocused.user_id)) {
        editPermission = true
    }
    // shortcuts
    const handleShortcuts = (event: KeyboardEvent) => {
        if (!any([tp.editTreeTitle, tp.editTreeImageAddress]) &&
            editPermission
        ) {
            switch (event.key) {
                case titleShortcut:
                    dispatch(ToggleEditTreeTitleTrue())
                    break
                case imageAddressShortcut:
                    dispatch(ToggleEditTreeImageAddressTrue())
                    break
            }
        }
    }
    useEventListener('keypress', handleShortcuts)
    if (isLoading) {
        return (
            <SideBarContainer>
                <SideBarItemLoading />
                <SideBarItemLoading />
            </SideBarContainer>
        )
    }
    if (error) {
        return (
            <SideBarContainer>
                <SideBarItemError componentType={'Title'} />
                <SideBarItemError componentType={'Image Address'} />
            </SideBarContainer>
        )
    }
    const SideBarItemTitleProps: SideBarItemPropsType = {
        componentType: 'Title',
        editable: editPermission,
        skill_tree_id: tp.treeFocused.skill_tree_id,
        EditState: tp.editTreeTitle,
        updateMethod: 'updateTreeById',
        shortcutKey: titleShortcut,
        title: data.name,
        toggleEditFalseMethod: ToggleEditTreeTitleFalse,
        toggleEditTrueMethod: ToggleEditTreeTitleTrue,
        changeTextMethod: ChangeTreeTitle
    }
    const SideBarItemImageAddressProps: SideBarItemPropsType = {
        componentType: 'Image Address',
        editable: editPermission,
        skill_tree_id: tp.treeFocused.skill_tree_id,
        EditState: tp.editTreeImageAddress,
        updateMethod: 'updateTreeById',
        shortcutKey: imageAddressShortcut,
        imageAddress: data.image_address,
        toggleEditFalseMethod: ToggleEditTreeImageAddressFalse,
        toggleEditTrueMethod: ToggleEditTreeImageAddressTrue,
        changeTextMethod: ChangeTreeImageAddress
    }
    if (tp.treeFocused.user_id !== parseInt(userId)) {
        return (
            <SideBarContainer>
                <DefaultSideBarItemContainer>
                    <SideBarItem props={SideBarItemTitleProps} />
                </DefaultSideBarItemContainer>
            </SideBarContainer>
        )
    }
    return (
        <SideBarContainer>
            <DefaultSideBarItemContainer>
                <SideBarItem props={SideBarItemTitleProps} />
            </DefaultSideBarItemContainer>
            <DefaultSideBarItemContainer>
                <SideBarItem props={SideBarItemImageAddressProps} />
            </DefaultSideBarItemContainer>
            <div
                className="grid place-content-center mt-52"
            >
                <button
                    className='bg-red text-white px-2 py-1 border border-red-purple rounded-lg hover:border-russian-blue hover:bg-red-purple mb-5'
                    onClick={() => {
                        changeTreePickerTreeFocused(INITIAL_TREEPICKER_TREE_FOCUSED)
                        deleteTree(tp.treeFocused)
                    }}
                >
                    Delete Tree
                </button>
            </div>
        </SideBarContainer>
    )
}

export default TreePickerSideBar
