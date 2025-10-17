import React, { useEffect, useState } from 'react'
import Home from './Component/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Component/Nav'
import Breadcrumbs from './Component/Breadcrumbs'
import "./App.css"
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import RMS from './Component/RMS'
import SPA from './Component/SPA'
import Sales from './Component/Sales'
import Project from './Component/Project'
import PMES from './Component/PMES'

const App = () => {
  const [navHeight, setNavHeight] = useState(64)

  useEffect(() => {
    const measure = () => {
      const el = document.getElementById('main-navbar')
      if (el) setNavHeight(el.getBoundingClientRect().height)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])
  return (
    
    <div>
      <Router>
        <Nav/>
        <div className="app-content" style={{ paddingTop: navHeight }}>
          <Breadcrumbs />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/rms' element={<RMS/>}/>
            <Route path='/spa' element={<SPA/>}/>
            <Route path='/sales' element={<Sales/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/pmes' element={<PMES/>}/>
          </Routes>
        </div>
      </Router>
        {/* <Nav/>
        <Home/> */}
    </div>
  )
}

export default App