import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default props => (
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    <Navbar.Brand href="/">Neil Rogers</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/download">
          Download
        </Nav.Link>
        <Nav.Link as={Link} to="/timeline">
          Timeline
        </Nav.Link>
        <Nav.Link as={Link} to="/media">
          Media
        </Nav.Link>
        <Nav.Link as={Link} to="/tributes">
          Tributes
        </Nav.Link>
        <Nav.Link as={Link} to="/support">
          Support
        </Nav.Link>
        <a href="https://neilrogers.org/soundboard/" class="nav-link">
          Soundboard
        </a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
