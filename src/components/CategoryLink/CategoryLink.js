import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import useSlugify from '../../hooks/UseSlugify';

const CategoryLink = ( { total, value } ) => {
	const maybeCaps = total === 1 ? 'Post' : 'Posts';
	return (
		<li key={ value }>
			<Link data-test="categoryLink" to={ `/category/${ useSlugify( value ) }/` }>
				{ value } - { total } { maybeCaps }
			</Link>
		</li>
	)
}

CategoryLink.propTypes = {
	total: PropTypes.number.isRequired,
	value: PropTypes.string.isRequired,
}

export default React.memo(CategoryLink);
