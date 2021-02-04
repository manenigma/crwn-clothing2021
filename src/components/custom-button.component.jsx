import React from "react";

const CustomButton = (props) => {
	// console.log('CustomButton: ', props)
	const { children, isGoogleSignIn, ...otherProps } = props
	return (
		<button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps} >
			{
				children
			}
		</button>
	)
}

export default CustomButton