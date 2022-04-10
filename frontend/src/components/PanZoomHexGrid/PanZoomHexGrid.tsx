import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Hex,
  Path,
} from 'react-hexgrid';
import React, {
  useRef,
  useEffect,
  useState
} from 'react';
import {
  TOOL_PAN,
  TOOL_NONE,
  ReactSVGPanZoom,
  INITIAL_VALUE
} from 'react-svg-pan-zoom'
import { useWindowSize } from '@react-hook/window-size';
import useEventListener from '@use-it/event-listener'
import { useReduxSelector, useReduxDispatch } from '../../redux/hooks';
import { nanoid } from 'nanoid';
import {
  changeToPointerMode, changeToDragMode,
  changeHexagonFocus
} from './PanModeSlices';
import { PathType, HexagonType } from '../../types/Types';
import { any, HexEntryNameToNumbers, UnZipStringList, } from '../../utils/utils';
import { ImgAddressSwitch, NoteBodySwitch, NoteTitleSwitch } from '../SideBar/SideBarSlices';
import { useGetTreeByIdQuery } from '../../redux/api';

const PanZoomHexGrid = () => {
  // Queryies
  const { data, isLoading, error } = useGetTreeByIdQuery('3')
  const [currentData, setCurrentData] = useState(data)
  // variables
  const dispatch = useReduxDispatch()
  // useRef
  const hexElement = useRef(null)
  // useReduxSelector
  const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
  const tool = useReduxSelector(state => state.panMode.tool)
  const editImgAddress = useReduxSelector(state => state.sideBar.editImgAddress)
  const editNoteTitle = useReduxSelector(state => state.sideBar.editNoteTitle)
  const editNoteBody = useReduxSelector(state => state.sideBar.editNoteBody)
  // useState
  const [aTool, setATool] = useState(tool)
  const [value, setValue] = useState(INITIAL_VALUE)
  const [width, height] = useWindowSize()
  // functions
  const handlePanZoomModeSwitch = (event: KeyboardEvent) => {
    if (!any([editImgAddress, editNoteBody, editNoteTitle])) {
      // pointer mode
      switch (event.key) {
        case 'v':
          dispatch(changeToPointerMode())
          setATool(TOOL_NONE)
          break
        // close all forms before making sidebar invisible and changing to drag mode
        case 'h':
          dispatch(changeToDragMode())
          if (editImgAddress) dispatch(ImgAddressSwitch)
          if (editNoteTitle) dispatch(NoteTitleSwitch)
          if (editNoteBody) dispatch(NoteBodySwitch)
          setATool(TOOL_PAN)
          break
      }
    }
  }
  useEventListener('keypress', handlePanZoomModeSwitch, undefined, { passive: false })
  // useEffects
  useEffect(() => {
    if (data) {
      console.log('rendering currentData')
      setCurrentData(data)
    }
  }, [data])
  // single use useEffects
  useEffect(() => {
    hexElement.current.fitToViewer()
    hexElement.current.zoom(75, 75, 16)
  }, [])
  // isLoading handler creates the initial DOM that will be updated later.
  if (isLoading) {
    console.log('Loading')
    return (
      <ReactSVGPanZoom
        ref={hexElement}
        width={width}
        height={height}
        tool={aTool}
        onChangeTool={setATool}
        value={value}
        onChangeValue={setValue}
      >
        <HexGrid width={1} height={1} viewBox="-10 -9 268 313">
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          </Layout>
        </HexGrid>
      </ReactSVGPanZoom>
    )
  }
  // Error handler
  if (error) {
    return (
      <div>Error</div>
    )
  }
  let hex_string_list: string[];
  if (currentData) {
    hex_string_list = UnZipStringList(currentData.hex_string_list)
  }
  return (
    <ReactSVGPanZoom
      ref={hexElement}
      width={width}
      height={height}
      tool={aTool}
      onChangeTool={setATool}
      value={value}
      onChangeValue={setValue}
    >
      <HexGrid width={1} height={1} viewBox="-10 -9 268 313">
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          {/*Put all hexagons with data first*/}
          {currentData?.hexagons.map((hex: HexagonType) => {
            let pid: string;
            if (hex.image_address) {
              pid = 'p' + hex.hex_string
            }
            if (hexagonFocused.hex_string === hex.hex_string) {
              dispatch(changeHexagonFocus(hex))
            }
            return (
              <Hexagon
                key={nanoid()}
                id={hex.hex_string}
                q={hex.hex_q}
                r={hex.hex_r}
                s={hex.hex_s}
                fill={pid}
                onClick={() => dispatch(changeHexagonFocus(hex))}
              />
            )
          })}
          {currentData ? Object.entries(currentData).map(([key, value]) => {
            if (key[0] === 'h' && key[1] === '_') {
              if (!hex_string_list.includes(key)) {
                let hex = HexEntryNameToNumbers(key)
                return (
                  <Hexagon
                    key={nanoid()}
                    id={key}
                    q={hex.hex_q}
                    r={hex.hex_r}
                    s={hex.hex_s}
                    onClick={() => dispatch(changeHexagonFocus(hex))}
                  >
                    <Text>
                      {hex.hex_q},{hex.hex_r},{hex.hex_s}
                    </Text>
                  </Hexagon>
                )
              }
            }
          }) : null}
          {currentData?.paths.map((path: PathType) => {
            return (
              <Path
                key={path.path_id}
                id={path.path_id}
                start={new Hex(path.starting_hex_q, path.starting_hex_r, path.starting_hex_s)}
                end={new Hex(path.ending_hex_q, path.ending_hex_r, path.ending_hex_s)}
              />
            )
          })}
        </Layout>
        {currentData?.hexagons.map((hex: HexagonType) => {
          let pid: string;
          if (hex.image_address) {
            pid = 'p' + hex.hex_string
          }
          return (
            <Pattern
              key={nanoid()}
              id={pid}
              link={hex.image_address}
            />
          )
        })}
      </HexGrid>
    </ReactSVGPanZoom>
  )
}

export default PanZoomHexGrid
