import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Hex,
} from 'react-hexgrid';
import React, {
  useRef,
  useEffect,
} from 'react';
import {
  ReactSVGPanZoom,
} from 'react-svg-pan-zoom'
import { useWindowSize } from '@react-hook/window-size';
import useEventListener from '@use-it/event-listener'
import { useReduxSelector, useReduxDispatch } from '../../redux/hooks';
import { nanoid } from 'nanoid';
import {
  changeToPointerMode, changeToDragMode,
  changeHexagonFocus,
  changePathEditModeToOn,
  changePathEditModeToOff,
  changeStartingPathHexagon,
  changePathEditModeToChosen,
  pathDeselectDisableSwitch,
  clearStartingPathHexagon,
  pathDeleteDisableSwitch,
  changePathFocused,
  clearPathFocused,
  changeReactSVGPanZoomValue
} from './PanModeSlices';
import { PathType, HexagonType } from '../../types/Types';
import { any } from '../../utils/utils';
import { ResetSidebarState, ImgAddressSwitch, NoteBodySwitch, NoteTitleSwitch } from '../SideBar/SideBarSlices';
import { useCreatePathMutation, useDeletePathMutation, useGetTreeByIdQuery } from '../../redux/api';
import { INITIAL_PATH_HEX_STATE, PATH_EDIT_CHOSEN, PATH_EDIT_OFF, PATH_EDIT_ON } from '../../Variables/StaticVariables';
import CustomPath from './CustomPath';
import { useParams } from 'react-router-dom';

const PanZoomHexGrid = () => {
  // Queryies
  const { treeId } = useParams()
  const { data, isLoading, error } = useGetTreeByIdQuery(treeId)
  // variables
  const dispatch = useReduxDispatch()
  // useRef
  const hexElement = useRef(null)
  // useReduxSelector
  const hexFiller = useReduxSelector(state => state.panMode.hexFiller)
  const hexagonFocused = useReduxSelector(state => state.panMode.hexagonFocused)
  const tool = useReduxSelector(state => state.panMode.tool)
  const editImgAddress = useReduxSelector(state => state.sideBar.editImgAddress)
  const editNoteTitle = useReduxSelector(state => state.sideBar.editNoteTitle)
  const editNoteBody = useReduxSelector(state => state.sideBar.editNoteBody)
  const pathEditMode = useReduxSelector(state => state.panMode.pathEditMode)
  const startingPathHexagon = useReduxSelector(state => state.panMode.startingPathHexagon)
  const pathFocused = useReduxSelector(state => state.panMode.pathFocused)
  const reactSVGPanZoomValue = useReduxSelector(state => state.panMode.reactSVGPanZoomValue)
  const [createPath] = useCreatePathMutation()
  const [deletePath] = useDeletePathMutation()
  // useState
  const [width, height] = useWindowSize()
  // functions
  const handlePanZoomModeSwitch = (event: KeyboardEvent) => {
    if (pathEditMode === PATH_EDIT_ON || pathEditMode === PATH_EDIT_CHOSEN) {
      switch (event.key) {
        case 'q':
          dispatch(changePathEditModeToOff())
          dispatch(clearStartingPathHexagon())
          dispatch(clearPathFocused())
          dispatch(pathDeselectDisableSwitch(true))
          dispatch(pathDeleteDisableSwitch(true))
          break
        case 'a':
          dispatch(pathDeleteDisableSwitch(true))
          dispatch(clearPathFocused())
          deletePath({ path_id: pathFocused.path_id })
          break
        case 'z':
          dispatch(clearStartingPathHexagon())
          dispatch(pathDeselectDisableSwitch(true))
          dispatch(changePathEditModeToOn())
          break
      }
    }
    if (!any([editImgAddress, editNoteBody, editNoteTitle]) && pathEditMode === PATH_EDIT_OFF) {
      // pointer mode
      switch (event.key) {
        case 'v':
          dispatch(changeToPointerMode())
          break
        // close all forms before making sidebar invisible and changing to drag mode
        case 'h':
          dispatch(changeToDragMode())
          if (editImgAddress) dispatch(ImgAddressSwitch)
          if (editNoteTitle) dispatch(NoteTitleSwitch)
          if (editNoteBody) dispatch(NoteBodySwitch)
          break
        case 'k':
          dispatch(changePathEditModeToOn())
          break
      }
    }
  }
  const handleHexagonClick = (hex: Partial<HexagonType>) => {
    dispatch(ResetSidebarState())
    dispatch(changeHexagonFocus(hex))
    switch (pathEditMode) {
      case PATH_EDIT_CHOSEN:
        dispatch(changePathEditModeToOn())
        dispatch(pathDeselectDisableSwitch(true))
        createPath({
          starting_hex_q: startingPathHexagon.hex_q,
          starting_hex_r: startingPathHexagon.hex_r,
          starting_hex_s: startingPathHexagon.hex_s,
          ending_hex_q: hex.hex_q,
          ending_hex_r: hex.hex_r,
          ending_hex_s: hex.hex_s,
          skill_tree: parseInt(treeId)
        })
        break
      case PATH_EDIT_ON:
        dispatch(changeStartingPathHexagon(hex))
        dispatch(changePathEditModeToChosen())
        dispatch(pathDeselectDisableSwitch(false))
        break
    }
  }
  const handlePathClick = (path: Partial<PathType>) => {
    switch (pathEditMode) {
      case PATH_EDIT_ON:
        dispatch(changePathFocused(path))
        dispatch(pathDeleteDisableSwitch(false))
    }
  }
  useEventListener('keypress', handlePanZoomModeSwitch, undefined, { passive: false })
  // useEffects
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
        height={height - 64}
        tool={tool}
        onChangeTool={tool}
        value={reactSVGPanZoomValue}
        onChangeValue={(value) => dispatch(changeReactSVGPanZoomValue(value))}
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
  return (
    <ReactSVGPanZoom
      ref={hexElement}
      width={width}
      height={height - 64}
      tool={tool}
      onChangeTool={tool}
      value={reactSVGPanZoomValue.payload}
      onChangeValue={(value) => {
        dispatch(changeReactSVGPanZoomValue(value))}
      }
    >
      <HexGrid width={1} height={1} viewBox="-10 -9 268 313">
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          {/*Put all hexagons with data first*/}
          {data?.hexagons.map((hex: HexagonType) => {
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
                onClick={() => handleHexagonClick(hex)}
              />
            )
          })}
          {data ? Object.entries(hexFiller).map(([key, value]) => {
            if (!data.hex_string_list.includes(key)) {
              return (
                <Hexagon
                  key={nanoid()}
                  id={key}
                  q={value.hex_q}
                  r={value.hex_r}
                  s={value.hex_s}
                  onClick={() => handleHexagonClick(value)}
                >
                  <Text>
                    {value.hex_q},{value.hex_r},{value.hex_s}
                  </Text>
                </Hexagon>
              )
            }
            return null
          }) : null}
          {pathEditMode === PATH_EDIT_CHOSEN && hexagonFocused ?
            <Hexagon
              key={nanoid()}
              q={hexagonFocused.hex_q}
              r={hexagonFocused.hex_r}
              s={hexagonFocused.hex_s}
              cellStyle={{ fill: '#fd9420' }}
            />
            : null}
          {data?.paths.map((path: PathType) => {
            return (
              <CustomPath
                key={path.path_id}
                id={path.path_id}
                start={new Hex(path.starting_hex_q, path.starting_hex_r, path.starting_hex_s)}
                end={new Hex(path.ending_hex_q, path.ending_hex_r, path.ending_hex_s)}
                onClick={() => handlePathClick(path)}
              />
            )
          })}
          {pathEditMode === PATH_EDIT_ON && pathFocused !== INITIAL_PATH_HEX_STATE ?
            <CustomPath
              key={nanoid()}
              start={new Hex(
                pathFocused.starting_hex_q,
                pathFocused.starting_hex_r,
                pathFocused.starting_hex_s,
              )}
              end={new Hex(
                pathFocused.ending_hex_q,
                pathFocused.ending_hex_r,
                pathFocused.ending_hex_s
              )}
              onClick={() => handlePathClick(pathFocused)}
              pathStyle={{ stroke: '#fd9420' }}
            />
            : null}
        </Layout>
        {data?.hexagons.map((hex: HexagonType) => {
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
