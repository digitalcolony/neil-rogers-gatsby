import React from "react"
import { Link } from "gatsby"
import navStyles from "../styles/nav.module.css"

const activeStyle = {
  color: "black",
}

const Header = props => (
  <header>
    <nav className={navStyles.nav}> 
      <Link to="/" activeStyle={activeStyle}>
        Home
      </Link>
      <ul>
        <li>
          <Link to="/audio/" activeStyle={activeStyle}>
            Audio
          </Link>
        </li>
        <li>
          <Link to="/timeline/" activeStyle={activeStyle}>
            Timeline
          </Link>
        </li>
        <li>
          <Link to="/docs/" activeStyle={activeStyle}>
            Docs
          </Link>
        </li>
        <li>
          <Link to="/soundboard/" activeStyle={activeStyle}>
            Soundboard
          </Link>
        </li>
      </ul>
    </nav>
    <h1>{props.title}</h1>
  </header>
)

export default Header
