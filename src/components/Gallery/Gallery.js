import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import GalleryImage from '../GalleryImage';

import { galleryGrid } from './gallery-styles';

const Gallery = ( {
	columns,
	images,
} ) => {
	if ( images.length < 1 ) return null;

	const figureStyles = css`
		${ galleryGrid }
		grid-template-columns: 1fr;

		@media screen and ( min-width: 550px) {
			grid-template-columns: 1fr 1fr;
		}

		@media screen and ( min-width: 800px) {
			grid-template-columns: ${ Array( columns ).fill( '1fr' ).join( ' ' ) };
		}	
	`;

	return (
		<figure css={ figureStyles }>
			{
				images.map( ( image, i ) => (
					<GalleryImage
						image={ image.node }
						key={ i }
					/>
				) )
			}
		</figure>
	)
}

Gallery.propTypes = {
	columns: PropTypes.number,
	images: PropTypes.array.isRequired,
};

Gallery.defaultProps = {
	columns: 3,
};

export default React.memo(Gallery);
