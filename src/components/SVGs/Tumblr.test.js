import React from 'react';
import { shallowFactory } from '../../../testutils';

import Tumblr from './Tumblr';

const defaultProps = {};
const factory = shallowFactory(Tumblr, defaultProps);

describe('Tumblr', () => {
	it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});

