import { css } from '@emotion/core';

import {
	contentWidth,
} from '../Layout/GlobalStyles';

export const categoryImage = css`
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding-bottom: 400px;
`;

export const contentWrap = css`
	${ contentWidth }

	margin: 0 0 1.5em;
`;
