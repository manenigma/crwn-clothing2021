import React, { useState } from "react";
import { connect } from "react-redux";

// Component
import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";

// Vendors
// import { auth } from "../vendors/firebase.utils";
import {
	googleSignInStart,
	emailSignInStart,
} from "../vendors/redux/user/user.action";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		emailSignInStart(email, password);
		/* auth
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				// Signed in
				this.setState({ email: "", password: "" });
				console.log(`Sign in successfully with user ${user.displayName}`);
				// ...
			})
			.catch((error) => {
				console.error("Sign inError!", error.message);
			}); */

		// console.log(`handleSubmit`);
	};

	const handleOnChange = (event) => {
		const { name, value } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
		// console.log(`name: ${name}  | value: ${value}`)
	};

	return (
		<div className="custom-form">
			<div className="header-box">
				<h2 className="header-box__main">I already have an account</h2>
				<span className="header-box__sub">
					Sign in with your email and password.
				</span>
			</div>
			<form onSubmit={handleSubmit} className="form-group">
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
				<div className="form-group--footer">
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton
						type="button"
						isGoogleSignIn
						onClick={googleSignInStart}
					>
						Sign in with google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		googleSignInStart: () => dispatch(googleSignInStart()),
		emailSignInStart: (email, password) =>
			dispatch(emailSignInStart({ email, password })),
	};
};

export default connect(null, mapDispatchToProps)(SignIn);
