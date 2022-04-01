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
import { changeToPointerMode, changeToDragMode, fetchSkillTreeThree } from './PanModeSlices';
import { PENDING } from './states';
import { PathType } from '../../types/Types';

const PanZoomHexGrid = () => {
  // variables, setState
  const dispatch = useReduxDispatch()
  const hexElement = useRef(null)
  const tool = useReduxSelector(state => state.panMode.tool)
  const hexagons = useReduxSelector(state => state.panMode.hexagons)
  const paths = useReduxSelector(state => state.panMode.paths)
  const loading = useReduxSelector(state => state.panMode.loading)
  const [hexes, setHexes] = useState(hexagons)
  const [pathObjectList, setPathObjectList] = useState(paths)
  const [aTool, setATool] = useState(tool)
  const [width, height] = useWindowSize()
  const [value, setValue] = useState(INITIAL_VALUE)
  // functions
  const handlePanZoomModeSwitch = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'v':
        dispatch(changeToPointerMode())
        setATool(TOOL_NONE)
        break
      case 'h':
        dispatch(changeToDragMode())
        setATool(TOOL_PAN)
        break
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
                <Hexagon key={nanoid()} className={key} q={value.q} r={value.r} s={value.s} fill={pid}>
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
