import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const FlexList = ( { children, spacing } ) => (
	<ul
		css={ css`
			display: flex;
			justify-content: ${ spacing };
			list-style: none;
			margin: 0;
			padding: 0;
		` }
	>{ children }</ul>
);

FlexList.propTypes = {
	children: PropTypes.any.isRequired,
	spacing: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'space-evenly']),
};

export default FlexList;
