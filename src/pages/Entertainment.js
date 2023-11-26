import React from "react";
import Category from "../components/Category";

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
					<Category
						color="#ff5208"
						name="Action"
						img="../Images/category/action.png"
					/>
					<Category
						color="#d7a4ff"
						name="Drama"
						img="../Images/category/drama.png"
					/>
					<Category
						color="#148a08"
						name="Romance"
						img="../Images/category/romance.png"
					/>
					<Category
						color="#84c2ff"
						name="Thriller"
						img="../Images/category/thriller.png"
					/>
					<Category
						color="#902500"
						name="Western"
						img="../Images/category/western.png"
					/>
					<Category
						color="#7358ff"
						name="Horror"
						img="../Images/category/horror.png"
					/>
					<Category
						color="#ff4ade"
						name="Fantasy"
						img="../Images/category/fantasy.png"
					/>
					<Category
						color="#e61e32"
						name="Music"
						img="../Images/category/music.png"
					/>
					<Category
						color="#6cd061"
						name="Fiction"
						img="../Images/category/fiction.png"
					/>
				</div>
			</div>
		</div>
	);
};

export default Entertainment;
