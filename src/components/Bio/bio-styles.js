import { css } from '@emotion/core';

import { contentWidth } from '../Layout/GlobalStyles';

export const avatarStyle = css`
	border-radius: 100%;
	margin-bottom: 0;
	margin-right: 0.5em;
	min-width: 50px;
`;

export const bioDescription = css`
	margin-bottom: 0;
  margin-top: 0;
`;

export const bioWrap = css`
	${ contentWidth }

	background-color: var( --bgColor );
	display: flex;
	padding-bottom: 2em;
	padding-top: 2em;

	.light & {
		--bgColor: #90C8E8;
	}

	.dark & {
		--bgColor: #03649C;
	}
`;

export const headerWrap = css`
	${ bioWrap }

	padding-bottom: 0.5em;
	padding-top: 0.5em;
`;
