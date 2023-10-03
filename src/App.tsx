import styles from './App.module.css'
import { HashRouter } from 'react-router-dom'
import Header from './components/header/header'
import AppRouter from './router/Router'
import Footer from './components/footer/footer'
import { createContext, useMemo, useState } from 'react'

export const ScreenMode = createContext('')

const {light, dark}=styles;

function App() {
  const [state, setState] = useState({
    screenmode: 'light'
  })
  
  const value:any = useMemo(
    () => ({ state, setState }), 
    [state]
  );

  return (
    <>
      <ScreenMode.Provider value={value}>

      <div className={state.screenmode==='light'?light:dark}>
        <HashRouter>
          <Header />
          <AppRouter />
          <Footer />
        </HashRouter>
        </div>
      </ScreenMode.Provider>
    </>
  )
}

export default App
