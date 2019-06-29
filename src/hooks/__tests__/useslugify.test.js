import useSlugify from '../UseSlugify';

describe('<useSlugify />', () => {
	describe('when given Design', () => {
		it('should return design', () => {
			const results = useSlugify('Design');

			expect(results).toBe('design');
		});
	});

	describe('when given Code Samples', () => {
		it('should return code-samples', () => {
			const results = useSlugify('Code Samples');

			expect(results).toBe('code-samples');
		});
	});
});
