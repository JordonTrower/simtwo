const initialState = {
	propName: '',
	address: '',
	city: '',
	state: '',
	zip: 0,
	imageUrl: '',
	mortgage: 0,
	rent: 0
}

const UPDATE_PROP_NAME = 'UPDATE_PROP_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMAGE_URL = 'UPDATE_IMAGE_URL';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';


function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_PROP_NAME:
			return Object.assign({}, state, {
				propName: action.payload
			});

		case UPDATE_ADDRESS:
			return Object.assign({}, state, {
				address: action.payload
			});

		case UPDATE_CITY:
			return Object.assign({}, state, {
				city: action.payload
			});

		case UPDATE_STATE:
			return Object.assign({}, state, {
				state: action.payload
			})

		case UPDATE_ZIP:
			return Object.assign({}, state, {
				zip: action.payload
			})

		case UPDATE_IMAGE_URL:
			return Object.assign({}, state, {
				imageUrl: action.payload
			})

		case UPDATE_MORTGAGE:
			return Object.assign({}, state, {
				mortgage: action.payload
			})

		case UPDATE_RENT:
			return Object.assign({}, state, {
				rent: action.payload
			})

		default:
			return state;
	}
}

export function updatePropName(name) {
	return {
		type: UPDATE_PROP_NAME,
		payload: name
	};
}

export function updateAddress(address) {
	return {
		type: UPDATE_ADDRESS,
		payload: address
	};
}

export function updateCity(city) {
	return {
		type: UPDATE_CITY,
		payload: city
	};
}

export function updateState(state) {
	return {
		type: UPDATE_STATE,
		payload: state
	};
}

export function updateZip(zip) {
	return {
		type: UPDATE_ZIP,
		payload: zip
	};
}

export function updateImageUrl(image) {
	return {
		type: UPDATE_IMAGE_URL,
		payload: image
	};
}

export function updateMortgage(mortgage) {
	return {
		type: UPDATE_MORTGAGE,
		payload: mortgage
	};
}

export function updateRent(rent) {
	return {
		type: UPDATE_RENT,
		payload: rent
	};
}


export default reducer