import React from 'react';
import autobind from 'autobind-decorator';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');

@autobind
class ShareWidget extends React.Component {
	constructor() {
		super();
	}

	render() {
		var shareUrl = window.location.href;
		var title = `I just answered @smartereveryday's question, "Where does the gold become blue?" (Page by @thzinc) #GoldBecomesBlue`;
		return (
			<div className="share-widget">
				<h1>Share This!</h1>
				<div className="share-widget__some-network">
				  <FacebookShareButton
					url={shareUrl}
					title={title}
					className="share-widget__some-network__share-button">
					<FacebookIcon size={32} round={true} />
				  </FacebookShareButton>
				</div>

				<div className="share-widget__some-network">
				  <TwitterShareButton
					url={shareUrl}
					title={title}
					className="share-widget__some-network__share-button">
					<TwitterIcon size={32} round={true} />
				  </TwitterShareButton>
				</div>

				<div className="share-widget__some-network">
				  <GooglePlusShareButton
					url={shareUrl}
					className="share-widget__some-network__share-button">
					<GooglePlusIcon size={32} round={true} />
				  </GooglePlusShareButton>
				</div>
			</div>
		);
	}
}

export default ShareWidget;