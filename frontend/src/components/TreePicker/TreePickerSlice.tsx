import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_TREE_PICKER_STATE, LEARN, TEACH } from "../../Variables/StaticVariables";


const TreePickerSlice = createSlice({
    name: 'treepicker',
    initialState: INITIAL_TREE_PICKER_STATE,
    reducers: {
        TreeFilterToLearn: state => { state.treeFilter = LEARN },
        TreeFilterToTeach: state => { state.treeFilter = TEACH },
        changeTreePickerTreeFocused: (state, action) => { state.treeFocused = action.payload },
        ToggleEditTreeTitleTrue: state => { state.editTreeTitle = true },
        ToggleEditTreeTitleFalse: state => { state.editTreeTitle = false },
        ChangeTreeTitle: (state, action) => { state.treeTitle = action.payload },
        ChangeTreeImageAddress: (state, action) => { state.treeImageAddress = action.payload },
        ToggleEditTreeImageAddressTrue: state => { state.editTreeImageAddress = true },
        ToggleEditTreeImageAddressFalse: state => { state.editTreeImageAddress = false },
    }
})

export const {
    TreeFilterToLearn,
    TreeFilterToTeach,
    changeTreePickerTreeFocused,
    ToggleEditTreeTitleFalse,
    ToggleEditTreeTitleTrue,
    ChangeTreeTitle,
    ChangeTreeImageAddress,
    ToggleEditTreeImageAddressFalse,
    ToggleEditTreeImageAddressTrue,
} = TreePickerSlice.actions
export default TreePickerSlice.reducer
