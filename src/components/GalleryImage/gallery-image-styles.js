import { css } from '@emotion/core';

export const galleryCaption = css`
	font-size: 0.875em;
	font-style: italic;
`;

export const galleryFigure = css`
	display: block;
`;

export const galleryImage = css`
	display: block;
	margin: 0;
	transition: filter 0.3s;
	vertical-align: middle;

	&:hover {
		filter: brightness(87.5%);
	}
`;
