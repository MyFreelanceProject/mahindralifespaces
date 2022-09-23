import React from "react";
import "./landing.scss";
import landingimg from "../../assets/images/02_Luminare_DigitalBanner_V1_Luminare.webp";
import logo from "../../assets/images/cropped-cropped-RidgeTest.webp";
import {Container} from "reactstrap";
import {Box, Grid} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AppsIcon from "@mui/icons-material/Apps";
import LocationCityIcon from "@mui/icons-material/LocationCity";
const Landing = () => {
	return (
		<div className="header_cnt">
			<div className="landing_img_cnt">
				<img className="landing_img" src={landingimg} alt="landing_img" />
				<img className="logo" src={logo} alt="logo" />
			</div>
			<div className="highlights">
				<Container>
					<Grid container spacing={2}>
						<Grid className="highlight_item" item sm={6} lg={3} xs={6}>
							<Box className="highlight_item_head">
								<LocationOnIcon sx={{fontSize: "1.5rem"}} />
								<span>LOCATION</span>
							</Box>
							<Box>
								<p>Gurgaon</p>
							</Box>
						</Grid>
						<Grid className="highlight_item" item sm={6} lg={3} xs={6}>
							<Box className="highlight_item_head">
								<LocalOfferIcon sx={{fontSize: "1.5rem"}} />
								<span>PRICE STARTING</span>
							</Box>
							<Box>
								<p>Price on request</p>
							</Box>
						</Grid>
						<Grid className="highlight_item" item sm={6} lg={3} xs={6}>
							<Box className="highlight_item_head">
								<AppsIcon sx={{fontSize: "1.5rem"}} />
								<span>CONFIGURATION</span>
							</Box>
							<Box>
								<p>3 BHK</p>
							</Box>
						</Grid>
						<Grid className="highlight_item" item sm={6} lg={3} xs={6}>
							<Box className="highlight_item_head">
								<LocationCityIcon sx={{fontSize: "1.5rem"}} />
								<span>TOWER</span>
							</Box>
							<Box>
								<p>1</p>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
};

export default Landing;
