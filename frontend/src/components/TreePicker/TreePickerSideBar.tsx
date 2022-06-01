import { useGetTreeByIdQuery } from "../../redux/api"
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks"
import SideBarContainer from "../SideBar/SideBarContainer"
import SideBarItem, { SideBarItemPropsType } from "../SideBar/SideBarItem/SideBarItem"
import SideBarItemError from "../SideBar/SideBarItem/SideBarItemError"
import SideBarItemLoading from "../SideBar/SideBarItem/SideBarItemLoading"
import { ChangeTreeTitle, ToggleEditTreeTitleFalse, ToggleEditTreeTitleTrue } from "./TreePickerSlice"
import useEventListener from '@use-it/event-listener'

const TreePickerSideBar = () => {
    const tp = useReduxSelector(state => state.treePicker)
    const { data, isLoading, error } = useGetTreeByIdQuery(String(tp.treeFocused.skill_tree_id))
    const titleShortcut = 'd'
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
    if (error) { return (<SideBarItemError />) }
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
        changeTitleMethod: ChangeTreeTitle
    }
    return (
        <SideBarContainer>
            <SideBarItem props={SideBarItemTitleProps} />
        </SideBarContainer>
    )
}

export default TreePickerSideBar
