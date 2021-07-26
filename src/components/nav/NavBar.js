import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
  return (
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">Weeb Watch List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/currentlywatching">Watching</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/finished">Finished</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dropped">Dropped</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/plan">Plan to Watch</Link>
        </li>
      </ul>
  )
}
