import React, { useEffect, useState } from "react";

const NewsSection = () => {
	const [randomNews, setRandomNews] = useState({});
	const apiKey = "63ecda4becfe415f8e268dd8c37847b5";

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch(
					`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
				);

				if (!response.ok) {
					throw new Error("Network response was not ok");
				}

				const data = await response.json();
				const randomIndex = Math.floor(Math.random() * data.articles.length);
				const randomArticle = data.articles[randomIndex];
				setRandomNews(randomArticle);
			} catch (error) {
				console.error("Error fetching news data:", error);
			}
		};

		fetchNews();
	}, []);

	return (
		<div className="dashboardRight">
			{/* 63ecda4becfe415f8e268dd8c37847b5 */}
			<div className="newsImg" style={{background: `url(${randomNews.urlToImage})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
				<div>
					<h2>{randomNews.title}</h2>
					<p>2-20-2023 | 07.35 PM</p>
				</div>
			</div>
			<div className="newsArticle">{randomNews.content}</div>
		</div>
	);
};

export default NewsSection;
