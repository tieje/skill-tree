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
            hex_id: undefined,
            hex_string: 'h_8_1_m9',
            hex_q: 8,
            hex_r: 1,
            hex_s: -9,
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
