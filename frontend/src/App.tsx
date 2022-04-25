import './App.css'
import LoginForm from './components/Auth/LoginForm'
import { Route, Routes, Link, Outlet, useLocation, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage'
import { useReduxDispatch, useReduxSelector } from './redux/hooks'
import { useLogoutMutation } from './redux/api'
import { RemoveCredentials } from './components/Auth/AuthSlice'
import { ResetPanModeState } from './components/PanZoomHexGrid/PanModeSlices'
import { ResetSidebarState } from './components/SideBar/SideBarSlices'
import { NavButtonPropsType } from './types/Types'
import { LOGIN, LOGOUT, SETTINGS, SIGN_UP } from './Variables/StaticVariables'
import TreePicker from './components/TreePicker/TreePicker'
import MainApp from './components/MainApp'

const App = () => {
  const token = useReduxSelector(state => state.auth.token)
  return (
    <main className='bg-gray-tint h-screen'>
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/'
            element={token === null || token === 'null' ? <HomePage />
              : <RequireAuth>
                <TreePicker />
              </RequireAuth>} />
          <Route path='login' element={<LoginForm />} />
          <Route path='skill-trees' element={
            <RequireAuth>
              <TreePicker />
            </RequireAuth>
          }>
          </Route>
          <Route path='app/*' element={
            <MainApp />
          } />
        </Route>
      </Routes>
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
    <section>
      <nav className='flex flex-row bg-paper-yellow justify-end md:h-16'>
        <ul className='grid grid-cols-2 justify-end gap-4 pr-10'>
          {token === null || token === 'null' ?
            <>
              <NavButton props={SIGN_UP} />
              <NavButton props={LOGIN} />
            </>
            :
            <>
              <NavButton props={SETTINGS} />
              <button onClick={handleLogout}>
                <NavButton props={LOGOUT} />
              </button>
            </>
          }
        </ul>
      </nav>
      <Outlet />
    </section>
  )
}

const NavButton = ({ props }: { props: NavButtonPropsType }) => {
  return (
    <li className='grid place-content-center'>
      <Link
        className='border border-white bg-white rounded-lg p-2 shadow-lg hover:border-russian-blue hover:bg-gray'
        to={props.to}
      >
        {props.label}
      </Link>
    </li>
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
export {
  RequireAuth
}
export default App
