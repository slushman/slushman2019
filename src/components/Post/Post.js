import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import {
	postHeading2,
	postLink,
	postWrap,
} from './post-styles';

const Post = ( { date, excerpt, slug, title } ) => (
	<article css={ postWrap } key={ slug }>
		<h2 css={ postHeading2 }>
			<Link 
				css={ postLink }
				to={ slug }
			>
				{ title }
			</Link>
		</h2>
		<small data-test="postDate">{ date }</small>
		<p data-test="postExcerpt" dangerouslySetInnerHTML={ { __html: excerpt } } />
	</article>
);

Post.propTypes = {
	date: PropTypes.string.isRequired,
	excerpt: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Post;
