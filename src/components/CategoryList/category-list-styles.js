import { css } from '@emotion/core';

import {
	blueSection,
	contentWidth,
} from '../Layout/GlobalStyles';

export const categoryHeader = css`
	${ blueSection }

	padding-bottom: 1em;
	padding-top: 1em;
`;

export const categoryTitle = css`
	${ contentWidth }

	margin: 0;
	text-align: center;
`;

export const viewCategories = css`
	${ blueSection }

	margin-bottom: 0;
	padding-bottom: 1em;
	padding-top: 1em;
	text-align: center;
`;
