import React from 'react';
import autobind from 'autobind-decorator';
import Rebase from 're-base';
import ShareWidget from './ShareWidget';
import { History } from 'react-router';
import reactMixin from 'react-mixin';

let base = Rebase.createClass('https://where-does-the-gold.firebaseio.com/');

@autobind
class Result extends React.Component {
	constructor() {
		super();

		this.state= {
			image: {},
			loaded: false,
		};
	}

	componentDidMount() {
		this.ref = base.bindToState(`images/${this.props.image}`, {
			context: this,
			state: 'image'
		})

		this.setState('loaded', this.state.loaded = true);
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	goToPicker(event) {
		event.preventDefault();

		this.history.pushState(null, '/');
	}

	getImages() {
		return Object.keys(this.state.image)
			.filter(key => this.state.image[key].height != 50)
			.map(key => {
				return {
					key: key,
					value: this.state.image[key]
				};
			});
	}

	renderBars() {
		return this.getImages()
			.map(x => (
					<div
						key={x.key}
						className="result__display__bar"
						style={{ top: `${x.value.height}%` }} />
			));
	}

	render() {
		var subheader = this.state.loaded ? (
			<h2>
				Wow! There were {this.getImages().length} responses to this question!
			</h2>
		) : <em>Loading...</em>;

		return (
			<div className="result">
				<h1>So where does gold become blue?</h1>
				{subheader}
				<p>
					Each response has been shown as a semi-transparent line.
					The lightest areas are where most people think the gold becomes blue.
				</p>
				<div className="result__display">
					{this.renderBars()}
					<img
						className="result__display__image"
						src={this.props.imageUrl}
						alt={this.props.image} />
				</div>
				<ShareWidget/>
				<button className="result__submit" onClick={this.goToPicker}>
					Submit Another Response
				</button>
			</div>
		);
	}
}

reactMixin.onClass(Result, History);

export default Result;