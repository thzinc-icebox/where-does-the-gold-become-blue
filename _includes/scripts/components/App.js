import React from 'react';
import autobind from 'autobind-decorator';
import HeightPicker from './HeightPicker';

@autobind
class App extends React.Component {
	render() {
		return (
			<div className="app-container">
				<HeightPicker image="where-does-the-gold-become-blue" imageUrl="assets/where-does-the-gold-become-blue.jpg"/>
			</div>
		);
	}
}

export default App;