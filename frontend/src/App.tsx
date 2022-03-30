import React from 'react'
import './App.css'
import PanZoomHexGrid from './components/PanZoomHexGrid/PanZoomHexGrid'
import SideBar from './components/SideBar/SideBar'
import { useGetTreeByIdQuery } from './redux/api'

const App = () => {
  const { data } = useGetTreeByIdQuery('3')
  // console.log(data)
  return (
    <main>
      <PanZoomHexGrid treeData={data}/>
      <SideBar />
    </main>
  )
}

export default App
