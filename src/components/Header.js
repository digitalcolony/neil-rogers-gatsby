import React from "react"
import { Link } from "gatsby"

const Header = props => (
  <nav>
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
  </nav>
)

export default Header
