import React from "react";
import "./footer.scss";
import { Col, Container, Row } from "reactstrap";
import footerlogo from "../../assets/images/footerlogo.png";

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
