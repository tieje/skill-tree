import { useEffect, useRef } from "react";
import { GenHexObjectType, GenHexType, HexagonType, HexEntry, PathType } from "../types/Types";

function CustomRectHexGridGenerator(mapWidth: number, mapHeight: number, addHexes?: HexagonType[]): GenHexObjectType {
    const hexagons = {}
    for (let q = 0; q < mapWidth; q++) {
        let offset = Math.floor(q / 2); // or q>>1
        for (let r = -offset; r < mapHeight - offset; r++) {
            let s: number = -q - r
            let id: string = String(q) + ',' + String(r) + ',' + String(s)
            let hex: GenHexType = {
                q: q,
                r: r,
                s: s,
                pattern: undefined,
            }
            hexagons[id] = hex
        }
    }
    if (addHexes) {
        addHexes.forEach((hex: HexagonType): void => {
            hexagons[hex.hex_string] = {
                q: hex.hex_q,
                r: hex.hex_r,
                s: hex.hex_s,
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
    }, [])
    return ref
}

const useFocusTextArea = () => {
    const ref = useRef<HTMLTextAreaElement>(null)
    useEffect(() => {
        ref.current?.focus()
    }, [])
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

/*
function InitialHexagonFocused() {
    try {
        const hex_id: string | null = localStorage.getItem(HEXAGON_FOCUSED)
        if (hex_id === null) return ({ hexagonFocused: 0 })
        return {
            onlyLocalStorage: {
                hexagonFocused: parseInt(hex_id)
            }
        }
    } catch (e) {
        console.warn(e)
    }
}
*/

function HexEntryNameToNumbers(entry: string): GenHexType {
    const replaceM = entry.replace(/m/g, '-')
    const entries = replaceM.split(',')
    return ({ q: parseInt(entries[0]), r: parseInt(entries[1]), s: parseInt(entries[2]) })
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
    // InitialHexagonFocused,
    HexEntryNameToNumbers,
}
