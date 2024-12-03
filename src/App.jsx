import { Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Watch  from './pages/Watch'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}> </Route>
      <Route path='/home' element={<Home></Home>}> </Route>
      <Route path='/watch' element={<Watch></Watch>}> </Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
