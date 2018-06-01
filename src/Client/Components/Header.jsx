import React from 'react';
import styled from 'styled-components';
import Home from 'react-icons/lib/fa/home';

const StlyedDiv = styled.div`
	display: flex;
	width: 100vw;
	height: 10vh;
	background: #519872;
	color: white;

	align-items: center;
	> * {
		padding: 5px;
		width: 30%;
		display: flex;
		justify-content: flex-end;
	}
`;

const StyledLink = styled.h2`
	color: white;
	color: #e5f4ec;
	margin: 5px;
	padding: 5px;
	border-radius: 5px;
`;

const Header = () => (
	<StlyedDiv>
		<div>
			<Home size={40} color="white" />
			<StyledLink>Houser</StyledLink>
		</div>
	</StlyedDiv>
);

export default Header;
