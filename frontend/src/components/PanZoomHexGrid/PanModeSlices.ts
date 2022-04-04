import axios from 'axios';
import {
    TOOL_NONE,
    TOOL_PAN
} from 'react-svg-pan-zoom'
import { AppDispatch } from '../../redux/store';
import {
    CustomRectHexGrid,
    CustomRectHexGridGenerator,
} from "../../utils/utils";
import { createSlice } from '@reduxjs/toolkit';
import {
    IDLE,
    PENDING
} from './states';

const PanModeSlice = createSlice({
    name: 'PanMode',
    initialState: {
        hexagons: CustomRectHexGridGenerator(16, 16),
        tool: TOOL_NONE,
        loading: IDLE,
        hexagonFocused: {
            hex_id: 0,
            hex_q: 0,
            hex_r: 0,
            hex_s: 0,
        },
        paths: [],
    },
    reducers: {
        changeToDragMode: state => {
            state.tool = TOOL_PAN
        },
        changeToPointerMode: state => {
            state.tool = TOOL_NONE
        },
        skillTreeLoading: state => {
            if (state.loading === IDLE) {
                state.loading = PENDING
            }
        },
        skillTreeReceived: (state, action) => {
            if (state.loading === PENDING) {
                state.loading = IDLE
            }
            state.hexagons = CustomRectHexGrid(state.hexagons, action.payload.hexagons)
            state.paths = action.payload.paths
        },
        changeHexagonFocus: (state, action) => {
            state.hexagonFocused = action.payload
        },
    },
})

export const {
    changeToDragMode,
    changeToPointerMode,
    skillTreeLoading,
    skillTreeReceived,
    changeHexagonFocus,
} = PanModeSlice.actions
export default PanModeSlice.reducer

// Actions

const fetchSkillTreeThree = () => async (dispatch: AppDispatch) => {
    dispatch(skillTreeLoading())
    const response = await axios.get('http://127.0.0.1:8000/api/v1/skilltrees/3')
    dispatch(skillTreeReceived(response.data))
}

export { fetchSkillTreeThree }
