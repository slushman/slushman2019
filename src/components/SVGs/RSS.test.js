import React from 'react';
import { shallowFactory } from '../../../testutils';

import RSS from './RSS';

const defaultProps = {};
const factory = shallowFactory(RSS, defaultProps);

describe('RSS', () => {
	it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});

