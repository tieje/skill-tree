import './App.css'
import LoginForm from './components/Auth/LoginForm'
import { Route, Routes, Link, Outlet, useLocation, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import MainApp from './components/MainApp'
import { useReduxDispatch, useReduxSelector } from './redux/hooks'
import { useLogoutMutation } from './redux/api'
import { RemoveCredentials } from './components/Auth/AuthSlice'
import { changeToPointerMode, ResetPanModeState } from './components/PanZoomHexGrid/PanModeSlices'
import { ResetSidebarState } from './components/SideBar/SideBarSlices'
// <LoggedIn />
// <MainApp />

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/app' element={
            <RequireAuth>
              <MainApp />
            </RequireAuth>
          }
          />
        </Route>
      </Routes>
      {/*<PanZoomHexGrid />
      <SideBar />*/}
    </main >
  )
}

const Navbar = () => {
  const token = useReduxSelector(state => state.auth.token)
  const dispatch = useReduxDispatch()
  const [logout] = useLogoutMutation()
  const handleLogout = () => {
    dispatch(RemoveCredentials())
    dispatch(ResetPanModeState())
    dispatch(ResetSidebarState())
    logout('none')
    window.location.reload()
  }
  return (
    <section className=''>
      <ul className='bg-green grid justify-end'>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
        {token === null || token === 'null' ?
          <li>
            <Link to='/login'>Login</Link>
          </li>
          :
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        }
        <li>
          <Link to='/app'>App Page</Link>
        </li>
      </ul>
      Result:
      <Outlet />
    </section>
  )
}

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const token = useReduxSelector(state => state.auth.token)
  const location = useLocation()
  if (!token || token === 'null' || token === null) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  return children
}

export default App
