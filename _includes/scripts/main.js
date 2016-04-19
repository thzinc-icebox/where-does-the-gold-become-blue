import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Router } from 'react-router';
import { createHashHistory } from 'history';

import NotFound from './components/NotFound';
import App from './components/App';
import Result from './components/Result';

let image = "where-does-the-gold-become-blue";
let imageUrl = "assets/where-does-the-gold-become-blue.jpg";

class AppComponent extends React.Component {
	render() {
		return <App image={image} imageUrl={imageUrl}/>;
	}
}

class ResultComponent extends React.Component {
	render() {
		return <Result image={image} imageUrl={imageUrl}/>;
	}
}

let routes = (
	<Router history={createHashHistory()}>
		<Route path="/" component={AppComponent} />
		<Route path="/result" component={ResultComponent}/>
		<Route path="*" component={NotFound} />
	</Router>
);

ReactDOM.render(routes, document.querySelector('#main'));