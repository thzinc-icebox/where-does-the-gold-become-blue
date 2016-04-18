import React from 'react';
import autobind from 'autobind-decorator';
import Rebase from 're-base';
import ShareWidget from './ShareWidget';

let base = Rebase.createClass('https://where-does-the-gold.firebaseio.com/');

@autobind
class HeightPicker extends React.Component {
	constructor() {
		super();

		this.state= {
			height: 50,
			isSubmitting: false,
			isSubmitted: false,
		};
	}

	setBar() {
		this.state.height = this.refs.height.value;
		this.setState({height: this.state.height});
	}

	submitHeight(event) {
		event.preventDefault();

		this.state.isSubmitting = true;
		this.setState({isSubmitting: this.state.isSubmitting});

		var self = this;
		base.push(`images/${this.props.image}`, {
			data: {
				timestamp: new Date().getTime(),
				height: this.state.height
			},
			then() {
				self.state.isSubmitted = true;
				self.state.isSubmitting = false;
				self.setState({
					isSubmitted: self.state.isSubmitted,
					isSubmitting: self.state.isSubmitting
				});
			}
		});
	}

	reset() {
		this.state.isSubmitted = false;
		this.setState({
			isSubmitted: this.state.isSubmitted
		});
	}

	renderShareInfo() {
		if (!this.state.isSubmitted) return;

		return (
			<div class="share-social">
				<ShareWidget/>
				<button className="share-social__submit" onClick={this.reset}>
					Submit Another Choice
				</button>
			</div>
		);
	}

	renderPicker() {
		if (this.state.isSubmitted) return;

		return (
				<div class="height-picker__picker">
					<div className="height-picker__display">
						<div
							className="height-picker__display__bar"
							style={{ top: `${this.state.height}%` }} />
						<img
							className="height-picker__display__image"
							src={this.props.imageUrl}
							alt={this.props.image} />
					</div>
					<div>
						<form onSubmit={this.submitHeight}>
							<label className="height-picker__slider-label">
								Choose where the gold ends and blue begins
							</label>
							<input
								ref="height"
								type="range"
								className="height-picker__slider"
								min="0"
								max="100"
								step="0.1"
								onChange={this.setBar} />
							<button type="submit" className="height-picker__submit" disabled={this.state.isSubmitting}>
								Submit Your Choice
							</button>
						</form>
					</div>
				</div>
			);
	}

	render() {
		return (
			<div className="height-picker">
				{this.renderShareInfo()}
				{this.renderPicker()}
			</div>
		);
	}
}

export default HeightPicker;