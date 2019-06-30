import { css } from '@emotion/core';

export const logoImg = css`
	--width: 90vw;

	filter: var( --logoFilter );
	height: auto;
	transition: width 1s ease;
	width: var( --width );

	@media screen and (min-width: 550px) {
		--width: 300px;
	}
`;

export const titleLink = css`
	box-shadow: none;
	color: inherit;
	display: block;
	text-align: center;
	text-decoration: none;
`;