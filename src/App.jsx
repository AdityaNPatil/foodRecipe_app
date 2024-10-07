// css
import './App.css'

// components
import Navbar from "./components/Navbar"
import Footer from './components/Footer'

// import outlet to show children path
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
