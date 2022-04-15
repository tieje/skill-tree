import {
    TOOL_NONE,
    TOOL_PAN
} from 'react-svg-pan-zoom'
import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_HEX_STATE, INITIAL_PATH_HEX_STATE, PATH_EDIT_CHOSEN, PATH_EDIT_OFF, PATH_EDIT_ON } from '../../StaticVariables';

const PanModeSlice = createSlice({
    name: 'PanMode',
    initialState: {
        tool: TOOL_NONE,
        hexagonFocused: {
            hex_id: 1,
            hex_string: 'h_8_1_m9',
            hex_q: 8,
            hex_r: 1,
            hex_s: -9,
        },
        pathFocused: INITIAL_PATH_HEX_STATE,
        startingPathHexagon: INITIAL_HEX_STATE,
        pathEditMode: PATH_EDIT_OFF,
        pathDeselectDisable: true,
        pathDeleteDisable: true,
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
        changeStartingPathHexagon: (state, action) => {
            state.startingPathHexagon = action.payload
        },
        clearStartingPathHexagon: state => {
            state.startingPathHexagon = INITIAL_HEX_STATE
        },
        pathDeselectDisableSwitch: (state, action) => {
            state.pathDeselectDisable = action.payload
        },
        pathDeleteDisableSwitch: (state, action) => {
            state.pathDeleteDisable = action.payload
        },
        changePathFocused: (state, action) => {
            state.pathFocused = action.payload
        },
        clearPathFocused: state => {
            state.pathFocused = INITIAL_PATH_HEX_STATE
        }
    },
})

export const {
    changeToDragMode,
    changeToPointerMode,
    changeHexagonFocus,
    changePathEditModeToChosen,
    changePathEditModeToOff,
    changePathEditModeToOn,
    changeStartingPathHexagon,
    clearStartingPathHexagon,
    pathDeleteDisableSwitch,
    pathDeselectDisableSwitch,
    changePathFocused,
    clearPathFocused,
} = PanModeSlice.actions
export default PanModeSlice.reducer
