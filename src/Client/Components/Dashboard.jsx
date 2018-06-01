import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import HouseBlock from './houseBlock';

const BodyDiv = styled.div`
	width: 100%;
	height: 100%;
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
		height: 100%;
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
		background: #8aea92;
		color: black;
		height: 30px;
		margin-top: 28px;
		border: 0;
		font-weight: bold;
		font-size: 18px;
		text-decoration: none;
		padding: 5px;
	}
	border-bottom: black 1px solid;
`;

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			houses: []
		};
		this.deleteListing = this.deleteListing.bind(this);
	}

	componentDidMount() {
		axios
			.get('/api/houses')
			.then(res => this.setState({ houses: res.data }));
	}

	deleteListing(id) {
		axios.delete(`/api/houses/${id}`).then(res => {
			this.setState({
				houses: res.data
			});
		});
	}

	render() {
		return (
			<BodyDiv>
				<div className="houses-display">
					<div className="container">
						<DisplayHeader>
							<h1>Dashboard</h1>

							<Link to="/wizOne">Add new Property</Link>
						</DisplayHeader>

						<h2>Home Listings</h2>
						{this.state.houses.map(home => (
							<HouseBlock
								key={home.id}
								{...home}
								deleteListing={this.deleteListing}
							/>
						))}
					</div>
				</div>
			</BodyDiv>
		);
	}
}

export default Dashboard;
