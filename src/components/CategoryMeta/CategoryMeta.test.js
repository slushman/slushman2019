import { shallowFactory } from '../../../testutils';

import CategoryMeta from './CategoryMeta';

const defaultProps = {
	categories: [
		'Code Samples',
		'Design',
	],
};

const factory = shallowFactory(CategoryMeta, defaultProps);

describe('<CategoryMeta />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundItems = wrapper.find('[data-test="categoryLinkItem"]');
		const foundLinks = wrapper.find('[data-test="categoryLink"]');

		expect(wrapper.exists()).toBe(true);
		expect(foundItems).toHaveLength(2);
		expect(foundItems.at(0).prop('children')[1]).toBe(', ');
		expect(foundLinks).toHaveLength(2);
		expect(foundLinks.at(0).prop('children')).toBe(defaultProps.categories[0]);
		expect(foundLinks.at(1).prop('children')).toBe(defaultProps.categories[1]);
	});
});
