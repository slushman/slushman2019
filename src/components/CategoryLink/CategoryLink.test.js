import { shallowFactory } from '../../../testutils';

import CategoryLink from './CategoryLink';

const defaultProps = {
	total: 0,
	value: 'aefbdgnd',
};
const factory = shallowFactory(CategoryLink, defaultProps);

describe('<CategoryLink />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});

	it('renders the link with the given value', () => {
		const wrapper = factory();
		const foundLink = wrapper.find('[data-test="categoryLink"]');
		const expectedTo = `/category/${ defaultProps.value }/`;

		expect(foundLink.exists()).toBe(true);
		expect(foundLink.prop('to')).toBe(expectedTo);
	});

	it('renders with the given value as text', () => {
		const wrapper = factory();
		const foundLink = wrapper.find('[data-test="categoryLink"]');

		expect(foundLink.exists()).toBe(true);
		expect(foundLink.prop('children')[0]).toBe(defaultProps.value);
		expect(foundLink.prop('children')[2]).toBe(defaultProps.total);
	});
});
