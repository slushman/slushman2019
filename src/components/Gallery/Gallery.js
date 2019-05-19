import React from 'react';
import Image from 'gatsby-image';

import {
	galleryCaption,
	galleryFigure,
	galleryFigureModal,
	galleryGrid,
	galleryImage,
	galleryModalButton,
} from './gallery-styles';

const Gallery = ( { children } ) => {
	const [modalVisible, setModalVisible] = React.useState(false);
	const [modalImage, setModalImage] = React.useState(null);

	const openModal = React.useCallback(id => event => {
		setModalVisible( true );
		setModalImage( id );
	});

	const closeModal = React.useCallback(() => {
		setModalVisible( false );
		setModalImage( null );
	});

	return (
		<div css={ galleryGrid }>
			{children}
		</div>
	)
}

export default Gallery;
