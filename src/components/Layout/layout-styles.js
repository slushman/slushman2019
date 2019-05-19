import React from 'react';
import { css } from '@emotion/core';

export const contentWidth = css`
	margin-left: auto;
	margin-right: auto;
	max-width: 42rem;
	padding: 0.75em;
`;

export const layoutWrap = css`
	background-color: var( --bgColor );
	color: var( --textColor );
`;

export const styledMain = css`
	${ contentWidth }
`;