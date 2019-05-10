import React from 'react';
import { graphql } from 'gatsby';

import BlogIndex from './BlogIndex';
import useSiteMetadata from '../hooks/UseSiteMetadata';

const QueryBlogIndex = ( { data, location } ) => {
  const { title } = useSiteMetadata();
  const posts = data.allMdx.edges;

  return (
		<BlogIndex
			location={ location }
			posts={ posts }
			siteTitle={ title }
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
          }
        }
      }
    }
  }
`;
