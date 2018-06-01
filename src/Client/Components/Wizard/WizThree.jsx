import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import InputGroup from './InputGroup';
import DisplayHeader from './WizardHeader';
import BodyDiv from './WizardBody';
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
					<div>
						<h4>Monthly Mortgage Amount</h4>
						<input
							type="number"
							name="propName"
							id="PropName"
							value={props.mortgage}
							style={{ width: '50%' }}
							onChange={e => props.updateMortgage(e.target.value)}
						/>

						<h4>Desired Monthly Rent</h4>
						<input
							type="number"
							name="propName"
							id="PropName"
							value={props.rent}
							style={{ width: '50%' }}
							onChange={e => props.updateRent(e.target.value)}
						/>
					</div>
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
								axios
									.post('/api/houses', dataToSend)
									.then(res => {
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
				</InputGroup>
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
