import React from "react"
import { Link } from "gatsby"
import * as navStyles from "../styles/nav.module.css"

const Header = ({ title }) => (
  <header>
    <nav className={navStyles}>
      <Link to="/">Home</Link>
      <ul>
        <li>
          <Link to="/listen/">Podcast</Link>
        </li>
        <li>
          <Link to="/audio/">Audio</Link>
        </li>
        <li>
          <Link to="/timeline/">Timeline</Link>
        </li>
        <li>
          <Link to="/docs/">Docs</Link>
        </li>
        <li>
          <Link to="/soundboard/">Soundboard</Link>
        </li>
      </ul>
    </nav>
    <h1>{title}</h1>
  </header>
)

export default Header
