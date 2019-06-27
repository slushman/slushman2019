import { shallowFactory } from '../../../testutils';

import Title from './Title';

const defaultProps = {
	title: '',
};
const factory = shallowFactory(Title, defaultProps);

describe('<Title />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundLink = wrapper.find('[to="/"]');
		const foundImage = foundLink.find('img');

		expect(wrapper.exists()).toBe(true);
		expect(foundLink.exists()).toBe(true);
		expect(foundImage.exists()).toBe(true);
	});

	describe('when given a title', () => {
		it('should render with the expected title', () => {
			const givenTitle = 'asfhbvdjhfb';
			const wrapper = factory({
				title: givenTitle,
			});
			const foundLink = wrapper.find('[to="/"]');
			const foundImage = foundLink.find('img');

			expect(foundImage.prop('alt')).toBe(givenTitle);
		});
	});
});
