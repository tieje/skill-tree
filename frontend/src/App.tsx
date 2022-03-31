import React, { useEffect, useState } from 'react'
import './App.css'
import PanZoomHexGrid from './components/PanZoomHexGrid/PanZoomHexGrid'
import SideBar from './components/SideBar/SideBar'
import { useGetTreeByIdQuery } from './redux/api'
import { CustomRectHexGridGenerator } from './utils/utils'

const App = () => {
  const { data, error, isLoading } = useGetTreeByIdQuery('3')
  const [hexesObject, setHexesObject] = useState(CustomRectHexGridGenerator(16, 16))
  /*
  useEffect(() => {
    if () {
      setHexesObject(CustomRectHexGridGenerator(32, 32, data.hexagons))
    }
  }, [data])*/
  console.log(isLoading)
  console.log(error)
  console.log(data)
  return (
    <main>
      <PanZoomHexGrid hexesObject={hexesObject}/>
      <SideBar />
    </main>
  )
}

export default App
