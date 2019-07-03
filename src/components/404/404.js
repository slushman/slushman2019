import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Layout from '../Layout';
import SEO from '../SEO';
import ImageCredit from '../ImageCredit';
import Post from '../Post';
import { contentWrap } from './404-styles';
import { contentWidth } from '../Layout/GlobalStyles';
import { categoryImage } from '../CategoryPage/category-page-styles';
import { postsWrap } from '../BlogIndex/blog-index-styles';
import {
  imageWrap,
  postTitle,
  postWrap,
} from '../BlogPost/blogpost-styles';
import headerImage from './benjamin-elliott-vc9u77c0LO4-unsplash.jpg';

const NotFoundPage = ( { posts } ) => {
  const title = '404: Not Found';
  return (
    <Layout title={ title }>
      <SEO title={ title } />
      <section css={css`
        ${ categoryImage }
        ${ imageWrap }
        background-image:  url( ${ headerImage } );
      `}>
        <h1 css={ postTitle }>Content Not Found</h1>
        <ImageCredit
          account="benjaminjohnelliott"
          photographer="Benjamin Elliott"
        />
      </section>
      <div css={ [contentWidth, contentWrap, postWrap] }>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <h2>Maybe try one of these:</h2>
      </div>
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
    </Layout>
  )
};

NotFoundPage.propTypes = {
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
};

export default React.memo(NotFoundPage);
