import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import WizOne from './Wizard/WizOne';
import WizTwo from './Wizard/WizTwo';
import WizThree from './Wizard/WizThree';

const Routes = () => (
	<HashRouter>
		<Switch>
			<Route component={Dashboard} exact path="/" />
			<Route component={WizOne} path="/wizOne" />
			<Route component={WizTwo} path="/wizTwo" />
			<Route component={WizThree} path="/wizThree" />
		</Switch>
	</HashRouter>
);

export default Routes;
