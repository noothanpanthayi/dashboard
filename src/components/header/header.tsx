import styles from './header.module.css';
import {NavLink } from 'react-router-dom';
import './navlink.css';
import { useSelector } from 'react-redux';

const Header = () => {
  // const {cartlist}:any=useSelector<any>(state=>state.cartlist);
  
  const {yellow}=styles;
  
  return (
    <header>
        <nav style={{display:'flex', justifyContent:'space-between'}}>
          <div>

          <NavLink  to="/dashboard" className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Dashboard</NavLink>
          <NavLink to="/grid"  className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Custom Grid</NavLink>
          <NavLink to="/world"  className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>WorldInfo</NavLink>

          <NavLink to="/shopping"  className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Online Shopping</NavLink>
          
          <NavLink to="/todo"  className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>ToDo</NavLink>
          <NavLink to="/formhandling"  className={({isActive}: { isActive: boolean; isPending: boolean;}|any)=>isActive?'active':''}>Form Handling</NavLink>
         
          </div>
      </nav>
    </header>
  )
} 

export default Header