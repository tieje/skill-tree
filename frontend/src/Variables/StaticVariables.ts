import { AuthState, FunctionalButtonPropsType, HexagonType, NavButtonPropsType, PanState, PathType, SidebarState, SkillTreePickerTreeType, TreePickerStateType } from "../types/Types"
import { TOOL_NONE } from 'react-svg-pan-zoom'
import { hexagonFiller } from "./HexFiller"
import { INITIAL_VALUE } from 'react-svg-pan-zoom'

const VERBAL: string = 'Verbal Feedback'
const QUANTITATIVE: string = 'Quantitative Feedback'
const INVISIBLE: string = 'invisible'
const BASE_SECTION_CLASS = 'lg:fixed lg:w-3/12 lg:left-0 lg:top-0 lg:h-screen z-10 bg-stationary-pattern top-3/4 absolute w-full overflow-y-auto'
const HEXAGON_FOCUSED: string = 'hexagonFocused'
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
    viewer: TEACHER,
    editShortcuts: EDIT_ON,
    sidebarBaseClass: BASE_SECTION_CLASS,
    textareaCursorLocation: 0,
    textareaLastKeyPress: 'a',
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
const PAN_MODE: FunctionalButtonPropsType = {
    shortcut: 'shortcut: h key',
    label: 'Pan Mode',
}
const POINTER_MODE: FunctionalButtonPropsType = {
    shortcut: 'shortcut: v key',
    label: 'Pointer Mode',
}
const MOVE_NODES_MODE: FunctionalButtonPropsType = {
    shortcut: 'shortcut: m key',
    label: 'Move Nodes',
}
const EDIT_PATHS_MODE: FunctionalButtonPropsType = {
    shortcut: 'shortcut: k key',
    label: 'Edit Paths',
}
const STUDENT_VIEW: FunctionalButtonPropsType = {
    shortcut: 'shortcut: r key',
    label: 'Student View',
}
const TEACHER_VIEW: FunctionalButtonPropsType = {
    shortcut: 'shortcut: t key',
    label: 'Teacher View',
}
const TOP_SIDEBAR_BUTTONS: FunctionalButtonPropsType[] = [
    PAN_MODE,
    MOVE_NODES_MODE,
    EDIT_PATHS_MODE,
]
const BOTTOM_SIDEBAR_BUTTONS: FunctionalButtonPropsType[] = [
    TEACHER_VIEW,
    STUDENT_VIEW,
]
const INITIAL_TREEPICKER_TREE_FOCUSED: Partial<SkillTreePickerTreeType> = {
    skill_tree_id: undefined,
    name: undefined,
    user_id: undefined,
    image_address: undefined,
    last_edit_timestamp: undefined,
}
const INITIAL_TREE_PICKER_STATE: Partial<TreePickerStateType> = {
    treeFilter: LEARN,
    treeFocused: INITIAL_TREEPICKER_TREE_FOCUSED,
}
export {
    VERBAL,
    QUANTITATIVE,
    INVISIBLE,
    BASE_SECTION_CLASS,
    HEXAGON_FOCUSED,
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
    POINTER_MODE,
    EDIT_PATHS_MODE,
    PAN_MODE,
    MOVE_NODES_MODE,
    TEACHER_VIEW,
    STUDENT_VIEW,
    TOP_SIDEBAR_BUTTONS,
    BOTTOM_SIDEBAR_BUTTONS,
    INITIAL_TREE_PICKER_STATE,
}
