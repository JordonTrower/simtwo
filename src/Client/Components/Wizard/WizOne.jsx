import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	updatePropName,
	updateAddress,
	updateCity,
	updateState,
	updateZip
} from '../../Redux/Reducer';

const BodyDiv = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-content: center;
	justify-content: center;

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

const WizOne = props => (
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
					<h4>PropertyName</h4>
					<input
						type="text"
						name="propName"
						id="PropName"
						value={props.propName}
						style={{ width: '25%' }}
						onChange={e => props.updatePropName(e.target.value)}
					/>
					<h4>Address</h4>
					<input
						type="text"
						name="address"
						id="address"
						value={props.address}
						style={{ width: '50%' }}
						onChange={e => props.updateAddress(e.target.value)}
					/>
					<div style={{ display: 'flex' }}>
						<InputGroup>
							<h4>City</h4>
							<input
								type="text"
								name="city"
								id="city"
								value={props.city}
								style={{ width: '50%' }}
								onChange={e => props.updateCity(e.target.value)}
							/>
						</InputGroup>
						<InputGroup>
							<h4>State</h4>
							<input
								type="text"
								name="state"
								id="state"
								value={props.state}
								style={{ width: '35%' }}
								onChange={e =>
									props.updateState(e.target.value)
								}
							/>
						</InputGroup>
						<InputGroup>
							<h4>Zip</h4>
							<input
								type="number"
								name="zip"
								id="zip"
								value={props.zip}
								style={{ width: '45%' }}
								onChange={e => props.updateZip(e.target.value)}
							/>
						</InputGroup>
					</div>
					<DisplayHeader>
						<Link className="previous" to="/wizTwo">
							Previous Step
						</Link>
						<Link className="next" to="/wizTwo">
							Continue
						</Link>
					</DisplayHeader>
				</InputGroup>
			</div>
		</div>
	</BodyDiv>
);

function mapStateToProps(currentState) {
	const { propName, address, city, state, zip } = currentState;

	return { propName, address, city, state, zip };
}

export default connect(mapStateToProps, {
	updatePropName,
	updateAddress,
	updateCity,
	updateState,
	updateZip
})(WizOne);

WizOne.propTypes = {
	propName: propTypes.string.isRequired,
	address: propTypes.string.isRequired,
	city: propTypes.string.isRequired,
	state: propTypes.string.isRequired,
	zip: propTypes.number.isRequired,
	updatePropName: propTypes.func.isRequired,
	updateAddress: propTypes.func.isRequired,
	updateCity: propTypes.func.isRequired,
	updateState: propTypes.func.isRequired,
	updateZip: propTypes.func.isRequired
};
