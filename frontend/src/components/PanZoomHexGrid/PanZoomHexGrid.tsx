import React from 'react'
import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  // Path,
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
import { reloadHexagons, changeToDragMode, changeToPointerMode } from './PanModeSlices';
import { useGetTreeByIdQuery } from '../../redux/api';
import { nanoid } from 'nanoid';
import { IncomingData } from '../../types/Types';

const PanZoomHexGrid = () => {
  // variables
  const { data, error, isLoading }: IncomingData = useGetTreeByIdQuery('3')
  if (error) console.log(error)
  if (isLoading) console.log(isLoading)
  const hexElement = useRef(null)
  const hexesObject = useReduxSelector(state => state.panMode.initialHexagons)
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
    hexElement.current.zoom(65, 55, 16)
  }, [])
  useEffect(() => {
    if (data) {
      console.log(data)
      dispatch(reloadHexagons(data.hexagons))
    }
  }, [data, dispatch])
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
          {Object.entries(hexesObject).map(([key, value]) => {
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
                <Pattern key={nanoid()} id={pid} link={value.pattern} />
              </>
            )
          })}
        </Layout>
      </HexGrid>
    </ReactSVGPanZoom>
  )
}

export default PanZoomHexGrid
