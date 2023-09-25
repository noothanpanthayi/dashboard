import styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import './navlink.css'
import { Fragment, useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen]=useState(false);

  const toggleMenu=()=>{

    setMenuOpen(!menuOpen);

  }

  const hideMenu=()=>{
    setMenuOpen(false);
  }

  return (
    <Fragment>
      <header>
     
        <div onClick={toggleMenu} className={hamburger}>☰</div>
        <div className={mainNav}>
     <nav>
          <div className={myNav}>
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
          </div>
        </nav>
        </div>
      </header>
      
        {
          menuOpen && <div onClick={hideMenu} className={hamburgerMenu}>
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
        </ul>
      </div>
}
    </Fragment>
  )
}

const { yellow, hamburger, hamburgerMenu,myNav, mainNav } = styles

export default Header
