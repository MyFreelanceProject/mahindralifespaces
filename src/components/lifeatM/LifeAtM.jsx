import React, {useState} from "react";
import "./life.scss";
import {Container, Row} from "reactstrap";
import {Box, Stack} from "@mui/system";
import {Button, Grid} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CabinIcon from "@mui/icons-material/Cabin";
import PoolIcon from "@mui/icons-material/Pool";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import {Carousel} from "react-responsive-carousel";

import ext1 from "../../assets/images/Luminare_Actual_Images-EXT1.webp";
import ext2 from "../../assets/images/Luminare-tower-B_Landing-page-_1-1.webp";
import ext3 from "../../assets/images/Luminare-tower-B_Landing-page-_2-1.webp";
import ext4 from "../../assets/images/Luminare-tower-B_Landing-page-_3-1.webp";
import ext5 from "../../assets/images/Luminare-tower-B_Landing-page-_4-1.webp";

import int1 from "../../assets/images/Luminare_Actual_Images-02_INT1.webp";
import int2 from "../../assets/images/Luminare_Actual_Images-INT2.webp";
import int3 from "../../assets/images/Luminare_Actual_Images-INT3.webp";
import int4 from "../../assets/images/Luminare_Actual_Images-INT4.webp";
import int5 from "../../assets/images/Luminare_Actual_Images-INT5.webp";

import ami1 from "../../assets/images/AV-room.jpg";
import ami2 from "../../assets/images/Luminare_Actual_Images-01.jpg";
import ami3 from "../../assets/images/Luminare_Actual_Images-06.jpg";
import ami4 from "../../assets/images/Luminare_Actual_Images-09.jpg";
import ami5 from "../../assets/images/Luminare_Actual_Images-06.jpg";
import ami6 from "../../assets/images/Luminare_Actual_Images-10.jpg";
import ami7 from "../../assets/images/Luminare_Actual_Images-11.jpg";
import ami8 from "../../assets/images/Luminare_Actual_Images-12.jpg";
import ami9 from "../../assets/images/Luminare_Actual_Images-13.jpg";
import ami10 from "../../assets/images/Luminare_Actual_Images-14.jpg";
import ami11 from "../../assets/images/Luminare_Actual_Images-15.jpg";
import ami12 from "../../assets/images/Luminare_Actual_Images-16.jpg";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import IconButton from "@mui/material/IconButton";
import ReactPlayer from "react-player";

const ext = [ext1, ext2, ext3, ext4, ext5];
const interior = [int1, int2, int3, int4, int5];
const ami = [
	ami1,
	ami2,
	ami3,
	ami4,
	ami5,
	ami6,
	ami7,
	ami8,
	ami9,
	ami10,
	ami11,
	ami12,
];

const vidUrl = [
	"https://www.youtube.com/watch?v=kOwWx8_0McY",
	"https://www.youtube.com/watch?v=2j0Xen2gl1A",
];
const LifeAtM = () => {
	const [categories, setCategories] = useState(ext);
	const [mediaType, setMediaType] = useState(0);
	return (
		<section className="life_at_M">
			<Container>
				<Row className="head_cnt">
					<h2>Experience life at Mahindra Luminare</h2>
				</Row>
				<Row>
					<Stack direction="row">
						<Grid container sx={{justifyContent: "center"}}>
							<Grid item>
								<Button
									className="exp_btn"
									variant="text"
									sx={{color: "#000"}}
									startIcon={<HomeIcon />}
									onClick={() => {
										setCategories(ext);
										setMediaType(0);
									}}
								>
									EXTERIOR
								</Button>
							</Grid>
							<Grid item>
								<Button
									className="exp_btn"
									variant="text"
									sx={{color: "#000"}}
									startIcon={<CabinIcon />}
									onClick={() => {
										setCategories(interior);
										setMediaType(0);
									}}
								>
									INTERIOR
								</Button>
							</Grid>
							<Grid item>
								<Button
									className="exp_btn"
									variant="text"
									sx={{color: "#000"}}
									startIcon={<PoolIcon />}
									onClick={() => {
										setCategories(ami);
										setMediaType(0);
									}}
								>
									SPECIAL AMENITIES
								</Button>
							</Grid>
							<Grid item>
								<Button
									className="exp_btn"
									variant="text"
									sx={{color: "#000"}}
									startIcon={<OndemandVideoIcon />}
									onClick={() => {
										setCategories(vidUrl);
										setMediaType(1);
									}}
								>
									VIDEOS
								</Button>
							</Grid>
						</Grid>
					</Stack>
					<Box>
						<Carousel
							showThumbs={false}
							showIndicators={false}
							showStatus={false}
							renderArrowPrev={(clickHandler, hasPrev, labelPrev) => (
								<IconButton
									className="next_btn_media"
									aria-label="east-icon"
									onClick={clickHandler}
									disabled={!hasPrev}
								>
									<EastIcon sx={{color: "#fff"}} />
								</IconButton>
							)}
							renderArrowNext={(clickHandler, hasPrev, labelPrev) => (
								<IconButton
									className="prev_btn_media"
									aria-label="west-icon"
									onClick={clickHandler}
									disabled={!hasPrev}
								>
									<WestIcon sx={{color: "#fff"}} />
								</IconButton>
							)}
						>
							{categories.map((src, i) => {
								return mediaType === 0 ? (
									<img key={i} src={src} alt="carousel_img" />
								) : (
									<Box sx={{width: "100%", height: "100%"}}>
										<ReactPlayer
											key={i}
											width="100%"
											url={src}
										></ReactPlayer>
									</Box>
								);
							})}
						</Carousel>
					</Box>
				</Row>
			</Container>
		</section>
	);
};

export default LifeAtM;
