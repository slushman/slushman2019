import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import logo from '../../../content/assets/slushman-animated.svg';

import {
	logoImg,
	titleLink,
} from './title-styles';

const Title = ( { title } ) => (
	<Link
		css={ titleLink }
		to={ `/` }
	>
		<img
			alt={ title }
			css={ logoImg }
			src={ logo }
		/>
	</Link>
);

Title.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Title;
