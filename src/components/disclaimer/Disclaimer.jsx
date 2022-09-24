import React from "react";
import "./disclaimer.scss";
import { Col, Row, Container } from "reactstrap";
import logo from "../../assets/images/LuminareFooterLogo.png";
import { Button } from "@mui/material";

const Disclaimer = () => {
  return (
    <section className="disclaimer_sec">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <img src={logo} alt="LuminareFooterLogo" />
          </Col>
          <Col lg="8" md="8" sm="12">
            <p className="disclaimer_text">
              When you look for luxury 3 BHK and 4 BHK apartments in Gurugram,
              Mahindra Luminare stands out. The amenities on offer include a
              fully functional clubhouse, landscaped gardens and more. Built
              with meticulousness, inimitable features and the ultimate luxury
              in mind, there is nothing like Mahindra Luminare for those who
              seek to be more. An IGBC pre-certified Platinum-rated project,
              Mahindra Luminare features wraparound balconies, corner homes, and
              a private lift lobby that offers solace and comfort beyond
              compare. The apartment also comes with panoramic views of the
              Aravalli hills. Here, life extends beyond the home to embrace the
              everyday. Come, experience a prestigious life at Sector 59, Golf
              Course Extension Road, Gurugram, India.
            </p>
            <p className="disclaimer_text">
              HRERA Registration no.
              <strong>
                Phase 1 – 47 of 2017, Phase 2 – 42 of 2017 and Phase 3-26 of
                2022
              </strong>
              available on
            </p>
            <p className="disclaimer_text">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://haryanarera.gov.in"
              >
                https://haryanarera.gov.in
              </a>
            </p>
            <Button className="disclaimer_btn" variant="contained">
              DISCLAIMER
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Disclaimer;
