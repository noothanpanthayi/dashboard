import './App.css'
import { HashRouter } from 'react-router-dom'
import Header from './components/header/header'
import AppRouter from './router/Router'
import Footer from './components/footer/footer'

function App() {
  return <>

      <HashRouter>
        <Header />
        <AppRouter />
        <Footer/>
      </HashRouter>
  
  </>
}

export default App
