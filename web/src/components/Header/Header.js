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


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">riverpower podcast mill llc</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} exact to='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to='/shows'>Shows</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to='/radio'>Radio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} exact to='/about'>About</NavLink>
            </NavItem>                        
          </Nav>
          <NavbarText>
            <NavItem>
              <NavLink tag={RRNavLink} exact to='/radio'>Radio Player Here</NavLink>
            </NavItem>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
