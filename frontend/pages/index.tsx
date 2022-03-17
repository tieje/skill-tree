import type { NextPage } from 'next'
import { HexGrid, Layout, Hexagon, Text, Path, Hex } from 'react-hexgrid';
import React from 'react'
import { useState, useEffect } from 'react';
import { UncontrolledReactSVGPanZoom } from 'react-svg-pan-zoom'

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Home: NextPage = () => {
  const { height, width } = useWindowSize()
  return (
    <UncontrolledReactSVGPanZoom
      width={width}
      height={height}
    >
      <HexGrid width={width} height={height} viewBox="-50 -50 100 100">
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