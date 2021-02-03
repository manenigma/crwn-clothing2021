import React from "react";

const CustomButton = (props) => {
	// console.log('CustomButton: ', props)
	const { type, children, isGoogleSignIn, ...otherProps } = props
	return (
		<div className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps} >
			{children}
		</div>
	)
}

export default CustomButton