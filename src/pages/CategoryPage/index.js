import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/core';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CategoryLink from '../../components/CategoryLink';

import {
	categoryImage,
	contentWrap,
} from './category-page-styles';
import {
  imageWrap,
  postTitle,
} from '../../components/BlogPost/blogpost-styles';
import headerImage from './ferdinand-stohr-NFs6dRTBgaM-unsplash.jpg';


const CategoryPage = ({ categories, title }) => (
	<Layout location={ location } title={ title }>
		<SEO
			title="All categories"
			keywords={ [ `blog`, `gatsby`, `javascript`, `react` ] }
		/>
		<Helmet title={ title } />
		<section css={css`
			${ categoryImage }
			${ imageWrap }
			background-image:  url( ${ headerImage } );
		`}>
			<h1 css={ postTitle }>Categories</h1>
		</section>
		<div css={ contentWrap }>
			<ul>
				{ categories.map( (category, index) => (
					<CategoryLink
						key={ index }
						total={ category.totalCount }
						value={ category.fieldValue }
					/>
				) ) }
			</ul>
		</div>
	</Layout>
)

CategoryPage.propTypes = {
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			fieldValue: PropTypes.string.isRequired,
			totalCount: PropTypes.number.isRequired,
		}).isRequired
	),
	title: PropTypes.string.isRequired,
}

export default CategoryPage;
