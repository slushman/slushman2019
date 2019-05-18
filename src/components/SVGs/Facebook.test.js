import React from 'react';
import { shallowFactory } from '../../../testutils';

import Facebook from './Facebook';

const defaultProps = {};
const factory = shallowFactory(Facebook, defaultProps);

describe('Facebook', () => {
	it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});

