import React from 'react';
import { shallowFactory } from '../../../testutils';

import Twitter from './Twitter';

const defaultProps = {};
const factory = shallowFactory(Twitter, defaultProps);

describe('Twitter', () => {
	it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});

