import React from "react";

const Profile = () => {
	const formDataString = localStorage.getItem("formData");
	const formDataObject = JSON.parse(formDataString);

	return (
		<div className="dashboardProfile">
			<div className="profileImg"></div>
			<div className="profileData">
				<h2>{formDataObject.superAppname}</h2>
				<h2>{formDataObject.superAppemail}</h2>
				<p>{formDataObject.superAppusername}</p>
				<div className="profileCategories">
					<div className="profileCategory">Horror</div>
					<div className="profileCategory">Thriller</div>
					<div className="profileCategory">Horror</div>
					<div className="profileCategory">Thriller</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
