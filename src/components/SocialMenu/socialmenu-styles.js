import { css } from '@emotion/core';

export const linkLabel = css`
	margin: 0;
`;

export const linkStyle = css`
	--flex: 0.5;

	align-items: center;
	color: var( --textColor );
	display: flex;
	flex: var( --flex );
	flex-direction: column;
	justify-content: center;
	padding: 0.5em;
	text-decoration: none;
	width: 100%;

	@media screen and ( max-width: 767px ) {
		min-height: 48px;
	}

	svg {
		fill: var( --fillColor );
	}

	.light & {
		--fillColor: #023451;
		--textColor: #023451;
	}

	.dark & {
		--fillColor: #fff;
		--textColor: #fff;
	}
`;

export const menuItem = css`
	--flex: calc(50% - 1em);

	flex: var( --flex );
	margin: 0.5em;
	text-align: center;

	@media screen and ( min-width: 450px ) {
		--flex: 1;
	}
`;

export const menuList = css`
	--flexWrap: wrap;

	display: flex;
	flex-wrap: var( --flexWrap );
	justify-content: center;
	list-style: none;
	margin: 0;
	padding: 0;

	@media screen and ( min-width: 550px) {
		--flexWrap: nowrap;
	}
`;
