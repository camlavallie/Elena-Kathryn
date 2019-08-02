import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Header = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Navbar className="navbar"  expand="lg" bg="light" variant="light">
     <Nav.Link style={{fontSize: "20px"}}href="/home">Home</Nav.Link>
          <Nav.Link style={{fontSize: "20px"}}href="/contact">Contact</Nav.Link>
          <Nav.Link style={{fontSize: "20px"}}href="/gallery">Gallery</Nav.Link>
          <Nav.Link style={{fontSize: "20px"}}href="/posts">Blog</Nav.Link>
    <Nav.Link style={{fontSize: "20px"}}onClick={logout} href="#!">Logout</Nav.Link>
    </Navbar>
  );

  const guestLinks = (
    <Navbar className="navbar"  expand="lg" bg="light" variant="light">
          <Nav.Link style={{fontSize: "20px"}}href="/home">Home</Nav.Link>
          <Nav.Link style={{fontSize: "20px"}}href="/contact">Contact</Nav.Link>
          <Nav.Link style={{fontSize: "20px"}}href="/gallery">Gallery</Nav.Link>
          <Nav.Link style={{fontSize: "20px"}}href="/login">Login</Nav.Link>
          <Nav.Link style={{fontSize: "20px"}}href="/posts">Blog</Nav.Link>
          </Navbar>
  );
    return (
      <div>
        <Navbar className="navbar"  expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/home" style={{fontFamily: "Kristi", fontSize: "60px"}}>Elena Kathryn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
          <h1>
    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
  </h1>
        </Nav>
        <Form inline>
          <a href="https://www.facebook.com/elena.lavallie?ref=bookmarks" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square"></i></a>

          < a href= "https://www.instagram.com/eklavallie/"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram"></i></a>
    </Form>
  </Navbar.Collapse>
  {/* <h1>
    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
  </h1> */}
</Navbar>
      </div>
    )
  };

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, { logout })(Header);