import { css } from '@emotion/core';

import { contentWidth } from '../Layout/layout-styles';

export const header = css`
	padding: 0.5em;
`;

export const headerWrap = css`
	${ contentWidth }
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const heading1 = css`
	margin-bottom: 0;
	margin-top: 0;
`;

export const toggleLabel = css`
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