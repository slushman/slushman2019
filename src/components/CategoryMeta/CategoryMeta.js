import React from 'react';
import { Link } from 'gatsby';

import useSlugify from '../../hooks/UseSlugify';

import {
	categoryLinks,
} from './category-meta-styles';

const CategoryMeta = ( { categories } ) => {
	console.log( categories );
	return (
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
}

export default CategoryMeta;