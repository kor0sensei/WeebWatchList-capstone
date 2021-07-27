import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {

  const history = useHistory()
  
  const handleLogout = () => {
    localStorage.clear();
    history.push("/login")}

  return (
      <ul className="navbar">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">Weeb Watch List</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/watchlist">My watchlist</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/currentlywatching">Watching</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/finished">Finished</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/dropped">Dropped</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/plan">Plan to Watch</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" onClick={handleLogout} to="/login"> Logout </Link>
        </li>
      </ul>
  )
}
