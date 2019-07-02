import React from 'react';
import PropTypes from 'prop-types';

import {
	creditLink,
  imageIcon,
  imagePhotographer,
} from './image-credit-styles';

const ImageCredit = ( { account, photographer } ) => {
	return (
		<a css={ creditLink } data-test="imageLink" href={ `https://unsplash.com/@${ account }?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge` } target="_blank" rel="noopener noreferrer" title={ `Download free do whatever you want high-resolution photos from ${ photographer }` }>
			<span css={ imagePhotographer }>
				<svg xmlns="http://www.w3.org/2000/svg" css={ imageIcon } viewBox="0 0 32 32">
					<title>unsplash-logo</title>
					<path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
				</svg>
			</span>
			<span css={ imagePhotographer } data-test="photographer">{ photographer }</span>
		</a>
	)
}

ImageCredit.propTypes = {
	account: PropTypes.string.isRequired,
	photographer: PropTypes.string.isRequired,
};

export default React.memo(ImageCredit);
