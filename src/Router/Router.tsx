import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Shopping from '../pages/Shopping/Shopping';
import styles from './router.module.css'
import World from '../pages/World/World';
import ShoppingCart from '../pages/Cart/components/ShoppingCart';
import ToDo from '../pages/ToDo/ToDo';
import CustomGrid from '../pages/Grid/CustomGrid';
import FormHandling from '../pages/FormHandling';
import AMD from '../pages/TypeScriptReference/AMD';
import InputToLS from '../pages/inputToLS';
import CheckAll from '../pages/checkAll';

const AppRouter = () => {
  return (
    <div className={styles.container}>
    <Routes>

      <Route  path="*" element={<Home />} />
      <Route  path="/dashboard" element={<Home />}></Route>
      <Route  path="/shopping" element={<Shopping />}></Route>
      <Route  path="/world" element={<World />}></Route>
      <Route  path="/cart" element={<ShoppingCart />}></Route>
      <Route  path="/todo" element={<ToDo />}></Route>
      <Route  path="/grid" element={<CustomGrid />}></Route>
      <Route  path="/formhandling" element={<FormHandling />}></Route>
      <Route  path="/tsref" element={<AMD />}></Route>
      <Route  path="/inputtols" element={<InputToLS />}></Route>
      <Route  path="/checkall" element={<CheckAll />}></Route>




      

    </Routes>
    </div>
  )
}

export default AppRouter
