import { SerializedError } from "@reduxjs/toolkit";
import {
    // BaseQueryFn,
    // FetchArgs,
    FetchBaseQueryError,
    // FetchBaseQueryMeta,
    // MutationDefinition
} from "@reduxjs/toolkit/dist/query";
import {
    // MutationTrigger,
} from "@reduxjs/toolkit/dist/query/react/buildHooks";

type ReduxMethod = {
    payload: undefined;
    type: string;
}

type PathType = {
    path_id: number;
    starting_hex_q: number;
    starting_hex_r: number;
    starting_hex_s: number;
    ending_hex_q: number;
    ending_hex_r: number;
    ending_hex_s: number;
    skill_tree: number;
    starting_hex_string: string;
    ending_hex_string: string;
    user: number
}

type HexagonType = {
    hex_q: number;
    hex_r: number;
    hex_s: number;
    skill_tree: number;
    hex_id?: number;
    allow_verbal_feedback?: boolean;
    allow_quantitative_feedback?: boolean;
    image_address?: string;
    title?: string;
    note?: string;
    hex_string?: string
    user?: string
}

type SkillTreeType = {
    skill_tree_id: number;
    paths?: PathType[];
    hexagons?: HexagonType[];
    name: string;
    theme?: string;
    hex_string_list?: string[]
    user?: number,
}

type GenHexType = {
    id?: number,
    q: number,
    r: number,
    s: number,
    pattern?: string,
}

type GenHexObjectType = {
    [key: string]: GenHexType
}

type IncomingData = {
    data?: SkillTreeType;
    error?: FetchBaseQueryError | SerializedError;
    isLoading?: boolean
}

type EditButtonPropsType = {
    label?: string;
    editMethod(): ReduxMethod
}

type FunctionalButtonPropsType = {
    shortcut?: string
    label?: string
}

type HexEntry = {
    [key: string]: Partial<HexagonType>
}

type User = {
    username: string
}

type AuthState = {
    user_id: string | null;
    token: string | null;
}

type PanState = {
    tool?: string
    hexagonFocused: Partial<HexagonType>
    pathFocused: Partial<PathType>
    startingHexagon: Partial<HexagonType>
    pathEditMode: string
    pathDeselectDisable: boolean
    pathDeleteDisable: boolean
    hexFiller: HexEntry
    reactSVGPanZoomValue: any
    hexMoveEditMode: string
    hexMoveDeselectDisable: boolean
}

type SidebarState = {
    verbal: boolean
    quantitative: boolean
    editImgAddress: boolean
    editNoteTitle: boolean
    editNoteBody: boolean
    imgAddress: string
    noteTitle: string
    noteBody: string
    viewer: string
    editShortcuts: string
    sidebarBaseClass: string
    textareaCursorLocation: number
    textareaLastKeyPress: string
    editTreeTitle: boolean
    treeTitle: string
    ChangeTitleMethod?(payload: any): ReduxMethod
}

type UserResponse = {
    key: string,
    user_id: number,
}

type LoginRequest = {
    username: string;
    password: string;
}

type NavButtonPropsType = {
    label: string
    to: string
}

type SkillTreePickerTreeType = {
    skill_tree_id: number
    name: string,
    user_id: number,
    image_address: string,
    last_edit_timestamp: number
}

type SkillTreePickerByUserIdType = {
    id: number
    learning: SkillTreePickerTreeType[]
    teaching: SkillTreePickerTreeType[]
}

type TreePickerStateType = {
    treeFilter: string
    treeFocused: Partial<SkillTreePickerTreeType>,
}
type UpdateMethodType = 'updateTreeById' | 'updateHexagonById'

export type {
    ReduxMethod,
    SkillTreeType,
    HexagonType,
    PathType,
    GenHexType,
    GenHexObjectType,
    IncomingData,
    EditButtonPropsType,
    HexEntry,
    User,
    AuthState,
    UserResponse,
    LoginRequest,
    PanState,
    SidebarState,
    NavButtonPropsType,
    SkillTreePickerTreeType,
    SkillTreePickerByUserIdType,
    FunctionalButtonPropsType,
    TreePickerStateType,
    UpdateMethodType,
}
