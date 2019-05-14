import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';


class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar"  expand="lg">
          <Navbar.Brand href="/home">Elena Kathryn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          {/* <Nav.Link href="/galla">Gallery</Nav.Link> */}
          <Nav.Link href="/gallery">Gallery</Nav.Link>
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