import React from 'react';
import autobind from 'autobind-decorator';
import HeightPicker from './HeightPicker';

@autobind
class App extends React.Component {
	render() {
		return (
			<div className="app-container">
				<HeightPicker image={this.props.image} imageUrl={this.props.imageUrl}/>
			</div>
		);
	}
}

export default App;