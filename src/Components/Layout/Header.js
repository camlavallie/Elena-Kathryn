import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';


class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar"  expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/home" style={{fontFamily: "Kristi", fontSize: "40px"}}>Elena Kathryn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/gallery">Gallery</Nav.Link>
          {/* <Nav.Link href="/login">Login</Nav.Link> */}
        </Nav>
        <Form inline>
          <a href="https://www.facebook.com/elena.lavallie?ref=bookmarks" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square"></i></a>

          < a href= "https://www.instagram.com/eklavallie/"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram"></i></a>
    </Form>
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}
export default Header;