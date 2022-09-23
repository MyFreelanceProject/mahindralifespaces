import React from "react";
import { Grid, Box } from "@mui/material";
import { Stack } from "@mui/system";
import logo from "../../assets/images/IGBC-logo.png";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/images/Power.webp";
import img2 from "../../assets/images/Water.webp";
import img3 from "../../assets/images/RRR.webp";
import "./green.scss";

import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import IconButton from "@mui/material/IconButton";

import SpaIcon from "@mui/icons-material/Spa";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";

const images = [
  {
    imgsrc: img1,
    msg: "Power-efficiency Measures",
    icon: <SpaIcon sx={{ fontSize: "70px" }} />,
  },
  {
    imgsrc: img2,
    msg: "Water-saving measures",
    icon: <BloodtypeIcon sx={{ fontSize: "70px" }} />,
  },
  {
    imgsrc: img3,
    msg: "Waste Recycle",
    icon: <AutoDeleteIcon sx={{ fontSize: "70px" }} />,
  },
];

const Green = () => {
  return (
    <section className="green_sec">
      <Grid container>
        <Grid
          item
          lg={5}
          md={5}
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
          className="green_text_cnt"
        >
          <h2>Green features for a better future</h2>
          <h4>
            Mahindra Luminare actively takes care of your luxury as well as the
            environment by employing smart, eco-friendly features.
          </h4>
          <hr />
          <Stack direction={"row"} className="certificate_cnt">
            <img src={logo} alt="igbc-logo" />
            <p>Pre-certified IGBC Platinum rated project</p>
          </Stack>
        </Grid>

        <Grid item sm={12} lg={7} md={7}>
          <Carousel
            centerMode={true}
            centerSlidePercentage={70}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            renderArrowPrev={(clickHandler, hasPrev, labelPrev) => (
              <IconButton
                className="next_btn_green"
                aria-label="east-icon"
                onClick={clickHandler}
                disabled={!hasPrev}
              >
                <WestIcon sx={{ color: "#E31837" }} />
              </IconButton>
            )}
            renderArrowNext={(clickHandler, hasPrev, labelPrev) => (
              <IconButton
                className="prev_btn_green"
                aria-label="west-icon"
                onClick={clickHandler}
                disabled={!hasPrev}
              >
                <EastIcon sx={{ color: "#E31837" }} />
              </IconButton>
            )}
          >
            {images.map((img, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="green_carousel_img_cnt"
                >
                  <img key={i} src={img.imgsrc} alt="green_image" />
                  <Stack
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    className="details"
                  >
                    {img.icon}
                    <span>{img.msg}</span>
                  </Stack>
                </Box>
              );
            })}
          </Carousel>
        </Grid>
      </Grid>
    </section>
  );
};

export default Green;
