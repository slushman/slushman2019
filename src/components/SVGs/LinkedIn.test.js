import React from 'react';
import { shallowFactory } from '../../../testutils';

import LinkedIn from './LinkedIn';

const defaultProps = {};
const factory = shallowFactory(LinkedIn, defaultProps);

describe('LinkedIn', () => {
	it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});

