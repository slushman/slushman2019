import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

import {
	postHeading2,
	postImage,
	postLink,
	postWrap,
} from './post-styles';

const Post = ( { date, excerpt, image, slug, title } ) => (
	<article css={ postWrap } key={ slug }>
		<Image css={ postImage } sizes={ image.childImageSharp.sizes } />
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
	image: PropTypes.object.isRequired,
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default React.memo(Post);
