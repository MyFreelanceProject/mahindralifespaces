import React, {useState} from "react";
import "./header.scss";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import Box from "@mui/material/Box";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar expand="md" fixed="top">
			<Box
				display={"flex"}
				justifyContent="space-between"
				sx={{
					width: "100%",
				}}
			>
				<Collapse isOpen={isOpen} navbar>
					<Nav navbar>
						<NavItem>
							<NavLink href="#overview">Overview</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#highlights">Highlights</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#facilities">Facilities</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#gallery">Gallery </NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#masterplan">Master Plan</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#location">Location</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#schedule">Contact</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
				<NavbarToggler onClick={toggle} />
			</Box>
		</Navbar>
	);
};

export default Header;
