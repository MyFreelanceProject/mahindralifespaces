import React, { useState } from "react";
import logo from "../../assets/images/Lifespaces-5.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const MbHeader = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <header id="mb_header">
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img height={30} src={logo} alt="logo" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="menu-icon"
              onClick={() => {
                setMenuState(true);
              }}
            >
              <MenuIcon className="menuicon" sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Stack>
        <Stack
          className="fixed_menu_bar"
          direction={"row"}
          sx={{ overflow: "auto" }}
        >
          <Button
            className="menuitem"
            variant="text"
            onClick={() => {
              setMenuState(false);
            }}
          >
            <a href="#overview">Overview</a>
          </Button>
          <Button
            className="menuitem"
            variant="text"
            onClick={() => {
              setMenuState(false);
            }}
          >
            <a href="#experience">Experience Homes</a>
          </Button>

          <Button
            className="menuitem"
            variant="text"
            onClick={() => {
              setMenuState(false);
            }}
          >
            <a href="#amenities">Amenities</a>
          </Button>

          <Button
            className="menuitem"
            variant="text"
            onClick={() => {
              setMenuState(false);
            }}
          >
            <a href="#gallery">Gallery </a>
          </Button>

          <Button
            className="menuitem"
            variant="text"
            onClick={() => {
              setMenuState(false);
            }}
          >
            <a href="#sustain">Sustainability</a>
          </Button>

          <Button
            className="menuitem"
            variant="text"
            onClick={() => {
              setMenuState(false);
            }}
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </Stack>
      </header>

      {menuState && (
        <Box className="menuitems">
          <Stack sx={{ width: "100%" }}>
            <IconButton
              sx={{ width: "2.5rem", height: "2.5rem" }}
              aria-label="close-icon"
              onClick={() => {
                setMenuState(false);
              }}
            >
              <CloseIcon sx={{ fontSize: "2rem", color: "red" }} />
            </IconButton>
            <Button
              className="mb_menuitem"
              variant="text"
              onClick={() => {
                setMenuState(false);
              }}
            >
              <a href="#overview">Overview</a>
            </Button>
            <Button
              className="mb_menuitem"
              variant="text"
              onClick={() => {
                setMenuState(false);
              }}
            >
              <a href="#experience">Experience Homes</a>
            </Button>

            <Button
              className="mb_menuitem"
              variant="text"
              onClick={() => {
                setMenuState(false);
              }}
            >
              <a href="#amenities">Amenities</a>
            </Button>

            <Button
              className="mb_menuitem"
              variant="text"
              onClick={() => {
                setMenuState(false);
              }}
            >
              <a href="#gallery">Gallery </a>
            </Button>

            <Button
              className="mb_menuitem"
              variant="text"
              onClick={() => {
                setMenuState(false);
              }}
            >
              <a href="#sustain">Sustainability</a>
            </Button>

            <Button
              className="mb_menuitem"
              variant="text"
              onClick={() => {
                setMenuState(false);
              }}
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default MbHeader;
