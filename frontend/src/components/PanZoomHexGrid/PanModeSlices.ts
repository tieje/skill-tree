import { createSlice } from "@reduxjs/toolkit";
import { TOOL_NONE, TOOL_PAN } from 'react-svg-pan-zoom'

const PanModeSlice = createSlice({
    name: 'PanMode',
    initialState: {
        tool: TOOL_NONE,
    },
    reducers: {
        changeToDragMode: state => {
            state.tool = TOOL_PAN
        },
        changeToPointerMode: state => {
            state.tool = TOOL_NONE
        },
    },
})

export const { changeToDragMode, changeToPointerMode} = PanModeSlice.actions
export default PanModeSlice.reducer
