/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
import { useState } from "react"
const NavBar = () => {

  const [expand,setExpand] = useState(false);

  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark-subtle text-dark-emphasis p-2">
      <div className="container-fluid">
        <Link to={'/home'} className="navbar-brand">Vidly</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded={expand} 
          aria-label="Toggle navigation" 
          onClick={() => setExpand(!expand)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expand ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <NavLink 
                to="/genres" 
                className={({ isActive }) => `nav-link nav-bar ${isActive ? 'active' : ''}`}
              >
                Genressss
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/movie"  
                className={({ isActive }) => `nav-link nav-bar ${isActive ? 'active' : ''}`}
              >
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/rentals" 
                className={({ isActive }) => `nav-link nav-bar ${isActive ? 'active' : ''}`}
              >
                Rentals
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar