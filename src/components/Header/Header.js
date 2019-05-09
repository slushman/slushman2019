import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import Title from '../Title';
import Bio from '../Bio';
import { rhythm, scale } from '../../utils/typography';

const Header = ( { location, title } ) => {
	const rootPath = `${ __PATH_PREFIX__ }/`;
	const isHome = location.pathname === rootPath;
	let output = '';

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
					align-items: center;
					display: flex;
					justify-content: space-between;
				` }
			>
				{ output }
			</div>
		{ isHome && <Bio isHome={ isHome } /> }
		</header>
	);
}

Header.propTypes = {
	location: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
};

export default Header;
