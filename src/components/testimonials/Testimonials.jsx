import React from "react";
import "./testimonials.scss";
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from "reactstrap";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import IconButton from "@mui/material/IconButton";

const clients = [
  {
    img: client1,
    name: "Sanjay Joshi",
    affiliation: "MAHINDRA LUMINARE",
    about:
      "The customer relationship team at Mahindra Luminare is doing a very good job with the way they are connecting with customers and addressing queries. The key reason for choosing Mahindra Luminare was strong corporate governance, maintaining transparency and brand Mahindra., I look forward to staying here.",
  },
  {
    img: client2,
    name: "Anil Sharma",
    affiliation: "MAHINDRA LUMINARE",
    about:
      "Wonderful experience with Mahindra.. They are not just building homes but building relationships, trust and transparency.",
  },
  {
    img: client3,
    name: "Balbir Malhotra",
    affiliation: "MAHINDRA LUMINARE",
    about:
      "We didn’t like any other property until we saw Mahindra Luminare. The show apartment helped us decide to book the apartment here. I have known Mahindra for the last 35 years and I find the organization pretty reliable who can keep their words.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial_sec">
      <Container>
        <Row>
          <Col lg="12" sm="12" className="sec_heading_cnt">
            <h2 className="sec_heading">Customers Speak</h2>
          </Col>
        </Row>
        <Row>
          <Col
            lg="12"
            sm="12"
            style={{ justifyContent: "center", display: "flex" }}
          >
            <Carousel
              className="test_carousel"
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              renderArrowPrev={(clickHandler, hasPrev, labelPrev) => (
                <IconButton
                  className="next_btn_test"
                  aria-label="east-icon"
                  onClick={clickHandler}
                  disabled={!hasPrev}
                >
                  <WestIcon sx={{ color: "#E31837" }} />
                </IconButton>
              )}
              renderArrowNext={(clickHandler, hasPrev, labelPrev) => (
                <IconButton
                  className="prev_btn_test"
                  aria-label="west-icon"
                  onClick={clickHandler}
                  disabled={!hasPrev}
                >
                  <EastIcon sx={{ color: "#E31837" }} />
                </IconButton>
              )}
            >
              {clients.map((client, i) => {
                return (
                  <Grid
                    key={i}
                    sx={{ placeContent: "center" }}
                    className="client_item"
                    container
                  >
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      }}
                      item
                      lg={4}
                      md={4}
                      sm={6}
                    >
                      <Box className="client_img">
                        <img src={client.img} alt={client.name} />
                      </Box>
                    </Grid>
                    <Grid item lg={8} md={8} sm={12} className="about_client">
                      <p>{client.about}</p>
                      <h4>{client.name}</h4>
                      <h5>{client.affiliation}</h5>
                    </Grid>
                  </Grid>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
