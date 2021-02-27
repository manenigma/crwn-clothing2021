import styled, { css } from "styled-components";

const buttonStyles = css`
	background-color: ${(props) => props.theme.colorBlack};
	color: ${(props) => props.theme.colorWhite};
	border: 1px solid transparent;

	&:hover {
		background-color: ${(props) => props.theme.colorWhite};
		color: ${(props) => props.theme.colorBlack};
		border: 1px solid ${(props) => props.theme.colorBlack};
	}
	&:focus {
		outline: none;
	}
`;

const invertedButtonStyles = css`
	background-color: ${(props) => props.theme.colorWhite};
	color: ${(props) => props.theme.colorBlack};
	border: 1px solid ${(props) => props.theme.colorBlack};

	&:hover {
		background-color: ${(props) => props.theme.colorBlack};
		color: ${(props) => props.theme.colorWhite};
		border: 1px solid transparent;
	}
`;

const googleSignInStyles = css`
	background-color: ${(props) => props.theme.colorTertiaryLight};
	border: 1px solid transparent;
	color: ${(props) => props.theme.colorWhite};
	
	&:hover {
		background-color: ${(props) => props.theme.colorTertiaryLightDarken};
		color: ${(props) => props.theme.colorBlack};
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtomContainer = styled.button`
	/* position: absolute; */
	flex-grow: 1;
	height: 5rem;
	letter-spacing: 0.05rem;
	padding: 0 1rem;
	font-size: 1.5rem;
	text-transform: uppercase;
	font-family: "Open Sans Condensed";
	font-weight: bolder;
	border-radius: 100px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	${getButtonStyles}
`;
