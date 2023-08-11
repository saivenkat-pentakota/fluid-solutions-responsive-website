import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from '../images/logo.png';


function navBar(){
        return(
            <Navbar
            collapseOnSelect
            expand="lg"
            className="navbar bg-transparent navbar-fixed-top "
            sticky={"top"}
          >
            <Container>
              <Navbar.Brand href="#home"><img className="logo" src={Logo} alt="logo" style={{width:"180px"}}/></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#deets">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#features">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );

    }
    


export default navBar;
