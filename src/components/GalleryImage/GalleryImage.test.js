import { shallowFactory } from '../../../testutils';

import GalleryImage from './GalleryImage';

const openModal = jest.fn();
const defaultProps = {
	image: {
		alt: '',
		caption: '',
		childImageSharp: {
			fluid: {
				aspectRatio: 10,
				sizes: '',
				src: '',
				srcSet: '',
			},
		},
		relativePath: '',
	},
	index: 1,
	openModal,
};
const factory = shallowFactory( GalleryImage, defaultProps );

describe('<GalleryImage />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const image = wrapper.find('ImageZoom');

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.prop('href')).toBe(defaultProps.image.relativePath);
		expect(image.exists()).toBe(true);
		expect(image.prop('image').src).toBe(defaultProps.image.childImageSharp.fluid.src);
	});

	describe('when given an image object', () => {
		it('should render with that object data', () => {
			const givenImage = {
				alt: 'pofksnfbdjknf',
				caption: 'knasdjvnasjfb',
				childImageSharp: {
					fluid: {
						aspectRatio: 20,
						sizes: 'dfbedsgn',
						src: 'klqefi8wyrgu',
						srcSet: 'liqheofhwlrkjbn',
					},
				},
				relativePath: 'oqjepfoihjwlrkbn',
			};
			const wrapper = factory({
				image: givenImage,
			});
			

			const image = wrapper.find('ImageZoom');

			expect(wrapper.prop('href')).toBe(givenImage.relativePath);
			expect(image.exists()).toBe(true);
			expect(image.prop('image').src).toBe(givenImage.childImageSharp.fluid.src);
		});
	});
});
