import React from "react"
import { Link } from "gatsby"

const activeStyle = {
  color: "black",
}

const Header = props => (
  <header>
    <nav>
      <Link to="/" activeStyle={activeStyle}>
        Home
      </Link>
      <ul>
        <li>
          <Link to="/download/" activeStyle={activeStyle}>
            Download
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
        <li>Soundboard</li>
      </ul>
    </nav>
    <h1>{props.title}</h1>
  </header>
)

export default Header
