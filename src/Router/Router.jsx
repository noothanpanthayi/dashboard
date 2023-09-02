import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Shopping from '../pages/Shopping/Shopping';
import styles from './router.module.css'
import ShoppingCart from '../pages/cart/ShoppingCart';

const AppRouter = () => {
  return (
    <div className={styles.container}>
    <Routes>
      <Route exact path="/dashboard" element={<Home />}></Route>
      <Route exact path="/shopping" element={<Shopping />}></Route>
      <Route exact path="/cart" element={<ShoppingCart />}></Route>
    </Routes>
    </div>
  )
}

export default AppRouter
