import React from "react";
import { Stack } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CTA from "../../components/cta/CTA";

const Thankyou = () => {
  const navigate = useNavigate();
  function handleRedirect() {
    navigate("/");
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          p: 4,
          top: "50%",
          width: 400,
          left: "50%",
          boxShadow: 24,
          display: "flex",
          bgcolor: "white",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          // border: "2px solid #000",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CheckCircleIcon color="success" sx={{ fontSize: 40 }} />
        <h2>Thank you!</h2>
        <p>Our team will connect with you shortly.</p>
        <Button onClick={handleRedirect}>Redirect to HOME PAGE</Button>
      </Stack>
      <CTA />
    </Box>
  );
};

export default Thankyou;
