import {
    TOOL_NONE,
    TOOL_PAN
} from 'react-svg-pan-zoom'
import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_HEX_STATE, INITIAL_PAN_MODE_STATE, INITIAL_PATH_HEX_STATE, EDIT_CHOSEN, EDIT_OFF, EDIT_ON } from '../../Variables/StaticVariables';

const PanModeSlice = createSlice({
    name: 'PanMode',
    initialState: INITIAL_PAN_MODE_STATE,
    reducers: {
        changeReactSVGPanZoomValue: (state, payload) => { state.reactSVGPanZoomValue = payload },
        changeToDragMode: state => { state.tool = TOOL_PAN },
        changeToPointerMode: state => { state.tool = TOOL_NONE },
        changeTool: (state, payload) => { state.tool = payload.payload },
        changeHexagonFocus: (state, action) => { state.hexagonFocused = action.payload },
        // Path Edit
        changePathEditModeToOn: state => { state.pathEditMode = EDIT_ON },
        changePathEditModeToOff: state => { state.pathEditMode = EDIT_OFF },
        changePathEditModeToChosen: state => { state.pathEditMode = EDIT_CHOSEN },
        changeStartingHexagon: (state, action) => { state.startingHexagon = action.payload },
        clearStartingHexagon: state => { state.startingHexagon = INITIAL_HEX_STATE },
        pathDeselectDisableSwitch: (state, action) => { state.pathDeselectDisable = action.payload },
        pathDeleteDisableSwitch: (state, action) => { state.pathDeleteDisable = action.payload },
        changePathFocused: (state, action) => { state.pathFocused = action.payload },
        clearPathFocused: state => { state.pathFocused = INITIAL_PATH_HEX_STATE },
        ResetPanModeState: state => { state = INITIAL_PAN_MODE_STATE },
        // Hex Move
        changeHexMoveEditModeToOn: state => { state.hexMoveEditMode = EDIT_ON },
        changeHexMoveEditModeToOff: state => { state.hexMoveEditMode = EDIT_OFF },
        changeHexMoveEditModeToChosen: state => { state.hexMoveEditMode = EDIT_CHOSEN },
        clearHexagonFocused: state => { state.hexagonFocused = INITIAL_HEX_STATE },
        hexMoveDeselectDisableSwitch: (state, action) => { state.hexMoveDeselectDisable = action.payload },
    },
})

export const {
    changeToDragMode,
    changeToPointerMode,
    changeTool,
    changeHexagonFocus,
    changePathEditModeToChosen,
    changePathEditModeToOff,
    changePathEditModeToOn,
    changeStartingHexagon,
    clearStartingHexagon,
    pathDeleteDisableSwitch,
    pathDeselectDisableSwitch,
    changePathFocused,
    clearPathFocused,
    ResetPanModeState,
    changeReactSVGPanZoomValue,
    hexMoveDeselectDisableSwitch,
    clearHexagonFocused,
    changeHexMoveEditModeToChosen,
    changeHexMoveEditModeToOff,
    changeHexMoveEditModeToOn
} = PanModeSlice.actions
export default PanModeSlice.reducer
