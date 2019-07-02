import { css } from '@emotion/core';

import {
	blueSection,
	contentWidth,
} from '../Layout/GlobalStyles';

export const alignRight = css`
	text-align: right;
`;

export const half = css`
	flex: 50%;
`;

export const imageWrap = css`
	position: relative;

	&:before {
    background-color: rgba(2,51,79,0.5);
    bottom: 0;
		content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
	}
`;

export const postContent = css`
	margin: 0 auto 1.5em;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	width: 100%;

	@media screen and ( min-width: 820px) {
		padding-left: 0;
		padding-right: 0;
		width: 80ch;
	}
`;

export const postDate = css`
	display: block;
	margin: 0;
`;

export const postImage = css`
	max-height: 400px;
`;

export const postLinks = css`
	${ contentWidth }

	padding-bottom: 1.5em;
	padding-top: 1.5em;
`;

export const postMeta = css`
	${ blueSection }

	--flexDir: column;

	display: flex;
	flex-direction: var( --flexDir );
	justify-content: space-between;
	margin-bottom: 1.5em;
	padding-bottom: 1em;
	padding-top: 1em;

	@media screen and ( min-width: 450px) {
		--flexDir: row;
	}
`;

export const postTitle = css`
	color: #fff;
	left: 50%;
	margin: 0;
	padding: 0.5em;
	position: absolute;
	text-align: center;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	z-index: 1;
`;

export const postWrap = css`
	font-size: 0.85em;

	& > div > * {
		${ contentWidth }

		margin: 0 0 1.5em;
	}

	& > div ul {
		--pad: 2.5em;

	  padding-left: var( --pad );
	
		@media screen and (min-width: 50rem) {
			--pad: calc(100vw/2 - 50rem/2 + 1.5em);
		}
	}

	& > div > ul li a {
		--lineHeight: 2.25;

		display: inline-block;
		line-height: var( --lineHeight );
		min-width: 48px;

		@media screen and ( min-width: 50rem ) {
			--lineHeight: 1.5;
		}
	}
`;