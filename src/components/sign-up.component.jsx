import React from "react";

import FormInput from "./form-input.component";
import CustomButton from "./custom-button.component";

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
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
					<h2 className="header-box__main">
						I do not have an account
					</h2>
					<span className="header-box__sub">
					Sign up with your email and password.
					</span>
				</div>
				<form onSubmit={this.handleSubmit} className="form-group">
					<FormInput
						type="text"
						name="name"
						label="display name"
						required
						handleChange={this.handleOnChange}
						value={this.state.name}
					/>
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
					<FormInput
						type="password"
						name="password"
						label="confirm password"
						required
						handleChange={this.handleOnChange}
						value={this.state.password}
					/>
					<div className="form-group--footer">
						<CustomButton type="submit">Sign up</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
