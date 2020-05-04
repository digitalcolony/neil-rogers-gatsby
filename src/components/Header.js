import React from "react"
import { Link } from "gatsby"

const Header = props => (
  <header>
    <nav>
      <Link to="/"><em>Home</em></Link>
      <ul>
        <li>
          <Link to="/download/">Download</Link>
        </li>
        <li>
          <Link to="/timeline/">Timeline</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/support/">Support</Link>
        </li>
        <li>Soundboard</li>
      </ul>
    </nav>
    <h1>{props.title}</h1>
  </header>
)

export default Header
