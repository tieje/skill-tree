import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_TREE_PICKER_STATE, LEARN, TEACH } from "../../Variables/StaticVariables";


const TreePickerSlice = createSlice({
    name: 'treepicker',
    initialState: INITIAL_TREE_PICKER_STATE,
    reducers: {
        TreeFilterToLearn: state => { state.treeFilter = LEARN },
        TreeFilterToTeach: state => { state.treeFilter = TEACH },
        changeTreePickerTreeFocused: (state, action) => {state.treeFocused = action.payload},
    }
})

export const {
    TreeFilterToLearn,
    TreeFilterToTeach,
    changeTreePickerTreeFocused,
} = TreePickerSlice.actions
export default TreePickerSlice.reducer
