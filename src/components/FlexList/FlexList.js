import React from 'react';
import PropTypes from 'prop-types';

import {
	StyledFlexList,
} from './flexlist-styles';

const FlexList = ( { children, spacing, wrap } ) => (
	<StyledFlexList spacing={ spacing } wrap={ wrap }>{ children }</StyledFlexList>
);

FlexList.propTypes = {
	children: PropTypes.any.isRequired,
	spacing: PropTypes.oneOf(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'space-evenly']),
};

export default React.memo(FlexList);
