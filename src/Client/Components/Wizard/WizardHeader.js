import styled from 'styled-components';

export default styled.div `
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	> h1 {
		color: #425950;
	}
	> a {
		color: black;
		height: 30px;
		margin-top: 28px;
		font-weight: bold;
		font-size: 18px;
		text-decoration: none;
		padding: 5px;
	}
	> .cancel {
		background: #fec2c2;
	}
	> .previous {
		background: #3b5249;
		color: white;
	}
	> .next {
		background: #8aea92;
		color: black;
		height: 30px;
		margin-top: 28px;
		font-weight: bold;
		font-size: 18px;
		text-decoration: none;
		padding: 5px;
		border: 0;
	}
	border-bottom: black 1px solid;
`;