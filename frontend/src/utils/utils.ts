import { useEffect, useRef } from "react";
import { GenHexObjectType, HexagonType, PathType, SkillTreePickerTreeType } from "../types/Types";

function CustomRectHexGridGenerator(mapWidth: number, mapHeight: number, addHexes?: HexagonType[]): GenHexObjectType {
    const hexagons = {}
    for (let q = 0; q < mapWidth; q++) {
        let offset = Math.floor(q / 2); // or q>>1
        for (let r = -offset; r < mapHeight - offset; r++) {
            let s: number = -q - r
            let id: string = String(q) + ',' + String(r) + ',' + String(s)
            let hex: Partial<HexagonType> = {
                hex_q: q,
                hex_r: r,
                hex_s: s,
            }
            hexagons[id] = hex
        }
    }
    if (addHexes) {
        addHexes.forEach((hex: HexagonType): void => {
            hexagons[hex.hex_string] = {
                hex_q: hex.hex_q,
                hex_r: hex.hex_r,
                hex_s: hex.hex_s,
                pattern: hex.image_address,
            }
        });
    }
    return hexagons;
}

function CustomRectHexGrid(original: GenHexObjectType, addHexes: HexagonType[]): GenHexObjectType {
    const newState: GenHexObjectType = { ...original }
    addHexes.forEach((hex: HexagonType): void => {
        newState[hex.hex_string] = {
            id: hex.hex_id,
            q: hex.hex_q,
            r: hex.hex_r,
            s: hex.hex_s,
            pattern: hex.image_address,
        }
    });
    return newState
}

function AddToPathsObject(original: PathType[], addPath: PathType): PathType[] {
    const newState: PathType[] = [...original, addPath]
    return newState
}

const useFocusInput = () => {
    const ref = useRef<HTMLInputElement>(null)
    useEffect(() => {
        ref.current?.focus()
    })
    return ref
}

const useFocusTextArea = () => {
    const ref = useRef<HTMLTextAreaElement>(null)
    useEffect(() => {
        ref.current?.focus()
    })
    return ref
}

function any(iterable) {
    for (let index = 0; index < iterable.length; index++) {
        if (iterable[index]) return true;
    }
    return false;
}

const mouseClickEvents = ['mousedown', 'click', 'mouseup'];
function simulateMouseClick(element) {
    mouseClickEvents.forEach(mouseEventType =>
        element.dispatchEvent(
            new MouseEvent(mouseEventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                buttons: 1
            })
        )
    );
}

function ToHexString(q: number, r: number, s: number): string {
    return (String(q) + ',' + String(r) + ',' + String(s))
}

function HexEntryNameToNumbers(entry: string): Partial<HexagonType> {
    const replaceM = entry.substring(2).replace(/m/g, '-')
    const entries = replaceM.split('_')
    return ({
        hex_id: undefined,
        hex_string: entry,
        hex_q: parseInt(entries[0]),
        hex_r: parseInt(entries[1]),
        hex_s: parseInt(entries[2])
    })
}

function UnZipStringList(arr: string[][]): string[] {
    const newArray = []
    arr.forEach((list: string[]) => {
        newArray.push(list[0])
    })
    return newArray
}

function OrderByTimeStamp(arr: SkillTreePickerTreeType[]): SkillTreePickerTreeType[] {
    return (
        [...arr].sort((a: SkillTreePickerTreeType, b: SkillTreePickerTreeType) => {
            return (b.last_edit_timestamp - a.last_edit_timestamp)
        })
    )
}
export {
    CustomRectHexGridGenerator,
    CustomRectHexGrid,
    AddToPathsObject,
    useFocusInput,
    useFocusTextArea,
    any,
    simulateMouseClick,
    ToHexString,
    HexEntryNameToNumbers,
    UnZipStringList,
    OrderByTimeStamp,
}
