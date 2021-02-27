import React from "react";

import { CustomButtomContainer } from "../styled/components/custom-buttom.styles";

const CustomButton = (props) => {
	// console.log('CustomButton: ', props)
	const { children, ...otherProps } = props;
	return (
		<CustomButtomContainer {...otherProps}>{children}</CustomButtomContainer>
	);
};

export default CustomButton;
