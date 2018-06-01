import styled from 'styled-components';

export default styled.div `
	width: 100%;
	height: 80%
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	> input {
		margin-left: 50px;
		border: #519872 1px solid;
		border-radius: 3px;
	}
	> h4 {
		margin-left: 60px;
	}

	>div {
		width: 100%;
		
		> input {
			margin-left: 50px;
			border: #519872 1px solid;
			border-radius: 3px;
		}

		> h4 {
			margin-left: 60px;
		}
	}
`;