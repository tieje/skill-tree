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
  POSITION_NONE
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
  changeStartingHexagon,
  changePathEditModeToChosen,
  pathDeselectDisableSwitch,
  clearStartingHexagon,
  pathDeleteDisableSwitch,
  changePathFocused,
  clearPathFocused,
  changeReactSVGPanZoomValue,
  changeHexMoveEditModeToOff,
  hexMoveDeselectDisableSwitch,
  changeHexMoveEditModeToOn,
  changeHexMoveEditModeToChosen,
} from './PanModeSlices';
import { PathType, HexagonType } from '../../types/Types';
import { any } from '../../utils/utils';
import { ResetSidebarState, ImgAddressSwitch, NoteBodySwitch, NoteTitleSwitch, ToggleSidebarVisibilityOn, ToggleSidebarVisibilityOff } from '../SideBar/SideBarSlices';
import { useCreatePathMutation, useDeletePathMutation, useGetTreeByIdQuery, useUpdateHexMutation } from '../../redux/api';
import { INITIAL_PATH_HEX_STATE, EDIT_CHOSEN, EDIT_OFF, EDIT_ON, INITIAL_HEX_STATE } from '../../Variables/StaticVariables';
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
  // sidebar selectors
  const editImgAddress = useReduxSelector(state => state.sideBar.editImgAddress)
  const editNoteTitle = useReduxSelector(state => state.sideBar.editNoteTitle)
  const editNoteBody = useReduxSelector(state => state.sideBar.editNoteBody)
  const editShortcuts = useReduxSelector(state => state.sideBar.editShortcuts)
  // panMode selectors
  const pm = useReduxSelector(state => state.panMode)
  // Mutations
  const [createPath] = useCreatePathMutation()
  const [deletePath] = useDeletePathMutation()
  const [updateHex] = useUpdateHexMutation()
  // useState
  const [width, height] = useWindowSize()
  // functions
  const handlePanZoomModeSwitch = (event: KeyboardEvent) => {
    if ((pm.pathEditMode === EDIT_ON || pm.pathEditMode === EDIT_CHOSEN) &&
      editShortcuts === EDIT_ON) {
      switch (event.key) {
        case 'q':
          dispatch(changePathEditModeToOff())
          dispatch(clearStartingHexagon())
          dispatch(clearPathFocused())
          dispatch(pathDeselectDisableSwitch(true))
          dispatch(pathDeleteDisableSwitch(true))
          break
        case 'a':
          dispatch(pathDeleteDisableSwitch(true))
          dispatch(clearPathFocused())
          deletePath({ path_id: pm.pathFocused.path_id })
          break
        case 'z':
          dispatch(clearStartingHexagon())
          dispatch(pathDeselectDisableSwitch(true))
          dispatch(changePathEditModeToOn())
          break
      }
    }
    if ((pm.hexMoveEditMode === EDIT_ON || pm.hexMoveEditMode === EDIT_CHOSEN) &&
      editShortcuts === EDIT_ON) {
      switch (event.key) {
        case 'q':
          dispatch(changeHexMoveEditModeToOff())
          dispatch(hexMoveDeselectDisableSwitch(true))
          break
        case 'z':
          dispatch(changeHexagonFocus(INITIAL_HEX_STATE))
          dispatch(hexMoveDeselectDisableSwitch(true))
          dispatch(changeHexMoveEditModeToOn())
          break
      }
    }
    if (!any([editImgAddress, editNoteBody, editNoteTitle]) &&
      pm.pathEditMode === EDIT_OFF &&
      pm.hexMoveEditMode === EDIT_OFF &&
      editShortcuts === EDIT_ON) {
      // pointer mode
      switch (event.key) {
        case 'v':
          dispatch(changeToPointerMode())
          dispatch(ToggleSidebarVisibilityOn())
          break
        // close all forms before making sidebar invisible and changing to drag mode
        case 'h':
          dispatch(changeToDragMode())
          dispatch(ToggleSidebarVisibilityOff())
          if (editImgAddress) dispatch(ImgAddressSwitch())
          if (editNoteTitle) dispatch(NoteTitleSwitch())
          if (editNoteBody) dispatch(NoteBodySwitch())
          break
        case 'k':
          dispatch(changePathEditModeToOn())
          break
        case 'm':
          dispatch(changeHexMoveEditModeToOn())
          break
      }
    }
  }
  const handleHexagonClick = (hex: Partial<HexagonType>) => {
    dispatch(ResetSidebarState())
    dispatch(changeHexagonFocus(hex))
    if (pm.pathEditMode === EDIT_ON || pm.pathEditMode === EDIT_CHOSEN) {
      switch (pm.pathEditMode) {
        case EDIT_CHOSEN:
          dispatch(changePathEditModeToOn())
          dispatch(pathDeselectDisableSwitch(true))
          createPath({
            starting_hex_q: pm.startingHexagon.hex_q,
            starting_hex_r: pm.startingHexagon.hex_r,
            starting_hex_s: pm.startingHexagon.hex_s,
            ending_hex_q: hex.hex_q,
            ending_hex_r: hex.hex_r,
            ending_hex_s: hex.hex_s,
            skill_tree: parseInt(treeId)
          })
          break
        case EDIT_ON:
          dispatch(changeStartingHexagon(hex))
          dispatch(changePathEditModeToChosen())
          dispatch(pathDeselectDisableSwitch(false))
          break
      }
    } else if (pm.hexMoveEditMode === EDIT_ON || pm.hexMoveEditMode === EDIT_CHOSEN) {
      switch (pm.hexMoveEditMode) {
        case EDIT_CHOSEN:
          if (hex.hex_id === undefined) {
            dispatch(changeHexMoveEditModeToOn())
            dispatch(hexMoveDeselectDisableSwitch(true))
            const newHex = {
              ...pm.startingHexagon,
              hex_q: hex.hex_q,
              hex_r: hex.hex_r,
              hex_s: hex.hex_s
            }
            updateHex(newHex)
          } else if (hex.hex_id !== undefined) {
            dispatch(changeStartingHexagon(hex))
            dispatch(changeHexMoveEditModeToChosen())
            dispatch(hexMoveDeselectDisableSwitch(false))
          }
          break
        case EDIT_ON:
          if (hex.hex_id !== undefined) {
            dispatch(changeStartingHexagon(hex))
            dispatch(changeHexMoveEditModeToChosen())
            dispatch(hexMoveDeselectDisableSwitch(false))
          }
          break
      }
    }
  }
  const handlePathClick = (path: Partial<PathType>) => {
    switch (pm.pathEditMode) {
      case EDIT_ON:
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
    return (
      <ReactSVGPanZoom
        ref={hexElement}
        width={width}
        height={height - 64}
        tool={pm.tool}
        value={pm.reactSVGPanZoomValue}
        onChangeTool={() => { }}
        onChangeValue={(value) => dispatch(changeReactSVGPanZoomValue(value))}
        detectAutoPan={false}
        toolbarProps={{
          position: POSITION_NONE
        }}
      >
        <HexGrid width={1} height={1} viewBox="-10 -9 268 313">
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            <Hexagon q={8} r={1} s={-9} />
          </Layout>
        </HexGrid>
      </ReactSVGPanZoom>
    )
  }
  // Error handler
  if (error) return (<div>Error</div>)
  return (
    <>
      <ReactSVGPanZoom
        ref={hexElement}
        width={width}
        height={height - 64}
        tool={pm.tool}
        value={pm.reactSVGPanZoomValue.payload}
        onChangeTool={() => { }}
        onChangeValue={(value) => { dispatch(changeReactSVGPanZoomValue(value)) }}
        detectAutoPan={false}
        toolbarProps={{ position: POSITION_NONE }}
      >
        <HexGrid width={1} height={1} viewBox="-10 -9 268 313">
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
            {/*Put all hexagons with data first*/}
            {data?.hexagons.map((hex: HexagonType) => {
              let pid: string;
              if (hex.image_address) { pid = 'p' + hex.hex_string }
              if (pm.hexagonFocused.hex_string === hex.hex_string) { dispatch(changeHexagonFocus(hex)) }
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
            {data ? Object.entries(pm.hexFiller).map(([key, value]) => {
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
                    <Text key={nanoid()}>
                      {[value.hex_q, value.hex_r, value.hex_s].join(',')}
                    </Text>
                  </Hexagon>
                )
              }
              return null
            }) : null}
            {(pm.pathEditMode === EDIT_CHOSEN && pm.hexagonFocused) || (pm.hexMoveEditMode === EDIT_CHOSEN && pm.hexagonFocused) ?
              <Hexagon
                key={nanoid()}
                q={pm.hexagonFocused.hex_q}
                r={pm.hexagonFocused.hex_r}
                s={pm.hexagonFocused.hex_s}
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
            {pm.pathEditMode === EDIT_ON && pm.pathFocused !== INITIAL_PATH_HEX_STATE ?
              <CustomPath
                key={nanoid()}
                start={new Hex(
                  pm.pathFocused.starting_hex_q,
                  pm.pathFocused.starting_hex_r,
                  pm.pathFocused.starting_hex_s,
                )}
                end={new Hex(
                  pm.pathFocused.ending_hex_q,
                  pm.pathFocused.ending_hex_r,
                  pm.pathFocused.ending_hex_s
                )}
                onClick={() => handlePathClick(pm.pathFocused)}
                pathStyle={{ stroke: '#fd9420' }}
              />
              : null}
          </Layout>
          {data?.hexagons.map((hex: HexagonType) => {
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
      </ReactSVGPanZoom>
    </>
  )
}

export default PanZoomHexGrid
