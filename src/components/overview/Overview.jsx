import React from "react";
import "./overview.scss";
import {Grid} from "@mui/material";

import {Container, Row} from "reactstrap";
import overview_img from "../../assets/images/08-Wraparound-Balconies.webp";

const Overview = () => {
	return (
		<section className="overview_sec">
			<Container>
				<Row>
					<p className="overview_heading">
						Mahindra Luminare helps you craft a life like none other by
						offering wrap around balconies, private lift lobby and corner
						homes at the prestigious golf course extension road
					</p>
				</Row>
				<Row>
					<Grid container>
						<Grid item lg={4}>
							<h3>Discover homes with</h3>
							<h2>unmatched luxury</h2>
							<p>
								Mahindra Luminare offers the rare luxury of corner homes
								combined with wraparound balconies and a private lift
								lobby. What stops you from living the life you desire?
								Nothing.
							</p>
						</Grid>
						<Grid item lg={8}>
							<img src={overview_img} alt="overview_img" />
						</Grid>
					</Grid>
				</Row>
			</Container>
		</section>
	);
};

export default Overview;
