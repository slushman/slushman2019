import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import CategoryList from '../components/CategoryList';
import useSiteMetadata from '../hooks/UseSiteMetadata';

/**
 * This template is for a single Category page.
 * It displays a list of posts within the given
 * category.
 * 
 * @param {*} props 
 */
const CategoryTemplate = ( { data, location, pageContext } ) => {
	const { siteTitle } = useSiteMetadata();

	return (
		<CategoryList
			category={ pageContext.category }
			location={ location }
			posts={ data.allMdx.edges }
			siteTitle={ siteTitle }
			total={ data.allMdx.totalCount }
		/>
	);
};

export default CategoryTemplate;

CategoryTemplate.propTypes = {
	data: PropTypes.shape( {
		allMdx: PropTypes.shape( {
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape( {
					node: PropTypes.shape( {
						frontmatter: PropTypes.shape( {
							date: PropTypes.string.isRequired,
							title: PropTypes.string.isRequired,
						} ),
						fields: PropTypes.shape( {
							slug: PropTypes.string.isRequired,
						} ),
					} ),
				} ).isRequired
			),
		} ),
	} ),
	location: PropTypes.object.isRequired,
  pageContext: PropTypes.shape( {
    category: PropTypes.string.isRequired,
	} ),
};

export const pageQuery = graphql`
  query($category: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
					excerpt(pruneLength: 160)
          fields {
            slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						featuredImage {
							childImageSharp{
									sizes(maxWidth: 1200) {
											...GatsbyImageSharpSizes
									}
							}
						}
						title
					}
        }
      }
    }
  }
`;
