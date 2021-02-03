import React from "react";

// Component
import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";

// Vendors
import { signInWithGoogle } from "../vendors/firebase.utils";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
		console.log(`handleSubmit`);
	};

	handleOnChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
		// console.log(`name: ${name}  | value: ${value}`)
	};

	render() {
		return (
			<div className="custom-form">
				<div className="header-box">
					<h2 className="header-box__main">I already have an account</h2>
					<span className="header-box__sub">
						Sign in with your email and password.
					</span>
				</div>
				<form onSubmit={this.handleSubmit} className="form-group">
					<FormInput
						type="email"
						name="email"
						label="email"
						required
						handleChange={this.handleOnChange}
						value={this.state.email}
					/>
					<FormInput
						type="password"
						name="password"
						label="password"
						required
						handleChange={this.handleOnChange}
						value={this.state.password}
					/>
					<div className="form-group--footer">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
