import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import { rhythm } from '../../utils/typography';

const Post = ( { date, excerpt, slug, title } ) => (
	<div key={ slug }>
		<h2
			css={ css`
				margin-bottom: 0;
			` }
		>
			<Link 
				css={ css`
					box-shadow: none;
				` }
				to={ slug }
			>
				{ title }
			</Link>
		</h2>
		<small data-test="postDate">{ date }</small>
		<p data-test="postExcerpt" dangerouslySetInnerHTML={ { __html: excerpt } } />
	</div>
);

Post.propTypes = {
	date: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Post;
