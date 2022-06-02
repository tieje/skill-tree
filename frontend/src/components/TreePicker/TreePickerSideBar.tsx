import { useGetTreeByIdQuery } from "../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks"
import SideBarContainer from "../SideBar/SideBarContainer"
import SideBarItem, { SideBarItemPropsType } from "../SideBar/SideBarItem/SideBarItem"
import SideBarItemError from "../SideBar/SideBarItem/EdgeCases/SideBarItemError"
import SideBarItemLoading from "../SideBar/SideBarItem/EdgeCases/SideBarItemLoading"
import { ChangeTreeImageAddress, ChangeTreeTitle, ToggleEditTreeImageAddressFalse, ToggleEditTreeImageAddressTrue, ToggleEditTreeTitleFalse, ToggleEditTreeTitleTrue } from "./TreePickerSlice"
import useEventListener from '@use-it/event-listener'
import SideBarItemContainer from "../SideBar/SideBarItem/SideBarItemContainer"

const TreePickerSideBar = () => {
    const tp = useReduxSelector(state => state.treePicker)
    const { data, isLoading, error } = useGetTreeByIdQuery(String(tp.treeFocused.skill_tree_id))
    const titleShortcut = 'd'
    const imageAddressShortcut = 's'
    const dispatch = useReduxDispatch()
    const handleShortcuts = (event: KeyboardEvent) => {
        if (!tp.editTreeTitle) {
            switch (event.key) {
                case titleShortcut:
                    dispatch(ToggleEditTreeTitleTrue())
                    break
            }
        }
    }
    useEventListener('keypress', handleShortcuts)
    if (isLoading) { return (<SideBarItemLoading />) }
    if (error) {
        return (
            <>
                <SideBarItemError componentType={'Title'} />
                <SideBarItemError componentType={'Image Address'} />
            </>
        )
    }
    const SideBarItemTitleProps: SideBarItemPropsType = {
        componentType: 'Title',
        editable: true,
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
        editable: true,
        skill_tree_id: tp.treeFocused.skill_tree_id,
        EditState: tp.editTreeImageAddress,
        updateMethod: 'updateTreeById',
        shortcutKey: imageAddressShortcut,
        imageAddress: data.image_address,
        toggleEditFalseMethod: ToggleEditTreeImageAddressFalse,
        toggleEditTrueMethod: ToggleEditTreeImageAddressTrue,
        changeTextMethod: ChangeTreeImageAddress
    }
    return (
        <SideBarContainer>
            <SideBarItemContainer>
                <SideBarItem props={SideBarItemTitleProps} />
            </SideBarItemContainer>
            <SideBarItemContainer>
                <SideBarItem props={SideBarItemImageAddressProps} />
            </SideBarItemContainer>
        </SideBarContainer>
    )
}

export default TreePickerSideBar
