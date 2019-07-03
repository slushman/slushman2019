import React from 'react';
import { shallowFactory } from '../../../testutils';

import Shurls from './Shurls';

const defaultProps = {
	location: {
		ancestorOrigins: {},
		assign: jest.fn(),
		hash: '',
		host: '',
		href: '',
		key: '',
		origin: '',
		pathname: '',
		port: '',
		protocol: '',
		reload: jest.fn(),
		replace: jest.fn(),
		search: '',
		state: {},
		toString: jest.fn(),
	},
	postNode: {
		frontmatter: {
			excerpt: '',
			media: '',
			title: '',
		},
	},
	rounded: false,
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
				code: {
					body: '',
				},
				excerpt: 'ibjhbjdfb',
				media: 'kjasbfvkjbfkb',
				title: 'hbsjhasjdv',
				id: '',
			};
			const wrapper = factory({
				postNode: givenPostNode,
			});
			const foundShurlsList = wrapper.find('ShurlsList');

			expect(foundShurlsList.prop('shareMedia')).toBe(givenPostNode.media);
			expect(foundShurlsList.prop('shareText')).toBe(givenPostNode.excerpt);
			expect(foundShurlsList.prop('shareTitle')).toBe(givenPostNode.title);
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
});
