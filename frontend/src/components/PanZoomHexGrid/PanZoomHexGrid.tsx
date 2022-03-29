import React from 'react'
import {
  HexGrid, Layout, Hexagon, Text,
  // Path,
  // Hex,
  GridGenerator, HexUtils
} from 'react-hexgrid';
import { useRef, useEffect, useState } from 'react';
import {
  // UncontrolledReactSVGPanZoom,
  TOOL_PAN,
  TOOL_NONE,
  ReactSVGPanZoom,
  ALIGN_CENTER,
  INITIAL_VALUE
} from 'react-svg-pan-zoom'
import { useWindowSize } from '@react-hook/window-size';
import useEventListener from '@use-it/event-listener'
import { useReduxSelector, useReduxDispatch } from '../../redux/hooks';
import { changeToDragMode, changeToPointerMode } from './PanModeSlices';

const PanZoomHexGrid = () => {
  // variables
  const hexList = GridGenerator.orientedRectangle(32, 32)
  const hexElement = useRef(null)
  const tool = useReduxSelector(state => state.panMode.tool)
  const [aTool, setATool] = useState(tool)
  const [width, height] = useWindowSize()
  const [value, setValue] = useState(INITIAL_VALUE)
  const dispatch = useReduxDispatch()
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
  useEffect(() => {
    hexElement.current.fitToViewer(ALIGN_CENTER, ALIGN_CENTER)
    hexElement.current.zoom(230, 285, 16)
  }, [])
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
      <HexGrid width={1} height={1} viewBox="0 0 520 605">
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
          {hexList.map((hex, i: number) => {
            const id: string = HexUtils.getID(hex)
            return (
              <Hexagon key={i} className={id} q={hex.q} r={hex.r} s={hex.s}>
                <Text>
                  {id}
                </Text>
              </Hexagon>
            )
          })}
        </Layout>
      </HexGrid>
    </ReactSVGPanZoom>
  )
}

export default PanZoomHexGrid
