import React from "react";

import SignIn from "../components/sign-in-component";
import SignUp from "../components/sign-up.component";

const SignInAndSignUpPage = () => {
	return (
		<div className="sign-in-and-sign-up-page">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndSignUpPage;
