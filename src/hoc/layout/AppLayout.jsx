import React from "react";
import "./applayout.scss";
import Header from "../../components/header/Header";
import Landing from "../../components/Landing/Landing";
import Overview from "../../components/overview/Overview";
const AppLayout = () => {
	return (
		<>
			<div className="landing_page">
				<Header />
				<Landing />
			</div>
			<Overview />
		</>
	);
};

export default AppLayout;
