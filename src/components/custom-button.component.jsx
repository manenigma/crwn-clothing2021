import React from "react";

const CustomButton = (props) => {
	// console.log('CustomButton: ', props)
	const { children, isGoogleSignIn, inverted, ...otherProps } = props;
	return (
		<button
			className={`${inverted ? "inverted" : ""} ${
				isGoogleSignIn ? "google-sign-in" : ""
			} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
