import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/navbar.css"

export default function index({ children, ...restProps }) {
  return (
    <Navbar collapseOnSelect expand="sm" bg="customDark" variant="dark">
      <Nav className="justify-content-left">
        <Nav.Link
          className="ml-2 justify-content-end"
          href="/"
          title="Home"
        >
          Home
        </Nav.Link>
      </Nav>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="justify-content-end">
          <Nav.Link className="ml-2" href="/blog" title="Blog">
            Blog
          </Nav.Link>
          <Nav.Link className="ml-2" href="/projects" title="Projects">
            Projects
          </Nav.Link>
          <NavDropdown
            title="My Lists"
            id="collapsible-nav-dropdown"
            className="pl-2 text-left bg-black"
          >
            <NavDropdown.Item className="ml-2" href="/birdsList">
              List of Birds in Pune
            </NavDropdown.Item>
            {/* <NavDropdown.Item className="ml-2" href="/about">
              Books List
            </NavDropdown.Item>
            <NavDropdown.Item className="ml-2" href="/about">
              Movies List
            </NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link className="ml-2" href="/about" title="About">
            About Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
