import React from "react";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";

const Movies = () => {
	// ... (previous code)

	return (
		<div className="mainBody">
			<div className="moviesSection">
				<div className="movieHeader">
					<h2>Super App</h2>
					<Link to='/dashboard' className="movieHeaderImg"></Link>
				</div>
				<section className="movies">
					<h2>Entertainment according to your choice</h2>
					<Movie type="Action" />
					<Movie type="Thriller" />
					<Movie type="Horror" />
				</section>
			</div>
		</div>
	);
};

export default Movies;
