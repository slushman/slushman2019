import React from 'react';
import { shallowFactory } from '../../../testutils';

import Shurls from './Shurls';

const defaultProps = {
	postNode: {
		frontmatter: {
			excerpt: '',
			media: '',
			title: '',
		},
	},
};
const factory = shallowFactory(Shurls, defaultProps);

describe('Shurls', () => {
	it('renders without crashing', () => {
		const wrapper = factory();
		const foundShurlsList = wrapper.find('ShurlsList');
		const foundNativeShare = wrapper.find('NativeShare');

		expect(foundShurlsList.exists()).toBe(true);
		expect(foundNativeShare.exists()).toBe(false);
	});

	describe('when given postNode content', () => {
		it('should render with the provided content', () => {
			const givenPostNode = {
				frontmatter: {
					excerpt: 'ibjhbjdfb',
					media: 'kjasbfvkjbfkb',
					title: 'hbsjhasjdv',
				},
			};
			const wrapper = factory({
				postNode: givenPostNode,
			});
			const foundShurlsList = wrapper.find('ShurlsList');

			expect(foundShurlsList.prop('shareMedia')).toBe(givenPostNode.frontmatter.media);
			expect(foundShurlsList.prop('shareText')).toBe(givenPostNode.frontmatter.excerpt);
			expect(foundShurlsList.prop('shareTitle')).toBe(givenPostNode.frontmatter.title);
			expect(foundShurlsList.prop('rounded')).toBe(false);
		});
	});

	describe('when rounded is true', () => {
		it('should render with rounded styles', () => {
			const wrapper = factory({
				rounded: true,
			});
			const foundShurlsList = wrapper.find('ShurlsList');

			expect(foundShurlsList.prop('rounded')).toBe(true);
		});
	});

	describe('when the browser supports native sharing', () => {
		it('should render NativeShare instead of ShurlsList', () => {
			global.navigator.share = true;
			const wrapper = factory();
			const foundNativeShare = wrapper.find('NativeShare');

			expect(foundNativeShare.exists()).toBe(true);
		});
	});
});
