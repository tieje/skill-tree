import './App.css'
import LoginForm from './components/Auth/LoginForm'
import { Route, Routes, Link, Outlet, useLocation, Navigate } from 'react-router-dom'
import HomePage from './components/HomePage'
// import MainApp from './components/MainApp'
import { useReduxSelector } from './redux/hooks'
// <LoggedIn />
// <MainApp />

const App = () => {
  return (
    <main>
      Navbar
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/app' element={
            <RequireAuth>
              <LoggedIn />
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
  return (
    <section>
      <ul>
        <li>
          <Link to='/'>Home Page</Link>
        </li>
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
  if (!token) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  return children
}

const LoggedIn = () => {
  return (
    <div>gottem</div>
  )
}

export default App
