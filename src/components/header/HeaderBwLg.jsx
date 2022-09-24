import React, { useState } from "react";
import "./header.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from "reactstrap";
import Box from "@mui/material/Box";
import dkLogo from "../../assets/images/test.png";

const HeaderBwLg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="fix_blw_lg" expand="md" fixed="top">
      <Box
        display={"flex"}
        justifyContent="space-between"
        sx={{
          width: "100%",
        }}
      >
        <NavbarBrand href="/">
          <img alt="logo" src={dkLogo} />
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#overview">Overview</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#experience">Experience Homes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#amenities">Amenities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#gallery">Gallery </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#sustain">Sustainability</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Get In Touch</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarToggler onClick={toggle} />
      </Box>
    </Navbar>
  );
};

export default HeaderBwLg;
