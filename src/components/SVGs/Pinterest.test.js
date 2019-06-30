import React from 'react';
import { shallowFactory } from '../../../testutils';

import Pinterest from './Pinterest';

const defaultProps = {};
const factory = shallowFactory(Pinterest, defaultProps);

describe('Pinterest', () => {
	it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});

