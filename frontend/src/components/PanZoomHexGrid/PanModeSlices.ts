import { createSlice } from "@reduxjs/toolkit";
import { TOOL_NONE, TOOL_PAN } from 'react-svg-pan-zoom'
import { CustomRectHexGridGenerator, CustomRectHexGrid } from "../../utils/utils";

const PanModeSlice = createSlice({
    name: 'PanMode',
    initialState: {
        tool: TOOL_NONE,
        initialHexagons: CustomRectHexGridGenerator(16, 16)
    },
    reducers: {
        changeToDragMode: state => {
            state.tool = TOOL_PAN
        },
        changeToPointerMode: state => {
            state.tool = TOOL_NONE
        },
        reloadHexagons: (state, action) => {
            state.initialHexagons = CustomRectHexGrid(state.initialHexagons, action.payload)
        }
    },
})

export const { changeToDragMode, changeToPointerMode, reloadHexagons } = PanModeSlice.actions
export default PanModeSlice.reducer
