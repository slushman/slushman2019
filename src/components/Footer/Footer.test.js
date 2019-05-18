import { shallowFactory } from '../../../testutils';

import Footer from './Footer';

const defaultProps = {
	location: {
		pathname: '',
	},
	title: '',
};
const factory = shallowFactory(Footer, defaultProps);
const thisYear = new Date().getFullYear();

describe('<Footer />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundCopyright = wrapper.find('[data-test="copyright"]');

		expect(wrapper.exists()).toBe(true);
		expect(foundCopyright.exists()).toBe(true);
		expect(foundCopyright.prop('children')).toBe(`© ${ thisYear } ${ defaultProps.title }`);
	});
});
