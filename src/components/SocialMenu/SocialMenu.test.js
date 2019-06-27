import React from 'react';
import { shallowFactory } from '../../../testutils';

import SocialMenu from './SocialMenu';

const defaultProps = {};
const factory = shallowFactory(SocialMenu, defaultProps);

describe('SocialMenu', () => {
	it('renders without crashing', () => {
		const wrapper = factory();
		const foundGithub = wrapper.find('GitHub');
		const foundLinkedIn = wrapper.find('LinkedIn');
		const foundRSS = wrapper.find('RSS');

		expect(wrapper.exists()).toBe(true);
		expect(foundGithub.exists()).toBe(true);
		expect(foundLinkedIn.exists()).toBe(true);
		expect(foundRSS.exists()).toBe(true);
	});
});
