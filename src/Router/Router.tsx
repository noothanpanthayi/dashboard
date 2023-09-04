import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Shopping from '../pages/Shopping/Shopping';
import styles from './router.module.css'
import ShoppingCart from '../pages/Cart/ShoppingCart';

const AppRouter = () => {
  return (
    <div className={styles.container}>
    <Routes>
      <Route  path="/dashboard" element={<Home />}></Route>
      <Route  path="/shopping" element={<Shopping />}></Route>
      <Route  path="/cart" element={<ShoppingCart />}></Route>
      <Route  path="*" element={<Shopping />} />
    </Routes>
    </div>
  )
}

export default AppRouter
