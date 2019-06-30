import React from 'react';
import PropTypes from 'prop-types';
import ImageZoom from 'react-medium-image-zoom';

import ThemeContext from '../../context/ThemeContext';
import {
	galleryFigure,
} from './gallery-image-styles';

const GalleryImage = ( { image } ) => {
	const themeContext = React.useContext( ThemeContext );
	const overlayColor = themeContext.theme === 'dark' ? 'rgba( 255, 255, 255, 0.8 )' : 'rgba( 2, 52, 81, 0.8 )';

	return(
		<ImageZoom
			css={ galleryFigure }
			defaultStyles={{
				overlay: { backgroundColor: overlayColor }
			}}
			image={{
				alt: image.name,
				'aria-label': image.name,
				src: image.childImageSharp.fluid.src,
				style: {
					display: 'block',
					margin: '0',
					transition: 'filter 0.3s',
					verticalAlign: 'middle',
					width: '100%',
				}
			}}
		/>
	)
};

GalleryImage.propTypes = {
	image: PropTypes.object.isRequired,
};

export default React.memo(GalleryImage);
