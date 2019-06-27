import { css } from '@emotion/core';

import { blueSection, contentWidth } from '../Layout/GlobalStyles';

export const link = css`
	display: block;

	&:hover {
		cursor: pointer;
	}
`;

export const round = css`
	align-items: center;
	border-radius: 50%;
	display: flex;
	justify-content: center;
`;

export const shareButton = css`
	align-items: center;
	background: var( --bgColor );
	border: none;
	border-radius: 0;
	box-shadow: none;
	color: var( --textColor );
	display: flex;
	font-size: 1em;
	padding: 0.25em 0.5em;
	text-shadow: none;

	.dark & {
		--bgColor: #eef8ff;
		--textColor: #023451;
	}

	.light & {
		--bgColor: #023451;
		--textColor: #eef8ff;
	}

	&:hover,
	&:active,
	&:focus {
		--bgColor: #0374b5;
		border-color: inherit;
		--textColor: #fff;
	}
`;

export const shurlWrap = css`
	${ blueSection }

	padding-bottom: 1.5em;
	padding-top: 1.5em;
`;
