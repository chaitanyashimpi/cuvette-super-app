import React, { useEffect, useState } from "react";

const Movie = (props) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovies = async () => {
			try {
				const url =
					"https://unogs-unogs-v1.p.rapidapi.com/search/titles?genres=Thriller";
				const options = {
					method: "GET",
					headers: {
						"X-RapidAPI-Key":
							"44fb067876mshc86bdbb46155a32p111c07jsn3690255d84fb",
						"X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
					},
				};

				const response = await fetch(url, options);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}

				const result = await response.json();
				console.log(result);
				setMovies(result.results);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching movies:", error);
				setError("Failed to fetch movies");
				setLoading(false);
			}
		};

		getMovies();
	}, []);

	return (
		<div className="movie">
			<h2>{props.type}</h2>
			<div className="movieImgs">
				{movies.slice(0, 4).map((movie, index) => (
					<div
						key={index}
						className="movieImg"
						style={{
							background: `url(${movie.img})`,
							width: "341.927px",
							height: "192.334px",
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
                            borderRadius: '9px',
                            margin: '10px 0'
						}}
					></div>
				))}
			</div>
		</div>
	);
};

export default Movie;
