import React from 'react';
import { Link } from 'gatsby';

import useSlugify from '../../hooks/UseSlugify';

import {
	categoryLinks,
} from './category-meta-styles';

const CategoryMeta = ( { categories } ) => (
	<ul css={ categoryLinks }>
		{ categories.map( (category, index) => {
			const slug = useSlugify(category);
			const showSeparator = index === (categories.length - 1) ? '' : ', ';
			return (
				<li data-test="categoryLinkItem" key={ index }>
					<Link data-test="categoryLink" to={ `/category/${ slug }` }>{ category }</Link>{ showSeparator }
				</li>
			)
		} ) }
	</ul>
)

export default React.memo(CategoryMeta);
