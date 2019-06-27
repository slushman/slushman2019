import { shallowFactory } from '../../../testutils';

import Gallery from './Gallery';

const testImage = {
	alt: '',
	caption: '',
	childImageSharp: {
		sizes: {
			aspectRatio: 10,
			sizes: '',
			src: '',
			srcSet: '',
		},
	},
	originalImg: '',
};
const testImages = [
	{ node: testImage },
	{ node: testImage },
	{ node: testImage },
];
const defaultProps = {
	columns: 2,
	images: testImages,
};
const factory = shallowFactory(Gallery, defaultProps);

describe('<Gallery />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundGalleryImages = wrapper.find('GalleryImage');

		expect(wrapper.exists()).toBe(true);
		expect(foundGalleryImages).toHaveLength(defaultProps.images.length);
	});
});
