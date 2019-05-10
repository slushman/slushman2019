import React from 'react';
import PropTypes from 'prop-types';

const Stumbleupon = ( { height, width } ) => (
	<svg data-icon="stumbleupon" xmlns="https://www.w3.org/2000/svg" width={ width } height={ height } viewBox="0 0 20 20" aria-labelledby="title">
		<title id="title">Stumbleupon icon</title>
		<path d="M11.1 6.9c0-.6-.5-1.1-1.1-1.1s-1.1.5-1.1 1.1v6.3c0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4v-2.7h3.4v2.7c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1V6.7c0-2.4 2-4.3 4.4-4.3 2.4 0 4.4 1.9 4.4 4.3v1.4l-2 .6-1.4-.6V6.9zm8.8 3.5v2.7c0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4v-2.8l1.4.6 2-.6v2.8c0 .6.5 1 1.1 1 .6 0 1.1-.5 1.1-1v-2.8h3.2z" />
	</svg>
);

Stumbleupon.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
};

Stumbleupon.defaultProps = {
	height: 36,
	width: 36,
}

export default Stumbleupon;
