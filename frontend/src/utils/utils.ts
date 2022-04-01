import { GenHexObjectType, GenHexType, HexagonType, PathType } from "../types/Types";

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

export {
    CustomRectHexGridGenerator,
    CustomRectHexGrid,
    AddToPathsObject
}
