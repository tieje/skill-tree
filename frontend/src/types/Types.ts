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
    skill_tree: number
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
}

type SkillTreeType = {
    skill_tree_id: number;
    paths: PathType[];
    hexagons: HexagonType[];
    name: string;
    theme: string;
}

export type {
    CheckboxType,
    undefinedPayloadType,
    SkillTreeType,
    HexagonType,
    PathType,
    NoteType,
}
