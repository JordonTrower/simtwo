import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { updateImageUrl } from '../../Redux/Reducer';

const BodyDiv = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-content: center;
	justify-content: center;
	background: #afd4c0;

	> .houses-display {
		width: 54%;
		display: flex;
		flex-direction: column;
		background: #e5f4ec;
		align-content: center;
		> .container {
			padding-left: 2.5%;
			width: 95%;
		}
	}
`;

const DisplayHeader = styled.div`
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
	}
	border-bottom: black 1px solid;
`;

const InputGroup = styled.div`
	width: 100%;
	> input {
		margin-left: 50px;
	}
	> h4 {
		margin-left: 60px;
	}
`;

const WizTwo = props => (
	<BodyDiv>
		<div className="houses-display">
			<div className="container">
				<DisplayHeader>
					<h1>Add New Listing</h1>
					<Link className="cancel" to="/">
						Cancel
					</Link>
				</DisplayHeader>

				<InputGroup>
					<h4>Image Url</h4>
					<input
						type="text"
						name="propName"
						id="PropName"
						value={props.imageUrl}
						style={{ width: '25%' }}
						onChange={e => props.updateImageUrl(e.target.value)}
					/>
					<DisplayHeader>
						<Link className="previous" to="/wizOne">
							Previous Step
						</Link>
						<Link className="next" to="/wizThree">
							Continue
						</Link>
					</DisplayHeader>
				</InputGroup>
			</div>
		</div>
	</BodyDiv>
);

function mapStateToProps(currentState) {
	const { imageUrl } = currentState;

	return { imageUrl };
}

export default connect(mapStateToProps, {
	updateImageUrl
})(WizTwo);

WizTwo.propTypes = {
	imageUrl: propTypes.string.isRequired,
	updateImageUrl: propTypes.func.isRequired
};
