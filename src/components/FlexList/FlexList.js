import React from 'react';
import PropTypes from 'prop-types';

import {
	StyledFlexList,
} from './flexlist-styles';

const FlexList = ( { children, spacing } ) => (
	<StyledFlexList spacing={ spacing }>{ children }</StyledFlexList>
);

FlexList.propTypes = {
	children: PropTypes.any.isRequired,
	spacing: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'space-evenly']),
};

export default FlexList;
