import { css } from '@emotion/core';

export const active = css`
	&:before {
		background-color: #fff;
		bottom: 0.25em;
		content: "";
		height: 2px;
		left: 0px;
		position: absolute;
		transform: scale(1);
		transition: all 0.3s ease;
		visibility: visible;
		width: 100%;
	}
`;

export const menuWrap = css`
	background-color: #03649C;
	color: #fff;
`;

export const menuList = css`
	align-items: center;
	display: flex;
	justify-content: space-around;
	list-style: none;
	margin: 0;
	padding: 1em 0;
`;

export const menuLink = css`
	color: #F2F6F7;
	font-size: 1.25em;
	padding: 0.5em;
	position: relative;
	text-decoration: none;
	text-transform: uppercase;
	transition: all 1s ease 0s;

	&:hover {
		&:before {
			--transform: scale(1);
			--vis: visible;
		}
	}

	&:before {
    --transform: scale(0);
    --vis: hidden;

		background-color: #fff;
    bottom: 0.25em;
    content: "";
    height: 2px;
    left: 0px;
    position: absolute;
		transform: var( --transform );
		transition: all 0.3s ease;
    visibility: var( --vis );
    width: 100%;
	}
`;
