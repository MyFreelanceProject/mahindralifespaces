import React from "react";
import "./amenities.scss";
import { Container, Row } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import { Box, Grid } from "@mui/material";
import logo1 from "../../assets/images/Indoor-Gymnasium-1.webp";
import logo2 from "../../assets/images/Swimming-pool-with-separate-kids-pool-1.webp";
import logo3 from "../../assets/images/Spa-1.webp";
import logo4 from "../../assets/images/Cards-room-1.webp";
import logo5 from "../../assets/images/AV-room-1.webp";
import logo6 from "../../assets/images/Play-room-1.webp";
import { Stack } from "@mui/system";

import logo7 from "../../assets/images/Kids-Play-Area-5.webp";
import logo8 from "../../assets/images/Squash-court-3.webp";
import logo9 from "../../assets/images/Dual-Tennis-Courts-1-1.webp";
import logo10 from "../../assets/images/Half-basketball-court-1.webp";
import logo11 from "../../assets/images/Restaurant-1.webp";
import logo12 from "../../assets/images/Open-Air-Amphitheatre-1.webp";

import logo13 from "../../assets/images/Urban-river-landscape-features-gazebos-1.webp";
import logo14 from "../../assets/images/Banquet-facilities-1.webp";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
const Amenities = () => {
  return (
    <section id="amenities" className="amenities">
      <Container>
        <Row className="head_cnt">
          <h2>Amenities for a lifestyle like none other</h2>
          <h3>
            When it comes to refined living combined with luxurious designs,
            there is nothing like Luminare.
          </h3>
        </Row>
        <Row>
          <Box className="carousel_cnt" sx={{ padding: "5rem 0" }}>
            <Carousel
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              renderArrowPrev={(clickHandler, hasPrev, labelPrev) => (
                <IconButton
                  className="next_btn"
                  aria-label="east-icon"
                  onClick={clickHandler}
                  disabled={!hasPrev}
                >
                  <EastIcon sx={{ color: "#fff" }} />
                </IconButton>
              )}
              renderArrowNext={(clickHandler, hasPrev, labelPrev) => (
                <IconButton
                  className="prev_btn"
                  aria-label="west-icon"
                  onClick={clickHandler}
                  disabled={!hasPrev}
                >
                  <WestIcon sx={{ color: "#fff" }} />
                </IconButton>
              )}
            >
              <Grid className="page_one page" container spacing={2}>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo1} alt="logo" />
                    <p>Gymnasium</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo2} alt="logo" />
                    <p>Swimming pool with separate kids pool</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo3} alt="logo" />
                    <p>Spa</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo4} alt="logo" />
                    <p>Cards room</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo5} alt="logo" />
                    <p>AV room</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo6} alt="logo" />
                    <p>Play room</p>
                  </Stack>
                </Grid>
              </Grid>
              <Grid className="page_one page" container spacing={2}>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo7} alt="logo" />
                    <p>Kids play area</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo8} alt="logo" />
                    <p>Square court</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo9} alt="logo" />
                    <p>Tennis court</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo10} alt="logo" />
                    <p>Half Basketball court</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo11} alt="logo" />
                    <p>Restaurant</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo12} alt="logo" />
                    <p>Amphitheatre</p>
                  </Stack>
                </Grid>
              </Grid>
              <Grid className="page_one page" container spacing={2}>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo13} alt="logo" />
                    <p>Urban river landscape features &amp; gazebos</p>
                  </Stack>
                </Grid>
                <Grid item lg={4} xs={6} sm={6} md={4}>
                  <Stack className="item">
                    <img src={logo14} alt="logo" />
                    <p>Banquet facilities</p>
                  </Stack>
                </Grid>
              </Grid>
            </Carousel>
          </Box>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Button
            sx={{
              borderRadius: "0",
              bgcolor: "#ff0000",
              padding: "1rem 3rem",
              fontSize: "1.4rem",
              width: "fit-content",
            }}
            variant="contained"
          >
            <a
              style={{ color: "#fff", textDecoration: "none" }}
              href="#contact"
            >
              DOWNLOAD BROCHURE
            </a>
          </Button>
        </Row>
      </Container>
    </section>
  );
};

export default Amenities;
