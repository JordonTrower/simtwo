import React from 'react';
import styled from 'styled-components';
import TimesCircle from 'react-icons/lib/fa/times-circle';
import propTypes from 'prop-types';

const HouseContainer = styled.div`
	background: #dedede;
	display: flex;
	height: 150px;
	justify-content: space-between;
	margin-bottom: 25px;
	> * {
		width: 25%;
	}
	> div {
		display: flex;
		flex-direction: column;
		> p {
			padding: 3px 25px;
			margin: 0;
		}
	}
	> svg {
		display: flex;
		justify-content: flex-end;
	}
`;

const HouseBlock = props => (
	<HouseContainer key={props.id}>
		<img src={props.img} alt={props.name} />
		<div>
			<p>{`Property Name: ${props.name}`}</p>
			<p>{`Address: ${props.address}`}</p>
			<p>{`City: ${props.city}`}</p>
			<p>{`State: ${props.state}`}</p>
			<p>{`Zip: ${props.zip}`}</p>
		</div>
		<div>
			<p>{`Monthly Mortgage: ${props.mortgage}`}</p>
			<p>{`Desired Rent: ${props.rent}`}</p>
		</div>
		<TimesCircle
			id={props.id}
			size={30}
			onClick={() => props.deleteListing(props.id)}
		/>
	</HouseContainer>
);

HouseBlock.propTypes = {
	name: propTypes.string.isRequired,
	address: propTypes.string.isRequired,
	city: propTypes.string.isRequired,
	state: propTypes.string.isRequired,
	img: propTypes.string.isRequired,
	zip: propTypes.number.isRequired,
	mortgage: propTypes.string.isRequired,
	rent: propTypes.string.isRequired,
	deleteListing: propTypes.func.isRequired,
	id: propTypes.number.isRequired
};

export default HouseBlock;
