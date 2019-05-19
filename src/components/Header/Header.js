import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import Title from '../Title';
import Bio from '../Bio';
import {
	header,
	headerWrap,
	heading1,
	titleP,
	toggle,
	toggleLabel,
} from './header-styles';

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
			<h1 css={ heading1 }>
				<Title title={ title } />
			</h1>
		);
	} else {
		output = (
			<p css={ titleP }>
				<Title title={ title } />
			</p>
		)
	};

	return (
		<header css={ header }>
			<div css={ headerWrap }>
				{ output }
				<label>
					<span css={ toggleLabel }>Dark mode: { theme === 'dark' ? 'on' : 'off' }</span>
					<Toggle
						checked={ theme === 'dark' }
						css={ toggle }
						onChange={ event =>
							window.__setPreferredTheme(
								event.target.checked ? 'dark' : 'light'
							)
						}
					/>
				</label>
			</div>
		{ isHome && <Bio /> }
		</header>
	);
}

Header.propTypes = {
	location: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
};

export default Header;
