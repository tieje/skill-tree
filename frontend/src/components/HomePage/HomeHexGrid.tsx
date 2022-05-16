import { useWindowSize } from '@react-hook/window-size';
import { nanoid } from 'nanoid';
import {
    HexGrid,
    Layout,
    Hexagon,
    Text,
    Hex,
    Pattern,
} from 'react-hexgrid';
import { useReduxDispatch, useReduxSelector } from '../../redux/hooks';
import { HexagonType, PathType } from '../../types/Types';
//import { CustomRectHexGridGenerator } from '../../utils/utils';
import hexFillerHomePage from '../../Variables/HexFillerHomePage';
import { exampleString, HomePageHexes, HomePageHexStringList, HomePagePaths } from '../../Variables/HomePageState';
import CustomPath from '../PanZoomHexGrid/CustomPath';
import { changeHomeHexagonFocused } from './HomePageSlice';

const HomeHexGrid = () => {
    const [width, height] = useWindowSize()
    const hm = useReduxSelector(state => state.home)
    const dispatch = useReduxDispatch()
    // handlers
    function handleHexClick(hex: Partial<HexagonType>) {
        dispatch(changeHomeHexagonFocused(hex))
    }
    return (
        <HexGrid width={width} height={height - 64} viewBox="10 10 75 75">
            <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                <HexGrid />
                {HomePageHexes.map((hex: Partial<HexagonType>) => {
                    let pid: string;
                    if (hex.image_address) { pid = 'p' + hex.hex_string }
                    if (hm.homeHexagonFocused.hex_string === hex.hex_string) {
                        return (
                            <Hexagon
                                key={hex.hex_id}
                                q={hex.hex_q}
                                r={hex.hex_r}
                                s={hex.hex_s}
                                fill={pid}
                                onClick={() => handleHexClick(hex)}
                                cellStyle={{ 'fill-opacity': '1', 'stroke': '#fd9420' }}
                            >
                                {hex.title !== exampleString ? <Text>{hex.title}</Text> : null}
                            </Hexagon>
                        )
                    }
                    return (
                        <Hexagon
                            key={hex.hex_id}
                            q={hex.hex_q}
                            r={hex.hex_r}
                            s={hex.hex_s}
                            fill={pid}
                            onClick={() => handleHexClick(hex)}
                            cellStyle={{ 'fill-opacity': '1' }}
                        >
                            {hex.title !== exampleString ? <Text>{hex.title}</Text> : null}
                        </Hexagon>
                    )
                })}
                {Object.entries(hexFillerHomePage).map(([key, value]) => {
                    if (HomePageHexStringList.includes(key)) { return null }
                    return (
                        <Hexagon
                            key={nanoid()}
                            id={key}
                            q={value.hex_q}
                            r={value.hex_r}
                            s={value.hex_s}
                        >
                            {/*<Text key={nanoid()}>
                                    {[value.hex_q, value.hex_r, value.hex_s].join(',')}
                                </Text>*/}
                        </Hexagon>
                    )
                })}
                {HomePagePaths.map((aPath: Partial<PathType>) => {
                    return (
                        <CustomPath
                            key={nanoid()}
                            start={new Hex(
                                aPath.starting_hex_q,
                                aPath.starting_hex_r,
                                aPath.starting_hex_s
                            )}
                            end={new Hex(
                                aPath.ending_hex_q,
                                aPath.ending_hex_r,
                                aPath.ending_hex_s,
                            )}
                        />
                    )
                })}
            </Layout>
            {HomePageHexes.map((hex: HexagonType) => {
                let pid: string;
                if (hex.image_address) {
                    pid = 'p' + hex.hex_string
                    return (
                        <Pattern
                            key={nanoid()}
                            id={pid}
                            link={hex.image_address}
                        />)
                } else {
                    return (null)
                }
            })}
        </HexGrid>
    )
}

export default HomeHexGrid
