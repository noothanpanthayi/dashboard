import React from 'react'
import styles from './header.module.css';
import {NavLink } from 'react-router-dom';
import './navlink.css';
import { useSelector } from 'react-redux';


const Header = () => {
  const {cartlist}:any=useSelector<any>(state=>state.cartlist);
  
  const {bold, yellow}=styles;
  
  return (
    <header>
        <nav>
     <NavLink  to="/dashboard" className={({isActive, isPending}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Home</NavLink>
          <NavLink to="/shopping"  className={({isActive, isPending}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Shopping</NavLink>
          <NavLink to="/world"  className={({isActive, isPending}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>WorldInfo</NavLink>
          <NavLink to="/cart"  className={({isActive, isPending}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Cart <span className={yellow}>({cartlist.length})</span></NavLink>
        
      </nav>
    </header>
  )
} 

export default Header