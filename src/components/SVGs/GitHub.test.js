import React from 'react';
import { shallowFactory } from '../../../testutils';

import GitHub from './GitHub';

const defaultProps = {};
const factory = shallowFactory(GitHub, defaultProps);

describe('GitHub', () => {
	it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});

