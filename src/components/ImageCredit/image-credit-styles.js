import { css } from '@emotion/core';

export const imagePhotographer = css`
	display: inline-block;
	padding: 2px 3px;
`;

export const imageIcon = css`
	fill: #023451;
	height: 12px;
	position: relative;
	top: -2px;
	vertical-align: middle;
	width: auto;
`;

export const creditLink = css`
	background-color: #eef8ff;
	border-radius: 3px;
	bottom: 0.5em;
	color: #023451;
	display: inline-block;
	font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
	font-size: 12px;
	font-weight: bold;
	line-height: 1.2;
	padding: 4px 6px;
	position: absolute;
	right: 0.5em;
	text-decoration: none;
	z-index: 1;

	.light & {
		background-color: #eef8ff;
	}

	.dark & {
		background-color: #90C8E8;
	}
`;
