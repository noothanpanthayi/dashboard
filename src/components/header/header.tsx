import styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import './navlink.css'
import { Fragment, useContext, useState } from 'react'
import { ScreenMode } from '../../App'
import Switch from '@mui/material/Switch'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode,setDarkMode]=useState(false)
  const screenModeContext: any = useContext(ScreenMode)

  const handleSwitch=()=>{
    if (darkMode){
      document.body.style.backgroundColor='#f3f2f0'
    }
    else {
      document.body.style.backgroundColor='#000'

    }
    setDarkMode(!darkMode);

    screenModeContext.setState((prevState: { screenmode: string }) => {
      return {
        ...prevState,
        screenmode: prevState.screenmode === 'dark' ? 'light' : 'dark',
      }
    })
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const hideMenu = () => {
    setMenuOpen(false);
  }

  const toggleScreenMode = () => {
    screenModeContext.setState((prevState: { screenmode: string }) => {
      return {
        ...prevState,
        screenmode: prevState.screenmode === 'dark' ? 'light' : 'dark',
      }
    })
  }

  return (
    <Fragment>
      <header>
        <div onClick={toggleMenu} className={hamburger}>
          ☰
        </div>
        <div className={mainNav}>
          <nav>
            <div className={myNav}>
              <NavLink
                to="/dashboard"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/stickynotes"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Sticky Notes
              </NavLink>
              <NavLink
                to="/tictactoe"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Tic-Tac-Toe
              </NavLink>
              <NavLink
                to="/lgdatatable"
                target="_blank"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Large Data Set
              </NavLink>
              <NavLink
                to="/grid"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Custom Grid
              </NavLink>
              <NavLink
                to="/world"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                World Info
              </NavLink>
             
              <NavLink
                to="/shopping"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Online Shopping
              </NavLink>
              <NavLink
                to="/todo"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                ToDo
              </NavLink>
              <NavLink
                to="/formhandling"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Form Handling
              </NavLink>
              <NavLink
                to="https://autodealerclient.vercel.app/"
                target="_blank"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                NodeJs App
              </NavLink>
           
             
              {/* <NavLink
                to="https://noothankrishnan.vercel.app/products"
                target="_blank"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                NextJs SSR
              </NavLink> */}
              <Switch
               checked={darkMode}
                onChange={handleSwitch}
                color="default"
                inputProps={{ 'aria-label': 'controlled' }}
              />{' '}
              {
                darkMode?<span className={pointer} onClick={handleSwitch}>Light Mode</span>:<span className={pointer} onClick={handleSwitch}>Dark Mode</span>
              }
            </div>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div onClick={hideMenu} className={hamburgerMenu}>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tictactoe"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                Tic-Tac-Toe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stickynotes"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                Sticky Notes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/grid"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                Custom Grid
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/world"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                WorldInfo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shopping"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                Online Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todo"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                ToDo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formhandling"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                Form Handling
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://autodealerclient.vercel.app/"
                target="_blank"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                NodeJs App
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://noothankrishnan.vercel.app/products"
                target="_blank"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                NextJs SSR
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </Fragment>
  )
}

const { yellow, hamburger, hamburgerMenu, myNav, mainNav, pointer } = styles

export default Header
