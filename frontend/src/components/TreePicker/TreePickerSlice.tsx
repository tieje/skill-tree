import { createSlice } from "@reduxjs/toolkit";
import { LEARN, TEACH } from "../../Variables/StaticVariables";

const TreePickerSlice = createSlice({
    name: 'treepicker',
    initialState: {
        treeFilter: LEARN
    },
    reducers: {
        TreeFilterToLearn: state => {
            state.treeFilter = LEARN
        },
        TreeFilterToTeach: state => {
            state.treeFilter = TEACH
        }
    }
})

export const {
    TreeFilterToLearn,
    TreeFilterToTeach
} = TreePickerSlice.actions
export default TreePickerSlice.reducer
