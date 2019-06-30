import { shallowFactory } from '../../../testutils';

import CategoryList from './CategoryList';

const defaultProps = {
	category: 'Gibble',
	location: {},
	posts: [
		{
			node: {
				excerpt: 'kjgbkejbd',
				frontmatter: {
					date: '2019-06-06',
					featuredImage: {
						childImageSharp: {
							sizes: {
								aspectRatio: 0,
								sizes: '',
								src: '',
								srcSet: '',
							},
						},
					},
					title: 'Design',
				},
				fields: {
					slug: 'design',
				},
			},
		},
		{
			node: {
				excerpt: 'aefhryjfy',
				frontmatter: {
					date: '2019-06-06',
					featuredImage: {
						childImageSharp: {
							sizes: {
								aspectRatio: 0,
								sizes: '',
								src: '',
								srcSet: '',
							},
						},
					},
					title: 'Code Samples',
				},
				fields: {
					slug: 'code-samples',
				},
			},
		},
	],
	siteTitle: 'testTitle',
	total: 2,
};
const factory = shallowFactory(CategoryList, defaultProps);

describe('<CategoryList />', () => {
  it('renders without crashing', () => {
		const wrapper = factory();
		const foundH1 = wrapper.find('h1');
		const postCount = defaultProps.posts.length;
		const plural = postCount === 1 ? '' : 's';
		const expectedH1 = `${ defaultProps.category } post${ plural }`;
		const foundPosts = wrapper.find('Post');

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.prop('title')).toBe(defaultProps.siteTitle);
		expect(foundH1.prop('children')).toBe(expectedH1);
		expect(foundPosts).toHaveLength(2);
	});
});
