import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updateImageUrl } from '../../Redux/Reducer';
import BodyDiv from './WizardBody';
import InputGroup from './InputGroup';
import DisplayHeader from './WizardHeader';

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
					<div>
						<h4>Image Url</h4>
						<input
							type="text"
							name="propName"
							id="PropName"
							value={props.imageUrl}
							style={{ width: '25%' }}
							onChange={e => props.updateImageUrl(e.target.value)}
						/>
					</div>
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
