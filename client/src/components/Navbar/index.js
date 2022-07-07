import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import './Navbar.css'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img id="NavLogo" src='http://localhost:8080/images/logo.png' alt='logo'/>
        </NavLink>
        <Bars onClick={toggle}/>
        <NavMenu>
          <NavLink to='/' activeStyle>Home</NavLink>
          <NavLink to='/about' activeStyle>About</NavLink>
          <NavLink to='/services' activeStyle>Services</NavLink>
          <NavLink to='/My-Work' activeStyle>My Work</NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Contact-Me'>Contact Me</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

