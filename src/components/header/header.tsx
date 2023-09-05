import React from 'react'
import styles from './header.module.css';
import {NavLink } from 'react-router-dom';
import './navlink.css';
import { useSelector } from 'react-redux';


const Header = () => {
  const {cartlist}:any=useSelector<any>(state=>state.cartlist);

  return (
    <header>
        <nav>
          <NavLink to="/shopping"  className="active">Shopping</NavLink>
          <NavLink to="/world"  className="active">WorldInfo</NavLink>
          <NavLink to="/cart"  className="active">Cart<span className={styles.bold}>({cartlist.length})</span></NavLink>
      </nav>
    </header>
  )
} 

export default Header