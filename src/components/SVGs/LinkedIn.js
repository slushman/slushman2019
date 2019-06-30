import React from 'react';
import PropTypes from 'prop-types';

const LinkedIn = ( { height, width } ) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={ width } height={ height } viewBox="0 0 20 20" aria-labelledby="title">
			<title id="title">LinkedIn icon</title>
			<path d="M2.5 5C1 5 .1 4 .1 2.8.1 1.6 1.1.6 2.5.6c1.5 0 2.4 1 2.4 2.2C4.9 4 4 5 2.5 5zm2.1 14.4H.4V6.7h4.2v12.7zm15.3 0h-4.2v-6.8c0-1.7-.6-2.9-2.1-2.9-1.2 0-1.9.8-2.2 1.5-.1.3-.1.7-.1 1v7.1H6.9c.1-11.4 0-12.6 0-12.6h4.2v1.9c.6-.9 1.6-2.1 3.8-2.1 2.8 0 4.9 1.8 4.9 5.7v7.2z" />
		</svg>
	);
};

LinkedIn.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

LinkedIn.defaultProps = {
	width: 36,
	height: 36,
}

export default React.memo(LinkedIn);
