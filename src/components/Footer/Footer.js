import React from 'react';
import PropTypes from 'prop-types';

import SocialMenu from '../SocialMenu';

import {
	copyright,
	siteFooter,
} from './footer-styles';

const thisYear = new Date().getFullYear();

const Footer = ( { title } ) => (
	<footer css={ siteFooter }>
		<SocialMenu />
		<div css={ copyright } data-test="copyright">
			{
				`© ${ thisYear } ${ title }`
			}
		</div>
	</footer>
);

Footer.propTypes = {
	title: PropTypes.string.isRequired,
};

export default React.memo(Footer);
