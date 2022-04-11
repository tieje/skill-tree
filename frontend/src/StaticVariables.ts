import { HexagonType, PathType } from "./types/Types"

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
}
