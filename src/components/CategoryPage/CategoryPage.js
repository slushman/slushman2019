import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/core';

import Layout from '../Layout';
import SEO from '../SEO';
import CategoryLink from '../CategoryLink';
import ImageCredit from '../ImageCredit';

import {
	categoryImage,
	contentWrap,
} from './category-page-styles';
import {
  imageWrap,
  postTitle,
} from '../BlogPost/blogpost-styles';
import headerImage from './ferdinand-stohr-NFs6dRTBgaM-unsplash.jpg';


const CategoryPage = ({ categories, title }) => (
	<Layout title={ title }>
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
			<ImageCredit
				account="fellowferdi"
				photographer="Ferdinand Stöhr"
			/>
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
);

CategoryPage.propTypes = {
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			fieldValue: PropTypes.string.isRequired,
			totalCount: PropTypes.number.isRequired,
		}).isRequired
	),
	title: PropTypes.string.isRequired,
}

export default React.memo(CategoryPage);
