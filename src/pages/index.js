import React from 'react';
import { graphql } from 'gatsby';

import BlogIndex from '../components/BlogIndex';
import useSiteMetadata from '../hooks/UseSiteMetadata';

const QueryBlogIndex = ( { data, location } ) => {
  const { siteTitle } = useSiteMetadata();
  const posts = data.allMdx.edges;

  return (
		<BlogIndex
			location={ location }
			posts={ posts }
			siteTitle={ siteTitle }
		/>
  )
};

export default QueryBlogIndex;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 1200) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }
  }
`;
