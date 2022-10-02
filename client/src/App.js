import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import { Nav, Container, Navbar, NavLink } from 'react-bootstrap'
import { Route, Routes, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './pages/Home'
import Demo from './pages/Demo'

function NavigationBar() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <img className="navbar-logo-image" src="../../../favicon.ico"/>
            <Navbar.Brand href="/home">Silver AI</Navbar.Brand>
            <Nav className="me-auto">
                <Link to="/home">Home</Link>
                <Link to="/demo">Demo</Link>
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
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/demo' element={<Demo/>}/>
      </Routes>
    </div>
  );
}

export default App;
