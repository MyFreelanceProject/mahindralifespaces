import React, { useState } from "react";
import "./experience.scss";
import { Container, Row } from "reactstrap";
import { Box, Stack } from "@mui/system";
import { Button, Grid } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import planA from "../../assets/images/01_Luminare_TowerB_V1_3-BHK-A-Unit-Plan.webp";
import planB from "../../assets/images/01_Luminare_TowerB_V1_3-BHK-B-Unit-Plan.webp";

import floorplan from "../../assets/images/01_Luminare_TowerB_V1_3-BHK-Typical-floor-plan.webp";
import masterplan from "../../assets/images/01_Luminare_TowerB_V1_Master-Layout.webp";

const Experience = () => {
  const [categories, setCategories] = useState(0);
  const [plan, setPlan] = useState("A");
  return (
    <section className="experience_sec">
      <Container>
        <Row className="head_cnt">
          <h2>Experience life at Mahindra Luminare</h2>
        </Row>
        <Row>
          <Stack direction="row">
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item>
                <Button
                  className="exp_btn"
                  variant="text"
                  sx={{ color: "#000" }}
                  startIcon={<HomeIcon />}
                  onClick={() => {
                    setCategories(0);
                  }}
                >
                  INTERACTIVE UNIT PLAN
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className="exp_btn"
                  variant="text"
                  sx={{ color: "#000" }}
                  startIcon={<AccountTreeIcon />}
                  onClick={() => {
                    setCategories(1);
                  }}
                >
                  FLOOR PLAN
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className="exp_btn"
                  variant="text"
                  sx={{ color: "#000" }}
                  startIcon={<TipsAndUpdatesIcon />}
                  onClick={() => {
                    setCategories(2);
                  }}
                >
                  MASTER PLAN
                </Button>
              </Grid>
            </Grid>
          </Stack>
          <Grid container>
            <Grid item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Stack direction={"row"}>
                <Button
                  sx={{
                    borderRadius: 0,
                    marginRight: "1rem",
                    padding: "1rem 2rem",
                  }}
                  className={plan === "A" ? "plan_btn" : "plan_btn active"}
                  variant="contained"
                  onClick={() => {
                    setPlan("A");
                  }}
                >
                  3 BHK A
                </Button>
                <Button
                  sx={{
                    borderRadius: 0,
                    marginRight: "1rem",
                    padding: "1rem 2rem",
                  }}
                  className={plan === "B" ? "plan_btn" : "plan_btn active"}
                  variant="contained"
                  onClick={() => {
                    setPlan("B");
                  }}
                >
                  3 BHK B
                </Button>
              </Stack>
              <Stack className="area_list">
                <Box className="area_item">
                  <p className="head">RERA Carpet Area</p>
                  <p>
                    150.88 Sqm <span>(1624.06 SQ.FT.)</span>
                  </p>
                </Box>
                <Box className="area_item">
                  <p className="head">EBVT Area</p>
                  <p>
                    62.83 Sqm
                    <span>(676.3 SQ.FT.)</span>
                  </p>
                </Box>
                <Box className="area_item">
                  <p className="head">Aggregate Area</p>
                  <p>
                    213.71 Sqm <span>(2300.35 SQ.FT.)</span>
                  </p>
                </Box>
                <Button
                  sx={{ borderRadius: 0, padding: "1rem 0" }}
                  className="check_btn"
                  variant="contained"
                >
                  CHECK PRICE
                </Button>
              </Stack>
            </Grid>
            <Grid item lg={8}>
              {categories === 0 && plan === "A" ? (
                <img src={planA} alt="plan-a" />
              ) : (
                <img src={planB} alt="plan-b" />
              )}
              {false && <img src={floorplan} alt="floor plan" />}
              {false && <img src={masterplan} alt="master plan" />}
            </Grid>
          </Grid>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
