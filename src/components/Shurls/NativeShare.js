import React from 'react';
import PropTypes from 'prop-types';

import Share from './Share';
import { shareButton } from './shurls-styles';

const NativeShare = ( { shareText, shareTitle, shareUrl } ) => {
	const handleClick = () => {
		navigator
			.share({
				text: shareText,
				title: shareTitle,
				url: shareUrl
			})
			.then(() => {
				console.log('Thanks for sharing!');
			})
			.catch(console.error);
	};

	return (
		<button
			css={ shareButton }
			onClick={ handleClick }
		>
			<Share /> Share
		</button>
	)
}

NativeShare.propTypes = {
	shareText: PropTypes.string,
	shareTitle: PropTypes.string,
	shareUrl: PropTypes.string,
};

NativeShare.defaultProps = {
	shareText: '',
	shareTitle: '',
	shareUrl: '',
};

export default React.memo(NativeShare);
