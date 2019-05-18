import { shallowFactory } from '../../../testutils';

import Codepen from './Codepen';

/**
 * caption: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string.isRequired,
  tab: isValidTab,
  theme: PropTypes.string,
  user: PropTypes.string,
  width:  PropTypes.string,
 */

const defaultProps = {
	id: 'bMMKrb',
};
const factory = shallowFactory(Codepen, defaultProps);

describe('<Codepen />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();

		expect(wrapper.exists()).toBe(true);
	});
});
