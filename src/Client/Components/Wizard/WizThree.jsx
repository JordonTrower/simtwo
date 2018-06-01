import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
	updatePropName,
	updateAddress,
	updateCity,
	updateState,
	updateZip,
	updateImageUrl,
	updateMortgage,
	updateRent
} from '../../Redux/Reducer';

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

const InputGroup = styled.div`
	width: 100%;
	> input {
		margin-left: 50px;
	}
	> h4 {
		margin-left: 60px;
	}
`;

const WizThree = props => (
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
					<h4>Monthly Mortgage Amount</h4>
					<input
						type="number"
						name="propName"
						id="PropName"
						value={props.mortgage}
						style={{ width: '25%' }}
						onChange={e => props.updateMortgage(e.target.value)}
					/>
				</InputGroup>
				<InputGroup>
					<h4>Desired Monthly Rent</h4>
					<input
						type="number"
						name="propName"
						id="PropName"
						value={props.rent}
						style={{ width: '25%' }}
						onChange={e => props.updateRent(e.target.value)}
					/>
				</InputGroup>

				<DisplayHeader>
					<Link className="previous" to="/wizTwo">
						Previous Step
					</Link>
					<button
						className="next"
						onClick={() => {
							const dataToSend = {
								name: props.propName,
								address: props.address,
								city: props.city,
								state: props.state,
								zip: props.zip,
								img: props.imageUrl,
								mortgage: props.mortgage,
								rent: props.rent
							};
							axios.post('/api/houses', dataToSend).then(res => {
								if (res.data === 'Success') {
									props.updatePropName('');
									props.updateAddress('');
									props.updateCity('');
									props.updateState('');
									props.updateZip(0);
									props.updateImageUrl('');
									props.updateMortgage(0);
									props.updateRent(0);
									props.history.push('/');
								}
							});
						}}
					>
						Complete
					</button>
				</DisplayHeader>
			</div>
		</div>
	</BodyDiv>
);

function mapStateToProps(currentState) {
	return currentState;
}

export default connect(mapStateToProps, {
	updatePropName,
	updateAddress,
	updateCity,
	updateState,
	updateZip,
	updateImageUrl,
	updateMortgage,
	updateRent
})(WizThree);

WizThree.propTypes = {
	propName: propTypes.string.isRequired,
	address: propTypes.string.isRequired,
	city: propTypes.string.isRequired,
	state: propTypes.string.isRequired,
	zip: propTypes.number.isRequired,
	imageUrl: propTypes.string.isRequired,
	rent: propTypes.number.isRequired,
	mortgage: propTypes.number.isRequired,

	updatePropName: propTypes.func.isRequired,
	updateAddress: propTypes.func.isRequired,
	updateCity: propTypes.func.isRequired,
	updateState: propTypes.func.isRequired,
	updateZip: propTypes.func.isRequired,
	updateImageUrl: propTypes.func.isRequired,
	updateMortgage: propTypes.func.isRequired,
	updateRent: propTypes.func.isRequired,

	history: propTypes.shape({
		push: propTypes.func.isRequired
	}).isRequired
};
