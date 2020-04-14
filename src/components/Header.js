import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

const Header = props => (
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="fixed-top">
    <Navbar.Brand href="/">Neil Rogers</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/download/">
          Download
        </Nav.Link>
        <Nav.Link as={Link} to="/timeline/">
          Timeline
        </Nav.Link>
        <Nav.Link as={Link} to="/blog/">
          Blog
        </Nav.Link>
        <Nav.Link as={Link} to="/support/">
          Support
        </Nav.Link>
        <a href="https://neilrogers.org/soundboard/" class="nav-link">
          Soundboard
        </a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
