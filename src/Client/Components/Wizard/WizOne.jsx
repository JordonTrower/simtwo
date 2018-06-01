import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BodyDiv from './WizardBody';
import InputGroup from './InputGroup';
import DisplayHeader from './WizardHeader';
import {
	updatePropName,
	updateAddress,
	updateCity,
	updateState,
	updateZip
} from '../../Redux/Reducer';

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
					<div>
						<h4>Property Name</h4>
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
									onChange={e =>
										props.updateCity(e.target.value)
									}
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
									onChange={e =>
										props.updateZip(e.target.value)
									}
								/>
							</InputGroup>
						</div>
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
