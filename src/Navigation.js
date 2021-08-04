import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "./Navbar.css";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      // bg="dark"
      // variant="dark"
      className="navbar justify-content-center"
      fixed="top"
    >
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} alt="" className="nav-logo" />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto m-auto ">
          <Nav.Link>
            <Link to="/">
              <p className="nav-item">Home</p>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/Services">
              <p className="nav-item">Services</p>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/About-Us">
              <p className="nav-item">About Us</p>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Contact-Us">
              <button className="nav-item contact-us-btn">Contact Us</button>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
