import React from "react";

const Weather = () => {
	return (
		<div className="dashboardTemp">
			<div className="dashboardTempTime">
				<h3>2-20-2023</h3>
				<h3>07.35 PM</h3>
				{/* S3XCM3EKD3A8AXF6S3HHPM9RK */}
			</div>
			<div className="dashboardTempDisplay">
				<div className="dashboardWeatherCondition">
					<img src="../Images/profileImg.png" alt="" />
					<p>Heavy rain</p>
				</div>
				<div className="dashboardTempDegree">24C</div>
				<div className="dashboardTempCondition">Wind</div>
			</div>
		</div>
	);
};

export default Weather;
