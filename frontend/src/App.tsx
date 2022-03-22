/* Testing below */
/*
import { HexGrid, Layout, Hexagon, Text, Path, Hex, Pattern } from 'react-hexgrid';
import React from 'react'
import { useRef, useEffect } from 'react';
import { UncontrolledReactSVGPanZoom, ALIGN_CENTER } from 'react-svg-pan-zoom'
import { useWindowSize } from '@react-hook/window-size';
import './App.css'

const App = () => {
    const [width, height] = useWindowSize()
    const hexElement = useRef(null)
    useEffect(() => {
        hexElement.current.fitToViewer(ALIGN_CENTER, ALIGN_CENTER)
    }, [])
    return (
        <UncontrolledReactSVGPanZoom
            ref={hexElement}
            width={width}
            height={height}
        >
            <HexGrid width={1} height={1} viewBox="-100 -100 200 200">
                <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                    <Path start={new Hex(0, -1, 1)} end={new Hex(-2, 0, 1)} />
                    <Hexagon q={0} r={0} s={0}>
                        <Text>
                            0, 0, 0
                        </Text>
                    </Hexagon>
                    <Hexagon q={0} r={-1} s={1} fill="pat-1">
                        <Text>0, -1, 1</Text>
                    </Hexagon>
                    <Hexagon q={0} r={1} s={-1}>
                        <Text>0, 1, -1</Text>
                    </Hexagon>
                    <Hexagon q={1} r={-1} s={0}>
                        <Text>1, -1, 0</Text>
                    </Hexagon>
                    <Hexagon q={1} r={0} s={-1}>
                        <Text>1, 0, -1</Text>
                    </Hexagon>
                    <Hexagon q={-1} r={1} s={0} fill="pat-2">
                        <Text>-1, 1, 0</Text>
                    </Hexagon>
                    <Hexagon q={-1} r={0} s={1}>
                        <Text>-1, 0, 1</Text>
                    </Hexagon>
                    <Hexagon q={-2} r={0} s={1}>
                        <Text>-2, 0, 1</Text>
                    </Hexagon>
                    <Hexagon q={-3} r={0} s={1}>
                        <Text>-3, 0, 1</Text>
                    </Hexagon>
                    <Pattern id="pat-1" link="https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/President_Abraham_Lincoln_November_8_1863_Photo_by_Alexander_Gardner.jpg" />
                </Layout>
            </HexGrid>
        </UncontrolledReactSVGPanZoom>
    )
}

export default App
*/
/* Real code */
import {
  HexGrid, Layout, Hexagon, Text,
  // Path,
  // Hex,
  GridGenerator, HexUtils
} from 'react-hexgrid';
import React from 'react'
import { useRef, useEffect, useState } from 'react';
import {
  // UncontrolledReactSVGPanZoom,
  ReactSVGPanZoom,
  ALIGN_CENTER,
  TOOL_PAN,
  TOOL_NONE,
  INITIAL_VALUE
} from 'react-svg-pan-zoom'
import { useWindowSize } from '@react-hook/window-size';
import './App.css'
import useEventListener from '@use-it/event-listener'

const App = () => {
  // variables
  const hexList = GridGenerator.orientedRectangle(32, 32)
  // refs
  const hexElement = useRef(null)
  // initial hook values 
  const [width, height] = useWindowSize()
  const [tool, setTool] = useState(TOOL_NONE)
  const [value, setValue] = useState(INITIAL_VALUE)
  // functions
  const handlePanZoomModeSwitch = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'v':
        setTool(TOOL_NONE)
        break
      case 'h':
        setTool(TOOL_PAN)
        break
    }
  }
  // use hooks
  useEventListener('keypress', handlePanZoomModeSwitch)
  useEffect(() => {
    hexElement.current.fitToViewer(ALIGN_CENTER, ALIGN_CENTER)
    hexElement.current.zoom(230, 285, 16)
  }, [])
  return (
    <ReactSVGPanZoom
      ref={hexElement}
      width={width}
      height={height}
      tool={tool}
      onChangeTool={setTool}
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

export default App
