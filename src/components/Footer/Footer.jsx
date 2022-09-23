import { Stack } from "@mui/system";
import React from "react";
import "./footer.scss";
import { Col, Container, Row } from "reactstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import footerlogo from "../../assets/images/footerlogo.png";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer_sec">
      <Container>
        <Row>
          <Col lg="2" sm="6" xs="6">
            <img
              width={"100%"}
              height="100%"
              src={footerlogo}
              alt="footerlogo"
            />
          </Col>
          <Col lg="4" sm="12"></Col>
          <Col lg="3" sm="12">
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              <a
                className="media_icon"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/MahindraLifespaces/"
              >
                <IconButton aria-label="facebook" sx={{ color: "#fff" }}>
                  <FacebookIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </a>

              <a className="media_icon" href="https://twitter.com/Life_Spaces">
                <IconButton aria-label="twitter" sx={{ color: "#fff" }}>
                  <TwitterIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </a>
              <a
                className="media_icon"
                href="https://www.instagram.com/mahindralifespaces/"
              >
                <IconButton aria-label="instagram" sx={{ color: "#fff" }}>
                  <InstagramIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </a>
              <a
                className="media_icon"
                href="https://www.youtube.com/channel/UCuf6DV_48ThAdIbF5Mkv-Uw"
              >
                <IconButton aria-label="youtube" sx={{ color: "#fff" }}>
                  <YouTubeIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </a>
              <a
                className="media_icon"
                href="https://in.linkedin.com/company/mahindra-lifespace-developers-ltd-"
              >
                <IconButton aria-label="linkedin" sx={{ color: "#fff" }}>
                  <LinkedInIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </a>
            </Stack>
          </Col>
        </Row>
        <hr style={{ color: "rgba(255, 255, 255, 0.6)" }} />
        <Row>
          <Col lg="12" sm="12" className="credits">
            <p>
              Copyright © 2022 Mahindra Lifespace Developers Ltd. All Rights
              Reserved.
            </p>
            <p>Terms Of Use | Privacy Policy | Disclaimer | Sitemap</p>
            <p>Designed By ___</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
