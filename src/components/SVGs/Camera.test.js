import React from 'react';
import { shallowFactory } from '../../../testutils';

import Camera from './Camera';

const defaultProps = {};
const factory = shallowFactory(Camera, defaultProps);

describe('Camera', () => {
	it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});

