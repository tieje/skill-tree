type undefinedPayloadType = {
    payload: undefined;
    type: string;
}

type CheckboxType = {
    label: string
}

type NoteType = {
    note_id: number;
    note: string;
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
    hex_id: number;
    hex_q: number;
    hex_r: number;
    hex_s: number;
    allow_verbal_feedback: boolean;
    allow_quantitative_feedback: boolean;
    image_address: string;
    title: string;
    note?: number;
    skill_tree: number;
    hex_string: string

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
    q: number,
    r: number,
    s: number,
    pattern?: string,
}

type GenHexObjectType = {
    [key: string]: GenHexType
}

type GeneratedHexListType = GenHexType[]

export type {
    CheckboxType,
    undefinedPayloadType,
    SkillTreeType,
    HexagonType,
    PathType,
    NoteType,
    GenHexType,
    GenHexObjectType,
    GeneratedHexListType,
}
