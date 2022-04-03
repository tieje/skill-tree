import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Hex,
  Path,
} from 'react-hexgrid';
import {
  useRef,
  useEffect,
  useState
} from 'react';
import {
  // UncontrolledReactSVGPanZoom,
  TOOL_PAN,
  TOOL_NONE,
  ReactSVGPanZoom,
  //ALIGN_CENTER,
  INITIAL_VALUE
} from 'react-svg-pan-zoom'
import { useWindowSize } from '@react-hook/window-size';
import useEventListener from '@use-it/event-listener'
import { useReduxSelector, useReduxDispatch } from '../../redux/hooks';
import { nanoid } from 'nanoid';
import { changeToPointerMode, changeToDragMode, fetchSkillTreeThree, changeHexagonFocus } from './PanModeSlices';
import { PENDING } from './states';
import { PathType } from '../../types/Types';
import { any } from '../../utils/utils';
import { ImgAddressSwitch, NoteBodySwitch, NoteTitleSwitch } from '../SideBar/SideBarSlices';

const PanZoomHexGrid = () => {
  // variables
  const dispatch = useReduxDispatch()
  // useRef
  const hexElement = useRef(null)
  // useReduxSelector
  const tool = useReduxSelector(state => state.panMode.tool)
  const hexagons = useReduxSelector(state => state.panMode.hexagons)
  const paths = useReduxSelector(state => state.panMode.paths)
  const loading = useReduxSelector(state => state.panMode.loading)
  const editImgAddress = useReduxSelector(state => state.sideBar.editImgAddress)
  const editNoteTitle = useReduxSelector(state => state.sideBar.editNoteTitle)
  const editNoteBody = useReduxSelector(state => state.sideBar.editNoteBody)
  // useState
  const [hexes, setHexes] = useState(hexagons)
  const [aTool, setATool] = useState(tool)
  const [value, setValue] = useState(INITIAL_VALUE)
  const [pathObjectList, setPathObjectList] = useState(paths)
  const [width, height] = useWindowSize()
  // functions
  const handlePanZoomModeSwitch = (event: KeyboardEvent) => {
    if (!any([editImgAddress, editNoteBody, editNoteTitle])) {
      switch (event.key) {
        case 'v':
          dispatch(changeToPointerMode())
          setATool(TOOL_NONE)
          break
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
    setHexes(hexagons)
  }, [hexagons])
  useEffect(() => {
    setPathObjectList(paths)
  }, [paths])
  useEffect(() => {
    hexElement.current.fitToViewer()
    hexElement.current.zoom(75, 75, 16)
  }, [])
  useEffect(() => {
    dispatch(fetchSkillTreeThree());
  }, [dispatch])
  // variables
  if (loading === PENDING) {
    console.log('Loading')
    return (<div>Loading</div>)
  }
  // calls. It's implied that data has been defined at this point.
  //hexElement.current.fitToViewer(ALIGN_CENTER, ALIGN_CENTER)
  //hexElement.current.zoom(65, 55, 16)
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
          {Object.entries(hexes).map(([key, value]) => {
            let pid: string;
            if (value.pattern) {
              pid = 'p' + key
            }
            return (
              <>
                <Hexagon
                  key={nanoid()}
                  className={key}
                  q={value.q}
                  r={value.r}
                  s={value.s}
                  fill={pid}
                  onClick={() => dispatch(changeHexagonFocus(value.id))}
                >
                  <Text>
                    {key}
                  </Text>
                </Hexagon>
              </>
            )
          })}
          {pathObjectList.map((path: PathType) => {
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
        {Object.entries(hexes).map(([key, value]) => {
          let pid: string;
          if (value.pattern) {
            pid = 'p' + key
          }
          return (
            <Pattern key={nanoid()} id={pid} link={value.pattern} />
          )
        })}
      </HexGrid>
    </ReactSVGPanZoom>
  )
}

export default PanZoomHexGrid
