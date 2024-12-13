import styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import './navlink.css'
import { Fragment, useContext, useState } from 'react'
import { ScreenMode } from '../../App'
import Switch from '@mui/material/Switch'
import { useAuth0 } from "@auth0/auth0-react";


const Header = () => {
  const {logout, isAuthenticated}=useAuth0();

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
                to="/lgdatatable"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Large Data Set
              </NavLink>
              <NavLink
                to="/ssr"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                SSR on AWS
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
                to="/mern"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                MERN
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
                to="/diceroller"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Dice Roller
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
                to="/moviesaga"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Movie List
              </NavLink>
              <NavLink
                to="/logout"
                onClick={()=>logout()}
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : 'bold'
                }
              >
                Logout
              </NavLink>
             
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
                to="/lgdatatable"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                Large Data Set
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
                MERN
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ssr"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                SSR
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
                to="/diceroller"
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                Dice Roller
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
                to="/logout"
                onClick={()=>logout()}
                className={({
                  isActive,
                }: { isActive: boolean; isPending: boolean } | any) =>
                  isActive ? 'active' : ''
                }
              >
                Logout
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
