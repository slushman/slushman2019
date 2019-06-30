import React from 'react';
import PropTypes from 'prop-types';

const Facebook = ( { height, width } ) => {
	return (
		<svg xmlns="https://www.w3.org/2000/svg" width={ width } height={ height } viewBox="0 0 20 20" aria-labelledby="title">
			<title id="title">Facebook icon</title>
			<path d="M8.46 18h2.93v-7.3h2.45l.37-2.84h-2.82V6.04c0-.82.23-1.38 1.41-1.38h1.51V2.11c-.26-.03-1.15-.11-2.19-.11-2.18 0-3.66 1.33-3.66 3.76v2.1H6v2.84h2.46V18z" />
		</svg>
	);
};

Facebook.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

Facebook.defaultProps = {
	width: 36,
	height: 36,
}

export default React.memo(Facebook);
