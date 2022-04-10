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

type undefinedPayloadType = {
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
}

type SkillTreeType = {
    skill_tree_id: number;
    paths?: PathType[];
    hexagons?: HexagonType[];
    name: string;
    theme?: string;
    hex_string_list?: Array<Array<string>>
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
    editMethod(): { payload: undefined; type: string; }
}

type HexId = {
    id: number
}

type HexEntry = {
    [key: string]: HexId
}

export type {
    undefinedPayloadType,
    SkillTreeType,
    HexagonType,
    PathType,
    GenHexType,
    GenHexObjectType,
    IncomingData,
    EditButtonPropsType,
    HexEntry,
}
