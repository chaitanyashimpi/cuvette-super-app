import React from "react";

const Category = (props) => {

    const ImageUrl = props.img

	return (
		<div className="category" style={{ backgroundColor: props.color }}>
			<div className="categoryTitle">{props.name}</div>
			{/* <div className="categoryImg" style={{ background: `url(../Images/category/${props.img})` }}></div> */}
			<img
				src={ImageUrl}
				className="categoryImg"
				alt=""
			/>
		</div>
	);
};

export default Category;
