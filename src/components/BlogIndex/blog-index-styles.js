import { css } from '@emotion/core';

export const postsWrap = css`
	display: grid;

	@media screen and ( min-width: 550px) {
		grid-gap: 0.5em;
		grid-template-columns: repeat(auto-fit, minmax(40ch, 1fr));
		padding: 0.5em;
	}
`;
