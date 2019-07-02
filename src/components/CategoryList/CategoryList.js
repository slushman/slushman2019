import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Layout from '../Layout';
import Post from '../../components/Post';
import SEO from '../SEO';
import { postsWrap } from '../BlogIndex/blog-index-styles';
import {
	categoryHeader,
	categoryTitle,
	viewCategories,
} from './category-list-styles';

const CategoryList = ( { category, location, posts, siteTitle, total } ) => {
	const plural = total === 1 ? '' : 's';
  const categoryName = `${ category } post${ plural }`;

  return (
		<Layout isPost={ true } location={ location } title={ siteTitle }>
			<section css={ categoryHeader }>
				<h1 css={ categoryTitle }>{ categoryName }</h1>
			</section>
			<div css={ postsWrap }>
				{ posts.map( ( { node } ) => {
					return (
						<Post
							date={ node.frontmatter.date }
							excerpt={ node.excerpt }
							image={ node.frontmatter.featuredImage }
							key={ node.fields.slug }
							slug={ node.fields.slug }
							title={ node.frontmatter.title || node.fields.slug }
						/>
					)
				} ) }
			</div>
			<h2 css={ viewCategories }>
				<Link to="/category">View all categories</Link>
			</h2>
 		</Layout>
  )
};

CategoryList.propTypes = {
	category: PropTypes.string.isRequired,
	location: PropTypes.object.isRequired,
	posts: PropTypes.arrayOf(
		PropTypes.shape( {
			node: PropTypes.shape( {
				frontmatter: PropTypes.shape( {
					date: PropTypes.string.isRequired,
					title: PropTypes.string.isRequired,
				} ),
				fields: PropTypes.shape( {
					slug: PropTypes.string.isRequired,
				} ),
			} ),
		} ).isRequired
	),
	siteTitle: PropTypes.string.isRequired,
	total: PropTypes.number.isRequired,
};

export default React.memo(CategoryList);
