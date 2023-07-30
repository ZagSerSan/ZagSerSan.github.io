import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import NavProfile from './navProfile'

const Nav = () => {
  const {currentUser} = useAuth()

  return (
    <nav className="navbar bg-light mb-2">
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" exact="true" to="/">
              Main
            </Link>
          </li>
          {currentUser && (
            <li className="nav-item">
              <Link className="nav-link" to="/Users">
                Users
              </Link>
            </li>
          )}
          
        </ul>
        <div className="d-flex">
          {currentUser
          ? <NavProfile />
          : <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav
