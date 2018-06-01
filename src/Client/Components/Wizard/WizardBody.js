import styled from 'styled-components';

export default styled.div `
	width: 100vw;
	height: 90vh;
	display: flex;
	align-content: center;
	justify-content: center;

	> .houses-display {
		width: 54%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #e5f4ec;
		align-content: center;
		> .container {
			height: 100%;
			padding-left: 2.5%;
			width: 95%;
		}
	}
`;