import { AuthState, HexagonType, PanState, PathType, SidebarState } from "./types/Types"
import { TOOL_NONE } from 'react-svg-pan-zoom'

const VERBAL: string = 'Verbal Feedback'
const QUANTITATIVE: string = 'Quantitative Feedback'
const INVISIBLE: string = 'invisible'
const HEXAGON_FOCUSED: string = 'hexagonFocused'
const CHECKBOXES: string[] = [VERBAL, QUANTITATIVE]
const IMG_ADDRESS: string = 'image address'
const TITLE: string = 'title'
const NOTES: string = 'notes'
const PATH_EDIT_ON: string = 'on'
const PATH_EDIT_OFF: string = 'off'
const PATH_EDIT_CHOSEN: string = 'chosen'
const INITIAL_PATH_HEX_STATE: Partial<PathType> = {
    starting_hex_q: undefined,
    starting_hex_r: undefined,
    starting_hex_s: undefined,
    ending_hex_q: undefined,
    ending_hex_r: undefined,
    ending_hex_s: undefined,
    skill_tree: undefined,
}
const INITIAL_HEX_STATE: Partial<HexagonType> = {
    hex_q: undefined,
    hex_r: undefined,
    hex_s: undefined,
    hex_string: undefined,
    hex_id: undefined,
}
const INITIAL_SIDEBAR_STATE: SidebarState = {
    verbal: true,
    quantitative: true,
    editImgAddress: false,
    editNoteTitle: false,
    editNoteBody: false,
    imgAddress: '',
    noteTitle: '',
    noteBody: '',
}
const INITIAL_PAN_MODE_STATE: PanState = {
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
}
const INITIAL_AUTH_STATE: AuthState = {
    user: null,
    token: null

}

export {
    VERBAL,
    QUANTITATIVE,
    INVISIBLE,
    HEXAGON_FOCUSED,
    CHECKBOXES,
    IMG_ADDRESS,
    TITLE,
    NOTES,
    PATH_EDIT_ON,
    PATH_EDIT_OFF,
    PATH_EDIT_CHOSEN,
    INITIAL_PATH_HEX_STATE,
    INITIAL_HEX_STATE,
    INITIAL_SIDEBAR_STATE,
    INITIAL_PAN_MODE_STATE,
    INITIAL_AUTH_STATE,
}
