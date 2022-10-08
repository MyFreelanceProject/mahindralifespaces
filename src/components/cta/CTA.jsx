import React, { useState } from "react";
import "./cta.scss";
import { Grid, Button, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import mlogo from "../../assets/images/mlogo.png";
import PhoneIcon from "@mui/icons-material/Phone";

const CTA = () => {
  const [isActive, setIsActive] = useState(false);

  return isActive ? (
    <div
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        width: "100%",
        height: "100%",
        position: "fixed",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        sx={{
          right: 10,
          bottom: 10,
          whiteSpace: 5,
          position: "fixed",
          width: "fit-content",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Grid item sx={{ width: "100%" }}>
          <Button
            variant="contained"
            className="cta_btns"
            startIcon={<RecentActorsIcon />}
            onClick={() => setIsActive(!isActive)}
            sx={{
              width: "100%",
              borderRadius: 0,
              fontSize: "14px",
              justifyContent: "center",
            }}
          >
            <a
              style={{ color: "#fff", textDecoration: "none" }}
              href="#contact"
            >
              Get In Touch
            </a>
          </Button>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Button
            color="success"
            variant="contained"
            className="cta_btns"
            startIcon={<WhatsAppIcon />}
            onClick={() => setIsActive(!isActive)}
            sx={{
              width: "100%",
              borderRadius: 0,
              fontSize: "14px",
              justifyContent: "center",
            }}
          >
            <a
              style={{ color: "#fff", textDecoration: "none" }}
              href="https://wa.me/918076401072"
              target="_blank"
              rel="noreferrer"
            >
              Whatsapp
            </a>
          </Button>
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <Button
            color="info"
            variant="contained"
            className="cta_btns"
            startIcon={<PhoneIcon />}
            onClick={() => setIsActive(!isActive)}
            sx={{
              width: "100%",
              borderRadius: 0,
              fontSize: "14px",
              justifyContent: "center",
            }}
          >
            <a
              style={{ color: "#fff", textDecoration: "none" }}
              href="tel:+918076401072"
              target="_blank"
              rel="noreferrer"
            >
              Call Us
            </a>
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            aria-label="cta"
            className="cta_iconbtn"
            onClick={() => setIsActive(!isActive)}
            sx={{
              bgcolor: "#7BC143",
              height: "60px",
              width: "60px",
            }}
          >
            <img width="20px" height="15px" src={mlogo} alt="mlogo_ctaBtn" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  ) : (
    <IconButton
      aria-label="cta"
      className="cta_iconbtn"
      onClick={() => setIsActive(!isActive)}
      sx={{
        bgcolor: "#7BC143",
        position: "fixed",
        height: "60px",
        width: "60px",
        bottom: 10,
        right: 10,
      }}
    >
      <img width="20px" height="15px" src={mlogo} alt="mlogo_ctaBtn" />
    </IconButton>
  );
};

export default CTA;
