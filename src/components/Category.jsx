import React, { useState } from "react";

const category = [
	{
		id: 1,
		name: "Action",
		img: "../Images/category/action.png",
		color: "#ff5208",
	},
	{
		id: 2,
		name: "Drama",
		img: "../Images/category/drama.png",
		color: "#d7a4ff",
	},
	{
		id: 3,
		name: "Romance",
		img: "../Images/category/romance.png",
		color: "#148a08",
	},
	{
		id: 4,
		name: "Thriller",
		img: "../Images/category/thriller.png",
		color: "#84c2ff",
	},
	{
		id: 5,
		name: "Western",
		img: "../Images/category/western.png",
		color: "#902500",
	},
	{
		id: 6,
		name: "Horror",
		img: "../Images/category/horror.png",
		color: "#7358ff",
	},
	{
		id: 7,
		name: "Fantasy",
		img: "../Images/category/fantasy.png",
		color: "#ff4ade",
	},
	{
		id: 8,
		name: "Music",
		img: "../Images/category/music.png",
		color: "#e61e32",
	},
	{
		id: 9,
		name: "Fiction",
		img: "../Images/category/fiction.png",
		color: "#6cd061",
	},
];

const Category = (props) => {
	const [selectedComponent, setSelectedComponent] = useState(null);


	const handleComponentClick = (component) => {
		const localStorageArray =
			JSON.parse(localStorage.getItem("selectedComponents")) || [];

		localStorageArray.push(component);
		localStorage.setItem(
			"selectedComponents",
			JSON.stringify(localStorageArray)
		);

		// Update the state to trigger a re-render
		setSelectedComponent(component);
	};

	return (
		<>
			{category.map((component) => (
				<div
					key={component.id}
					className="category"
					style={{ backgroundColor: component.color }}
					onClick={() => handleComponentClick(component.name)}
				>
					<div className="categoryTitle">{component.name}</div>
					{/* <div className="categoryImg" style={{ background: `url(../Images/category/${props.img})` }}></div> */}
					<img src={component.img} className="categoryImg" alt="" />
				</div>
			))}
		</>
	);
};

export default Category;
