import {
    TOOL_NONE,
    TOOL_PAN
} from 'react-svg-pan-zoom'
import { createSlice } from '@reduxjs/toolkit';

const PanModeSlice = createSlice({
    name: 'PanMode',
    initialState: {
        tool: TOOL_NONE,
        hexagonFocused: {
            hex_id: 0,
            hex_string: '0,0,0',
            hex_q: 0,
            hex_r: 0,
            hex_s: 0,
            hex_created: false,
        },
    },
    reducers: {
        changeToDragMode: state => {
            state.tool = TOOL_PAN
        },
        changeToPointerMode: state => {
            state.tool = TOOL_NONE
        },
        changeHexagonFocus: (state, action) => {
            state.hexagonFocused = action.payload
        },
    },
})

export const {
    changeToDragMode,
    changeToPointerMode,
    changeHexagonFocus,
} = PanModeSlice.actions
export default PanModeSlice.reducer
