import type { NextPage } from 'next'
import { HexGrid, Layout, Hexagon, Text, Path, Hex } from 'react-hexgrid';
import { useState, useEffect } from 'react';
import React from 'react'
import panAndZoomHoc from 'react-pan-and-zoom-hoc';

const InteractiveDiv = panAndZoomHoc('div');

/* Convert This class component into a function component and then try to figure
why x updates but y does not.
Y works now, I but generally consider this to be a failure due to scaling issues

const Home: NextPage = () => {
  const state = {
    x: 0.5,
    y: 0.5,
    scale: 1
  };
  const [data, setData] = useState(state)
  const handlePanAndZoom = (x: number, y: number, scale: number) => {
    const newState = {
      x: x,
      y: y,
      scale: scale
    }
    console.log(newState)
    setData(newState)
  }
  const handlePanMove = (x: number, y: number) => {
    const newState = {
      x: x,
      y: y,
      scale: data.scale
    }
    console.log(newState)
    setData(newState)
  }
  useEffect(() => {
    console.log('x is now: ', data.x)
    console.log('y is now: ', data.y)
  })
  const handleZoomEnd = () => console.log('Zoom has ended.');
  const transformPoint = ({x, y}) => {
    return {
      x: 1 + data.scale * (x - data.x),
      y: 1 + data.scale * (y - data.y)
    };
  }
  const p1 = transformPoint({ x: 0.5, y: 0.5});
  const { x, y, scale } = data;
  return (
  <InteractiveDiv
    x={x}
    y={y}
    scale={scale}
    scaleFactor={2}
    minScale={0.5}
    maxScale={2}
    onPanAndZoom={handlePanAndZoom}
    ignorePanOutside
    style={{ width: 500, height: 500, boxSizing: 'border-box', border: '1px solid black', position: 'relative' }}
    onPanMove={handlePanMove}
    onZoomEnd={handleZoomEnd}
  >
    <div style={{ position: 'absolute', width: 500, height: 500, boxSizing: 'border-box', border: '1px dashed blue', transform: `translate(${(x - 0.5) * 500}px, ${(y - 0.5) * 500}px) scale(${1 / scale})` }} />
    <div style={{ position: 'absolute', width: 50, height: 50, backgroundColor: 'lightgrey', transform: `translate(250px, 250px) translate(-25px, -25px)` }} />
    <div style={{ position: 'absolute', width: 50, height: 50, backgroundColor: 'lightgrey', transform: `translate(250px, 250px) translate(25px, 25px)` }} />
    <div style={{ position: 'absolute', width: 50 * scale, height: 50 * scale, backgroundColor: 'black', transform: `translate(${p1.x * 500}px, ${p1.y * 500}px) translate(${-25 * scale}px, ${-25 * scale}px)` }} />
    <div style={{ position: 'absolute', width: 50 * scale, height: 50 * scale, backgroundColor: 'black', transform: `translate(${p1.x * 500}px, ${p1.y * 500}px) translate(${25 * scale}px, ${25 * scale}px)` }} />
      <HexGrid width={calculatedDimensions} height={calculatedDimensions} viewBox="-50 -50 100 100">
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
    <div style={{ position: 'absolute', width: 1, height: 500, backgroundColor: 'red', transform: 'translateX(250px)' }} />
    <div style={{ position: 'absolute', width: 500, height: 1, backgroundColor: 'red', transform: 'translateY(250px)' }} />
  </InteractiveDiv >
  )
}
*/

/* Working example below */


class Home extends React.Component {
  state = {
    x: 0.5,
    y: 0.5,
    scale: 1
  };

  handlePanAndZoom = (x, y, scale) => {
    console.log('x is ', x)
    console.log('y is ', y)
    console.log('scale is ', scale)
    this.setState({ x, y, scale });
  }

  handlePanMove = (x, y) => {
    console.log('x is ', x)
    console.log('y is ', y)
    this.setState({ x, y });
  }

  handleZoomEnd = () => console.log('Zoom has ended.');

  transformPoint({ x, y }) {
    return {
      x: 1 + this.state.scale * (x - this.state.x),
      y: 1 + this.state.scale * (y - this.state.y)
    };
  }

  render() {
    const { x, y, scale } = this.state;

    const p1 = this.transformPoint({ x: 0.5, y: 0.5 });

    return <InteractiveDiv
      x={x}
      y={y}
      scale={scale}
      scaleFactor={2}
      minScale={0.5}
      maxScale={2}
      onPanAndZoom={this.handlePanAndZoom}
      ignorePanOutside
      style={{ width: 500, height: 500, boxSizing: 'border-box', border: '1px solid black', position: 'relative' }}
      onPanMove={this.handlePanMove}
      onZoomEnd={this.handleZoomEnd}
    >
      <div style={{ position: 'absolute', width: 50 * this.state.scale, height: 50 * this.state.scale, backgroundColor: 'black', transform: `translate(${p1.x * 500}px, ${p1.y * 500}px) translate(${-25 * scale}px, ${-25 * scale}px)` }}>
        <HexGrid width={50} height={50} viewBox="-50 -50 100 100">
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
      </div>
    </InteractiveDiv>;
  }
}


/* Why does only the X-axis move and not the y-axes? */
/*
const Home: NextPage = () => {
  const state = {
    x: 0.5,
    y: 0.5,
    scale: 1
  }
  const [data, setData] = useState(state)
  const setPanAndZoom = (x: number, y: number, scale: number) => {
    const newState = {
      x: x,
      y: y,
      scale: scale
    }
    setData(newState)
  }
  const setPanMove = (x: number, y: number) => {
    const newState = {
      x: x,
      y: y,
      scale: data.scale
    }
    setData(newState)
  }
  useEffect(() => {
    console.log('x is now: ', data.x)
    console.log('y is now: ', data.y)
  })
  return (
    <div style={{ height: '200vh', width: '200vw' }}>
      <InteractiveHexGrid
        x={data.x}
        y={data.y}
        scale={data.scale}
        scaleFactor={Math.sqrt(2)}
        minScale={1}
        maxScale={2 ** 18}
        onPanAndZoom={setPanAndZoom}
        onPanMove={setPanMove}
        style={{ width: 500, height: 500, boxSizing: 'border-box', border: '1px solid black', position: 'relative' }}
      >
        <div style={{ position: 'absolute', top: `${data.y * 100}%`, left: `${data.x * 100}%`, width: 1, height: 1, backgroundColor: 'black' }}>
          <HexGrid width={5000} height={5000} viewBox="-50 -50 100 100">
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
        </div>
      </InteractiveHexGrid>
    </div>
  )
}
*/
export default Home
