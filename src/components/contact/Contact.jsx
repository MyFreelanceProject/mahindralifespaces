import React, { useState, useEffect } from "react";
import "./contact.scss";
import { Col, Container, Row } from "reactstrap";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Modal from "@mui/material/Modal";

const Contact = () => {
  const CHARACTER_LIMIT = 10;
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [emails, setEmails] = useState("");

  const [disabled, setDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.airtable.com/v0/appRH3BAe1uquqZV5/Leads?maxRecords=2000&view=Grid%20view",
      headers: {
        Authorization: "Bearer keyjjd5EU0mDTIyh8",
      },
    }).then((response) => {
      if (response.status === 200) {
        let records = response.data.records.map((record) => {
          return record.fields.Email;
        });
        setEmails(records);
      }
    });
  }, [setEmails, isSubmitted]);

  useEffect(() => {
    setDisabled(
      !(!(email === "") && !(phone === "") && !(name === "") && isChecked)
    );
  }, [email, phone, name, isChecked]);

  const submitRecord = () => {
    let isValid = true;
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emails.map((mailid) => {
        if (mailid === email) {
          isValid = false;
          alert("ID already registered");
          return false;
        } else {
          return true;
        }
      });

      if (isValid) {
        axios({
          method: "post",
          url: "https://api.airtable.com/v0/appRH3BAe1uquqZV5/Leads",
          headers: {
            Authorization: "Bearer keyjjd5EU0mDTIyh8",
            "Content-Type": "application/json",
          },
          data: {
            records: [
              {
                fields: { Name: name, Phone: phone, Email: email },
              },
            ],
            typecast: true,
          },
        }).then((response) => {
          if (response.status === 200) {
            setIsSubmitted(!isSubmitted);
            handleOpen();
            setEmail("");
            setPhone("");
            setName("");
          }
        });
      }
    } else {
      alert("You have entered an invalid email address!");
    }
  };

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section id="contact" className="contact_sec">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "white",
            }}
          >
            <CheckCircleIcon color="success" sx={{ fontSize: 40 }} />
            <h2>Thank you!</h2>
            <p>Our team will connect with you shortly.</p>
          </Stack>
        </Modal>
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
                  onChange={handleName}
                />
              </Col>
              <Col lg="4" md="6" sm="12">
                <TextField
                  inputProps={{
                    maxLength: CHARACTER_LIMIT,
                  }}
                  size="large"
                  value={phone}
                  fullWidth={true}
                  type="tel"
                  label="Phone number"
                  variant="standard"
                  onChange={handlePhone}
                  helperText={"max-length - 10 digits"}
                />
              </Col>
              <Col lg="4" md="6" sm="12">
                <TextField
                  fullWidth={true}
                  type="email"
                  label="Email Id"
                  variant="standard"
                  onChange={handleEmail}
                />
              </Col>
              <Col lg="12" md="12" sm="12">
                <Stack direction={"row"} sx={{ marginTop: "4rem" }}>
                  <input
                    type="checkbox"
                    style={{ marginTop: "5px", marginRight: "5px" }}
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
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
                <Button
                  onClick={submitRecord}
                  className="submit_btn"
                  variant="contained"
                  disabled={disabled}
                >
                  SUBMIT
                </Button>
              </Col>
            </Row>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Contact;
