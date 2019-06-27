import { css } from '@emotion/core';

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

export const galleryGrid = css`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: auto auto auto;
	margin: 0;
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

export const twoAcross = css`
	grid-template-columns: auto auto;
`;

export const threeAcross = css`
	grid-template-columns: auto auto auto;
`;

export const fourAcross = css`
	grid-template-columns: auto auto auto auto;
`;

export const fiveAcross = css`
	grid-template-columns: auto auto auto auto auto;
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
