import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const OptionContainerStyles = css`
	padding: 1rem 1.5rem;
	text-transform: uppercase;
	text-decoration: none;
	font-size: 1.6rem;
	text-align: center;
	cursor: pointer;

	align-self: flex-end;

	&:link,
    &:visited {
		color: ${props => props.theme.colorBlack};
	}

	&:hover {
		font-weight: 700;
	}
`;

export const HeaderContainer = styled.div`
	background-color: #d9d9d9;
	width: 100%;
	flex-shrink: 0;
	flex-basis: 2.5rem;
	border-radius: 0 0 2rem 2rem;

	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

export const LogoContainerLink = styled(Link)`
	padding: 2.5rem;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.2);
	}
`;

export const NavContainer = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 1rem;
`;

export const OptionLink = styled(Link)`
	${OptionContainerStyles}
`;
