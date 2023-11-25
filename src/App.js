import { useState } from "react";
import "./App.css";
import { useNavigate } from 'react-router-dom';



function App() {

  const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		username: "",
		email: "",
		mobile: "",
	});
	// const [formError, setFormError] = useState({
	// 	name: "",
	// 	username: "",
	// 	email: "",
	// 	mobile: "",
	// });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		localStorage.setItem("formData", JSON.stringify(formData));
		console.log(localStorage.getItem("formData"));
    navigate("/entertainment");
	};

	return (
		<section className="mainBody">
			<section className="registerPage">
				<div className="registerImg"></div>
				<div className="registerFormSection">
					<h2>Super App</h2>
					<p>Create your new account</p>
					<form className="registerForm" onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							placeholder="Name"
							id="name"
							value={formData.name}
							onChange={handleChange}
						/>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Username"
							value={formData.username}
							onChange={handleChange}
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							id="email"
							value={formData.email}
							onChange={handleChange}
						/>
						<input
							type="text"
							name="mobile"
							id="mobile"
							placeholder="Mobile"
							value={formData.mobile}
							onChange={handleChange}
						/>
						<div className="checkRegister">
							<input type="checkbox" name="share" id="share" />
							<label htmlFor="share">
								Share my registration data with Superapp
							</label>
						</div>
            <span className="error">Field is required</span>  
						<input type="submit" value="SIGN UP" />
						<p>
							By clicking on Sign up. you agree to Superapp{" "}
							<span>Terms and Conditions of Use</span>
						</p>
						<p>
							To learn more about how Superapp collects, uses, shares and
							protects your personal data please head Superapp{" "}
							<span>Privacy Policy</span>
						</p>
					</form>
				</div>
			</section>
		</section>
	);
}

export default App;
