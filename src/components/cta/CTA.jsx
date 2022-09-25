import React from "react";
import "./cta.scss";
import { Grid, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
const CTA = () => {
  return (
    <Grid
      container
      direction="row"
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        bgcolor: "#fff",
      }}
    >
      <Grid item sx={{ width: "50%" }}>
        <Button
          className="cta_btns"
          color="success"
          sx={{ width: "100%", borderRadius: 0, fontSize: "14px" }}
          variant="contained"
          startIcon={<WhatsAppIcon />}
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
      <Grid item sx={{ width: "50%" }}>
        <Button
          className="cta_btns"
          sx={{ width: "100%", borderRadius: 0, fontSize: "14px" }}
          variant="contained"
          startIcon={<RecentActorsIcon />}
        >
          <a style={{ color: "#fff", textDecoration: "none" }} href="#contact">
            Get In Touch
          </a>
        </Button>
      </Grid>
    </Grid>
  );
};

export default CTA;
