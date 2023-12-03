import React from "react";

const Dashboard = () => {
	
	const formDataString = localStorage.getItem("formData");
	const formDataObject = JSON.parse(formDataString);

	return (
		<div className="mainBody">
			<div className="dashboard">
				<div className="dashboardLeft">
					<div className="dashboardProfileSection">
						<div className="dashboardProfileTemp">
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
							<div className="dashboardTemp">
                                <div className="dashboardTempTime">
                                    <h3>2-20-2023</h3>
                                    <h3>07.35 PM</h3>
                                {/* S3XCM3EKD3A8AXF6S3HHPM9RK */}
                                </div>
                                <div className="dashboardTempDisplay">
                                    <div className="dashboardWeatherCondition">Heavy rain</div>
                                    <div className="dashboardTempDegree">24C</div>
                                    <div className="dashboardTempCondition">Wind</div>
                                </div>
                            </div>
						</div>
						<div className="dashboardNotes">
                            <h2>All Notes</h2>
                            <p className="notes">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut distinctio sit incidunt est corrupti dignissimos consequuntur minus quis! Aliquam asperiores minima quaerat soluta nulla quasi commodi molestias consectetur expedita assumenda.
                                Recusandae, natus. Similique culpa id fugit ipsa cum, nobis nulla suscipit delectus, sint eaque quia ab ea ipsam necessitatibus veritatis in obcaecati facilis deserunt ducimus dignissimos fugiat sed assumenda. Corrupti!
                                Praesentium unde enim nam eligendi possimus illum eaque corporis voluptates natus, dolore inventore, soluta velit hic, adipisci in nihil veritatis impedit sint vitae. Provident quasi modi laudantium magni, deleniti corporis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut distinctio sit incidunt est corrupti dignissimos consequuntur minus quis! Aliquam asperiores minima quaerat soluta nulla quasi commodi molestias consectetur expedita assumenda.
                                Recusandae, natus. Similique culpa id fugit ipsa cum, nobis nulla suscipit delectus, sint eaque quia ab ea ipsam necessitatibus veritatis in obcaecati facilis deserunt ducimus dignissimos fugiat sed assumenda. Corrupti!
                                Praesentium unde enim nam eligendi possimus illum eaque corporis voluptates natus, dolore inventore, soluta velit hic, adipisci in nihil veritatis impedit sint vitae. Provident quasi modi laudantium magni, deleniti corporis?
                                
                            </p>
                        </div>
					</div>
					<div className="dashboardTimer">
                        Timer
                    </div>
				</div>
				<div className="dashboardRight">
                    
                </div>
			</div>
		</div>
	);
};

export default Dashboard;
