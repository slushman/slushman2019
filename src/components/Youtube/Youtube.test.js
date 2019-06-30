import { shallowFactory } from '../../../testutils';

import Youtube, {
	defaultHeight,
	defaultWidth,
	listTypeOptions,
	returnUrlParameterString,
} from './Youtube';

const defaultProps = {
	videoId: 'kwbkjdbfb',
};
const factory = shallowFactory( Youtube, defaultProps );

describe('returnUrlParameterString', () => {
	describe('when given an empty array', () => {
		it('should return an empty string', () => {
			const result = returnUrlParameterString([]);

			expect(result).toBe('');
		});
	});

	describe('when given a single array item', () => {
		it('should return the given data as URL parameter string', () => {
			const result = returnUrlParameterString([
				{ name: 'sfbdfgb', value: 'sdgsarg' }
			]);

			expect(result).toBe('sfbdfgb=sdgsarg');
		});
	});

	describe('when given a multiple array items', () => {
		it('should return the given data as URL parameter string', () => {
			const result = returnUrlParameterString([
				{ name: 'sfbdfgb', value: 'sdgsarg' },
				{ name: 'hjkyu', value: 'qfwdv' },
			]);

			expect(result).toBe('sfbdfgb=sdgsarg&hjkyu=qfwdv');
		});
	});
});

describe('Youtube', () => {
	it('should render without crashing', () => {
		const wrapper = factory();
		const url = wrapper.prop('src');
		const foundHeight = wrapper.prop('height');
		const foundWidth = wrapper.prop('width');

		expect(wrapper.exists()).toBe(true);
		expect(url.indexOf('autoplay')).toBeLessThan(0);
		expect(url.indexOf('cc_load_policy')).toBeLessThan(0);
		expect(url.indexOf('color=undefined')).toBeGreaterThan(1);
		expect(url.indexOf('controls')).toBeLessThan(0);
		expect(url.indexOf('disablekb')).toBeLessThan(0);
		expect(url.indexOf('enablejsapi')).toBeLessThan(0);
		expect(url.indexOf('end')).toBeLessThan(0);
		expect(url.indexOf('fs')).toBeLessThan(0);
		expect(foundHeight).not.toBeDefined();
		expect(url.indexOf('hl')).toBeGreaterThan(1);
		expect(url.indexOf('iv_load_policy')).toBeGreaterThan(1);
		expect(url.indexOf('list')).toBeGreaterThan(1);
		expect(url.indexOf('listType')).toBeGreaterThan(1);
		expect(url.indexOf('loop')).toBeLessThan(0);
		expect(url.indexOf('modestbranding')).toBeLessThan(0);
		expect(url.indexOf('playlist')).toBeGreaterThan(1);
		expect(url.indexOf('playsinline')).toBeLessThan(0);
		expect(url.indexOf('start')).toBeLessThan(0);
		expect(foundWidth).not.toBeDefined();
	});

	describe('when given autoplay is true', () => {
		it('should have autoplay in the url string', () => {
			const wrapper = factory({
				autoplay: true,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf('autoplay')).toBeGreaterThan(1);
		});
	});

	describe('when given cc_load_policy is true', () => {
		it('should have cc_load_policy in the url string', () => {
			const wrapper = factory({
				cc_load_policy: true,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf('cc_load_policy')).toBeGreaterThan(1);
		});
	});

	describe('when given color is white', () => {
		it('should have color in the url string', () => {
			const wrapper = factory({
				color: 'white',
			});
			const url = wrapper.prop('src');

			expect(url.indexOf('color=white')).toBeGreaterThan(1);
		});
	});

	describe('when given controls is false', () => {
		it('should not have controls in the url string', () => {
			const wrapper = factory({
				controls: false,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf('controls')).toBeLessThan(0);
		});
	});

	describe('when given disablekb is true', () => {
		it('should have disablekb in the url string', () => {
			const wrapper = factory({
				disablekb: true,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf('disablekb')).toBeGreaterThan(1);
		});
	});

	describe('when given enablejsapi is true', () => {
		it('should have enablejsapi in the url string', () => {
			const wrapper = factory({
				enablejsapi: true,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf('enablejsapi')).toBeGreaterThan(1);
		});
	});

	describe('when given a value for end', () => {
		it('should have the given value in the url string for the end param', () => {
			const givenEnd = 1245;
			const wrapper = factory({
				end: givenEnd,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf(`end=${ givenEnd }`)).toBeGreaterThan(1);
		});
	});

	describe('when given fs is false', () => {
		it('should not have fs in the url string', () => {
			const wrapper = factory({
				fs: false,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf('fs')).toBeLessThan(0);
		});
	});

	describe('when given a value for height', () => {
		it('should have the given value in the height attribute', () => {
			const givenHeight = 1245;
			const wrapper = factory({
				height: givenHeight,
			});
			const foundHeight = wrapper.prop('height');

			expect(foundHeight).toBe(givenHeight);
		});
	});

	describe('when given hl is fr-FR', () => {
		it('should have given value for hl in the url string', () => {
			const givenHL = 'fr-FR';
			const wrapper = factory({
				hl: givenHL,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf(`hl=${ givenHL }`)).toBeGreaterThan(1);
		});
	});

	describe('when given iv_load_policy as 3', () => {
		it('should have iv_load_policy in the url string', () => {
			const givenIvLoadPolicy = 3;
			const wrapper = factory({
				iv_load_policy: givenIvLoadPolicy,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf(`iv_load_policy=${ givenIvLoadPolicy }`)).toBeGreaterThan(1);
		});
	});

	describe('when given a value for list', () => {
		it('should have the given value for the list prop and the default listType prop', () => {
			const givenList = 'kjsbfvkjdbfb';
			const wrapper = factory({
				list: givenList,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf(`list=${ givenList }`)).toBeGreaterThan(1);
			expect(url.indexOf(`listType=${ listTypeOptions[1] }`)).toBeLessThan(0);
		});
	});

	describe('when given a value for list for a different listType', () => {
		it('should have the given value for the list prop and the given listType prop', () => {
			const givenList = 'ijetijeroth';
			const givenListType = listTypeOptions[0];
			const wrapper = factory({
				list: givenList,
				listType: givenListType,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf(`list=${ givenList }`)).toBeGreaterThan(1);
			expect(url.indexOf(`listType=${ listTypeOptions[0] }`)).toBeGreaterThan(1);
		});
	});

	describe('when given loop is true', () => {
		it('should have loop in the url string', () => {
			const wrapper = factory({
				loop: true,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf('loop')).toBeGreaterThan(1);
		});
	});

	describe('when given modestbranding is true', () => {
		it('should have modestbranding in the url string', () => {
			const wrapper = factory({
				modestbranding: true,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf('modestbranding')).toBeGreaterThan(1);
		});
	});

	describe('when given a value for playlist', () => {
		it('should have the given value in the playlist attribute', () => {
			const givenPlaylistId = 'PLYUuimjZHnOhaqRnQ59ebvLxeDRpOnaRp';
			const wrapper = factory({
				playlist: givenPlaylistId,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf(`playlist=${ givenPlaylistId }`)).toBeGreaterThan(1);
		});
	});

	describe('when given playsinline is true', () => {
		it('should have playsinline in the url string', () => {
			const wrapper = factory({
				playsinline: true,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf('playsinline')).toBeGreaterThan(1);
		});
	});

	describe('when given a value for start', () => {
		it('should have the given value in the url string for the start param', () => {
			const givenStart = 1245;
			const wrapper = factory({
				start: givenStart,
			});
			const url = wrapper.prop('src');

			expect(url.indexOf(`start=${ givenStart }`)).toBeGreaterThan(1);
		});
	});

	describe('when given a value for width', () => {
		it('should have the given value in the width attribute', () => {
			const givenWidth = 1245;
			const wrapper = factory({
				width: givenWidth,
			});
			const foundWidth = wrapper.prop('width');

			expect(foundWidth).toBe(givenWidth);
		});
	});
});