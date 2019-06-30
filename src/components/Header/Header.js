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
	toggleText,
} from './header-styles';
import ThemeContext from '../../context/ThemeContext';

const Header = ( { location, title } ) => {
	const rootPath = `${ __PATH_PREFIX__ }/`;
	const isHome = location.pathname === rootPath;
	const themeContext = React.useContext( ThemeContext );
	let output = '';

	const handleChange = React.useCallback( event => {
		const newValue = event.target.checked ? 'dark' : 'light';
		themeContext.toggleTheme( newValue )
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
				<label css={ toggleLabel }>
					<span css={ toggleText }>Dark theme</span>
					<Toggle
						checked={ themeContext.theme === 'dark' }
						css={ toggle }
						onChange={ handleChange }
					/>
				</label>
			</div>
		{ isHome && <Bio isHeader={ true } /> }
		</header>
	);
}

Header.propTypes = {
	location: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
};

export default React.memo(Header);
