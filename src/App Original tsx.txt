import styles from './App.module.css'
import { HashRouter } from 'react-router-dom'
import Header from './components/header/header'
import AppRouter from './Router'
import Footer from './components/footer/footer'
import { createContext, useEffect, useMemo, useState } from 'react';
import LoginButton from './components/login/LoginButton'
import LogoutButton from './components/login/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'


export const ScreenMode = createContext('')

const {light, dark}=styles;

function App() {
const {loginWithRedirect, isAuthenticated}=useAuth0();

  const [state, setState] = useState({
    screenmode: 'light'
  })
  
  const value:any = useMemo(
    () => ({ state, setState }), 
    [state]
  );

 
 
  return (
    <>
    {
     !isAuthenticated && <main className={styles.main}>
      <LoginButton/>
     </main>
    }
      {
        
    <ScreenMode.Provider value={value}>

      <div className={state.screenmode==='light'?light:dark}>
        <HashRouter>
          <Header />
{
       isAuthenticated && <AppRouter />
}
          

          <Footer />
        </HashRouter>
        </div>
      </ScreenMode.Provider>}
    </>
  )
}

export default App
