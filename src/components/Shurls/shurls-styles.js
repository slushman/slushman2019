import { css } from '@emotion/core';

import { blueSection } from '../Layout/GlobalStyles';

export const link = css`
	align-items: center;
	display: flex;
	justify-content: center;
	min-height: 64px;
	min-width: 64px;

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

export const shurlHeader = css`
	margin-bottom: 0;
`;

export const shurlList = css`
	--gridFit: 25%;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax( var( --gridFit ) ,1fr));
	list-style: none;
	margin: 0;
	padding: 0;

	@media screen and ( min-width: 525px) {
		--gridFit: 64px;
	}
`;

export const shurlsListItem = css`
	flex: 1 1 0;
	text-align: center;
`;

export const shurlWrap = css`
	${ blueSection }

	padding-bottom: 1.5em;
	padding-top: 1.5em;
`;
