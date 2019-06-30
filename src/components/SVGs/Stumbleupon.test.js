import React from 'react';
import { shallowFactory } from '../../../testutils';

import Stumbleupon from './Stumbleupon';

const defaultProps = {};
const factory = shallowFactory(Stumbleupon, defaultProps);

describe('Stumbleupon', () => {
	it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});

