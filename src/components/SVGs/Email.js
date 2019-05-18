import React from 'react';
import PropTypes from 'prop-types';

const Email = ( { fillColor, height, width } ) => {
	return (
		<svg xmlns="https://www.w3.org/2000/svg" width={ width } height={ height } viewBox="0 0 20 20" aria-labelledby="title">
			<title id="title">Email icon</title>
			<path fill={ fillColor } d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79zm6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17-.3.41-.11.87.13 1.07z" />
		</svg>
	);
};

Email.propTypes = {
	fillColor: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

Email.defaultProps = {
	fillColor: '',
	width: 20,
	height: 20,
}

export default Email;
