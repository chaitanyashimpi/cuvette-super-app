import React from "react";
import Category from "../components/Category";
import { Link } from "react-router-dom";

const Entertainment = () => {
	return (
		<div className="mainBody">
			<div className="entertainmentPage">
				<div className="entertainmentText">
					<div style={{ width: "60%" }}>
						<h2>Super app</h2>
						<p>Choose your entertainment category</p>
						<div className="entertainmentTags">
							<div className="entertainmentTag">
								Romance <i className="fas fa-times"></i>
							</div>
							<div className="entertainmentTag">
								Music <i className="fas fa-times"></i>
							</div>
							<div className="entertainmentTag">
								Action <i className="fas fa-times"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="entertainmentCategory">
					<Category />
				</div>
				<Link to="/dashboard" className="entertainmentNext">
					Next Page
				</Link>
			</div>
		</div>
	);
};

export default Entertainment;
