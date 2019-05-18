import React from 'react';
import { shallowFactory } from '../../../testutils';

import Email from './Email';

const defaultProps = {};
const factory = shallowFactory(Email, defaultProps);

describe('Email', () => {
	it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});

