import React from 'react';
import PropTypes from 'prop-types';

const Pinterest = ( { height, width } ) => (
	<svg data-icon="pinterest" xmlns="https://www.w3.org/2000/svg" width={ width } height={ height } viewBox="0 0 20 20" aria-labelledby="title">
		<title id="title">Pinterest icon</title>
		<path d="M10.5.1c3.7 0 7.1 2.6 7.1 6.5 0 3.7-1.9 7.8-6.1 7.8-1 0-2.2-.5-2.7-1.4-.9 3.6-.8 4.1-2.8 6.8l-.2.1-.1-.1c-.1-.7-.2-1.5-.2-2.2 0-2.4 1.1-5.9 1.7-8.3-.3-.6-.4-1.3-.4-2 0-1.2.8-2.7 2.2-2.7 1 0 1.5.8 1.5 1.7 0 1.5-1 3-1 4.5 0 1 .8 1.7 1.8 1.7 2.7 0 3.6-3.9 3.6-6 0-2.8-2-4.3-4.7-4.3C7 2.1 4.6 4.3 4.6 7.5c0 1.5.9 2.3.9 2.7 0 .3-.2 1.4-.6 1.4h-.2C3 11 2.4 8.8 2.4 7.2c0-4.4 4-7.1 8.1-7.1z" />
	</svg>
);

Pinterest.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
};

Pinterest.defaultProps = {
	height: 36,
	width: 36,
}

export default Pinterest;
