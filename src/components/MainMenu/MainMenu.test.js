import { shallowFactory } from '../../../testutils';

import MainMenu from './MainMenu';

const defaultProps = {
};
const factory = shallowFactory(MainMenu, defaultProps);

describe('<MainMenu />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundNowLink = wrapper.find('[to="/now"]');
		const foundBlogLink = wrapper.find('[to="/blog"]');

		expect(wrapper.exists()).toBe(true);
		expect(foundNowLink.exists()).toBe(true);
		expect(foundBlogLink.exists()).toBe(true);
	});
});
