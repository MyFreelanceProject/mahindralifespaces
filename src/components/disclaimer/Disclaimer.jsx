import React, { useState } from "react";
import "./disclaimer.scss";
import { Col, Row, Container } from "reactstrap";
import logo from "../../assets/images/LuminareFooterLogo.png";
import { Button, IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";

const Disclaimer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
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
                Mahindra Luminare features wraparound balconies, corner homes,
                and a private lift lobby that offers solace and comfort beyond
                compare. The apartment also comes with panoramic views of the
                Aravalli hills. Here, life extends beyond the home to embrace
                the everyday. Come, experience a prestigious life at Sector 59,
                Golf Course Extension Road, Gurugram, India.
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
              <Button
                onClick={handleOpen}
                className="disclaimer_btn"
                variant="contained"
              >
                DISCLAIMER
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: "10px", top: "10px" }}
          >
            <ClearIcon />
          </IconButton>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is not the official website of developer & property, it belongs
            to authorised channel partner for information purpose only. All
            rights for logo & images are reserved to developer. Thank you for
            visiting our website. This disclaimer ("Disclaimer") is applicable
            to this website and all microsites and websites owned by us. By
            using or accessing this website you agree with the Disclaimer
            without any qualification or limitation. This website is in the
            process of being updated. By accessing this website, the viewer
            confirms that the information including brochures and marketing
            collaterals on this website are solely for informational purposes
            only and the viewer has not relied on this information for making
            any booking/purchase in any project of the company. Nothing on this
            website, constitutes advertising, marketing, booking, selling or an
            offer for sale, or invitation to purchase a unit in any project by
            the company. The company is not liable for any consequence of any
            action taken by the viewer relying on such material/ information on
            this website.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Disclaimer;
