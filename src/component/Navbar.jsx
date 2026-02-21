import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <h2>Dashboard</h2>
      </div>

      <div className="pages">
        <ul>
          <li className='new-item'>
            <NavLink className="page" to="/">Blog Dashboard</NavLink>
          </li>

          <li className='new-item'>
            <NavLink className="page" to="/posts">Blog Posts</NavLink>
          </li>

          <li className='new-item' >
           <p   className="page" >Add New Post</p>
          </li>

          <li  className='new-item'>
             <p   className="page" >Forms & Components</p>
          </li>

          <li className='new-item' >
            <p   className="page" >Tables</p>
          </li>

          <li className='new-item'>
            <p   className="page" >User Profile</p>
          </li>

          <li className='new-item' >
            <p   className="page" >Error</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

