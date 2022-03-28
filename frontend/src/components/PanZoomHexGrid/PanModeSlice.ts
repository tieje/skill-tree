import { createSlice } from "@reduxjs/toolkit";
import { TOOL_NONE, TOOL_PAN } from 'react-svg-pan-zoom'

const PanModeSlice = createSlice({
    name: 'PanMode',
    initialState: {
        tool: TOOL_NONE
    },
    reducers: {
        handlePanZoomModeSwitch: state => {
            state.tool
        }
    }
})

export default PanModeSlice.reducer
