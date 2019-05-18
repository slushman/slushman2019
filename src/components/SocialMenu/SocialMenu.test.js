import React from 'react';
import { shallowFactory } from '../../../testutils';

import SocialMenu from './SocialMenu';

const defaultProps = {};
const factory = shallowFactory(SocialMenu, defaultProps);

describe( 'SocialMenu', () => {
	it( 'renders without crashing', () => {
		const wrapper = factory();
		const foundFacebook = wrapper.find( 'Facebook' );
		const foundGithub = wrapper.find( 'GitHub' );
		const foundLinkedIn = wrapper.find( 'LinkedIn' );
		const foundTwitter = wrapper.find( 'Twitter' );

		expect( wrapper.exists() ).toBe( true );
		expect( foundFacebook.exists() ).toBe( true );
		expect( foundGithub.exists() ).toBe( true );
		expect( foundLinkedIn.exists() ).toBe( true );
		expect( foundTwitter.exists() ).toBe( true );
	} );
} );
