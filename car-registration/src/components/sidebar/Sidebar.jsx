import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">Logo</h2>
      <ul className="sidebar-list">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'} >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/registration" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
            Registration Status
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar