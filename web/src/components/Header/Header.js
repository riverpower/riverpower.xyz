import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom'
import logo from '../../logo.png';



const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={logo} width="70" height="70" alt="logo" />Riverpower Podcast Mill</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} exact to='/shows'>Shows</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to='/contact'>Contact</NavLink>
            </NavItem>                        
          </Nav>
          <NavbarText>
            <NavItem>
              <NavLink tag={RRNavLink} exact to='/radio'>Radio</NavLink>
            </NavItem>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
