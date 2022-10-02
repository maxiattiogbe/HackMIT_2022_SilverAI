import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import { Nav, Container, Navbar, NavLink } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './pages/Home'
import Demo from './pages/Demo'
import Contact from './pages/Contact'

function NavigationBar() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Silver AI</Navbar.Brand>
            <Nav className="me-auto">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/demo">Demo</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Nav>
          </Container>
        </Navbar>
        <br/>
      </>
    );
};

function App() {
  return (
    <div class="background">
      <NavigationBar />
      <Home />
      {/* <Demo/> */}
    </div>
  );
}

export default App;
