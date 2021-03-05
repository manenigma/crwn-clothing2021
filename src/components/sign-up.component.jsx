import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";

// import { auth, createUserProfileDocument } from "../vendors/firebase.utils";
import { signUpStart } from "../vendors/redux/user/user.action";

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async (event) => {
		// console.log("check S1 signup=>handleSubmit", state);
		event.preventDefault();

		if (password !== confirmPassword) {
			// console.error("Password don't match")
			alert("Password don't match");
			return;
		}

		signUpStart({ displayName, email, password });

		/* 		auth
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				// console.log("check S2");
				user.updateProfile({ displayName: displayName }).then(
					() => {
						// Profile updated successfully!
						// console.log("check S3 user", user);
						createUserProfileDocument(user);
					},
					(error) => console.error("Profile updated Error!", error)
				);
				return user;
			})
			.then(() => {
				// console.log("check S4");
				setState({
					displayName: "",
					email: "",
					password: "",
					confirmPassword: "",
				});
			})
			.catch((error) => console.error(error));

		// console.log("check S5"); */
	};

	const handleOnChange = (event) => {
		const { name, value } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
		// console.log(`name: ${name}  | value: ${value}`)
	};

	return (
		<div className="custom-form">
			<div className="header-box">
				<h2 className="header-box__main">I do not have an account</h2>
				<span className="header-box__sub">
					Sign up with your email and password.
				</span>
			</div>
			<form onSubmit={handleSubmit} className="form-group">
				<FormInput
					type="text"
					name="displayName"
					label="display name"
					required
					handleChange={handleOnChange}
					value={displayName}
				/>
				<FormInput
					type="email"
					name="email"
					label="email"
					required
					handleChange={handleOnChange}
					value={email}
				/>
				<FormInput
					type="password"
					name="password"
					label="password (at least 6 characters)"
					required
					handleChange={handleOnChange}
					value={password}
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					label="confirm password"
					required
					handleChange={handleOnChange}
					value={confirmPassword}
				/>
				<div className="form-group--footer">
					<CustomButton type="submit">Sign up</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
