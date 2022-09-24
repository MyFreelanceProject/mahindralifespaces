import React from "react";
import "./contact.scss";
import { Col, Container, Row } from "reactstrap";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

const Contact = () => {
  return (
    <section id="contact" className="contact_sec">
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="sec_heading">Get in touch with us</h2>
          </Col>
        </Row>
        <form>
          <Row>
            <Col lg="4" md="6" sm="12">
              <TextField
                fullWidth={true}
                type="text"
                label="Name"
                variant="standard"
              />
            </Col>
            <Col lg="4" md="6" sm="12">
              <TextField
                fullWidth={true}
                type="number"
                label="Phone number"
                variant="standard"
              />
            </Col>
            <Col lg="4" md="6" sm="12">
              <TextField
                fullWidth={true}
                type="email"
                label="Email Id"
                variant="standard"
              />
            </Col>
            <Col lg="12" md="12" sm="12">
              <Stack direction={"row"} sx={{ marginTop: "4rem" }}>
                <input
                  type="checkbox"
                  style={{ marginTop: "5px", marginRight: "5px" }}
                />
                <p className="tnc">
                  By clicking Submit, you consent to your information being
                  shared with Mahindra & Mahindra and its group companies, in
                  accordance to our privacy policy. The information shall be
                  maintained in full confidentiality and shall not be shared
                  with any third party. We may use this information to get in
                  touch with you regarding your enquiry via Email, SMS,
                  WhatsApp.
                </p>
              </Stack>
            </Col>
            <Col
              lg="12"
              md="12"
              sm="12"
              style={{ textAlign: "center", margin: "2rem 0" }}
            >
              <Button className="submit_btn" variant="contained">
                SUBMIT
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
