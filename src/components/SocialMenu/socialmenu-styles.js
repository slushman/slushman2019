import { css } from '@emotion/core';

export const navStyle = props => css`
	--width: 100%;

	background-color: ${ 'default' === props.location ? 'var(--navbgcolor, transparent )' : '' };
	width: var(--width );

	@media screen and ( max-width: 559px) {
		--navbgcolor: ${ 'default' === props.location ? 'var(--color-dark-blue )' : '' };
	}

	@media screen and ( min-width: 560px) {
		--width: auto;
	}
`;

export const menuList = css`
	display: flex;
	justify-content: center;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const activeClassName = 'selected';

export const linkStyle = props => css`
	--display: inline-grid;
	--link-color: var(--color-light );
	--zindex: auto;

	align-items: center;
	color: var(--link-color );
	display: var(--display );
	flex-direction: var(--flexdir );
	justify-content: center;
	padding: 0.5em;
	position: relative;
	text-decoration: none;
	text-transform: ${ 'main' === props.menu ? 'uppercase' : '' };
	transition: all 1s ease;
	width: 100%;
	z-index: var(--zindex);

	&:before {
		--height: 2px;
		--underlinkcolor: var(--color-light );
		--transform: scale( 0 );
		--transition: all 0.3s ease-in-out;
		--vis: hidden;
		--zindex: auto;

		background-color: var(--underlinkcolor );
		bottom: 0;
		content: "";
		height: var(--height );
		left: 0;
		position: absolute;
		transform: var(--transform);
		transition: var(--transition);
		visibility: var(--vis);
		width: 100%;
		z-index: var(--zindex);

		@media screen and ( min-width: 560px) {
			--underlinkcolor: ${ '/' !== props.page ? 'var(--color-light)' : 'var(--color-blue)' };
		}
	}

	&:hover {
		--link-color: var(--color-light );

		@media screen and ( min-width: 560px) {
			--link-color: ${ '/' === props.page ? 'var(--color-dark-blue)' : 'var(--color-light)' }
		}
	}

	&:hover:before {
		--transform: scale( 1 );
		--vis: visible;
	}

	@media screen and ( max-width: 767px ) {
		min-height: 48px;
	}

	@media screen and ( min-width: 560px ) {
		--display: flex;
		--flexdir: column;
		--link-color: ${ '/' === props.page ? 'var(--color-dark-blue)' : 'var(--color-light)' }
	}

	&.${ activeClassName } {
		--link-color: var(--color-charcoal);
		--zindex: 1;

		@media screen and ( min-width: 560px) {
			--link-color: ${ '/blog' === props.page ? 'var(--color-charcoal)' : 'var(--color-dark )' };
		}

		&:hover {
			--link-color: var(--color-light );

			@media screen and ( min-width: 560px) {
				--link-color: var(--color-light );
			}
		}

		&:before {
			--height: 100%;
			--transform: none;
			--transition: all 1s ease;
			--underlinkcolor: var(--color-light );
			--vis: visible;
			--zindex: -1;

			@media screen and ( min-width: 560px) {
				--underlinkcolor: ${ '/blog' === props.page && 'var(--color-light )' };
			}
		}

		&:hover:before {
			--bgcolor: var(--color-light );
			--height: 2px;
			--underlinkcolor: ${ '/blog' === props.page ? 'var(--color-charcoal)' : 'var(--color-light )' };
		}
	}
`;

export const menuItem = css`
	flex: 1;
	margin-bottom: 0;
	margin-left: 1em;
	margin-right: 1em;
	margin-top: 0;
	position: relative;
	text-align: center;

	& ul { /* All submenus */
		--opacity: 0;
	}

	&:hover ul { /* All submenus */
		--opacity: 1;
	}
`;
