import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header/header'
import AppRouter from './router/Router'
import Footer from './components/footer/footer'

function App() {
  return <>

      <Router>
        <Header />
        <AppRouter />
        <Footer/>
      </Router>
    {/* </div> */}
  
  </>
}

export default App
