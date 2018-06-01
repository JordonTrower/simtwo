import React from 'react';
import { Provider } from 'react-redux';

import Header from './Header';
import Routes from './Routes';
import store from './Store';
import './App.css';

const App = () => (
	<Provider store={store} style={{ height: '100%' }}>
		<div>
			<Header />
			<Routes />
		</div>
	</Provider>
);

export default App;
