import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import SocialMenu from '../SocialMenu';

import {
	copyright,
	copyWrap,
	siteFooter,
	socialWrap,
} from './footer-styles';

const thisYear = new Date().getFullYear();

const Footer = ( { title } ) => (
	<footer css={ siteFooter }>
		<div css={ copyWrap }>
			<div css={ copyright } data-test="copyright">
				{
					`© ${ thisYear } ${ title }`
				}
			</div>
		</div>
		<div css={ socialWrap }>
			<SocialMenu />
		</div>
	</footer>
);

Footer.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Footer;
