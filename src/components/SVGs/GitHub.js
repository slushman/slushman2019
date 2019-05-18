import React from 'react';
import PropTypes from 'prop-types';

const GitHub = ( { fillColor, height, width } ) => {
	return (
		<svg xmlns="https://www.w3.org/2000/svg" width={ width } height={ height } viewBox="0 0 20 20" aria-labelledby="title">
			<title id="title">Github icon</title>
			<path fill={ fillColor } d="M19.5 10.2c0 2.1-.6 3.9-1.8 5.6-1.2 1.7-2.8 2.8-4.7 3.4-.2 0-.4 0-.5-.1-.1-.1-.2-.2-.2-.4v-2.6c0-.8-.2-1.4-.6-1.8.5 0 .9-.1 1.3-.2s.8-.3 1.2-.5c.4-.2.7-.5 1-.8.3-.3.5-.8.7-1.3s.3-1.2.3-1.9c0-1-.3-1.8-1-2.5.3-.8.3-1.6-.1-2.5-.2-.1-.6 0-1 .1-.4.2-.8.3-1.1.5l-.5.3c-.8-.2-1.6-.3-2.4-.3s-1.7.2-2.5.4c-.1 0-.3-.2-.5-.3l-1-.5c-.4-.2-.9-.2-1.1-.1-.4.9-.4 1.7-.1 2.5-.7.7-1 1.6-1 2.5 0 .7.1 1.3.3 1.9.2.5.4 1 .6 1.3s.6.6 1 .8c.4.2.8.4 1.2.5.4.1.8.2 1.3.2-.3.3-.5.7-.6 1.3-.2.1-.4.1-.6.2s-.4.1-.7.1-.5-.1-.8-.3c-.3-.2-.5-.4-.7-.8-.2-.3-.4-.5-.6-.6s-.4-.3-.6-.3h-.2c-.2 0-.3 0-.4.1s-.1 0-.1 0c0 .1.1.1.1.2s.1.1.2.1l.1.1c.2.1.4.2.5.5.2.2.3.4.4.6l.1.3c.1.3.3.6.5.8.3.2.6.3.9.3s.6.1.9.1h1v1.8c0 .1-.1.3-.2.4-.1.1-.3.1-.5.1-1.9-.6-3.5-1.8-4.7-3.4S.5 12.5.5 10.4c0-1.7.4-3.3 1.3-4.8s2-2.6 3.5-3.5S8.3.8 10.1.8s3.3.4 4.8 1.3 2.6 2 3.5 3.5 1.1 2.9 1.1 4.6z" />
		</svg>
	);
};

GitHub.propTypes = {
	fillColor: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

GitHub.defaultProps = {
	fillColor: '',
	width: 20,
	height: 20,
}

export default GitHub;
