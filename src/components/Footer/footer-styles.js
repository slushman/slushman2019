import { css } from '@emotion/core';
import { contentWidth } from '../Layout/GlobalStyles';

export const copyright = css`
	text-align: center;
`;

export const siteFooter = css`
	${ contentWidth }

	align-items: center;
	background-color: var( --bgColor );
	color: var( --textColor );
	grid-area: footer;
	margin: auto;
	padding-bottom: 1em;
	padding-top: 1em;

	.light & {
		--bgColor: #BEC8CF;
		--textColor: #023451;
	}

	.dark & {
		--bgColor: #606569;
		--textColor: #fff;
	}
`;
