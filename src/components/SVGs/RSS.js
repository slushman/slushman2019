import React from 'react';
import PropTypes from 'prop-types';

const RSS = ( { fillColor, height, width } ) => {
	return (
		<svg
			aria-labelledby="title"
			height={ height }
			viewBox="0 0 32 32"
			width={ width }
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>RSS icon</title>
			<path 
				fill={ fillColor }
				d="M14.92 18H18C18 9.32 10.82 2.25 2 2.25v3.02c7.12 0 12.92 5.71 12.92 12.73zm-5.44 0h3.08C12.56 12.27 7.82 7.6 2 7.6v3.02c2 0 3.87.77 5.29 2.16A7.292 7.292 0 0 1 9.48 18zm-5.35-.02c1.17 0 2.13-.93 2.13-2.09 0-1.15-.96-2.09-2.13-2.09-1.18 0-2.13.94-2.13 2.09 0 1.16.95 2.09 2.13 2.09z"
			/>
		</svg>
	);
};

RSS.propTypes = {
	fillColor: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

RSS.defaultProps = {
	fillColor: '',
	width: 20,
	height: 20,
}

export default RSS;
