import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoHome,GoPencil } from "react-icons/go"
import { LiaUserLockSolid } from "react-icons/lia"
import { MdOutlineChromeReaderMode } from "react-icons/md";
import { SiReadthedocs } from "react-icons/si";
import { IoCalendarOutline } from "react-icons/io5"
import { LuFileCheck2 } from "react-icons/lu"

const Layout = () => {
  return (

      <div id="layout">
  <NavLink to="/" className={({isActive}) => isActive ? 'Layout-link active' : 'Layout-link'} ><GoHome className='svg-link'/></NavLink>
  <NavLink to="/profile" className={({isActive}) => isActive ? 'Layout-link active' : 'Layout-link'}><LiaUserLockSolid className='svg-link '/></NavLink>
  <NavLink to="/task" className={({isActive}) => isActive ? 'Layout-link active' : 'Layout-link'}><MdOutlineChromeReaderMode className='svg-link'/></NavLink>
  <NavLink to="/calendar" className={({isActive}) => isActive ? 'Layout-link active' : 'Layout-link'}><IoCalendarOutline className='svg-link'/></NavLink>
  <NavLink to="/holiday" className={({isActive}) => isActive ? 'Layout-link active' : 'Layout-link'}><LuFileCheck2 className='svg-link'/></NavLink>
  <NavLink to="/attendance" className={({isActive}) => isActive ? 'Layout-link active' : 'Layout-link'}><SiReadthedocs className='svg-link'/></NavLink>
  <NavLink to="/leave" className={({isActive}) => isActive ? 'Layout-link active' : 'Layout-link'}><GoPencil className='svg-link'/></NavLink>
      </div>
  )
}

export default Layout
