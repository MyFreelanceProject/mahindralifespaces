import React from "react";
import "./applayout.scss";
import Header from "../../components/header/Header";
import Landing from "../../components/Landing/Landing";

const AppLayout = () => {
	return (
		<>
			<div className="landing_page">
				<Header />
				<Landing />
			</div>
		</>
	);
};

export default AppLayout;
