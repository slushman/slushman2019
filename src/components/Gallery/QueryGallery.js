import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Gallery from './Gallery';

/**
 * https://noahgilmore.com/blog/easy-gatsby-image-components/
 */
const QueryGallery = ( { columns, folder } ) => {
	const data = useStaticQuery( fileQuery );
	const images = data.images.edges.filter( (image) => {
		return image.node.relativePath.indexOf( `gallery-${ folder }` ) > 0;
	} );

	if ( images.length < 1 ) return null;

  return (
		<Gallery
			columns={ columns }
			images={ images }
		/>
  )
};

const fileQuery = graphql`
	query {
		images: allFile {
			edges {
				node {
					relativePath
					name
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
							originalImg
						}
					}
				}
			}
		}
	}
`;

QueryGallery.propTypes = {
	columns: PropTypes.number,
	folder: PropTypes.string.isRequired,
};

QueryGallery.defaultprops = {
	columns: 3,
};

export default QueryGallery;
