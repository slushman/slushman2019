import { css } from '@emotion/core';

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
