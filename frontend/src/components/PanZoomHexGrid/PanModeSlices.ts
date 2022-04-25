import {
    TOOL_NONE,
    TOOL_PAN
} from 'react-svg-pan-zoom'
import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_HEX_STATE, INITIAL_PAN_MODE_STATE, INITIAL_PATH_HEX_STATE, PATH_EDIT_CHOSEN, PATH_EDIT_OFF, PATH_EDIT_ON } from '../../Variables/StaticVariables';

const PanModeSlice = createSlice({
    name: 'PanMode',
    initialState: INITIAL_PAN_MODE_STATE,
    reducers: {
        changeReactSVGPanZoomValue: (state, payload) => {
            state.reactSVGPanZoomValue = payload
        },
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
        },
        ResetPanModeState: state => {
            state = INITIAL_PAN_MODE_STATE
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
    ResetPanModeState,
    changeReactSVGPanZoomValue,
} = PanModeSlice.actions
export default PanModeSlice.reducer
