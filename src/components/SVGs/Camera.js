import React from 'react';
import PropTypes from 'prop-types';

const Camera = ( { height, width } ) => {
	return (
		<svg
			aria-labelledby="title"
			height={ height }
			viewBox="0 0 32 32"
			width={ width }
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>Unsplash Camera icon</title>
			<path 
				d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"
			/>
		</svg>
	);
};

Camera.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

Camera.defaultProps = {
	width: 36,
	height: 36,
}

export default React.memo(Camera);
