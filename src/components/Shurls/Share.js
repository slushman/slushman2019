import React from 'react';
import PropTypes from 'prop-types';

const Share = ( { height, width } ) => (
	<svg id="share-icon" viewBox="0 0 24 24" width={ width } height={ height } fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-labelledby="title">
		<title id="title">Share icon</title>
		<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
		<polyline points="16 6 12 2 8 6"></polyline>
		<line x1="12" y1="2" x2="12" y2="15"></line>
	</svg>
);

Share.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
};

Share.defaultProps = {
	height: 36,
	width: 36,
}

export default React.memo(Share);
