import {
    TOOL_NONE,
    TOOL_PAN
} from 'react-svg-pan-zoom'
import { createSlice } from '@reduxjs/toolkit';
import { PATH_EDIT_CHOSEN, PATH_EDIT_OFF, PATH_EDIT_ON } from '../../StaticVariables';

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
        pathFocused: {},
        startingPathHexagon: {},
        endingPathHexagon: {},
        pathEditMode: PATH_EDIT_OFF,
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
        changePathEditModeToOn: state => {
            state.pathEditMode = PATH_EDIT_ON
        },
        changePathEditModeToOff: state => {
            state.pathEditMode = PATH_EDIT_OFF
        },
        changePathEditModeToChosen: state => {
            state.pathEditMode = PATH_EDIT_CHOSEN
        },
    },
})

export const {
    changeToDragMode,
    changeToPointerMode,
    changeHexagonFocus,
    changePathEditModeToChosen,
    changePathEditModeToOff,
    changePathEditModeToOn,
} = PanModeSlice.actions
export default PanModeSlice.reducer
