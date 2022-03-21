import type { NextPage } from 'next'
import { HexGrid, Layout, Hexagon, Text, Path, Hex } from 'react-hexgrid';
import React from 'react'
import { useRef, useEffect } from 'react';
import { useWindowSize } from '../utils/utils';
import { ReactSVGPanZoom, UncontrolledReactSVGPanZoom, fitToViewer, ALIGN_CENTER } from 'react-svg-pan-zoom'

const Home: NextPage = () => {
  const { height, width } = useWindowSize()
  const hexElement = useRef()
  useEffect(() => {
    hexElement.current.fitToViewer()
  }, [])
  return (
    <UncontrolledReactSVGPanZoom
      ref={hexElement}
      width={width}
      height={height}
    >
      {/*The Hexgrid width and height do not matter due to scaling of the svg
      The viewbox actually matters. I need to see how big I should make the viewbox in terms how small I can make the font in text.
      */}
      <HexGrid width={1} height={1} viewBox="-100 -100 200 200">
        {/*Layout seems to be the only thing that matters in terms of size.*/}
        <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
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
          <Path start={new Hex(0, 0, 0)} end={new Hex(-2, 0, 1)} />
        </Layout>
      </HexGrid>
    </UncontrolledReactSVGPanZoom>
  )
}

export default Home
