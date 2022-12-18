import React, { useState, useEffect, useContext } from "react";
import "./contact.scss";
import { Col, Container, Row } from "reactstrap";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import { SetIsRedirectAllowed } from "../../App";
const Contact = () => {
  const CHARACTER_LIMIT = 10;
  const navigate = useNavigate();
  const setIsRedirectAllowed = useContext(SetIsRedirectAllowed);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  // const [emails, setEmails] = useState("");

  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(true);
  // const [open, setOpen] = React.useState(false);

  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://api.airtable.com/v0/appDRVMDP96w57cqJ/Leads?maxRecords=2000&view=All%20campaigns",
  //     headers: {
  //       Authorization: "Bearer keyxMiCE6VOlqipzo",
  //     },
  //   }).then((response) => {
  //     if (response.status === 200) {
  //       let records = response.data.records.map((record) => {
  //         return record.fields.Email;
  //       });
  //       setEmails(records);
  //     }
  //   });
  // }, [setEmails, isSubmitted]);

  useEffect(() => {
    setDisabled(
      !(!(email === "") && !(phone === "") && !(name === "") && isChecked)
    );
  }, [email, phone, name, isChecked]);

  const submitRecord = () => {
    // let isValid = true;
    // if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //   emails.map((mailid) => {
    //     if (mailid === email) {
    //       isValid = false;
    //       alert("ID already registered");
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   });

    //   if (isValid) {
    axios({
      method: "post",
      url: "https://api.airtable.com/v0/appDRVMDP96w57cqJ/Leads",
      headers: {
        Authorization: "Bearer keyxMiCE6VOlqipzo",
        "Content-Type": "application/json",
      },
      data: {
        records: [
          {
            fields: {
              Name: name,
              Phone: phone,
              Email: email,
              Message: message,
            },
          },
        ],
        typecast: true,
      },
    }).then((response) => {
      if (response.status === 200) {
        setIsSubmitted(!isSubmitted);
        setIsRedirectAllowed(true)
        navigate("/thank-you");
        setEmail("");
        setPhone("");
        setName("");
        setMessage("");
      } else {
        alert("Error! Please try again.");
      }
    });
  };
  // } else {
  //   alert("You have entered an invalid email address!");
  // }
  // };

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <>
      <section id="contact" className="contact_sec">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="sec_heading">Get in touch with us</h2>
            </Col>
          </Row>
          <form>
            <Row>
              <Col lg="6" md="6" sm="12">
                <TextField
                  fullWidth={true}
                  value={name}
                  type="text"
                  label="Name"
                  variant="standard"
                  onChange={handleName}
                />
              </Col>
              <Col lg="6" md="6" sm="12">
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
              <Col lg="6" md="6" sm="12">
                <TextField
                  fullWidth={true}
                  value={email}
                  type="email"
                  label="Email Id"
                  variant="standard"
                  onChange={handleEmail}
                />
              </Col>
              <Col lg="6" md="6" sm="12">
                <TextField
                  fullWidth={true}
                  type="text"
                  value={message}
                  label="Message/Remark"
                  variant="standard"
                  onChange={handleMessage}
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
