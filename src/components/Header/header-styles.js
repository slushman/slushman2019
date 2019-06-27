import { css } from '@emotion/core';

import { contentWidth } from '../Layout/GlobalStyles';

export const header = css`
	grid-area: header;
	margin: auto;
`;

export const headerWrap = css`
	${ contentWidth }

	--flexWrap: wrap;

	align-items: center;
	display: flex;
	flex-wrap: var( --flexWrap );
	justify-content: space-between;
	padding-bottom: 0;
	padding-top: 0.5em;

	@media screen and ( min-width: 550px) {
		--flexWrap: nowrap;
	}
`;

export const heading1 = css`
	margin-bottom: 0;
	margin-top: 0;
	width: 100%;
`;

export const toggleLabel = css`

	@media screen and ( max-width: 549px) {
		padding: 0.5em 1em 1em;
		text-align: center;
		width: 100%;
	}
`;

export const toggleText = css`
	margin-right: 0.5em;
	vertical-align: middle;
`;

export const titleP = css`
	font-family: Montserrat, sans-serif;
	margin-top: 0;
	margin-bottom: 0;
`;

export const toggle = css`
	vertical-align: middle;
`;