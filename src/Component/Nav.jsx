import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  // let navigate=useNavigate()

  // let navHome=()=>{
  //     navigate("/")
  // }

  
  return (
    <div>
  <nav id="main-navbar" className="navbar navbar-expand-lg bg-body-tertiary fixed-top  ">
  <div className="container-fluid ">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5 ps-5 " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-5 ps-5 gap-4">
        <div className="nav-item">
          {/* <a className="nav-link active" aria-current="page" id='Home' href="#">Home</a> */}
          <Link to="/" className="nav-link active" aria-current="page" id='Home'>Home</Link>
          {/* <h6 className=' nav-link active' onClick={navHome} aria-current="page" id='Home'>Home</h6> */}
          <div className="dropdown-box">
            <ul className='dropdown-list'>
              <li>Work</li>
              <li>Intership</li>
              <li>Work from home</li>
              <li>Part time</li>
            </ul>
          </div>
        </div>  
  <div className="nav-item">
  {/* <a className="nav-link" id='RMS' href="#">RMS</a> */}
  <Link to="/rms" className="nav-link" id='RMS'>RMS</Link>
         <div className="dropdown-box">
            <ul className='dropdown-list'>
              <li>Work</li>
              <li>Intership</li>
              <li>Work from home</li>
              <li>Part time</li>
            </ul>
          </div>
        </div>
          <div className="nav-item">
  {/* <a className="nav-link" id='SPA' href="#">My SPA</a> */}
  <Link to="/spa" className="nav-link" id='SPA'>SPA</Link>

         <div className="dropdown-box">
            <ul className='dropdown-list'>
              <li>Work</li>
              <li>Intership</li>
              <li>Work from home</li>
              <li>Part time</li>
            </ul>
          </div>
        </div>
          <div className="nav-item">
  {/* <a className="nav-link" id='SALES' href="#">SALES</a> */}
  <Link to="/sales" className="nav-link" id='SALES'>SALES</Link>

         <div className="dropdown-box">
            <ul className='dropdown-list'>
              <li>Work</li>
              <li>Intership</li>
              <li>Work from home</li>
              <li>Part time</li>
            </ul>
          </div>
        </div>
          <div className="nav-item">
  {/* <a className="nav-link" id='PROJECT' href="#">PROJECT</a> */}
  <Link to="/project" className="nav-link" id='PROJECT'>PROJECT</Link>

         <div className="dropdown-box">
            <ul className='dropdown-list'>
              <li>Work</li>
              <li>Intership</li>
              <li>Work from home</li>
              <li>Part time</li>
            </ul>
          </div>
        </div>
          <div className="nav-item">
  {/* <a className="nav-link" id='PMES' href="#">PMES</a> */}
  <Link to="/pmes" className="nav-link" id='PMES'>PMES</Link>

         <div className="dropdown-box">
            <ul className='dropdown-list'>
              <li>Work</li>
              <li>Intership</li>
              <li>Work from home</li>
              <li>Part time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav