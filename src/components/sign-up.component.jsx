import React from "react";
import { connect } from "react-redux";

import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";

// import { auth, createUserProfileDocument } from "../vendors/firebase.utils";
import { signUpStart } from "../vendors/redux/user/user.action";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleSubmit = async (event) => {
		// console.log("check S1 signup=>handleSubmit", this.state);
		event.preventDefault();

		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;

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
				this.setState({
					displayName: "",
					email: "",
					password: "",
					confirmPassword: "",
				});
			})
			.catch((error) => console.error(error));

		// console.log("check S5"); */
	};

	handleOnChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
		// console.log(`name: ${name}  | value: ${value}`)
	};

	render() {
		// console.log("signup=>render=>this.state", this.state);
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="custom-form">
				<div className="header-box">
					<h2 className="header-box__main">I do not have an account</h2>
					<span className="header-box__sub">
						Sign up with your email and password.
					</span>
				</div>
				<form onSubmit={this.handleSubmit} className="form-group">
					<FormInput
						type="text"
						name="displayName"
						label="display name"
						required
						handleChange={this.handleOnChange}
						value={displayName}
					/>
					<FormInput
						type="email"
						name="email"
						label="email"
						required
						handleChange={this.handleOnChange}
						value={email}
					/>
					<FormInput
						type="password"
						name="password"
						label="password (at least 6 characters)"
						required
						handleChange={this.handleOnChange}
						value={password}
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						label="confirm password"
						required
						handleChange={this.handleOnChange}
						value={confirmPassword}
					/>
					<div className="form-group--footer">
						<CustomButton type="submit">Sign up</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
