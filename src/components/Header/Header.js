import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import { contentWidth } from '../Layout/layout-styles';
import Title from '../Title';
import Bio from '../Bio';

const Header = ( { location, title } ) => {
	const rootPath = `${ __PATH_PREFIX__ }/`;
	const isHome = location.pathname === rootPath;
	let output = '';

	const [ theme, setTheme ] = React.useState( window.__theme );

	React.useEffect( () => {
		window.__onThemeChange = () => {
			setTheme( window.__theme );
		}
	} );

	if( isHome ) {
		output = (
			<h1
				css={ css`
					margin-bottom: 0;
					margin-top: 0;
				` }
			>
				<Title title={ title } />
			</h1>
		);
	} else {
		output = (
			<p
				css={ css`
					font-family: Montserrat, sans-serif;
					margin-top: 0;
					margin-bottom: 0;
				` }
			>
				<Title title={ title } />
			</p>
		)
	};

	return (
		<header>
			<div
				 css={ css`
					${ contentWidth }
					align-items: center;
					display: flex;
					justify-content: space-between;
				` }
			>
				{ output }
				<label>
					<span
						css={ css`
							margin-right: 0.5em;
							vertical-align: middle;
						` }
					>Dark mode: { theme === 'dark' ? 'on' : 'off' }</span>
					<Toggle
						css={ css`
							vertical-align: middle;
						` }
						checked={ theme === 'dark' }
						onChange={ event =>
							window.__setPreferredTheme(
								event.target.checked ? 'dark' : 'light'
							)
						}
					/>
				</label>
			</div>
		{ isHome && <Bio isHome={ isHome } /> }
		</header>
	);
}

Header.propTypes = {
	depWindowTheme: PropTypes.string,
	location: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
};

Header.defaultProps = {
	depWindowTheme: '',
};

export default Header;
