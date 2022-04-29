import { AuthState, HexagonType, NavButtonPropsType, PanState, PathType, SidebarState } from "../types/Types"
import { TOOL_NONE } from 'react-svg-pan-zoom'
import { hexagonFiller } from "./HexFiller"
import { INITIAL_VALUE } from 'react-svg-pan-zoom'


const VERBAL: string = 'Verbal Feedback'
const QUANTITATIVE: string = 'Quantitative Feedback'
const INVISIBLE: string = 'invisible'
const HEXAGON_FOCUSED: string = 'hexagonFocused'
const CHECKBOXES: string[] = [VERBAL, QUANTITATIVE]
const IMG_ADDRESS: string = 'image address'
const TITLE: string = 'title'
const NOTES: string = 'notes'
const EDIT_ON: string = 'on'
const EDIT_OFF: string = 'off'
const EDIT_CHOSEN: string = 'chosen'
const TEACHER = 'teacher'
const STUDENT = 'student'
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
    viewer: STUDENT,
}

const INITIAL_PAN_MODE_STATE: PanState = {
    tool: TOOL_NONE,
    hexagonFocused: {
        hex_id: undefined,
        hex_string: '8,1,-9',
        hex_q: 8,
        hex_r: 1,
        hex_s: -9,
    },
    pathFocused: INITIAL_PATH_HEX_STATE,
    startingHexagon: INITIAL_HEX_STATE,
    pathEditMode: EDIT_OFF,
    pathDeselectDisable: true,
    pathDeleteDisable: true,
    hexFiller: hexagonFiller,
    reactSVGPanZoomValue: INITIAL_VALUE,
    hexMoveEditMode: EDIT_OFF,
    hexMoveDeselectDisable: true,
}


const INITIAL_AUTH_STATE: AuthState = {
    user_id: null,
    token: null
}
const SIGN_UP: NavButtonPropsType = {
    label: 'Sign Up',
    to: '/registration'
}

const LOGIN: NavButtonPropsType = {
    label: 'Login',
    to: '/trees',
}

const LOGOUT: NavButtonPropsType = {
    label: 'Logout',
    to: '/',
}

const SETTINGS: NavButtonPropsType = {
    label: 'Settings',
    to: '/user-settings',
}

const TREES: NavButtonPropsType = {
    label: 'Skill Trees',
    to: '/trees',
}

const LEARN: string = 'Learn'
const TEACH: string = 'Teach'

export {
    VERBAL,
    QUANTITATIVE,
    INVISIBLE,
    HEXAGON_FOCUSED,
    CHECKBOXES,
    IMG_ADDRESS,
    TITLE,
    NOTES,
    EDIT_ON,
    EDIT_OFF,
    EDIT_CHOSEN,
    INITIAL_PATH_HEX_STATE,
    INITIAL_HEX_STATE,
    INITIAL_SIDEBAR_STATE,
    INITIAL_PAN_MODE_STATE,
    INITIAL_AUTH_STATE,
    LOGOUT,
    LOGIN,
    SIGN_UP,
    SETTINGS,
    LEARN,
    TEACH,
    TREES,
    STUDENT,
    TEACHER,
}
