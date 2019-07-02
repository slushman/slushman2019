import { shallowFactory } from '../../../testutils';

import ImageCredit from './ImageCredit';

const defaultProps = {
	account: '',
	photographer: '',
};

const factory = shallowFactory(ImageCredit, defaultProps);

describe('<ImageCredit />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});

	describe('when given image credits', () => {
		it('should render the image with the given post image info', () => {
			const givenAccount = 'asfbadfbd';
			const givenPhotographer = 'dgndfhjyumj';
			const wrapper = factory({
				account: givenAccount,
				photographer: givenPhotographer,
			});
			const foundImageLink = wrapper.find('[data-test="imageLink"]');
			const foundPhotographer = wrapper.find('[data-test="photographer"]');
	
			expect(foundImageLink.exists()).toBe(true);
			expect(foundImageLink.prop('href')).toEqual(
				expect.stringContaining(givenAccount)
			);
			expect(foundPhotographer.exists()).toBe(true);
			expect(foundPhotographer.prop('children')).toBe(givenPhotographer);
		});
	});
});