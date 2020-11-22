import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/navbar.css"
import { Link } from "gatsby"

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
          <Nav.Link  className="ml-2" as={Link} to="/blog" title="Blog">
            Blog
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
            Projects
          </Nav.Link>
          <NavDropdown
            title="Other Pages"
            id="collapsible-nav-dropdown"
            className="pl-2 text-left bg-black"
          >
            <NavDropdown.Item className="ml-2" as={Link} to="/notes">
              Notes
            </NavDropdown.Item>
            <NavDropdown.Item className="ml-2" as={Link} to="/birdsList">
              Birdwatching Journal
            </NavDropdown.Item>
            <NavDropdown.Item className="ml-2" as={Link} to="/germanWordsList">
              Common German Words
            </NavDropdown.Item>
            <NavDropdown.Item className="ml-2" as={Link} to="/germanTrainer">
              German Word Trainer
            </NavDropdown.Item>
            {/* <NavDropdown.Item className="ml-2" href="/about">
              Books List
            </NavDropdown.Item>
            <NavDropdown.Item className="ml-2" href="/about">
              Movies List
            </NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link className="ml-2" as={Link} to="/about" title="About">
            About Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
