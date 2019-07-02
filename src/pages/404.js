import React from 'react';
import { graphql } from 'gatsby';

import NotFound from '../components/404';

const Query404 = ( { data } ) => <NotFound posts={ data.allMdx.edges } />;

export default Query404;

export const pageQuery = graphql`
  query {
    allMdx(limit: 6, sort: { fields: [frontmatter___date], order: DESC }) {
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