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
        <nav style={{display:'flex', justifyContent:'space-between'}}>
          <div>
          <NavLink  to="/dashboard" className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Home</NavLink>

          <NavLink to="/world"  className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>WorldInfo</NavLink>
          <NavLink to="/todo"  className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>ToDo</NavLink>
          <NavLink to="/shopping"  className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Shopping</NavLink>
          <NavLink to="/grid"  className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Custom Grid</NavLink>
         
          </div>
          <div>
          <NavLink to="/cart"  className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Cart <span className={yellow}>({cartlist.length})</span></NavLink>
          </div>
      </nav>
    </header>
  )
} 

export default Header