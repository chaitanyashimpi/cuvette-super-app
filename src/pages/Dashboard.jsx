import React from "react";
import NewsSection from "../components/NewsSection";
import Notes from "../components/Notes";
import Weather from "../components/Weather";
import Profile from "../components/Profile";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="mainBody">
			<div className="dashboard">
				<div className="dashboardLeft">
					<div className="dashboardProfileSection">
						<div className="dashboardProfileTemp">
							<Profile />
							<Weather />
						</div>
						<Notes />
					</div>
					<div className="dashboardTimer">Timer</div>
				</div>
				<NewsSection />
			</div>
			<Link to="" className="browseButton">Browse</Link>
		</div>
	);
};

export default Dashboard;
