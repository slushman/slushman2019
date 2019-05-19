import { css } from '@emotion/core';

export const galleryGrid = css`
	display: grid;
`;

export const galleryFigure = css``;

export const galleryFigureModal = css`
	align-items: center;
	background-color: rgba( 0, 0, 0, 0.8 );
	bottom: 0;
	display: flex;
	height: 100%;
	justify-content: center;
	left: 0;
	margin: 0;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
`;

export const galleryModalButton = css`
	color: #fff;
	cursor: pointer;
	font-family: san-serif;
	font-size: 2.5em;
	position: absolute;
	right: 0.5em;
	top: 0.5em;
`;

export const galleryImage = css`
	display: block;
	margin: 0;
`;

export const galleryCaption = css`
	font-size: 0.875em;
	font-style: italic;
`;
