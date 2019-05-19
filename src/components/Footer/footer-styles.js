import { css } from '@emotion/core';
import { contentWidth } from '../Layout/layout-styles';

export const siteFooter = css`
	--flexwrap: wrap;

	align-items: center;
	background-color: var(--color-dark-gray );
	color: var(--color-light );
	display: flex;
	flex-wrap: var(--flexwrap);
	justify-content: space-between;
	padding: 2em 1em;
	position: relative;
	transition: background-color 0.5s ease;

	@media screen and ( min-width: 550px) {
		--flexwrap: inherit;
	}
`;

export const copyWrap = css`
	${ contentWidth }
`;

export const copyright = css`
	--flex: 0 0 50%;
	--order: 2;
	
	flex: var(--flex);
	order: var(--order );

	@media screen and ( min-width: 550px) {
		--flex: 1;
		--order: 1;
	}
`;

export const socialWrap = css`
	--flex: 0 0 100%;
	--order: 1;

	flex: var(--flex);
	order: var(--order );

	@media screen and ( min-width: 550px) {
		--flex: 1;
		--order: 2;
	}

	svg {
		fill: var(--color-light );
	}
`;

export const menuWrap = css`
	--flex: 0 0 50%;

	flex: var(--flex);
	order: 3;

	@media screen and ( min-width: 550px) {
		--flex: 1;
	}
`;
