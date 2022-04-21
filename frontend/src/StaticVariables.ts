import { AuthState, HexagonType, NavButtonPropsType, PanState, PathType, SidebarState, SkillTreeItemPropsType } from "./types/Types"
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
const SIGN_UP: NavButtonPropsType = {
    label: 'Sign Up',
    to: '/registration'
}

const LOGIN: NavButtonPropsType = {
    label: 'Login',
    to: '/treepicker',
}

const LOGOUT: NavButtonPropsType = {
    label: 'Logout',
    to: '/',
}

const SETTINGS: NavButtonPropsType = {
    label: 'Settings',
    to: '/user-settings',
}

const SAMPLE_TREE1: SkillTreeItemPropsType = {
    title: 'U.S. History I',
    url: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555283220/shape/mentalfloss/thomas_paine_rev1.jpg',
    recency: '4 minutes ago'
}
const SAMPLE_TREE2: SkillTreeItemPropsType = {
    title: 'U.S. History II',
    url: 'https://www.ibtimes.com/sites/www.ibtimes.com/files/2017/04/13/gettyimages-803398.jpg',
    recency: '7 minutes ago'
}
const SAMPLE_TREE3: SkillTreeItemPropsType = {
    title: 'Keeanu Reeves',
    url: 'https://img.apmcdn.org/ebacb565e6ca1f8dd8bbd97d24e89dfb5c5c9b48/normal/5e48cc-20190327-keanu-reeves.jpg',
    recency: '1 year go'
}
const LONG_TREE: SkillTreeItemPropsType = {
    title: 'foawnafaowe;nva;nwdva;nvo;anv;joanfd;jafoaiwegrahaeihu',
    url: '#',
    recency: 'foawnafaowe;nva;nwdva;nvo;anv;joanfd;jafoaiwegrahaeihu',
}

const EMPTY_TREE: SkillTreeItemPropsType = {
    title: '',
    url: '#',
    recency: '',
}

const SAMPLE_TREES: SkillTreeItemPropsType[] = [
    SAMPLE_TREE1,
    SAMPLE_TREE2,
    SAMPLE_TREE3,
    LONG_TREE,
    EMPTY_TREE,
    EMPTY_TREE,
    EMPTY_TREE,
    EMPTY_TREE,
    EMPTY_TREE,
    EMPTY_TREE,
    EMPTY_TREE,
    EMPTY_TREE,
    EMPTY_TREE,
    EMPTY_TREE,
]

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
    LOGOUT,
    LOGIN,
    SIGN_UP,
    SETTINGS,
    SAMPLE_TREES,
}
