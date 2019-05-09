import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Title = ( { title } ) => (
	<Link
		css={ css`
			box-shadow: none;
			color: inherit;
			text-decoration: none;
		` }
		to={ `/` }
	>
		{ title }
	</Link>
);

Title.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Title;
