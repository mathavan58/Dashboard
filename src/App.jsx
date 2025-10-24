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
import Profile from './Component/Profile'
import Leave from './Component/Leave'
import Holiday from './Component/Holiday'
import Calendar from './Component/Calendar'
import Task from './Component/Task'
import Attendance from './Component/Attendance'
import Footer from './Component/Footer'
import Layout from './Component/Layout'
import TaskStatus from './Component/TaskStatus'

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
          <div className=' layout-page'>
            <div className='w-100'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/rms' element={<RMS/>}/>
                <Route path='/spa' element={<SPA/>}/>
                <Route path='/sales' element={<Sales/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='/pmes' element={<PMES/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/leave' element={<Leave/>}/>
                <Route path='/holiday' element={<Holiday/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
                <Route path='/task' element={<Task/>}/>
                <Route path='/taskstatus' element={<TaskStatus/>}/>
                <Route path='/attendance' element={<Attendance/>}/>
              </Routes>
            </div>
            <div className='p-2 layout-container'>
                          <Layout/>

            </div>
            
          </div>
          
          
          <Footer/>
          
        </div>
      </Router>
    </div>
  )
}

export default App