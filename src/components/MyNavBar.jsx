import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavDropdown } from 'react-bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';

function MyNavBar({ currUser, logOutHandler, cats }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand link to="/">Freezer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav className="me-auto">
              {currUser.id
                ? (

                  <Nav className="pipe-separate mgL t-light-green left">
                    <Button className="nav-link" onClick={logOutHandler} variant="link">
                      Logout
                    </Button>
                  </Nav>

                )
                : (
                  <>
                    <Nav className="pipe-separate t-light-green left"><NavLink className="nav-link" to="/auth/registration">Sign Up</NavLink></Nav>
                    <Nav className="pipe-separate t-light-green left"><NavLink className="nav-link" to="/auth/authorization">Sign In</NavLink></Nav>
                  </>
                )}

            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
