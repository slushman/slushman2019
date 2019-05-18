import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import { contentWidth } from '../Layout/layout-styles';
const thisYear = new Date().getFullYear();
import {
	copyright,
	siteFooter,
	socialWrap,
} from './footer-styles';
import SocialMenu from '../SocialMenu';

const Footer = ( { title } ) => (
	<footer css={ siteFooter }>
		<div
			css={ css`
				${ contentWidth }
			` }
		>
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
