import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../Layout';
import Post from '../Post';
import SEO from '../SEO';

import { postsWrap } from './blog-index-styles';

const BlogIndex = ( { location, posts, siteTitle } ) => (
	<Layout location={ location } title={ siteTitle }>
		<SEO
			title="All posts"
			keywords={ [ `blog`, `gatsby`, `javascript`, `react` ] }
		/>
		<div css={ postsWrap }>
			{ posts.map( ( { node } ) => (
				<Post
					date={ node.frontmatter.date }
					excerpt={ node.excerpt }
					image={ node.frontmatter.featuredImage }
					key={ node.fields.slug }
					slug={ node.fields.slug }
					title={ node.frontmatter.title || node.fields.slug }
				/>
			)
			) }
		</div>
	</Layout>
);

BlogIndex.propTypes = {
	location: PropTypes.object.isRequired,
	posts: PropTypes.array.isRequired,
	siteTitle: PropTypes.string.isRequired,
};

export default React.memo(BlogIndex);
