import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Shopping from '../pages/Shopping/Shopping';
import styles from './router.module.css'
import World from '../pages/World/World';
import ShoppingCart from '../pages/Cart/components/ShoppingCart';

const AppRouter = () => {
  return (
    <div className={styles.container}>
    <Routes>
    <Route  path="*" element={<Home />} />
      <Route  path="/dashboard" element={<Home />}></Route>
      <Route  path="/shopping" element={<Shopping />}></Route>
      <Route  path="/world" element={<World />}></Route>
      <Route  path="/cart" element={<ShoppingCart />}></Route>
    </Routes>
    </div>
  )
}

export default AppRouter
